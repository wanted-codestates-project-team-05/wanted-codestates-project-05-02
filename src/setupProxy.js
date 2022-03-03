const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/users', {
      target: 'https://api.nexon.co.kr/kart/v1.0',
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/matches', {
      target: 'https://api.nexon.co.kr/kart/v1.0',
      changeOrigin: true,
    })
  );
};
