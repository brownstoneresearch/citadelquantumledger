export class MarketHub {
  state: DurableObjectState;
  clients: Set<WebSocket> = new Set();
  coinSocket: WebSocket | null = null;

  constructor(state: DurableObjectState, env: any) {
    this.state = state;

    // Open CoinAPI WebSocket once
    if (!this.coinSocket) {
      this.connectCoinAPI(env);
    }
  }

  async connectCoinAPI(env: any) {
    const url = "wss://ws.coinapi.io/v1/";
    this.coinSocket = new WebSocket(url);

    this.coinSocket.onopen = () => {
      this.coinSocket?.send(
        JSON.stringify({
          type: "hello",
          apikey: env.COINAPI_KEY,
          heartbeat: true,
          subscribe_data_type: ["trade"],
          subscribe_filter_symbol_id: [
            "BINANCE_SPOT_BTC_USDT",
            "BINANCE_SPOT_ETH_USDT"
          ]
        })
      );
    };

    this.coinSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.broadcast({
        asset: data.symbol_id,
        price: data.price,
        time: data.time_exchange
      });
    };

    this.coinSocket.onerror = () => {
      this.coinSocket = null;
    };
  }

  async fetch(request: Request) {
    if (request.headers.get("Upgrade") !== "websocket") {
      return new Response("Expected WebSocket", { status: 400 });
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);

    server.accept();
    this.clients.add(server);

    server.addEventListener("close", () => {
      this.clients.delete(server);
    });

    return new Response(null, { status: 101, webSocket: client });
  }

  broadcast(data: any) {
    for (const client of this.clients) {
      client.send(JSON.stringify(data));
    }
  }
}