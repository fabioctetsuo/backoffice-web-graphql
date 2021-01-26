const requireDir = require('require-dir');

module.exports = (server, route) =>
  requireDir('./', {
    mapValue(fn) {
      return fn(server, route);
    },
  });
