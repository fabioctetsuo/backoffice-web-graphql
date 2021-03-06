module.exports = {
  ...require('./jest.common'),
  displayName: 'server',
  testEnvironment: 'jest-environment-node',
  testMatch: [
    '**/__server_tests__/**/*.test.+(js|jsx|ts|tsx)',
    '**/graphql/__tests__/*.test.+(js|jsx|ts|tsx)',
  ],
};
