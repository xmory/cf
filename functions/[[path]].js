export default {
  async fetch(request, env, ctx) {
    return new Response("ok:" + request.url);
  }
}
