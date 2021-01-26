const jsonServer = require('json-server');
const customRoutes = require('./customRoutes');
const initialData = require('./initialData');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(initialData());

try {
  server.use(middlewares);
  server.use(jsonServer.bodyParser);
  customRoutes(server, router);

  server.use((req, res, next) => {
    if (req.method === 'POST') {
      const date = new Date();
      const name = 'Arthur Dent';

      req.body.createdAt = date;
      req.body.lastModifiedAt = date;
      req.body.createdBy = name;
      req.body.lastModifiedBy = name;
    }
    // Continue to JSON Server router
    next();
  });

  // Use default router
  server.use(router);
  server.listen(3001, () => {
    console.log('JSON Server is running');
  });
} catch (e) {
  console.log('A wild error appears: ', e);
}
