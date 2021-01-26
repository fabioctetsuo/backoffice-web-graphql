module.exports = {
  ...require('./.jest/jest.common'),
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.(js|ts|tsx)',
    'graphql/**/*.(js|ts|tsx)',
    '!graphql/**/index.js',
    '!graphql/__tests__/*.js',
    '!src/utils/testing.tsx',
    '!src/**/**.test.(tsx|ts)',
  ],
  projects: ['./.jest/jest.client.js', './.jest/jest.server.js'],
};
