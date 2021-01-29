module.exports = {
  Query: {
    service: (_, { id }, { dataSources }) => {
      return dataSources.services.getResource(id);
    },
    services: (_, params, { dataSources }) => {
      return dataSources.services.getAllResourcePageable(params);
    },
  },
  Mutation: {
    updateService: (_, { id, service }, { dataSources }) => {
      return dataSources.services.updateResource(id, service);
    },
  },
};
