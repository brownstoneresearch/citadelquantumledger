import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ASSET_UNIVERSE } from '../src/config/assetUniverse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_FILE = path.join(__dirname, '../src/config/igEpics.generated.js');

const required = ['IG_API_KEY', 'IG_IDENTIFIER', 'IG_PASSWORD'];
for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Missing ${key}`);
  }
}

const baseUrl = process.env.IG_BASE_URL || 'https://demo-api.ig.com/gateway/deal';

const loginResponse = await fetch(`${baseUrl}/session`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json; charset=UTF-8',
    'X-IG-API-KEY': process.env.IG_API_KEY,
    Version: '2'
  },
  body: JSON.stringify({
    identifier: process.env.IG_IDENTIFIER,
    password: process.env.IG_PASSWORD,
    encryptedPassword: false
  })
});

if (!loginResponse.ok) {
  const text = await loginResponse.text();
  throw new Error(`IG login failed: ${loginResponse.status} ${text}`);
}

const cst = loginResponse.headers.get('CST') || loginResponse.headers.get('cst');
const xSecurityToken = loginResponse.headers.get('X-SECURITY-TOKEN') || loginResponse.headers.get('x-security-token');
if (!cst || !xSecurityToken) throw new Error('IG login missing CST/X-SECURITY-TOKEN headers');

function normalizeText(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function expectedInstrumentType(asset) {
  if (asset.category === 'fx') return 'CURRENCIES';
  if (asset.category === 'indices') return 'INDICES';
  if (asset.category === 'commodities') return 'COMMODITIES';
  if (asset.category === 'fixed_income_rates') return 'RATES';
  return null;
}

function scoreCandidate(asset, candidate) {
  const canonical = normalizeText(asset.canonical_symbol);
  const display = normalizeText(asset.display_name);
  const instrumentName = normalizeText(candidate.instrumentName || candidate.name);
  const epic = normalizeText(candidate.epic);
  const instrumentType = candidate.instrumentType || candidate.type;

  let score = 0;
  if (instrumentName.includes(display)) score += 40;
  if (instrumentName.includes(canonical)) score += 30;
  if (epic.includes(canonical.replace(/ /g, ''))) score += 15;
  if (candidate.streamingPricesAvailable) score += 10;
  if (expectedInstrumentType(asset) && expectedInstrumentType(asset) === instrumentType) score += 15;
  for (const term of asset.primary_route?.search_terms || []) {
    const normalized = normalizeText(term);
    if (instrumentName.includes(normalized)) score += 8;
    if (epic.includes(normalized)) score += 4;
  }
  return score;
}

function unpack(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.markets)) return payload.markets;
  if (Array.isArray(payload.marketDetails)) return payload.marketDetails;
  return [];
}

const assets = ASSET_UNIVERSE.filter((asset) => asset.primary_provider === 'ig');
const mapping = {};

for (const asset of assets) {
  let best = null;
  for (const term of asset.primary_route?.search_terms || [asset.display_name]) {
    const response = await fetch(`${baseUrl}/markets?searchTerm=${encodeURIComponent(term)}`, {
      headers: {
        Accept: 'application/json; charset=UTF-8',
        'X-IG-API-KEY': process.env.IG_API_KEY,
        CST: cst,
        'X-SECURITY-TOKEN': xSecurityToken,
        Version: '1'
      }
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`IG search failed for ${term}: ${response.status} ${text}`);
    }
    const payload = await response.json();
    const candidates = unpack(payload);
    for (const candidate of candidates) {
      const score = scoreCandidate(asset, candidate);
      if (!best || score > best.score) best = { epic: candidate.epic, score, name: candidate.instrumentName || candidate.name };
    }
  }
  if (best) {
    mapping[asset.id] = best.epic;
    console.log(`${asset.id} -> ${best.epic} (${best.name}) [score=${best.score}]`);
  } else {
    console.warn(`No IG epic found for ${asset.id}`);
  }
}

const content = `export const IG_EPICS = ${JSON.stringify(mapping, null, 2)}
`;
await fs.writeFile(OUTPUT_FILE, content, 'utf8');
console.log(`Wrote ${OUTPUT_FILE}`);
