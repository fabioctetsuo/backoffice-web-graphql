const BaseRestDataSource = require('./config/baseRestDataSource');
const endpoints = require('./config/endpoints');

class ProviderSchedules extends BaseRestDataSource {
  constructor() {
    super();
    this.baseURL = endpoints().SERVICE_SCHEDULE_API;
    this.resourceName = 'provider-schedules';
  }
}

module.exports = ProviderSchedules;
