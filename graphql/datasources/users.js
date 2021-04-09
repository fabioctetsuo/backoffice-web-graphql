const BaseRestDataSource = require('./config/baseRestDataSource');
const endpoints = require('./config/endpoints');

class UserDataSource extends BaseRestDataSource {
  constructor() {
    super();
    this.baseURL = endpoints().USER_API;
    this.resourceName = 'users';
  }
  updateResource(id, item) {
    return this.patch(`${this.resourceName}/${id}`, item);
  }
  updateUserRoles(id, roles) {
    return this.put(`${this.resourceName}/${id}/roles`, roles);
  }
}

module.exports = UserDataSource;
