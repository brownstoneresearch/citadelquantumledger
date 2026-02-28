export function safeNumber(value) {
  if (value === null || value === undefined || value === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

export function midpoint(bid, ask) {
  const bidNumber = safeNumber(bid);
  const askNumber = safeNumber(ask);
  if (bidNumber !== null && askNumber !== null) {
    return roundPrice((bidNumber + askNumber) / 2);
  }
  return bidNumber ?? askNumber ?? null;
}

export function roundPrice(value) {
  const number = safeNumber(value);
  if (number === null) return null;
  const abs = Math.abs(number);
  if (abs >= 1000) return Number(number.toFixed(2));
  if (abs >= 1) return Number(number.toFixed(4));
  return Number(number.toFixed(6));
}

export function normalizeAssetClass(category) {
  const mapping = {
    crypto_spot: 'crypto',
    crypto_derivatives: 'crypto-futures',
    fx: 'fx',
    indices: 'indices',
    commodities: 'commodities',
    fixed_income_rates: 'rates'
  };
  return mapping[category] || category;
}

export function normalizeTimestamp(value) {
  if (!value) return new Date().toISOString();
  if (typeof value === 'number') {
    return new Date(value).toISOString();
  }
  const date = new Date(value);
  if (!Number.isNaN(date.getTime())) {
    return date.toISOString();
  }
  return new Date().toISOString();
}

export function normalizeMarketRow({ asset, provider, sourceSymbol, bid, ask, last, changePct, updatedAt, extra = {} }) {
  const normalizedBid = roundPrice(bid);
  const normalizedAsk = roundPrice(ask);
  const normalizedLast = roundPrice(last ?? midpoint(normalizedBid, normalizedAsk));
  return {
    id: asset.id,
    symbol: asset.canonical_symbol,
    displayName: asset.display_name,
    provider,
    assetClass: normalizeAssetClass(asset.category),
    category: asset.category,
    subcategory: asset.subcategory,
    last: normalizedLast,
    bid: normalizedBid,
    ask: normalizedAsk,
    changePct: safeNumber(changePct),
    updatedAt: normalizeTimestamp(updatedAt),
    sourceSymbol,
    ...extra
  };
}
