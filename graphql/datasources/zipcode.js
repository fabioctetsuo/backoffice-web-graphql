const { RESTDataSource } = require('apollo-datasource-rest');
const endpoints = require('./config/endpoints');

class ZipCode extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = endpoints().ZIPCODE_API;
    this.resourceName = 'zipcodes';
  }

  async getResource(zipcode) {
    return this.get(`${this.resourceName}/${zipcode}`);
  }
}

module.exports = ZipCode;
