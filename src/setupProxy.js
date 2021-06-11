const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: 'http://192.168.10.158:8080',
      changeOrigin: true,
    })
  );
};