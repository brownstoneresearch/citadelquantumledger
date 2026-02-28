import { MarketHub } from "./hub";

export { MarketHub };

function getAllowedOrigin(request, env) {
  const requestOrigin = request.headers.get("Origin") || "";
  const allowed = (env.APP_ORIGIN || "https://citadelquantumledger.pages.dev").split(",").map((item) => item.trim()).filter(Boolean);
  return allowed.includes(requestOrigin) ? requestOrigin : allowed[0] || "*";
}

function withCors(response, request, env) {
  const headers = new Headers(response.headers);
  headers.set("Access-Control-Allow-Origin", getAllowedOrigin(request, env));
  headers.set("Access-Control-Allow-Methods", "GET,OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  headers.set("Vary", "Origin");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return withCors(new Response(null, { status: 204 }), request, env);
    }

    if (url.pathname === "/health") {
      return withCors(
        new Response(JSON.stringify({
          ok: true,
          worker: env.WORKER_NAME || "cql-market-hub",
          ts: new Date().toISOString(),
          routes: {
            snapshot: "/api/markets/snapshot",
            health: "/api/markets/health",
            assets: "/api/markets/assets",
            websocket: "/ws"
          }
        }), { headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } }),
        request,
        env
      );
    }

    const id = env.MARKET_HUB.idFromName("global");
    const stub = env.MARKET_HUB.get(id);

    if (url.pathname === "/ws") {
      if (request.headers.get("Upgrade") !== "websocket") {
        return new Response("Expected Upgrade: websocket", { status: 426 });
      }
      return stub.fetch(new Request("https://internal/ws", request));
    }

    if (url.pathname === "/api/markets/snapshot") {
      const force = url.searchParams.get("force") === "1" ? "?force=1" : "";
      return withCors(await stub.fetch(`https://internal/internal/snapshot${force}`), request, env);
    }

    if (url.pathname === "/api/markets/health") {
      return withCors(await stub.fetch("https://internal/internal/health"), request, env);
    }

    if (url.pathname === "/api/markets/assets") {
      return withCors(await stub.fetch("https://internal/internal/assets"), request, env);
    }

    return withCors(new Response("Not found", { status: 404 }), request, env);
  }
};
