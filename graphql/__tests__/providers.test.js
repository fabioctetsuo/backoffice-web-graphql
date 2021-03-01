import nock from 'nock';
import {
  provider as GET_PROVIDER,
  createProvider as CREATE_PROVIDER,
  updateProvider as UPDATE_PROVIDER,
} from 'gqls/providers.gql';
import createTestServer from '../utils/test-helper';
import ProvidersAPI from '../datasources/provider-schedules';

const providersAPI = new ProvidersAPI();

providersAPI.patch = jest.fn();

const originalProvider = {
  startHour: '07:00-03:00',
  endHour: '23:00-03:00',
  startIntervalHour: '10:00-03:00',
  endIntervalHour: '19:00-03:00',
  slots: 10,
  interval: 30,
  id: '1',
};

describe('Graphql Integration - Sellers', () => {
  it('Get provider', async () => {
    nock('http://localhost:3001')
      .get('/provider-schedules/1')
      .reply(200, originalProvider);

    const { query } = createTestServer(() => ({ providers: providersAPI }));

    const responseRequest = await query({
      query: GET_PROVIDER,
      variables: {
        id: '1',
      },
    });

    expect(responseRequest.data.provider).toEqual(originalProvider);
  });

  it('Create seller', async () => {
    const newProvider = {
      ...originalProvider,
      startHour: '08:00-03:00',
    };

    const graphqlResponseProviderCreate = {
      ...originalProvider,
      startHour: '08:00-03:00',
      providerId: '1',
    };

    delete graphqlResponseProviderCreate.id;
    nock('http://localhost:3001').post('/provider-schedules').reply(200, newProvider);

    const { mutate } = createTestServer(() => ({ providers: providersAPI }));

    const responseRequest = await mutate({
      query: CREATE_PROVIDER,
      variables: {
        provider: graphqlResponseProviderCreate,
      },
    });

    expect(responseRequest.data.createProvider).toEqual({
      id: '1',
      ...newProvider,
    });
  });

  it('Update provider', async () => {
    const { id, ...graphqlResponseProviderUpdate } = {
      ...originalProvider,
      startHour: '10:00-03:00',
    };
    const responseUpdate = {
      ...graphqlResponseProviderUpdate,
      id,
      startHour: '10:00-03:00',
    };

    nock('http://localhost:3001').put('/provider-schedules/1').reply(200, responseUpdate);

    const { mutate } = createTestServer(() => ({ providers: providersAPI }));

    const responseRequest = await mutate({
      query: UPDATE_PROVIDER,
      variables: {
        id: '1',
        provider: graphqlResponseProviderUpdate,
      },
    });

    expect(responseRequest.data.updateProvider).toEqual({
      id: '1',
      ...graphqlResponseProviderUpdate,
    });
  });
});
