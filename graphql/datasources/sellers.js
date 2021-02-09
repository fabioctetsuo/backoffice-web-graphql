const BaseRestDataSource = require('./config/baseRestDataSource');
const endpoints = require('./config/endpoints');

class Services extends BaseRestDataSource {
  constructor() {
    super();
    this.baseURL = endpoints().SELLER_API;
    this.resourceName = 'sellers';
  }
}

module.exports = Services;
