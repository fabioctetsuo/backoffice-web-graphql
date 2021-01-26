const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeResolvers } = require('@graphql-tools/merge');

const resolversArray = loadFilesSync(path.resolve('graphql/resolvers'), {
  ignoreIndex: true,
});

module.exports = mergeResolvers(resolversArray);
