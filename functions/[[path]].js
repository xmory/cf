export async function onRequest(context) {
  // 获取用户请求的完整 URL
  const url = new URL(context.request.url);

  // 这里的逻辑会接管所有流量
  return new Response(`
    你好！我是那个唯一的 JS 文件。
    
    你当前访问的路径是: ${url.pathname}
    你所在的城市是: ${context.request.cf.city}
    请求方法是: ${context.request.method}
    
    我接管了所有流量！
  `);
}
