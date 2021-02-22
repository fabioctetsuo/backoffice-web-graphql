module.exports = {
  Query: {
    getAddressByZipcode: (_, { zipcode }, { dataSources }) => {
      return dataSources.zipcode.getResource(zipcode);
    },
  },
};
