import nock from 'nock';

import createTestServer from '../utils/test-helper';
import ZipcodeAPI from '../datasources/zipcode';
import { GetAddressByZipcodeDocument } from 'generated-types';

const zipcodeAPI = new ZipcodeAPI();

zipcodeAPI.post = jest.fn();
zipcodeAPI.put = jest.fn();
zipcodeAPI.delete = jest.fn();
zipcodeAPI.patch = jest.fn();

describe('Graphql Integration - Zipcode', () => {
  it('Get address infos by zipcode', async () => {
    const response = {
      zipcode: '04850230',
      street: 'Rua Doutor Nuno Guerner de Almeida',
      neighborhood: 'Parque Cocaia',
      city: 'São Paulo',
      state: 'SP',
    };

    nock('http://localhost:3001').get('/zipcodes/04850230').reply(200, response);

    const { query } = createTestServer(() => ({ zipcode: zipcodeAPI }));

    const responseRequest = await query({
      query: GetAddressByZipcodeDocument,
      variables: {
        zipcode: '04850230',
      },
    });

    expect(responseRequest.data.getAddressByZipcode).toEqual(response);
  });
});
