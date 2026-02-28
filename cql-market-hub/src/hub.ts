import { DurableObject } from "cloudflare:workers";
import {
  MARKET_UNIVERSE,
  MARKET_BY_ID,
  OANDA_INSTRUMENTS,
  OANDA_INSTRUMENT_TO_ASSET_ID,
  COINAPI_STREAM_SYMBOLS,
  COINAPI_SYMBOL_TO_ASSET_ID,
  COINAPI_REST_ASSET_IDS,
  BINANCE_SPOT_ASSET_BY_STREAM,
  BINANCE_FUTURES_ASSET_BY_STREAM,
  TWELVE_PRICE_SYMBOLS,
  TWELVE_SYMBOL_TO_ASSET_ID,
  makeSeedRecord,
  safeNumber
} from "./registry";

const SNAPSHOT_KEY = "market_snapshot_v1";
const PROVIDER_KEY = "market_provider_health_v1";
const META_KEY = "market_meta_v1";

function nowIso() {
  return new Date().toISOString();
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

function pctChange(previous, current) {
  if (!Number.isFinite(previous) || !Number.isFinite(current) || previous === 0) return 0;
  return ((current - previous) / previous) * 100;
}

function spreadFor(last, category = "") {
  return Math.max(Math.abs(last) * 0.0008, category === "fx" ? 0.0002 : 0.01);
}

function normalizeRow(previous, asset, values = {}) {
  const prior = previous || makeSeedRecord(asset);
  const lastCandidate = safeNumber(values.last);
  const last = Number.isFinite(lastCandidate) ? lastCandidate : prior.last;
  const nextSpread = spreadFor(last, asset.category);
  const bidCandidate = safeNumber(values.bid);
  const askCandidate = safeNumber(values.ask);
  const bid = Number.isFinite(bidCandidate) ? bidCandidate : Math.max(0.0000001, last - nextSpread / 2);
  const ask = Number.isFinite(askCandidate) ? askCandidate : last + nextSpread / 2;
  const nextChange = safeNumber(values.changePct);
  return {
    id: asset.id,
    name: asset.name,
    symbol: asset.symbol,
    category: asset.category,
    provider: String(values.provider || asset.provider || prior.provider || "").toLowerCase(),
    last,
    bid,
    ask,
    changePct: Number.isFinite(nextChange) ? nextChange : pctChange(prior.last, last),
    updatedAt: values.updatedAt || nowIso(),
    status: values.status || "live"
  };
}

function defaultProviderHealth(env) {
  return {
    coinapi: { configured: !!env.COINAPI_KEY, connected: false, enabled: true, lastSync: null, lastError: "" },
    oanda: { configured: !!env.OANDA_API_TOKEN && !!env.OANDA_ACCOUNT_ID, connected: false, enabled: true, lastSync: null, lastError: "" },
    twelve: { configured: !!env.TWELVE_API_KEY, connected: false, enabled: true, lastSync: null, lastError: "" },
    ig: { configured: !!env.IG_API_KEY && !!env.IG_IDENTIFIER && !!env.IG_PASSWORD, connected: false, enabled: false, lastSync: null, lastError: "Credentials loaded; EPIC resolver disabled in this build." },
    databento: { configured: !!env.DATABENTO_API_KEY, connected: false, enabled: false, lastSync: null, lastError: "Credentials loaded; live Raw TCP dataset mapping is not enabled in this build." },
    binance: { configured: true, connected: false, enabled: true, lastSync: null, lastError: "" }
  };
}

async function mapLimit(items, limit, callback) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const current = index;
      index += 1;
      results[current] = await callback(items[current], current);
    }
  }

  const runners = [];
  for (let i = 0; i < Math.min(limit, items.length); i += 1) runners.push(worker());
  await Promise.all(runners);
  return results;
}

function splitLines(chunk) {
  return String(chunk || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export class MarketHub extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.env = env;
    this.snapshotTtlMs = Number(env.SNAPSHOT_TTL_MS || 15000);
    this.coinapiRestMinIntervalMs = Number(env.COINAPI_REST_POLL_MS || 30000);
    this.twelveMinIntervalMs = Number(env.TWELVE_POLL_MS || 30000);
    this.oandaMinIntervalMs = Number(env.OANDA_POLL_MS || 15000);
    this.latest = new Map();
    this.providerHealth = defaultProviderHealth(env);
    this.meta = {
      lastSnapshotRefreshAt: 0,
      lastCoinapiRestAt: 0,
      lastOandaAt: 0,
      lastTwelveAt: 0
    };
    this.refreshPromise = null;
    this.coinWs = null;
    this.binanceSpotWs = null;
    this.binanceFuturesWs = null;

    this.ctx.blockConcurrencyWhile(async () => {
      await this.restoreState();
      this.seedUniverse();
      this.ensureUpstreams();
      const alarm = await this.ctx.storage.getAlarm();
      if (!alarm) {
        await this.ctx.storage.setAlarm(Date.now() + 1500);
      }
    });
  }

  async restoreState() {
    const [snapshotRows, providerHealth, meta] = await Promise.all([
      this.ctx.storage.get(SNAPSHOT_KEY),
      this.ctx.storage.get(PROVIDER_KEY),
      this.ctx.storage.get(META_KEY)
    ]);

    if (Array.isArray(snapshotRows)) {
      this.latest = new Map(snapshotRows.map((row) => [row.id, row]));
    }
    if (providerHealth && typeof providerHealth === "object") {
      this.providerHealth = { ...defaultProviderHealth(this.env), ...providerHealth };
    }
    if (meta && typeof meta === "object") {
      this.meta = { ...this.meta, ...meta };
    }
  }

  seedUniverse() {
    MARKET_UNIVERSE.forEach((asset, index) => {
      if (!this.latest.has(asset.id)) {
        this.latest.set(asset.id, makeSeedRecord(asset, index + 1));
      }
    });
  }

  listRecords() {
    this.seedUniverse();
    return MARKET_UNIVERSE.map((asset) => this.latest.get(asset.id) || makeSeedRecord(asset, 1));
  }

  async persistState() {
    await Promise.all([
      this.ctx.storage.put(SNAPSHOT_KEY, this.listRecords()),
      this.ctx.storage.put(PROVIDER_KEY, this.providerHealth),
      this.ctx.storage.put(META_KEY, this.meta)
    ]);
  }

  setProviderState(name, patch = {}) {
    const prev = this.providerHealth[name] || {};
    this.providerHealth[name] = { ...prev, ...patch };
  }

  applyAssetUpdate(assetId, values = {}) {
    const asset = MARKET_BY_ID.get(assetId);
    if (!asset) return null;
    const previous = this.latest.get(assetId) || makeSeedRecord(asset, 1);
    const next = normalizeRow(previous, asset, values);
    const changed =
      Math.abs(Number(next.last) - Number(previous.last)) > 0.00000001 ||
      String(next.updatedAt) !== String(previous.updatedAt) ||
      String(next.provider) !== String(previous.provider) ||
      String(next.status) !== String(previous.status);
    if (changed) {
      this.latest.set(assetId, next);
      return next;
    }
    return null;
  }

  broadcast(payload) {
    const raw = JSON.stringify(payload);
    for (const ws of this.ctx.getWebSockets()) {
      try {
        ws.send(raw);
      } catch (_) {
        // no-op
      }
    }
  }

  async fetch(request) {
    const url = new URL(request.url);

    if (request.headers.get("Upgrade") === "websocket" || url.pathname === "/ws") {
      return this.handleWebSocket();
    }

    if (url.pathname === "/internal/snapshot") {
      const force = url.searchParams.get("force") === "1";
      const markets = await this.ensureSnapshot(force);
      return jsonResponse({
        ok: true,
        ts: nowIso(),
        count: markets.length,
        markets,
        providerHealth: this.providerHealth
      });
    }

    if (url.pathname === "/internal/health") {
      return jsonResponse({
        ok: true,
        ts: nowIso(),
        markets: this.latest.size || MARKET_UNIVERSE.length,
        providerHealth: this.providerHealth
      });
    }

    if (url.pathname === "/internal/assets") {
      return jsonResponse({ ok: true, count: MARKET_UNIVERSE.length, assets: MARKET_UNIVERSE });
    }

    return new Response("Not found", { status: 404 });
  }

  handleWebSocket() {
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    server.serializeAttachment({ connectedAt: Date.now() });
    this.ctx.acceptWebSocket(server);

    // Immediately send the current snapshot to the newly connected client.
    try {
      server.send(JSON.stringify({ type: "snapshot", markets: this.listRecords(), ts: nowIso() }));
    } catch (_) {
      // no-op
    }

    return new Response(null, { status: 101, webSocket: client });
  }

  async webSocketMessage(ws, message) {
    let parsed = null;
    try {
      parsed = JSON.parse(String(message || ""));
    } catch (_) {
      parsed = null;
    }

    if (parsed?.type === "ping") {
      try {
        ws.send(JSON.stringify({ type: "pong", ts: nowIso() }));
      } catch (_) {
        // no-op
      }
      return;
    }

    if (parsed?.type === "snapshot") {
      try {
        ws.send(JSON.stringify({ type: "snapshot", markets: this.listRecords(), ts: nowIso() }));
      } catch (_) {
        // no-op
      }
    }
  }

  async webSocketClose(ws, code, reason, wasClean) {
    try {
      ws.close(code, reason || "closed");
    } catch (_) {
      // no-op
    }
  }

  async webSocketError(ws, error) {
    try {
      ws.close(1011, "error");
    } catch (_) {
      // no-op
    }
  }

  async alarm() {
    await this.ensureSnapshot(true);
    await this.ctx.storage.setAlarm(Date.now() + this.snapshotTtlMs);
  }

  async ensureSnapshot(force = false) {
    const age = Date.now() - Number(this.meta.lastSnapshotRefreshAt || 0);
    if (!force && age < this.snapshotTtlMs && this.latest.size) {
      this.ensureUpstreams();
      return this.listRecords();
    }

    if (!this.refreshPromise) {
      this.refreshPromise = this.refreshAllProviders()
        .catch((error) => {
          console.error("[MarketHub] refresh failed", error);
        })
        .finally(() => {
          this.refreshPromise = null;
        });
    }

    await this.refreshPromise;
    this.ensureUpstreams();
    return this.listRecords();
  }

  ensureUpstreams() {
    this.ensureCoinApiStream();
    this.ensureBinanceSpotFallbackStream();
    this.ensureBinanceFuturesFallbackStream();
  }

  async refreshAllProviders() {
    const changed = [];
    changed.push(...(await this.refreshCoinApiRest()));
    changed.push(...(await this.refreshOandaSnapshot()));
    changed.push(...(await this.refreshTwelveSnapshot()));

    this.meta.lastSnapshotRefreshAt = Date.now();
    await this.persistState();

    if (changed.length) {
      this.broadcast({ type: "markets", markets: changed, ts: nowIso() });
    }
  }

  async refreshCoinApiRest() {
    if (!this.env.COINAPI_KEY) return [];
    const now = Date.now();
    if (now - Number(this.meta.lastCoinapiRestAt || 0) < this.coinapiRestMinIntervalMs) {
      return [];
    }

    const changed = [];
    const assetIds = COINAPI_REST_ASSET_IDS.filter((assetId) => MARKET_BY_ID.has(assetId));

    await mapLimit(assetIds, 4, async (assetId) => {
      const asset = MARKET_BY_ID.get(assetId);
      if (!asset) return null;

      try {
        const response = await fetch(`https://rest.coinapi.io/v1/exchangerate/${encodeURIComponent(asset.symbol)}/USD`, {
          headers: {
            "X-CoinAPI-Key": this.env.COINAPI_KEY,
            "Accept": "application/json"
          }
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const payload = await response.json();
        const last = safeNumber(payload?.rate);
        if (!Number.isFinite(last)) return null;

        const next = this.applyAssetUpdate(asset.id, {
          provider: "coinapi",
          last,
          updatedAt: payload?.time || nowIso(),
          status: "live"
        });
        if (next) changed.push(next);
      } catch (error) {
        this.setProviderState("coinapi", {
          connected: false,
          lastError: error?.message || "CoinAPI REST refresh failed"
        });
      }
      return null;
    });

    this.meta.lastCoinapiRestAt = now;
    this.setProviderState("coinapi", {
      connected: changed.length > 0 || !!this.coinWs,
      lastSync: changed.length ? nowIso() : this.providerHealth.coinapi.lastSync,
      lastError: changed.length ? "" : this.providerHealth.coinapi.lastError
    });
    return changed;
  }

  ensureCoinApiStream() {
    if (!this.env.COINAPI_KEY) return;
    if (this.coinWs && (this.coinWs.readyState === 0 || this.coinWs.readyState === 1)) return;

    try {
      const ws = new WebSocket("wss://ws.coinapi.io/v1/");
      this.coinWs = ws;

      ws.addEventListener("open", () => {
        this.setProviderState("coinapi", { connected: true, lastError: "" });
        try {
          ws.send(JSON.stringify({
            type: "hello",
            apikey: this.env.COINAPI_KEY,
            heartbeat: true,
            subscribe_data_type: ["trade"],
            subscribe_filter_symbol_id: COINAPI_STREAM_SYMBOLS
          }));
        } catch (error) {
          this.setProviderState("coinapi", { connected: false, lastError: error?.message || "CoinAPI hello failed" });
        }
      });

      ws.addEventListener("message", async (event) => {
        let payload = null;
        try {
          payload = JSON.parse(event.data);
        } catch (_) {
          payload = null;
        }

        if (!payload || payload.type === "heartbeat") return;

        const symbolId = String(payload.symbol_id || "").replace(/\$$/, "");
        const assetId = COINAPI_SYMBOL_TO_ASSET_ID[symbolId];
        const last = safeNumber(payload.price);
        if (!assetId || !Number.isFinite(last)) return;

        const next = this.applyAssetUpdate(assetId, {
          provider: "coinapi",
          last,
          updatedAt: payload.time_exchange || payload.time_coinapi || nowIso(),
          status: "live"
        });

        if (next) {
          this.setProviderState("coinapi", { connected: true, lastSync: nowIso(), lastError: "" });
          this.broadcast({ type: "markets", markets: [next], ts: nowIso() });
        }
      });

      ws.addEventListener("close", () => {
        this.setProviderState("coinapi", { connected: false, lastError: "CoinAPI WebSocket closed" });
        this.coinWs = null;
      });

      ws.addEventListener("error", () => {
        this.setProviderState("coinapi", { connected: false, lastError: "CoinAPI WebSocket error" });
      });
    } catch (error) {
      this.setProviderState("coinapi", { connected: false, lastError: error?.message || "CoinAPI WebSocket init failed" });
      this.coinWs = null;
    }
  }

  ensureBinanceSpotFallbackStream() {
    if (this.binanceSpotWs && (this.binanceSpotWs.readyState === 0 || this.binanceSpotWs.readyState === 1)) return;

    try {
      const ws = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");
      this.binanceSpotWs = ws;

      ws.addEventListener("open", () => {
        this.setProviderState("binance", { connected: true, lastError: "" });
      });

      ws.addEventListener("message", (event) => {
        let payload = null;
        try {
          payload = JSON.parse(event.data);
        } catch (_) {
          payload = null;
        }

        const rows = Array.isArray(payload) ? payload : Array.isArray(payload?.data) ? payload.data : [];
        const changed = [];

        for (const row of rows) {
          const streamSymbol = String(row?.s || "").toUpperCase();
          const assetId = BINANCE_SPOT_ASSET_BY_STREAM.get(streamSymbol);
          if (!assetId) continue;

          const asset = MARKET_BY_ID.get(assetId);
          const last = safeNumber(row?.c);
          if (!asset || !Number.isFinite(last)) continue;

          const next = this.applyAssetUpdate(asset.id, {
            provider: "binance",
            last,
            bid: safeNumber(row?.b),
            ask: safeNumber(row?.a),
            changePct: safeNumber(row?.P),
            updatedAt: nowIso(),
            status: "live"
          });
          if (next) changed.push(next);
        }

        if (changed.length) {
          this.setProviderState("binance", { connected: true, lastSync: nowIso(), lastError: "" });
          this.broadcast({ type: "markets", markets: changed, ts: nowIso() });
        }
      });

      ws.addEventListener("close", () => {
        this.setProviderState("binance", { connected: false, lastError: "Binance spot fallback closed" });
        this.binanceSpotWs = null;
      });

      ws.addEventListener("error", () => {
        this.setProviderState("binance", { connected: false, lastError: "Binance spot fallback error" });
      });
    } catch (error) {
      this.setProviderState("binance", { connected: false, lastError: error?.message || "Binance spot fallback init failed" });
      this.binanceSpotWs = null;
    }
  }

  ensureBinanceFuturesFallbackStream() {
    if (this.binanceFuturesWs && (this.binanceFuturesWs.readyState === 0 || this.binanceFuturesWs.readyState === 1)) return;

    try {
      const ws = new WebSocket("wss://fstream.binance.com/ws/!ticker@arr");
      this.binanceFuturesWs = ws;

      ws.addEventListener("message", (event) => {
        let payload = null;
        try {
          payload = JSON.parse(event.data);
        } catch (_) {
          payload = null;
        }

        const rows = Array.isArray(payload) ? payload : Array.isArray(payload?.data) ? payload.data : [];
        const changed = [];

        for (const row of rows) {
          const streamSymbol = String(row?.s || "").toUpperCase();
          const assetId = BINANCE_FUTURES_ASSET_BY_STREAM.get(streamSymbol);
          if (!assetId) continue;

          const asset = MARKET_BY_ID.get(assetId);
          const last = safeNumber(row?.c);
          if (!asset || !Number.isFinite(last)) continue;

          const next = this.applyAssetUpdate(asset.id, {
            provider: "binance",
            last,
            bid: safeNumber(row?.b),
            ask: safeNumber(row?.a),
            changePct: safeNumber(row?.P),
            updatedAt: nowIso(),
            status: "live"
          });
          if (next) changed.push(next);
        }

        if (changed.length) {
          this.setProviderState("binance", { connected: true, lastSync: nowIso(), lastError: "" });
          this.broadcast({ type: "markets", markets: changed, ts: nowIso() });
        }
      });

      ws.addEventListener("close", () => {
        this.binanceFuturesWs = null;
      });

      ws.addEventListener("error", () => {
        this.binanceFuturesWs = null;
      });
    } catch (_) {
      this.binanceFuturesWs = null;
    }
  }

  async refreshOandaSnapshot() {
    if (!this.env.OANDA_API_TOKEN || !this.env.OANDA_ACCOUNT_ID) return [];
    const now = Date.now();
    if (now - Number(this.meta.lastOandaAt || 0) < this.oandaMinIntervalMs) {
      return [];
    }

    const changed = [];
    const baseCandidates = [
      this.env.OANDA_API_BASE || "https://api-fxtrade.oanda.com",
      "https://api-fxpractice.oanda.com"
    ];

    let success = false;
    let lastError = "";

    for (const baseUrl of baseCandidates) {
      try {
        const endpoint = `${baseUrl}/v3/accounts/${encodeURIComponent(this.env.OANDA_ACCOUNT_ID)}/pricing?instruments=${encodeURIComponent(OANDA_INSTRUMENTS.join(","))}`;
        const response = await fetch(endpoint, {
          headers: {
            "Authorization": `Bearer ${this.env.OANDA_API_TOKEN}`,
            "Accept": "application/json"
          }
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const payload = await response.json();
        const prices = Array.isArray(payload?.prices) ? payload.prices : [];

        for (const row of prices) {
          const instrument = String(row?.instrument || "").toUpperCase();
          const assetId = OANDA_INSTRUMENT_TO_ASSET_ID.get(instrument);
          if (!assetId) continue;
          const asset = MARKET_BY_ID.get(assetId);
          if (!asset) continue;

          const bid = safeNumber(row?.bids?.[0]?.price ?? row?.closeoutBid);
          const ask = safeNumber(row?.asks?.[0]?.price ?? row?.closeoutAsk);
          const last = Number.isFinite(bid) && Number.isFinite(ask) ? (bid + ask) / 2 : safeNumber(row?.closeoutBid) || safeNumber(row?.closeoutAsk);
          if (!Number.isFinite(last)) continue;

          const next = this.applyAssetUpdate(asset.id, {
            provider: "oanda",
            last,
            bid,
            ask,
            updatedAt: row?.time || nowIso(),
            status: String(row?.status || "live").toLowerCase()
          });
          if (next) changed.push(next);
        }

        success = true;
        this.setProviderState("oanda", { connected: true, lastSync: nowIso(), lastError: "" });
        break;
      } catch (error) {
        lastError = error?.message || "OANDA snapshot failed";
      }
    }

    this.meta.lastOandaAt = now;
    if (!success) {
      this.setProviderState("oanda", { connected: false, lastError });
    }
    return changed;
  }

  async refreshTwelveSnapshot() {
    if (!this.env.TWELVE_API_KEY) return [];
    const now = Date.now();
    if (now - Number(this.meta.lastTwelveAt || 0) < this.twelveMinIntervalMs) {
      return [];
    }

    try {
      const symbolCsv = TWELVE_PRICE_SYMBOLS.join(",");
      const endpoint = `https://api.twelvedata.com/price?symbol=${encodeURIComponent(symbolCsv)}&apikey=${encodeURIComponent(this.env.TWELVE_API_KEY)}`;
      const response = await fetch(endpoint, { headers: { "Accept": "application/json" } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      const changed = [];

      // Batch responses are returned as an object keyed by symbol.
      const entries = Object.entries(payload || {}).filter(([key]) => key !== "status" && key !== "message" && key !== "code");
      for (const [symbol, row] of entries) {
        const assetId = TWELVE_SYMBOL_TO_ASSET_ID[symbol];
        const asset = MARKET_BY_ID.get(assetId);
        const last = safeNumber(row?.price ?? row?.close ?? row?.value);
        if (!asset || !Number.isFinite(last)) continue;

        const next = this.applyAssetUpdate(asset.id, {
          provider: "twelve_data",
          last,
          updatedAt: row?.datetime || row?.timestamp || nowIso(),
          status: "live"
        });

        if (next) changed.push(next);
      }

      this.meta.lastTwelveAt = now;
      this.setProviderState("twelve", { connected: changed.length > 0, lastSync: changed.length ? nowIso() : this.providerHealth.twelve.lastSync, lastError: changed.length ? "" : this.providerHealth.twelve.lastError });
      return changed;
    } catch (error) {
      this.meta.lastTwelveAt = now;
      this.setProviderState("twelve", { connected: false, lastError: error?.message || "Twelve Data snapshot failed" });
      return [];
    }
  }
}
