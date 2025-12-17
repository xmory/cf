export default {
  fetch(req) {
    return new Response("ok:"+req.url);
  }
}
