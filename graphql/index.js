const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./types');
const resolvers = require('./resolvers');
const UsersAPI = require('./datasources/users');
const ServicesAPI = require('./datasources/services');
const SellersAPI = require('./datasources/sellers');
const ZipcodeAPI = require('./datasources/zipcode');

module.exports = (app, path) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      users: new UsersAPI(),
      services: new ServicesAPI(),
      sellers: new SellersAPI(),
      zipcode: new ZipcodeAPI(),
    }),
    context: ({ req }) => {
      const token = req.headers.authorization || '';
      return { token };
    },
  });

  server.applyMiddleware({ app, path });
};
