import json
import os
import threading
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List

import databento as db
from fastapi import FastAPI, Query
from fastapi.responses import JSONResponse

APP = FastAPI(title="citadel-databento-bridge")
STATE_LOCK = threading.Lock()
LAST_ROWS: Dict[str, dict] = {}
SUBSCRIPTIONS: List[dict] = []
LAST_ERROR: str | None = None
STARTED_AT = time.time()


@dataclass
class SubscriptionGroup:
    dataset: str
    stype_in: str
    symbols: List[str]


def load_subscriptions() -> List[dict]:
    path = Path(os.environ.get('DATABENTO_SUBSCRIPTIONS_FILE', 'subscriptions.sample.json'))
    if not path.exists():
        raise FileNotFoundError(f'Subscription file not found: {path}')
    with path.open('r', encoding='utf-8') as handle:
        rows = json.load(handle)
    return rows


def group_subscriptions(rows: List[dict]) -> List[SubscriptionGroup]:
    groups: Dict[tuple, List[str]] = {}
    for row in rows:
        dataset = row['dataset']
        stype_in = row.get('stype_in', 'continuous')
        key = (dataset, stype_in)
        groups.setdefault(key, []).append(row['symbol'])
    return [SubscriptionGroup(dataset=dataset, stype_in=stype_in, symbols=symbols) for (dataset, stype_in), symbols in groups.items()]


def symbol_lookup(rows: List[dict]) -> Dict[str, dict]:
    return {row['symbol']: row for row in rows}


def record_symbol(record) -> str | None:
    for attribute in ('symbol', 'stype_in_symbol', 'raw_symbol'):
        value = getattr(record, attribute, None)
        if value:
            return str(value)
    return None


def record_timestamp(record) -> str:
    for attribute in ('pretty_ts_event', 'ts_event', 'ts_recv'):
        value = getattr(record, attribute, None)
        if value is None:
            continue
        if isinstance(value, str):
            return value
        try:
            # Databento timestamps are usually nanoseconds.
            if int(value) > 10**14:
                return time.strftime('%Y-%m-%dT%H:%M:%S', time.gmtime(int(value) / 1_000_000_000)) + 'Z'
        except Exception:
            pass
    return time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())


def update_from_record(record, lookup: Dict[str, dict]):
    symbol = record_symbol(record)
    if not symbol:
        return
    subscription = lookup.get(symbol)
    if not subscription:
        return

    close_value = getattr(record, 'close', None)
    open_value = getattr(record, 'open', None)
    high_value = getattr(record, 'high', None)
    low_value = getattr(record, 'low', None)
    volume_value = getattr(record, 'volume', None)
    last_price = close_value if close_value is not None else getattr(record, 'price', None)
    if last_price is None:
        return

    previous_close = open_value if open_value not in (None, 0) else None
    change_pct = None
    try:
        if previous_close not in (None, 0):
            change_pct = ((float(last_price) - float(previous_close)) / float(previous_close)) * 100.0
    except Exception:
        change_pct = None

    row = {
        'id': subscription['asset_id'],
        'symbol': symbol,
        'displayName': subscription.get('display_name', symbol),
        'provider': 'databento',
        'assetClass': subscription.get('asset_class', 'futures'),
        'category': subscription.get('category', 'futures'),
        'subcategory': subscription.get('subcategory', 'continuous'),
        'last': float(last_price),
        'bid': None,
        'ask': None,
        'changePct': change_pct,
        'updatedAt': record_timestamp(record),
        'sourceSymbol': symbol,
        'high': float(high_value) if high_value is not None else None,
        'low': float(low_value) if low_value is not None else None,
        'open': float(open_value) if open_value is not None else None,
        'volume': float(volume_value) if volume_value is not None else None,
    }

    with STATE_LOCK:
        LAST_ROWS[symbol] = row


def runner() -> None:
    global LAST_ERROR, SUBSCRIPTIONS
    try:
        api_key = os.environ['DATABENTO_API_KEY']
        SUBSCRIPTIONS = load_subscriptions()
        lookup = symbol_lookup(SUBSCRIPTIONS)
        groups = group_subscriptions(SUBSCRIPTIONS)

        clients = []
        for group in groups:
            client = db.Live(key=api_key)
            client.subscribe(
                dataset=group.dataset,
                schema=os.environ.get('DATABENTO_SCHEMA', 'ohlcv-1s'),
                stype_in=group.stype_in,
                symbols=group.symbols,
            )
            client.add_callback(lambda record, lookup=lookup: update_from_record(record, lookup))
            clients.append(client)

        for client in clients:
            client.start()

        while True:
            time.sleep(1)
    except Exception as exc:
        LAST_ERROR = str(exc)


@APP.on_event('startup')
def on_startup() -> None:
    thread = threading.Thread(target=runner, daemon=True)
    thread.start()


@APP.get('/health')
def health() -> JSONResponse:
    with STATE_LOCK:
        count = len(LAST_ROWS)
    return JSONResponse({
        'ok': LAST_ERROR is None,
        'startedAt': STARTED_AT,
        'cachedMarketCount': count,
        'error': LAST_ERROR,
    })


@APP.get('/snapshot')
def snapshot(symbols: str | None = Query(default=None)) -> JSONResponse:
    requested = set(symbols.split(',')) if symbols else None
    with STATE_LOCK:
        rows = list(LAST_ROWS.values())

    if requested is not None:
        rows = [row for row in rows if row['sourceSymbol'] in requested]

    return JSONResponse({
        'ok': True,
        'marketCount': len(rows),
        'generatedAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
        'markets': rows,
        'error': LAST_ERROR,
    })
