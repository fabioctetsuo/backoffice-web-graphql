module.exports = {
  Query: {
    async service(_, { id }, { dataSources }) {
      const response = await dataSources.services.getResource(id);
      if (response) {
        const formattedProcedureFields = response.procedureFields.map(field => {
          if (field.values) {
            const formattedValues = field.values.map(value => {
              if (value.data) {
                return {
                  ...value,
                  data: Object.entries(value.data).map(([label, value]) => ({
                    label,
                    value,
                  })),
                };
              }
              return {
                ...value,
                data: [],
              };
            });
            return {
              ...field,
              values: formattedValues,
            };
          }
          return {
            ...field,
            values: [],
          };
        });
        return {
          ...response,
          price: response.price ? `${response.price}`.replace('.', ',') : null,
          procedureFields: formattedProcedureFields,
        };
      }

      return {};
    },
    services: (_, params, { dataSources }) => {
      return dataSources.services.getAllResourcePageable(params);
    },
  },
  Mutation: {
    updateService: (_, { id, service }, { dataSources }) => {
      return dataSources.services.updateResource(id, service);
    },
    createService: (_, { service }, { dataSources }) => {
      return dataSources.services.createResource(service);
    },
  },
};
