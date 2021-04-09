module.exports = {
  ...require('./jest.common'),
  displayName: 'client',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest-setup.js', '@testing-library/jest-dom/extend-expect'],
  testPathIgnorePatterns: ['/__server_tests__/', '<rootDir>/graphql/'],
};
