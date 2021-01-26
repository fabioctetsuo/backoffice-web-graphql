module.exports = {
  Query: {
    getUserById: (_, { id }, { dataSources }) => {
      return dataSources.users.getResource(id);
    },
  },
};
