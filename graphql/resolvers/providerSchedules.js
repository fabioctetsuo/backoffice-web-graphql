module.exports = {
  Query: {
    provider: (_, { id }, { dataSources }) => {
      return dataSources.providers.getResource(id);
    },
  },
  Mutation: {
    createProvider: (_, { provider }, { dataSources }) => {
      return dataSources.providers.createResource({ ...provider });
    },
    updateProvider: (_, { id, provider }, { dataSources }) => {
      return dataSources.providers.updateResource(id, { ...provider });
    },
  },
};
