export { MarketHub } from "./hub";

export default {
  async fetch(request: Request, env: any) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return new Response("OK");
    }

    if (url.pathname === "/ws") {
      const id = env.MARKET_HUB.idFromName("global");
      const stub = env.MARKET_HUB.get(id);
      return stub.fetch(request);
    }

    return new Response("Not found", { status: 404 });
  }
};