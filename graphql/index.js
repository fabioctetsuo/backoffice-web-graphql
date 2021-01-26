const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./types');
const resolvers = require('./resolvers');
const UsersAPI = require('./datasources/users');

module.exports = (app, path) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      users: new UsersAPI(),
    }),
  });

  server.applyMiddleware({ app, path });
};
