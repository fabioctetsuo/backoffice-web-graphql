const BaseRestDataSource = require('./config/baseRestDataSource');
const endpoints = require('./config/endpoints');

class UserDataSource extends BaseRestDataSource {
  constructor() {
    super();
    this.baseURL = endpoints().userApi;
    this.resourceName = 'users';
  }
}

module.exports = UserDataSource;
