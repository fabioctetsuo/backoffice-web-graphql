module.exports = {
  Query: {
    seller: (_, { id }, { dataSources }) => {
      return dataSources.sellers.getResource(id);
    },
    sellers: (_, params, { dataSources }) => {
      return dataSources.sellers.getAllResourcePageable(params);
    },
  },
  Mutation: {
    createSeller: (_, { seller }, { dataSources }) => {
      return dataSources.sellers.createResource({ ...seller });
    },
    updateSeller: (_, { id, seller }, { dataSources }) => {
      return dataSources.sellers.updateResource(id, { ...seller });
    },
  },
};
