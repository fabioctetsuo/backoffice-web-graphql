const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '..'),
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  modulePathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '..', 'src'),
    path.join(__dirname, '..', 'graphql'),
  ],
  moduleNameMapper: {
    '\\.module\\.css': 'identity-obj-proxy',
    '\\.css$': require.resolve('./style-mock.js'),
  },
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '.*': 'babel-jest',
  },
};
