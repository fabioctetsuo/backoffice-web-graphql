const { ApolloServer } = require('apollo-server-express');
const { createTestClient } = require('apollo-server-testing');
const typeDefs = require('../types');
const resolvers = require('../resolvers');

const createTestServer = dataSources => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    mockEntireScheme: false,
    context: () => ({
      token: 'token',
    }),
  });

  return createTestClient(server);
};

module.exports = createTestServer;
