export const ASSET_UNIVERSE = [
  {
    "id": "crypto-spot-btc",
    "display_name": "Bitcoin",
    "canonical_symbol": "BTC",
    "category": "crypto_spot",
    "subcategory": "major_layer1s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_BTC_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "btcusdt",
        "stream_candidates": [
          "btcusdt@trade",
          "btcusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "BTC-USD",
          "BTC-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "BTC/USD",
          "BTC/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-eth",
    "display_name": "Ethereum",
    "canonical_symbol": "ETH",
    "category": "crypto_spot",
    "subcategory": "major_layer1s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_ETH_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "ethusdt",
        "stream_candidates": [
          "ethusdt@trade",
          "ethusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "ETH-USD",
          "ETH-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "ETH/USD",
          "ETH/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-bnb",
    "display_name": "Binance Coin",
    "canonical_symbol": "BNB",
    "category": "crypto_spot",
    "subcategory": "major_layer1s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_BNB_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "bnbusdt",
        "stream_candidates": [
          "bnbusdt@trade",
          "bnbusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "BNB-USD",
          "BNB-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "BNB/USD",
          "BNB/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-sol",
    "display_name": "Solana",
    "canonical_symbol": "SOL",
    "category": "crypto_spot",
    "subcategory": "major_layer1s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_SOL_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "solusdt",
        "stream_candidates": [
          "solusdt@trade",
          "solusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "SOL-USD",
          "SOL-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "SOL/USD",
          "SOL/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-ada",
    "display_name": "Cardano",
    "canonical_symbol": "ADA",
    "category": "crypto_spot",
    "subcategory": "major_layer1s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_ADA_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "adausdt",
        "stream_candidates": [
          "adausdt@trade",
          "adausdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "ADA-USD",
          "ADA-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "ADA/USD",
          "ADA/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-avax",
    "display_name": "Avalanche",
    "canonical_symbol": "AVAX",
    "category": "crypto_spot",
    "subcategory": "major_layer1s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_AVAX_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "avaxusdt",
        "stream_candidates": [
          "avaxusdt@trade",
          "avaxusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "AVAX-USD",
          "AVAX-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "AVAX/USD",
          "AVAX/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-dot",
    "display_name": "Polkadot",
    "canonical_symbol": "DOT",
    "category": "crypto_spot",
    "subcategory": "major_layer1s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_DOT_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "dotusdt",
        "stream_candidates": [
          "dotusdt@trade",
          "dotusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "DOT-USD",
          "DOT-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "DOT/USD",
          "DOT/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-link",
    "display_name": "Chainlink",
    "canonical_symbol": "LINK",
    "category": "crypto_spot",
    "subcategory": "major_layer1s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_LINK_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "linkusdt",
        "stream_candidates": [
          "linkusdt@trade",
          "linkusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "LINK-USD",
          "LINK-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "LINK/USD",
          "LINK/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-near",
    "display_name": "Near Protocol",
    "canonical_symbol": "NEAR",
    "category": "crypto_spot",
    "subcategory": "major_layer1s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_NEAR_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "nearusdt",
        "stream_candidates": [
          "nearusdt@trade",
          "nearusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "NEAR-USD",
          "NEAR-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "NEAR/USD",
          "NEAR/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-icp",
    "display_name": "Internet Computer",
    "canonical_symbol": "ICP",
    "category": "crypto_spot",
    "subcategory": "major_layer1s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_ICP_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "icpusdt",
        "stream_candidates": [
          "icpusdt@trade",
          "icpusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "ICP-USD",
          "ICP-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "ICP/USD",
          "ICP/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-algo",
    "display_name": "Algorand",
    "canonical_symbol": "ALGO",
    "category": "crypto_spot",
    "subcategory": "major_layer1s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_ALGO_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "algousdt",
        "stream_candidates": [
          "algousdt@trade",
          "algousdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "ALGO-USD",
          "ALGO-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "ALGO/USD",
          "ALGO/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-hbar",
    "display_name": "Hedera",
    "canonical_symbol": "HBAR",
    "category": "crypto_spot",
    "subcategory": "major_layer1s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_HBAR_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "hbarusdt",
        "stream_candidates": [
          "hbarusdt@trade",
          "hbarusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "HBAR-USD",
          "HBAR-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "HBAR/USD",
          "HBAR/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-matic",
    "display_name": "Polygon",
    "canonical_symbol": "MATIC",
    "category": "crypto_spot",
    "subcategory": "major_layer2s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_MATIC_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "maticusdt",
        "stream_candidates": [
          "maticusdt@trade",
          "maticusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "MATIC-USD",
          "MATIC-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "MATIC/USD",
          "MATIC/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-arb",
    "display_name": "Arbitrum",
    "canonical_symbol": "ARB",
    "category": "crypto_spot",
    "subcategory": "major_layer2s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_ARB_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "arbusdt",
        "stream_candidates": [
          "arbusdt@trade",
          "arbusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "ARB-USD",
          "ARB-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "ARB/USD",
          "ARB/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-op",
    "display_name": "Optimism",
    "canonical_symbol": "OP",
    "category": "crypto_spot",
    "subcategory": "major_layer2s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_OP_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "opusdt",
        "stream_candidates": [
          "opusdt@trade",
          "opusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "OP-USD",
          "OP-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "OP/USD",
          "OP/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-imx",
    "display_name": "Immutable X",
    "canonical_symbol": "IMX",
    "category": "crypto_spot",
    "subcategory": "major_layer2s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_IMX_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "imxusdt",
        "stream_candidates": [
          "imxusdt@trade",
          "imxusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "IMX-USD",
          "IMX-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "IMX/USD",
          "IMX/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-strk",
    "display_name": "Starknet",
    "canonical_symbol": "STRK",
    "category": "crypto_spot",
    "subcategory": "major_layer2s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_STRK_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "strkusdt",
        "stream_candidates": [
          "strkusdt@trade",
          "strkusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "STRK-USD",
          "STRK-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "STRK/USD",
          "STRK/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-mnt",
    "display_name": "Mantle",
    "canonical_symbol": "MNT",
    "category": "crypto_spot",
    "subcategory": "major_layer2s",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_MNT_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "mntusdt",
        "stream_candidates": [
          "mntusdt@trade",
          "mntusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "MNT-USD",
          "MNT-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "MNT/USD",
          "MNT/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-doge",
    "display_name": "Dogecoin",
    "canonical_symbol": "DOGE",
    "category": "crypto_spot",
    "subcategory": "meme_coins",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_DOGE_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "dogeusdt",
        "stream_candidates": [
          "dogeusdt@trade",
          "dogeusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "DOGE-USD",
          "DOGE-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "DOGE/USD",
          "DOGE/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-shib",
    "display_name": "Shiba Inu",
    "canonical_symbol": "SHIB",
    "category": "crypto_spot",
    "subcategory": "meme_coins",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_SHIB_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "shibusdt",
        "stream_candidates": [
          "shibusdt@trade",
          "shibusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "SHIB-USD",
          "SHIB-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "SHIB/USD",
          "SHIB/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-pepe",
    "display_name": "Pepe",
    "canonical_symbol": "PEPE",
    "category": "crypto_spot",
    "subcategory": "meme_coins",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_PEPE_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "pepeusdt",
        "stream_candidates": [
          "pepeusdt@trade",
          "pepeusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "PEPE-USD",
          "PEPE-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "PEPE/USD",
          "PEPE/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-wif",
    "display_name": "Dogwifhat",
    "canonical_symbol": "WIF",
    "category": "crypto_spot",
    "subcategory": "meme_coins",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_WIF_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "wifusdt",
        "stream_candidates": [
          "wifusdt@trade",
          "wifusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "WIF-USD",
          "WIF-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "WIF/USD",
          "WIF/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-bonk",
    "display_name": "Bonk",
    "canonical_symbol": "BONK",
    "category": "crypto_spot",
    "subcategory": "meme_coins",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_BONK_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "bonkusdt",
        "stream_candidates": [
          "bonkusdt@trade",
          "bonkusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "BONK-USD",
          "BONK-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "BONK/USD",
          "BONK/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-floki",
    "display_name": "Floki",
    "canonical_symbol": "FLOKI",
    "category": "crypto_spot",
    "subcategory": "meme_coins",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_FLOKI_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "flokiusdt",
        "stream_candidates": [
          "flokiusdt@trade",
          "flokiusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "FLOKI-USD",
          "FLOKI-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "FLOKI/USD",
          "FLOKI/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-uni",
    "display_name": "Uniswap",
    "canonical_symbol": "UNI",
    "category": "crypto_spot",
    "subcategory": "defi_oracles",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_UNI_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "uniusdt",
        "stream_candidates": [
          "uniusdt@trade",
          "uniusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "UNI-USD",
          "UNI-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "UNI/USD",
          "UNI/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-ldo",
    "display_name": "Lido DAO",
    "canonical_symbol": "LDO",
    "category": "crypto_spot",
    "subcategory": "defi_oracles",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_LDO_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "ldousdt",
        "stream_candidates": [
          "ldousdt@trade",
          "ldousdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "LDO-USD",
          "LDO-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "LDO/USD",
          "LDO/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-aave",
    "display_name": "Aave",
    "canonical_symbol": "AAVE",
    "category": "crypto_spot",
    "subcategory": "defi_oracles",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_AAVE_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "aaveusdt",
        "stream_candidates": [
          "aaveusdt@trade",
          "aaveusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "AAVE-USD",
          "AAVE-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "AAVE/USD",
          "AAVE/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-mkr",
    "display_name": "Maker",
    "canonical_symbol": "MKR",
    "category": "crypto_spot",
    "subcategory": "defi_oracles",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_MKR_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "mkrusdt",
        "stream_candidates": [
          "mkrusdt@trade",
          "mkrusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "MKR-USD",
          "MKR-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "MKR/USD",
          "MKR/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-crv",
    "display_name": "Curve",
    "canonical_symbol": "CRV",
    "category": "crypto_spot",
    "subcategory": "defi_oracles",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_CRV_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "crvusdt",
        "stream_candidates": [
          "crvusdt@trade",
          "crvusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "CRV-USD",
          "CRV-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "CRV/USD",
          "CRV/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-grt",
    "display_name": "The Graph",
    "canonical_symbol": "GRT",
    "category": "crypto_spot",
    "subcategory": "defi_oracles",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_GRT_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "grtusdt",
        "stream_candidates": [
          "grtusdt@trade",
          "grtusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "GRT-USD",
          "GRT-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "GRT/USD",
          "GRT/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-cro",
    "display_name": "Cronos",
    "canonical_symbol": "CRO",
    "category": "crypto_spot",
    "subcategory": "exchange_tokens",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_CRO_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "crousdt",
        "stream_candidates": [
          "crousdt@trade",
          "crousdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "CRO-USD",
          "CRO-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "CRO/USD",
          "CRO/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-kcs",
    "display_name": "KuCoin Token",
    "canonical_symbol": "KCS",
    "category": "crypto_spot",
    "subcategory": "exchange_tokens",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_KCS_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "kcsusdt",
        "stream_candidates": [
          "kcsusdt@trade",
          "kcsusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "KCS-USD",
          "KCS-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "KCS/USD",
          "KCS/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-gt",
    "display_name": "GateToken",
    "canonical_symbol": "GT",
    "category": "crypto_spot",
    "subcategory": "exchange_tokens",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_GT_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "gtusdt",
        "stream_candidates": [
          "gtusdt@trade",
          "gtusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "GT-USD",
          "GT-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "GT/USD",
          "GT/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-bgb",
    "display_name": "Bitget Token",
    "canonical_symbol": "BGB",
    "category": "crypto_spot",
    "subcategory": "exchange_tokens",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_BGB_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "bgbusdt",
        "stream_candidates": [
          "bgbusdt@trade",
          "bgbusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "BGB-USD",
          "BGB-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "BGB/USD",
          "BGB/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-xmr",
    "display_name": "Monero",
    "canonical_symbol": "XMR",
    "category": "crypto_spot",
    "subcategory": "privacy_infra",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_XMR_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "xmrusdt",
        "stream_candidates": [
          "xmrusdt@trade",
          "xmrusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "XMR-USD",
          "XMR-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "XMR/USD",
          "XMR/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-zec",
    "display_name": "Zcash",
    "canonical_symbol": "ZEC",
    "category": "crypto_spot",
    "subcategory": "privacy_infra",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_ZEC_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "zecusdt",
        "stream_candidates": [
          "zecusdt@trade",
          "zecusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "ZEC-USD",
          "ZEC-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "ZEC/USD",
          "ZEC/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-fil",
    "display_name": "Filecoin",
    "canonical_symbol": "FIL",
    "category": "crypto_spot",
    "subcategory": "privacy_infra",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_FIL_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "filusdt",
        "stream_candidates": [
          "filusdt@trade",
          "filusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "FIL-USD",
          "FIL-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "FIL/USD",
          "FIL/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-ar",
    "display_name": "Arweave",
    "canonical_symbol": "AR",
    "category": "crypto_spot",
    "subcategory": "privacy_infra",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_AR_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "arusdt",
        "stream_candidates": [
          "arusdt@trade",
          "arusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "AR-USD",
          "AR-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "AR/USD",
          "AR/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-axs",
    "display_name": "Axie Infinity",
    "canonical_symbol": "AXS",
    "category": "crypto_spot",
    "subcategory": "gaming_metaverse",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_AXS_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "axsusdt",
        "stream_candidates": [
          "axsusdt@trade",
          "axsusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "AXS-USD",
          "AXS-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "AXS/USD",
          "AXS/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-sand",
    "display_name": "The Sandbox",
    "canonical_symbol": "SAND",
    "category": "crypto_spot",
    "subcategory": "gaming_metaverse",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_SAND_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "sandusdt",
        "stream_candidates": [
          "sandusdt@trade",
          "sandusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "SAND-USD",
          "SAND-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "SAND/USD",
          "SAND/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-mana",
    "display_name": "Decentraland",
    "canonical_symbol": "MANA",
    "category": "crypto_spot",
    "subcategory": "gaming_metaverse",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_MANA_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "manausdt",
        "stream_candidates": [
          "manausdt@trade",
          "manausdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "MANA-USD",
          "MANA-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "MANA/USD",
          "MANA/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-gala",
    "display_name": "Gala",
    "canonical_symbol": "GALA",
    "category": "crypto_spot",
    "subcategory": "gaming_metaverse",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_GALA_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "galausdt",
        "stream_candidates": [
          "galausdt@trade",
          "galausdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "GALA-USD",
          "GALA-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "GALA/USD",
          "GALA/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-spot-beam",
    "display_name": "Beam",
    "canonical_symbol": "BEAM",
    "category": "crypto_spot",
    "subcategory": "gaming_metaverse",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "spot_discovery",
      "exchange_priority": [
        "BINANCE",
        "COINBASE",
        "KRAKEN"
      ],
      "quote_preference": [
        "USD",
        "USDT",
        "USDC"
      ],
      "coinapi_symbol_pattern": "{exchange_id}_SPOT_BEAM_{quote}"
    },
    "fallback_routes": [
      {
        "provider": "binance",
        "mode": "public_ws",
        "symbol": "beamusdt",
        "stream_candidates": [
          "beamusdt@trade",
          "beamusdt@bookTicker"
        ]
      },
      {
        "provider": "coinbase",
        "mode": "public_ws_search",
        "product_preferences": [
          "BEAM-USD",
          "BEAM-USDC"
        ]
      },
      {
        "provider": "kraken",
        "mode": "public_ws_search",
        "pair_preferences": [
          "BEAM/USD",
          "BEAM/USDT"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI should resolve the best listed spot venue using exchange and quote preference.",
      "Coinbase and Kraken fallback availability is asset-dependent; Binance is the broadest public fallback."
    ]
  },
  {
    "id": "crypto-derivative-btcusdt",
    "display_name": "BTC/USDT Perpetual",
    "canonical_symbol": "BTCUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_BTC_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "btcusdt",
        "stream_candidates": [
          "btcusdt@aggTrade",
          "btcusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-ethusdt",
    "display_name": "ETH/USDT Perpetual",
    "canonical_symbol": "ETHUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_ETH_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "ethusdt",
        "stream_candidates": [
          "ethusdt@aggTrade",
          "ethusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-bnbusdt",
    "display_name": "BNB/USDT Perpetual",
    "canonical_symbol": "BNBUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_BNB_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "bnbusdt",
        "stream_candidates": [
          "bnbusdt@aggTrade",
          "bnbusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-solusdt",
    "display_name": "SOL/USDT Perpetual",
    "canonical_symbol": "SOLUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_SOL_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "solusdt",
        "stream_candidates": [
          "solusdt@aggTrade",
          "solusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-xrpusdt",
    "display_name": "XRP/USDT Perpetual",
    "canonical_symbol": "XRPUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_XRP_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "xrpusdt",
        "stream_candidates": [
          "xrpusdt@aggTrade",
          "xrpusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-adausdt",
    "display_name": "ADA/USDT Perpetual",
    "canonical_symbol": "ADAUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_ADA_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "adausdt",
        "stream_candidates": [
          "adausdt@aggTrade",
          "adausdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-avaxusdt",
    "display_name": "AVAX/USDT Perpetual",
    "canonical_symbol": "AVAXUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_AVAX_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "avaxusdt",
        "stream_candidates": [
          "avaxusdt@aggTrade",
          "avaxusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-dogeusdt",
    "display_name": "DOGE/USDT Perpetual",
    "canonical_symbol": "DOGEUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_DOGE_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "dogeusdt",
        "stream_candidates": [
          "dogeusdt@aggTrade",
          "dogeusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-dotusdt",
    "display_name": "DOT/USDT Perpetual",
    "canonical_symbol": "DOTUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_DOT_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "dotusdt",
        "stream_candidates": [
          "dotusdt@aggTrade",
          "dotusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-linkusdt",
    "display_name": "LINK/USDT Perpetual",
    "canonical_symbol": "LINKUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_LINK_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "linkusdt",
        "stream_candidates": [
          "linkusdt@aggTrade",
          "linkusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-maticusdt",
    "display_name": "MATIC/USDT Perpetual",
    "canonical_symbol": "MATICUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_MATIC_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "maticusdt",
        "stream_candidates": [
          "maticusdt@aggTrade",
          "maticusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-ltcusdt",
    "display_name": "LTC/USDT Perpetual",
    "canonical_symbol": "LTCUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_LTC_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "ltcusdt",
        "stream_candidates": [
          "ltcusdt@aggTrade",
          "ltcusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-bchusdt",
    "display_name": "BCH/USDT Perpetual",
    "canonical_symbol": "BCHUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_BCH_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "bchusdt",
        "stream_candidates": [
          "bchusdt@aggTrade",
          "bchusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-atomusdt",
    "display_name": "ATOM/USDT Perpetual",
    "canonical_symbol": "ATOMUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_ATOM_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "atomusdt",
        "stream_candidates": [
          "atomusdt@aggTrade",
          "atomusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-uniusdt",
    "display_name": "UNI/USDT Perpetual",
    "canonical_symbol": "UNIUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_UNI_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "uniusdt",
        "stream_candidates": [
          "uniusdt@aggTrade",
          "uniusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-aptusdt",
    "display_name": "APT/USDT Perpetual",
    "canonical_symbol": "APTUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_APT_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "aptusdt",
        "stream_candidates": [
          "aptusdt@aggTrade",
          "aptusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-tiausdt",
    "display_name": "TIA/USDT Perpetual",
    "canonical_symbol": "TIAUSDT",
    "category": "crypto_derivatives",
    "subcategory": "standard_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_TIA_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "tiausdt",
        "stream_candidates": [
          "tiausdt@aggTrade",
          "tiausdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-btcusd",
    "display_name": "BTC/USD Inverse Perpetual",
    "canonical_symbol": "BTCUSD",
    "category": "crypto_derivatives",
    "subcategory": "inverse_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTSC"
      ],
      "quote_preference": [
        "USD"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTSC"
      ],
      "coinapi_symbol_pattern": "BINANCEFTSC_PERP_BTC_USD"
    },
    "fallback_routes": [
      {
        "provider": "binance_coinm",
        "mode": "public_ws_search",
        "search_terms": [
          "BTC coin-m perpetual",
          "BTCUSD perpetual"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-ethusd",
    "display_name": "ETH/USD Inverse Perpetual",
    "canonical_symbol": "ETHUSD",
    "category": "crypto_derivatives",
    "subcategory": "inverse_perpetuals",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTSC"
      ],
      "quote_preference": [
        "USD"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTSC"
      ],
      "coinapi_symbol_pattern": "BINANCEFTSC_PERP_ETH_USD"
    },
    "fallback_routes": [
      {
        "provider": "binance_coinm",
        "mode": "public_ws_search",
        "search_terms": [
          "ETH coin-m perpetual",
          "ETHUSD perpetual"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-btc-quarterly",
    "display_name": "BTC Coin-Margined Quarterly Futures",
    "canonical_symbol": "BTC-QUARTERLY",
    "category": "crypto_derivatives",
    "subcategory": "coin_margined_futures",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "futures_discovery",
      "exchange_priority": [
        "BINANCEFTSC"
      ],
      "quote_preference": [
        "USD"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTSC"
      ],
      "coinapi_symbol_pattern": "BINANCEFTSC_FTS_BTC_USD_{yymmdd}"
    },
    "fallback_routes": [
      {
        "provider": "binance_coinm",
        "mode": "public_ws_search",
        "search_terms": [
          "BTC quarterly coin-m futures"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-eth-quarterly",
    "display_name": "ETH Coin-Margined Quarterly Futures",
    "canonical_symbol": "ETH-QUARTERLY",
    "category": "crypto_derivatives",
    "subcategory": "coin_margined_futures",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "futures_discovery",
      "exchange_priority": [
        "BINANCEFTSC"
      ],
      "quote_preference": [
        "USD"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTSC"
      ],
      "coinapi_symbol_pattern": "BINANCEFTSC_FTS_ETH_USD_{yymmdd}"
    },
    "fallback_routes": [
      {
        "provider": "binance_coinm",
        "mode": "public_ws_search",
        "search_terms": [
          "ETH quarterly coin-m futures"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-pepeusdt",
    "display_name": "PEPE/USDT Perpetual",
    "canonical_symbol": "PEPEUSDT",
    "category": "crypto_derivatives",
    "subcategory": "narrative_specific_perps",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_PEPE_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "pepeusdt",
        "stream_candidates": [
          "pepeusdt@aggTrade",
          "pepeusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-wifusdt",
    "display_name": "WIF/USDT Perpetual",
    "canonical_symbol": "WIFUSDT",
    "category": "crypto_derivatives",
    "subcategory": "narrative_specific_perps",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_WIF_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "wifusdt",
        "stream_candidates": [
          "wifusdt@aggTrade",
          "wifusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-fetusdt",
    "display_name": "FET/USDT Perpetual",
    "canonical_symbol": "FETUSDT",
    "category": "crypto_derivatives",
    "subcategory": "narrative_specific_perps",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_FET_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "fetusdt",
        "stream_candidates": [
          "fetusdt@aggTrade",
          "fetusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-rndrusdt",
    "display_name": "RNDR/USDT Perpetual",
    "canonical_symbol": "RNDRUSDT",
    "category": "crypto_derivatives",
    "subcategory": "narrative_specific_perps",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_RNDR_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "rndrusdt",
        "stream_candidates": [
          "rndrusdt@aggTrade",
          "rndrusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "crypto-derivative-axsusdt",
    "display_name": "AXS/USDT Perpetual",
    "canonical_symbol": "AXSUSDT",
    "category": "crypto_derivatives",
    "subcategory": "narrative_specific_perps",
    "primary_provider": "coinapi",
    "primary_route": {
      "provider": "coinapi",
      "mode": "perpetual_discovery",
      "exchange_priority": [
        "BINANCEFTS"
      ],
      "quote_preference": [
        "USDT"
      ],
      "coinapi_exchange_ids": [
        "BINANCEFTS"
      ],
      "coinapi_symbol_pattern": "BINANCEFTS_PERP_AXS_USDT"
    },
    "fallback_routes": [
      {
        "provider": "binance_usdm",
        "mode": "public_ws",
        "symbol": "axsusdt",
        "stream_candidates": [
          "axsusdt@aggTrade",
          "axsusdt@markPrice"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "CoinAPI gives you normalized perpetual and futures symbols across exchanges.",
      "For public derivatives fallback, use Binance USD-M or COIN-M feeds directly."
    ]
  },
  {
    "id": "commodity-xau-usd",
    "display_name": "Gold",
    "canonical_symbol": "XAU/USD",
    "category": "commodities",
    "subcategory": "precious_metals",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Gold",
        "XAU/USD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "XAU_USD"
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Gold"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-xag-usd",
    "display_name": "Silver",
    "canonical_symbol": "XAG/USD",
    "category": "commodities",
    "subcategory": "precious_metals",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Silver",
        "XAG/USD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "XAG_USD"
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Silver"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-xpt-usd",
    "display_name": "Platinum",
    "canonical_symbol": "XPT/USD",
    "category": "commodities",
    "subcategory": "precious_metals",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Platinum",
        "XPT/USD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Platinum"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "Coverage is more broker-dependent here; keep Twelve Data or IG as discovery/fallback."
    ]
  },
  {
    "id": "commodity-xpd-usd",
    "display_name": "Palladium",
    "canonical_symbol": "XPD/USD",
    "category": "commodities",
    "subcategory": "precious_metals",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Palladium",
        "XPD/USD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Palladium"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "Coverage is more broker-dependent here; keep Twelve Data or IG as discovery/fallback."
    ]
  },
  {
    "id": "commodity-usoil",
    "display_name": "Crude Oil WTI",
    "canonical_symbol": "USOIL",
    "category": "commodities",
    "subcategory": "energy",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "CL.c.0",
      "search_terms": [
        "WTI crude oil futures",
        "CL"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Crude Oil WTI"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Crude Oil WTI"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-ukoil",
    "display_name": "Brent Oil",
    "canonical_symbol": "UKOIL",
    "category": "commodities",
    "subcategory": "energy",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "BRN.c.0",
      "search_terms": [
        "Brent crude futures",
        "BRN"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Brent Oil"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Brent Oil"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-ngas",
    "display_name": "Natural Gas",
    "canonical_symbol": "NGAS",
    "category": "commodities",
    "subcategory": "energy",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "NG.c.0",
      "search_terms": [
        "Henry Hub natural gas futures",
        "NG"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Natural Gas"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Natural Gas"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-heating-oil",
    "display_name": "Heating Oil",
    "canonical_symbol": "HEATING-OIL",
    "category": "commodities",
    "subcategory": "energy",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "HO.c.0",
      "search_terms": [
        "Heating oil futures",
        "HO"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Heating Oil"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Heating Oil"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-rbob",
    "display_name": "Gasoline (RBOB)",
    "canonical_symbol": "RBOB",
    "category": "commodities",
    "subcategory": "energy",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "RB.c.0",
      "search_terms": [
        "RBOB gasoline futures",
        "RB"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Gasoline (RBOB)"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Gasoline (RBOB)"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-eua",
    "display_name": "Carbon Emissions (EUAs)",
    "canonical_symbol": "EUA",
    "category": "commodities",
    "subcategory": "energy",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": null,
      "search_terms": [
        "EUA carbon futures",
        "EUA emissions futures"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Carbon Emissions (EUAs)"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Carbon Emissions (EUAs)"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "Use search-based symbol discovery; exact contract root varies by venue or product family.",
      "Carbon emissions derivatives are often sourced from EEX or ICE Endex."
    ]
  },
  {
    "id": "commodity-hg",
    "display_name": "Copper",
    "canonical_symbol": "HG",
    "category": "commodities",
    "subcategory": "base_metals",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "HG.c.0",
      "search_terms": [
        "copper futures",
        "HG"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Copper"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Copper"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-aluminium",
    "display_name": "Aluminium",
    "canonical_symbol": "ALUMINIUM",
    "category": "commodities",
    "subcategory": "base_metals",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Aluminium",
        "ALUMINIUM"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Aluminium"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "Coverage is more broker-dependent here; keep Twelve Data or IG as discovery/fallback."
    ]
  },
  {
    "id": "commodity-zinc",
    "display_name": "Zinc",
    "canonical_symbol": "ZINC",
    "category": "commodities",
    "subcategory": "base_metals",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Zinc",
        "ZINC"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Zinc"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "Coverage is more broker-dependent here; keep Twelve Data or IG as discovery/fallback."
    ]
  },
  {
    "id": "commodity-nickel",
    "display_name": "Nickel",
    "canonical_symbol": "NICKEL",
    "category": "commodities",
    "subcategory": "base_metals",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Nickel",
        "NICKEL"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Nickel"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "Coverage is more broker-dependent here; keep Twelve Data or IG as discovery/fallback."
    ]
  },
  {
    "id": "commodity-lead",
    "display_name": "Lead",
    "canonical_symbol": "LEAD",
    "category": "commodities",
    "subcategory": "base_metals",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Lead",
        "LEAD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Lead"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "Coverage is more broker-dependent here; keep Twelve Data or IG as discovery/fallback."
    ]
  },
  {
    "id": "commodity-tin",
    "display_name": "Tin",
    "canonical_symbol": "TIN",
    "category": "commodities",
    "subcategory": "base_metals",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Tin",
        "TIN"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Tin"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "Coverage is more broker-dependent here; keep Twelve Data or IG as discovery/fallback."
    ]
  },
  {
    "id": "commodity-hrc",
    "display_name": "Steel (HRC) Futures",
    "canonical_symbol": "HRC",
    "category": "commodities",
    "subcategory": "base_metals",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "HRC.c.0",
      "search_terms": [
        "hot rolled coil steel futures",
        "HRC"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Steel (HRC) Futures"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Steel (HRC) Futures"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-corn",
    "display_name": "Corn",
    "canonical_symbol": "CORN",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "ZC.c.0",
      "search_terms": [
        "corn futures",
        "ZC"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Corn"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Corn"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-wheat-srw",
    "display_name": "Wheat (Chicago SRW)",
    "canonical_symbol": "WHEAT-SRW",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "ZW.c.0",
      "search_terms": [
        "Chicago SRW wheat futures",
        "ZW"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Wheat (Chicago SRW)"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Wheat (Chicago SRW)"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-wheat-hrw",
    "display_name": "Wheat (Kansas HRW)",
    "canonical_symbol": "WHEAT-HRW",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "KE.c.0",
      "search_terms": [
        "Kansas HRW wheat futures",
        "KE"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Wheat (Kansas HRW)"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Wheat (Kansas HRW)"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-soybeans",
    "display_name": "Soybeans",
    "canonical_symbol": "SOYBEANS",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "ZS.c.0",
      "search_terms": [
        "soybean futures",
        "ZS"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Soybeans"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Soybeans"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-soybean-meal",
    "display_name": "Soybean Meal",
    "canonical_symbol": "SOYBEAN-MEAL",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "ZM.c.0",
      "search_terms": [
        "soybean meal futures",
        "ZM"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Soybean Meal"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Soybean Meal"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-soybean-oil",
    "display_name": "Soybean Oil",
    "canonical_symbol": "SOYBEAN-OIL",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "ZL.c.0",
      "search_terms": [
        "soybean oil futures",
        "ZL"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Soybean Oil"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Soybean Oil"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-oats",
    "display_name": "Oats",
    "canonical_symbol": "OATS",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "ZO.c.0",
      "search_terms": [
        "oats futures",
        "ZO"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Oats"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Oats"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-rough-rice",
    "display_name": "Rough Rice",
    "canonical_symbol": "ROUGH-RICE",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "ZR.c.0",
      "search_terms": [
        "rough rice futures",
        "ZR"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Rough Rice"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Rough Rice"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-cotton-2",
    "display_name": "Cotton (#2)",
    "canonical_symbol": "COTTON-2",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "CT.c.0",
      "search_terms": [
        "cotton no.2 futures",
        "CT"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Cotton (#2)"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Cotton (#2)"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-lumber",
    "display_name": "Lumber",
    "canonical_symbol": "LUMBER",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": null,
      "search_terms": [
        "lumber futures"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Lumber"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Lumber"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "Use search-based symbol discovery; exact contract root varies by venue or product family."
    ]
  },
  {
    "id": "commodity-coffee-arabica",
    "display_name": "Coffee (Arabica)",
    "canonical_symbol": "COFFEE-ARABICA",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "KC.c.0",
      "search_terms": [
        "arabica coffee futures",
        "KC"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Coffee (Arabica)"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Coffee (Arabica)"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-coffee-robusta",
    "display_name": "Coffee (Robusta)",
    "canonical_symbol": "COFFEE-ROBUSTA",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": null,
      "search_terms": [
        "robusta coffee futures",
        "RC"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Coffee (Robusta)"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Coffee (Robusta)"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "Use search-based symbol discovery; exact contract root varies by venue or product family."
    ]
  },
  {
    "id": "commodity-sugar-11",
    "display_name": "Sugar (#11)",
    "canonical_symbol": "SUGAR-11",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "SB.c.0",
      "search_terms": [
        "sugar no.11 futures",
        "SB"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Sugar (#11)"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Sugar (#11)"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-sugar-16",
    "display_name": "Sugar (#16)",
    "canonical_symbol": "SUGAR-16",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": null,
      "search_terms": [
        "sugar no.16 futures"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Sugar (#16)"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Sugar (#16)"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "Use search-based symbol discovery; exact contract root varies by venue or product family."
    ]
  },
  {
    "id": "commodity-cocoa",
    "display_name": "Cocoa",
    "canonical_symbol": "COCOA",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "CC.c.0",
      "search_terms": [
        "cocoa futures",
        "CC"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Cocoa"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Cocoa"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-orange-juice",
    "display_name": "Orange Juice",
    "canonical_symbol": "ORANGE-JUICE",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "OJ.c.0",
      "search_terms": [
        "orange juice futures",
        "OJ"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Orange Juice"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Orange Juice"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-milk-class-iii",
    "display_name": "Milk (Class III)",
    "canonical_symbol": "MILK-CLASS-III",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": null,
      "search_terms": [
        "Class III milk futures"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Milk (Class III)"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Milk (Class III)"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "Use search-based symbol discovery; exact contract root varies by venue or product family."
    ]
  },
  {
    "id": "commodity-live-cattle",
    "display_name": "Live Cattle",
    "canonical_symbol": "LIVE-CATTLE",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "LE.c.0",
      "search_terms": [
        "live cattle futures",
        "LE"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Live Cattle"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Live Cattle"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-feeder-cattle",
    "display_name": "Feeder Cattle",
    "canonical_symbol": "FEEDER-CATTLE",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "GF.c.0",
      "search_terms": [
        "feeder cattle futures",
        "GF"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Feeder Cattle"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Feeder Cattle"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "commodity-lean-hogs",
    "display_name": "Lean Hogs",
    "canonical_symbol": "LEAN-HOGS",
    "category": "commodities",
    "subcategory": "agriculture",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3",
        "IFUS.IMPACT",
        "ICE Europe Commodities",
        "EEX"
      ],
      "continuous_symbol_candidate": "HE.c.0",
      "search_terms": [
        "lean hogs futures",
        "HE"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Lean Hogs"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Lean Hogs"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-eur-usd",
    "display_name": "EUR/USD",
    "canonical_symbol": "EUR/USD",
    "category": "fx",
    "subcategory": "majors",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "EUR/USD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "EUR_USD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "EUR/USD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-jpy",
    "display_name": "USD/JPY",
    "canonical_symbol": "USD/JPY",
    "category": "fx",
    "subcategory": "majors",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/JPY"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_JPY",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/JPY"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-gbp-usd",
    "display_name": "GBP/USD",
    "canonical_symbol": "GBP/USD",
    "category": "fx",
    "subcategory": "majors",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "GBP/USD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "GBP_USD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "GBP/USD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-chf",
    "display_name": "USD/CHF",
    "canonical_symbol": "USD/CHF",
    "category": "fx",
    "subcategory": "majors",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/CHF"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_CHF",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/CHF"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-aud-usd",
    "display_name": "AUD/USD",
    "canonical_symbol": "AUD/USD",
    "category": "fx",
    "subcategory": "majors",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "AUD/USD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "AUD_USD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "AUD/USD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-cad",
    "display_name": "USD/CAD",
    "canonical_symbol": "USD/CAD",
    "category": "fx",
    "subcategory": "majors",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/CAD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_CAD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/CAD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-nzd-usd",
    "display_name": "NZD/USD",
    "canonical_symbol": "NZD/USD",
    "category": "fx",
    "subcategory": "majors",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "NZD/USD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "NZD_USD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "NZD/USD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-eur-gbp",
    "display_name": "EUR/GBP",
    "canonical_symbol": "EUR/GBP",
    "category": "fx",
    "subcategory": "euro_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "EUR/GBP"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "EUR_GBP",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "EUR/GBP"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-eur-aud",
    "display_name": "EUR/AUD",
    "canonical_symbol": "EUR/AUD",
    "category": "fx",
    "subcategory": "euro_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "EUR/AUD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "EUR_AUD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "EUR/AUD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-eur-cad",
    "display_name": "EUR/CAD",
    "canonical_symbol": "EUR/CAD",
    "category": "fx",
    "subcategory": "euro_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "EUR/CAD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "EUR_CAD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "EUR/CAD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-eur-chf",
    "display_name": "EUR/CHF",
    "canonical_symbol": "EUR/CHF",
    "category": "fx",
    "subcategory": "euro_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "EUR/CHF"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "EUR_CHF",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "EUR/CHF"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-eur-jpy",
    "display_name": "EUR/JPY",
    "canonical_symbol": "EUR/JPY",
    "category": "fx",
    "subcategory": "euro_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "EUR/JPY"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "EUR_JPY",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "EUR/JPY"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-eur-nzd",
    "display_name": "EUR/NZD",
    "canonical_symbol": "EUR/NZD",
    "category": "fx",
    "subcategory": "euro_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "EUR/NZD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "EUR_NZD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "EUR/NZD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-gbp-jpy",
    "display_name": "GBP/JPY",
    "canonical_symbol": "GBP/JPY",
    "category": "fx",
    "subcategory": "yen_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "GBP/JPY"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "GBP_JPY",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "GBP/JPY"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-aud-jpy",
    "display_name": "AUD/JPY",
    "canonical_symbol": "AUD/JPY",
    "category": "fx",
    "subcategory": "yen_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "AUD/JPY"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "AUD_JPY",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "AUD/JPY"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-nzd-jpy",
    "display_name": "NZD/JPY",
    "canonical_symbol": "NZD/JPY",
    "category": "fx",
    "subcategory": "yen_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "NZD/JPY"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "NZD_JPY",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "NZD/JPY"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-cad-jpy",
    "display_name": "CAD/JPY",
    "canonical_symbol": "CAD/JPY",
    "category": "fx",
    "subcategory": "yen_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "CAD/JPY"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "CAD_JPY",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "CAD/JPY"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-chf-jpy",
    "display_name": "CHF/JPY",
    "canonical_symbol": "CHF/JPY",
    "category": "fx",
    "subcategory": "yen_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "CHF/JPY"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "CHF_JPY",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "CHF/JPY"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-gbp-aud",
    "display_name": "GBP/AUD",
    "canonical_symbol": "GBP/AUD",
    "category": "fx",
    "subcategory": "pound_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "GBP/AUD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "GBP_AUD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "GBP/AUD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-gbp-cad",
    "display_name": "GBP/CAD",
    "canonical_symbol": "GBP/CAD",
    "category": "fx",
    "subcategory": "pound_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "GBP/CAD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "GBP_CAD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "GBP/CAD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-gbp-chf",
    "display_name": "GBP/CHF",
    "canonical_symbol": "GBP/CHF",
    "category": "fx",
    "subcategory": "pound_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "GBP/CHF"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "GBP_CHF",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "GBP/CHF"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-gbp-nzd",
    "display_name": "GBP/NZD",
    "canonical_symbol": "GBP/NZD",
    "category": "fx",
    "subcategory": "pound_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "GBP/NZD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "GBP_NZD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "GBP/NZD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-aud-cad",
    "display_name": "AUD/CAD",
    "canonical_symbol": "AUD/CAD",
    "category": "fx",
    "subcategory": "aussie_nz_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "AUD/CAD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "AUD_CAD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "AUD/CAD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-aud-chf",
    "display_name": "AUD/CHF",
    "canonical_symbol": "AUD/CHF",
    "category": "fx",
    "subcategory": "aussie_nz_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "AUD/CHF"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "AUD_CHF",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "AUD/CHF"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-aud-nzd",
    "display_name": "AUD/NZD",
    "canonical_symbol": "AUD/NZD",
    "category": "fx",
    "subcategory": "aussie_nz_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "AUD/NZD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "AUD_NZD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "AUD/NZD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-nzd-cad",
    "display_name": "NZD/CAD",
    "canonical_symbol": "NZD/CAD",
    "category": "fx",
    "subcategory": "aussie_nz_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "NZD/CAD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "NZD_CAD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "NZD/CAD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-nzd-chf",
    "display_name": "NZD/CHF",
    "canonical_symbol": "NZD/CHF",
    "category": "fx",
    "subcategory": "aussie_nz_crosses",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "NZD/CHF"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "NZD_CHF",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "NZD/CHF"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-try",
    "display_name": "USD/TRY",
    "canonical_symbol": "USD/TRY",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/TRY"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_TRY",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/TRY"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-zar",
    "display_name": "USD/ZAR",
    "canonical_symbol": "USD/ZAR",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/ZAR"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_ZAR",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/ZAR"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-brl",
    "display_name": "USD/BRL",
    "canonical_symbol": "USD/BRL",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/BRL"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_BRL",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/BRL"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-mxn",
    "display_name": "USD/MXN",
    "canonical_symbol": "USD/MXN",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/MXN"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_MXN",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/MXN"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-inr",
    "display_name": "USD/INR",
    "canonical_symbol": "USD/INR",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/INR"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_INR",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/INR"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-rub",
    "display_name": "USD/RUB",
    "canonical_symbol": "USD/RUB",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/RUB"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_RUB",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/RUB"
        ]
      }
    ],
    "status": "restricted",
    "notes": [
      "Availability may be absent on many retail accounts due to sanctions, venue policy, or regional restrictions."
    ]
  },
  {
    "id": "fx-usd-cnh",
    "display_name": "USD/CNH",
    "canonical_symbol": "USD/CNH",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/CNH"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_CNH",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/CNH"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-sgd",
    "display_name": "USD/SGD",
    "canonical_symbol": "USD/SGD",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/SGD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_SGD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/SGD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-hkd",
    "display_name": "USD/HKD",
    "canonical_symbol": "USD/HKD",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/HKD"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_HKD",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/HKD"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-sek",
    "display_name": "USD/SEK",
    "canonical_symbol": "USD/SEK",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/SEK"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_SEK",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/SEK"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-nok",
    "display_name": "USD/NOK",
    "canonical_symbol": "USD/NOK",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/NOK"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_NOK",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/NOK"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-dkk",
    "display_name": "USD/DKK",
    "canonical_symbol": "USD/DKK",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/DKK"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_DKK",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/DKK"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-pln",
    "display_name": "USD/PLN",
    "canonical_symbol": "USD/PLN",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/PLN"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_PLN",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/PLN"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-huf",
    "display_name": "USD/HUF",
    "canonical_symbol": "USD/HUF",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/HUF"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_HUF",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/HUF"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-czk",
    "display_name": "USD/CZK",
    "canonical_symbol": "USD/CZK",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/CZK"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_CZK",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/CZK"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "fx-usd-thb",
    "display_name": "USD/THB",
    "canonical_symbol": "USD/THB",
    "category": "fx",
    "subcategory": "exotics",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "USD/THB"
      ]
    },
    "fallback_routes": [
      {
        "provider": "oanda",
        "mode": "pricing_stream",
        "instrument": "USD_THB",
        "account_dependent": true
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "USD/THB"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-us-500",
    "display_name": "US 500",
    "canonical_symbol": "US 500",
    "category": "indices",
    "subcategory": "Americas",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "US 500"
      ]
    },
    "fallback_routes": [
      {
        "provider": "databento",
        "mode": "search_proxy",
        "search_terms": [
          "E-mini S&P 500 futures",
          "ES.c.0"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "US 500"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-us-30",
    "display_name": "US 30",
    "canonical_symbol": "US 30",
    "category": "indices",
    "subcategory": "Americas",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "US 30"
      ]
    },
    "fallback_routes": [
      {
        "provider": "databento",
        "mode": "search_proxy",
        "search_terms": [
          "E-mini Dow futures",
          "YM.c.0"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "US 30"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-us-100",
    "display_name": "US 100",
    "canonical_symbol": "US 100",
    "category": "indices",
    "subcategory": "Americas",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "US 100"
      ]
    },
    "fallback_routes": [
      {
        "provider": "databento",
        "mode": "search_proxy",
        "search_terms": [
          "E-mini Nasdaq-100 futures",
          "NQ.c.0"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "US 100"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-us-2000",
    "display_name": "US 2000",
    "canonical_symbol": "US 2000",
    "category": "indices",
    "subcategory": "Americas",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "US 2000"
      ]
    },
    "fallback_routes": [
      {
        "provider": "databento",
        "mode": "search_proxy",
        "search_terms": [
          "E-mini Russell 2000 futures",
          "RTY.c.0"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "US 2000"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-brazil-50",
    "display_name": "Brazil 50",
    "canonical_symbol": "Brazil 50",
    "category": "indices",
    "subcategory": "Americas",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Brazil 50"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Brazil 50"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-canada-60",
    "display_name": "Canada 60",
    "canonical_symbol": "Canada 60",
    "category": "indices",
    "subcategory": "Americas",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Canada 60"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Canada 60"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-mexico-ipc",
    "display_name": "Mexico IPC",
    "canonical_symbol": "Mexico IPC",
    "category": "indices",
    "subcategory": "Americas",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Mexico IPC"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Mexico IPC"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-euro-stoxx-50",
    "display_name": "Euro Stoxx 50",
    "canonical_symbol": "Euro Stoxx 50",
    "category": "indices",
    "subcategory": "Europe",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Euro Stoxx 50"
      ]
    },
    "fallback_routes": [
      {
        "provider": "databento",
        "mode": "search_proxy",
        "search_terms": [
          "EURO STOXX 50 futures"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Euro Stoxx 50"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-stoxx-europe-600",
    "display_name": "Stoxx Europe 600",
    "canonical_symbol": "Stoxx Europe 600",
    "category": "indices",
    "subcategory": "Europe",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Stoxx Europe 600"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Stoxx Europe 600"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-uk-100",
    "display_name": "UK 100",
    "canonical_symbol": "UK 100",
    "category": "indices",
    "subcategory": "Europe",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "UK 100"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "UK 100"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-uk-250",
    "display_name": "UK 250",
    "canonical_symbol": "UK 250",
    "category": "indices",
    "subcategory": "Europe",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "UK 250"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "UK 250"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-germany-40",
    "display_name": "Germany 40",
    "canonical_symbol": "Germany 40",
    "category": "indices",
    "subcategory": "Europe",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Germany 40"
      ]
    },
    "fallback_routes": [
      {
        "provider": "databento",
        "mode": "search_proxy",
        "search_terms": [
          "DAX futures"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Germany 40"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-germany-mid-cap-50",
    "display_name": "Germany Mid Cap 50",
    "canonical_symbol": "Germany Mid Cap 50",
    "category": "indices",
    "subcategory": "Europe",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Germany Mid Cap 50"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Germany Mid Cap 50"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-france-40",
    "display_name": "France 40",
    "canonical_symbol": "France 40",
    "category": "indices",
    "subcategory": "Europe",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "France 40"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "France 40"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-spain-35",
    "display_name": "Spain 35",
    "canonical_symbol": "Spain 35",
    "category": "indices",
    "subcategory": "Europe",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Spain 35"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Spain 35"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-italy-40",
    "display_name": "Italy 40",
    "canonical_symbol": "Italy 40",
    "category": "indices",
    "subcategory": "Europe",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Italy 40"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Italy 40"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-switzerland-20",
    "display_name": "Switzerland 20",
    "canonical_symbol": "Switzerland 20",
    "category": "indices",
    "subcategory": "Europe",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Switzerland 20"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Switzerland 20"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-netherlands-25",
    "display_name": "Netherlands 25",
    "canonical_symbol": "Netherlands 25",
    "category": "indices",
    "subcategory": "Europe",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Netherlands 25"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Netherlands 25"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-sweden-30",
    "display_name": "Sweden 30",
    "canonical_symbol": "Sweden 30",
    "category": "indices",
    "subcategory": "Europe",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Sweden 30"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Sweden 30"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-denmark-25",
    "display_name": "Denmark 25",
    "canonical_symbol": "Denmark 25",
    "category": "indices",
    "subcategory": "Europe",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Denmark 25"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Denmark 25"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-norway-25",
    "display_name": "Norway 25",
    "canonical_symbol": "Norway 25",
    "category": "indices",
    "subcategory": "Europe",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Norway 25"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Norway 25"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-moex-russia-index",
    "display_name": "MOEX Russia Index",
    "canonical_symbol": "MOEX Russia Index",
    "category": "indices",
    "subcategory": "Europe",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "MOEX Russia Index"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "MOEX Russia Index"
        ]
      }
    ],
    "status": "restricted",
    "notes": [
      "Many brokers restrict or halt this market; keep it discovery-based and do not assume live trading access."
    ]
  },
  {
    "id": "index-japan-225",
    "display_name": "Japan 225",
    "canonical_symbol": "Japan 225",
    "category": "indices",
    "subcategory": "Asia-Pacific",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Japan 225"
      ]
    },
    "fallback_routes": [
      {
        "provider": "databento",
        "mode": "search_proxy",
        "search_terms": [
          "Nikkei 225 futures"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Japan 225"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-japan-topix",
    "display_name": "Japan Topix",
    "canonical_symbol": "Japan Topix",
    "category": "indices",
    "subcategory": "Asia-Pacific",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Japan Topix"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Japan Topix"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-china-a50",
    "display_name": "China A50",
    "canonical_symbol": "China A50",
    "category": "indices",
    "subcategory": "Asia-Pacific",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "China A50"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "China A50"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-china-h-shares",
    "display_name": "China H Shares",
    "canonical_symbol": "China H Shares",
    "category": "indices",
    "subcategory": "Asia-Pacific",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "China H Shares"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "China H Shares"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-csi-300",
    "display_name": "CSI 300",
    "canonical_symbol": "CSI 300",
    "category": "indices",
    "subcategory": "Asia-Pacific",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "CSI 300"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "CSI 300"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-hong-kong-40",
    "display_name": "Hong Kong 40",
    "canonical_symbol": "Hong Kong 40",
    "category": "indices",
    "subcategory": "Asia-Pacific",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Hong Kong 40"
      ]
    },
    "fallback_routes": [
      {
        "provider": "databento",
        "mode": "search_proxy",
        "search_terms": [
          "Hang Seng Index futures"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Hong Kong 40"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-australia-200",
    "display_name": "Australia 200",
    "canonical_symbol": "Australia 200",
    "category": "indices",
    "subcategory": "Asia-Pacific",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Australia 200"
      ]
    },
    "fallback_routes": [
      {
        "provider": "databento",
        "mode": "search_proxy",
        "search_terms": [
          "SPI 200 futures"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Australia 200"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-india-50",
    "display_name": "India 50",
    "canonical_symbol": "India 50",
    "category": "indices",
    "subcategory": "Asia-Pacific",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "India 50"
      ]
    },
    "fallback_routes": [
      {
        "provider": "databento",
        "mode": "search_proxy",
        "search_terms": [
          "Nifty 50 futures"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "India 50"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-india-sensex",
    "display_name": "India Sensex",
    "canonical_symbol": "India Sensex",
    "category": "indices",
    "subcategory": "Asia-Pacific",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "India Sensex"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "India Sensex"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-korea-200",
    "display_name": "Korea 200",
    "canonical_symbol": "Korea 200",
    "category": "indices",
    "subcategory": "Asia-Pacific",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Korea 200"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Korea 200"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-taiwan-weighted",
    "display_name": "Taiwan Weighted",
    "canonical_symbol": "Taiwan Weighted",
    "category": "indices",
    "subcategory": "Asia-Pacific",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Taiwan Weighted"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Taiwan Weighted"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "index-singapore-msci",
    "display_name": "Singapore MSCI",
    "canonical_symbol": "Singapore MSCI",
    "category": "indices",
    "subcategory": "Asia-Pacific",
    "primary_provider": "ig",
    "primary_route": {
      "provider": "ig",
      "mode": "market_search",
      "search_terms": [
        "Singapore MSCI"
      ]
    },
    "fallback_routes": [
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Singapore MSCI"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "rate-2-year-t-note",
    "display_name": "2-Year T-Note",
    "canonical_symbol": "2-Year T-Note",
    "category": "rates_futures",
    "subcategory": "fixed_income",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3"
      ],
      "continuous_symbol_candidate": "ZT.c.0",
      "search_terms": [
        "2-Year T-Note futures",
        "ZT"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "2-Year T-Note"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "2-Year T-Note"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "rate-5-year-t-note",
    "display_name": "5-Year T-Note",
    "canonical_symbol": "5-Year T-Note",
    "category": "rates_futures",
    "subcategory": "fixed_income",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3"
      ],
      "continuous_symbol_candidate": "ZF.c.0",
      "search_terms": [
        "5-Year T-Note futures",
        "ZF"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "5-Year T-Note"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "5-Year T-Note"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "rate-10-year-t-note",
    "display_name": "10-Year T-Note",
    "canonical_symbol": "10-Year T-Note",
    "category": "rates_futures",
    "subcategory": "fixed_income",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3"
      ],
      "continuous_symbol_candidate": "ZN.c.0",
      "search_terms": [
        "10-Year T-Note futures",
        "ZN"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "10-Year T-Note"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "10-Year T-Note"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "rate-30-year-t-bond",
    "display_name": "30-Year T-Bond",
    "canonical_symbol": "30-Year T-Bond",
    "category": "rates_futures",
    "subcategory": "fixed_income",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3"
      ],
      "continuous_symbol_candidate": "ZB.c.0",
      "search_terms": [
        "30-Year U.S. Treasury Bond futures",
        "ZB"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "30-Year T-Bond"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "30-Year T-Bond"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "rate-ultra-t-bond",
    "display_name": "Ultra T-Bond",
    "canonical_symbol": "Ultra T-Bond",
    "category": "rates_futures",
    "subcategory": "fixed_income",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "GLBX.MDP3"
      ],
      "continuous_symbol_candidate": "UB.c.0",
      "search_terms": [
        "Ultra U.S. Treasury Bond futures",
        "UB"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Ultra T-Bond"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Ultra T-Bond"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "rate-euro-bund",
    "display_name": "Euro Bund",
    "canonical_symbol": "Euro Bund",
    "category": "rates_futures",
    "subcategory": "fixed_income",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "XEUR.EOBI"
      ],
      "continuous_symbol_candidate": null,
      "search_terms": [
        "Euro-Bund futures"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Euro Bund"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Euro Bund"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "rate-euro-bobl",
    "display_name": "Euro BOBL",
    "canonical_symbol": "Euro BOBL",
    "category": "rates_futures",
    "subcategory": "fixed_income",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "XEUR.EOBI"
      ],
      "continuous_symbol_candidate": null,
      "search_terms": [
        "Euro-Bobl futures"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Euro BOBL"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Euro BOBL"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "rate-euro-schatz",
    "display_name": "Euro Schatz",
    "canonical_symbol": "Euro Schatz",
    "category": "rates_futures",
    "subcategory": "fixed_income",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "XEUR.EOBI"
      ],
      "continuous_symbol_candidate": null,
      "search_terms": [
        "Euro-Schatz futures"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Euro Schatz"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Euro Schatz"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "rate-uk-gilt",
    "display_name": "UK Gilt",
    "canonical_symbol": "UK Gilt",
    "category": "rates_futures",
    "subcategory": "fixed_income",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "ICE Europe Financials"
      ],
      "continuous_symbol_candidate": null,
      "search_terms": [
        "Long Gilt futures"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "UK Gilt"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "UK Gilt"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "rate-italian-btp",
    "display_name": "Italian BTP",
    "canonical_symbol": "Italian BTP",
    "category": "rates_futures",
    "subcategory": "fixed_income",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "XEUR.EOBI"
      ],
      "continuous_symbol_candidate": null,
      "search_terms": [
        "Euro-BTP futures"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Italian BTP"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Italian BTP"
        ]
      }
    ],
    "status": "enabled",
    "notes": []
  },
  {
    "id": "rate-australian-10-year-bond",
    "display_name": "Australian 10-Year Bond",
    "canonical_symbol": "Australian 10-Year Bond",
    "category": "rates_futures",
    "subcategory": "fixed_income",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "ASX/TwelveData/IG proxy"
      ],
      "continuous_symbol_candidate": null,
      "search_terms": [
        "Australian 10-Year Bond futures"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Australian 10-Year Bond"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Australian 10-Year Bond"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "Chosen core stack does not guarantee a direct exchange feed here; keep a prototype/proxy path via IG or Twelve Data."
    ]
  },
  {
    "id": "rate-japanese-10-year-bond-jgb",
    "display_name": "Japanese 10-Year Bond (JGB)",
    "canonical_symbol": "Japanese 10-Year Bond (JGB)",
    "category": "rates_futures",
    "subcategory": "fixed_income",
    "primary_provider": "databento",
    "primary_route": {
      "provider": "databento",
      "mode": "continuous_or_search",
      "dataset_candidates": [
        "OSE/TwelveData/IG proxy"
      ],
      "continuous_symbol_candidate": null,
      "search_terms": [
        "Japanese Government Bond futures",
        "JGB futures"
      ]
    },
    "fallback_routes": [
      {
        "provider": "ig",
        "mode": "market_search",
        "search_terms": [
          "Japanese 10-Year Bond (JGB)"
        ]
      },
      {
        "provider": "twelve_data",
        "mode": "symbol_search",
        "search_terms": [
          "Japanese 10-Year Bond (JGB)"
        ]
      }
    ],
    "status": "enabled",
    "notes": [
      "Chosen core stack does not guarantee a direct exchange feed here; keep a prototype/proxy path via IG or Twelve Data."
    ]
  }
];
