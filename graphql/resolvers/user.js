module.exports = {
  Query: {
    getUserById: (_, { id }, { dataSources }) => {
      return dataSources.users.getResource(id);
    },
    getAllUsers: (_, params, { dataSources }) => {
      return dataSources.users.getAllResourcePageable(params);
    },
  },
  Mutation: {
    createUser: (_, { user }, { dataSources }) => {
      return dataSources.users.createResource({ ...user });
    },
    updateUser: async (_, { id, user }, { dataSources }) => {
      const { roles, ...userInfo } = user;
      const userPromise = dataSources.users.updateResource(id, { ...userInfo });
      const rolesPromise = dataSources.users.updateUserRoles(id, { roles });

      // eslint-disable-next-line no-unused-vars
      const [rolesResponse, userResponse] = await Promise.all([
        rolesPromise,
        userPromise,
      ]);

      return userResponse;
    },
  },
};
