const { getItemById } = require('../utils');

module.exports = function (server, router) {
  server.get('/users/:id', (req, res) => {
    const userData = getItemById(router.db.get('users'), req.params.id);
    const user = userData.value();
    const payload = { ...user, active: true };
    res.jsonp(payload);
  });
};
