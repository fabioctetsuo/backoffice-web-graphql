import nock from 'nock';
import {
  seller as GET_SELLER,
  sellers as GET_SELLERS,
  createSeller as CREATE_SELLER,
  updateSeller as UPDATE_SELLER,
} from 'gqls/sellers.gql';
import createTestServer from '../utils/test-helper';
import SellersAPI from '../datasources/sellers';

const sellersAPI = new SellersAPI();

sellersAPI.patch = jest.fn();

const originalSeller = {
  services: [
    {
      info: 'Diretamente na farmácia',
      name: 'Febre Amarela',
      id: '5fc9607cdea2302e164d7221',
      type: 'VACCINE',
      price: null,
    },
    {
      price: 55,
      name: 'Chikungunya',
      id: '5fc96084dea2302e164d7232',
      type: 'RAPID_TEST',
      info: null,
    },
    {
      price: 5,
      name: 'Pressão Arterial',
      id: '5fc96081dea2302e164d722b',
      type: 'PHARMA_SERVICE',
      info: null,
    },
  ],
  documentNumber: '61585865064800',
  tradingName: 'Raia',
  phoneNumber: '1129504369',
  mobileNumber: '11997906330',
  externalCode: '153',
  name: 'Vila Guilherme A',
  id: '1',
  address: {
    street: 'Avenida Luiz Dumont Villares',
    neighborhood: 'Vila Guilherme',
    zipCode: '02085000',
    city: 'São Paulo',
    country: 'Brasil',
    number: 522,
    state: 'SP',
  },
};

describe('Graphql Integration - Sellers', () => {
  it('Get seller', async () => {
    nock('http://localhost:3001').get('/sellers/1').reply(200, originalSeller);

    const { query } = createTestServer(() => ({ sellers: sellersAPI }));

    const responseRequest = await query({
      query: GET_SELLER,
      variables: {
        id: '1',
      },
    });

    expect(responseRequest.data.seller).toEqual(originalSeller);
  });

  it('Get sellers', async () => {
    const response = {
      content: [originalSeller],
      pageable: {
        pageNumber: 1,
      },
      totalElements: 1,
      totalPages: 1,
    };

    const params = {
      sort: 'name,asc',
      page: 1,
      size: 10,
    };

    nock('http://localhost:3001').get('/sellers').query(params).reply(200, response);

    const { query } = createTestServer(() => ({ sellers: sellersAPI }));

    const responseRequest = await query({
      query: GET_SELLERS,
      variables: params,
    });
    expect(responseRequest.data.sellers).toEqual({
      page: 1,
      totalPages: 1,
      totalElements: 1,
      content: [originalSeller],
    });
  });

  it('Get sellers with sort params', async () => {
    const response = {
      content: [originalSeller],
      pageable: {
        pageNumber: 1,
      },
      totalElements: 1,
      totalPages: 1,
    };

    sellersAPI.get = jest.fn();

    const params = {
      sort: 'name,asc',
      page: 1,
      size: 10,
    };

    nock('http://localhost:3001').get('/sellers').query(params).reply(200, response);

    const { query } = createTestServer(() => ({ sellers: sellersAPI }));

    await query({
      query: GET_SELLERS,
      variables: params,
    });

    expect(sellersAPI.get).toHaveBeenCalledWith('sellers', params);
  });

  it('Get sellers with name and documentNumber filters', async () => {
    const response = {
      content: [originalSeller],
      pageable: {
        pageNumber: 1,
      },
      totalElements: 1,
      totalPages: 1,
    };

    sellersAPI.get = jest.fn();

    const params = {
      name: 'Paulista A',
      documentNumber: '61585865216839',
      page: 1,
      size: 10,
    };

    nock('http://localhost:3001').get('/sellers').query(params).reply(200, response);

    const { query } = createTestServer(() => ({ sellers: sellersAPI }));

    await query({
      query: GET_SELLERS,
      variables: params,
    });

    expect(sellersAPI.get).toHaveBeenCalledWith('sellers', params);
  });

  it('Create seller', async () => {
    const newSeller = {
      ...originalSeller,
      name: 'New seller',
    };

    const graphqlResponseSellerCreate = {
      ...originalSeller,
      name: 'New seller',
    };

    delete graphqlResponseSellerCreate.id;
    nock('http://localhost:3001').post('/sellers').reply(200, newSeller);

    const { mutate } = createTestServer(() => ({ sellers: sellersAPI }));

    const responseRequest = await mutate({
      query: CREATE_SELLER,
      variables: {
        seller: graphqlResponseSellerCreate,
      },
    });

    expect(responseRequest.data.createSeller).toEqual({
      id: '1',
      ...graphqlResponseSellerCreate,
    });
  });

  it('Update seller', async () => {
    const { id, ...graphqlResponseSellerUpdate } = {
      ...originalSeller,
      name: 'Updated seller',
    };
    const responseUpdate = { ...graphqlResponseSellerUpdate, id };

    nock('http://localhost:3001').put('/sellers/1').reply(200, responseUpdate);

    const { mutate } = createTestServer(() => ({ sellers: sellersAPI }));

    const responseRequest = await mutate({
      query: UPDATE_SELLER,
      variables: {
        id: '1',
        seller: graphqlResponseSellerUpdate,
      },
    });

    expect(responseRequest.data.updateSeller).toEqual({
      id: '1',
      ...graphqlResponseSellerUpdate,
    });
  });
});
