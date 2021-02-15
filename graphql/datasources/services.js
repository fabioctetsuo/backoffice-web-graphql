const BaseRestDataSource = require('./config/baseRestDataSource');
const endpoints = require('./config/endpoints');

class Services extends BaseRestDataSource {
  constructor() {
    super();
    this.baseURL = endpoints().HEALTH_HUB_SERVICE_API;
    this.resourceName = 'health-hub-services';
  }
}

module.exports = Services;
