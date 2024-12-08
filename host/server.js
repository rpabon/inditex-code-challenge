const liveServer = require('live-server');
const path = require('path');
const historyApiFallback = require('connect-history-api-fallback');

const params = {
  port: 3000,
  root: path.resolve(__dirname, 'dist'),
  open: false,
  file: 'index.html',
  wait: 1000,
  logLevel: 2,
  middleware: [historyApiFallback()],
};

liveServer.start(params);
