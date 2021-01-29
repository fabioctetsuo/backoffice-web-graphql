const { RESTDataSource } = require('apollo-datasource-rest');
const { reducerPageableApi, getQueryParams } = require('./utils');

class CustomRestDataSource extends RESTDataSource {
  constructor() {
    super();
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
    request.headers.set('Content-Type', 'application/json');
  }

  async getResource(id) {
    return this.get(`${this.resourceName}/${id}`);
  }

  async getAllResourcePageable(params) {
    const req = await this.get(this.resourceName, getQueryParams(params));
    return reducerPageableApi(req);
  }

  async createResource(item) {
    return this.post(this.resourceName, item);
  }

  async createActiveResource(item) {
    return this.post(this.resourceName, { ...item, isActive: true });
  }

  async updateResource(id, item) {
    return this.put(`${this.resourceName}/${id}`, item);
  }

  async deleteResource(id) {
    return this.delete(`${this.resourceName}/${id}`);
  }
}

module.exports = CustomRestDataSource;
