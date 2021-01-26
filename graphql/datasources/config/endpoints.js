const MOCK_ENDPOINT = 'http://localhost:3001/';

module.exports = () => ({
  userApi: process.env.USER_API || MOCK_ENDPOINT,
});
