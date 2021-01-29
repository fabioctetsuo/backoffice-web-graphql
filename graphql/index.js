const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./types');
const resolvers = require('./resolvers');
const UsersAPI = require('./datasources/users');
const ServicesAPI = require('./datasources/services');

module.exports = (app, path) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      users: new UsersAPI(),
      services: new ServicesAPI(),
    }),
    context: ({ req }) => {
      const token = req.headers.authorization || '';
      return { token };
    },
  });

  server.applyMiddleware({ app, path });
};
