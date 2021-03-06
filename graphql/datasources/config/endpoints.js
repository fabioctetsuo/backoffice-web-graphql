const MOCK_ENDPOINT = 'http://localhost:3001/';

const isTest = process.env.NODE_ENV === 'test';

module.exports = () => ({
  HEALTH_HUB_SERVICE_API: process.env.HEALTH_HUB_SERVICE_API || MOCK_ENDPOINT,
  SERVICE_SCHEDULE_API: process.env.SERVICE_SCHEDULE_API || MOCK_ENDPOINT,
  SELLER_API: process.env.SELLER_API || MOCK_ENDPOINT,
  ZIPCODE_API: isTest ? MOCK_ENDPOINT : 'https://api.pagar.me/1/',
  USER_API: process.env.USER_API || MOCK_ENDPOINT,
});
