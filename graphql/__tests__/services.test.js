import nock from 'nock';
import {
  service as GET_SERVICE,
  services as GET_SERVICES,
  updateService as UPDATE_SERVICE,
} from 'gqls/services.gql';
import createTestServer from '../utils/test-helper';
import ServicesAPI from '../datasources/services';

const servicesAPI = new ServicesAPI();

servicesAPI.post = jest.fn();
servicesAPI.delete = jest.fn();
servicesAPI.patch = jest.fn();

const guideline = {
  howTo: '#### Olá pessoas',
  attentionPoints: 'Tudo bem?',
};

const originalService = {
  id: '42',
  type: 'VACCINE',
  name: 'Vacina Gripe',
  price: 150.59,
  info: 'Aplicável em pessoas fora de grupo de risco',
  emitDeclaration: false,
  result: 'Result test',
  description: 'Description test',
  preparation: 'Preparation test',
  guideline,
  procedureFields: [
    {
      key: 'physical_activities',
      label: 'Qual frequência de atividade física?',
      required: true,
      type: 'SELECT',
      value: null,
      position: 0,
      values: [
        {
          key: 'low',
          label: 'Sedentário',
        },
        {
          key: 'active',
          label: 'Ativo',
        },
        {
          key: 'atleta',
          label: 'Atleta',
        },
      ],
    },
  ],
};

const graphqlResponseService = {
  id: '42',
  type: 'VACCINE',
  name: 'Vacina Gripe',
  price: 150.59,
  info: 'Aplicável em pessoas fora de grupo de risco',
  emitDeclaration: false,
  result: 'Result test',
  description: 'Description test',
  preparation: 'Preparation test',
  guideline,
  procedureFields: [
    {
      key: 'physical_activities',
      label: 'Qual frequência de atividade física?',
      data: null,
      validations: null,
      type: 'SELECT',
      position: 0,
      values: [
        {
          key: 'low',
          label: 'Sedentário',
          data: null,
        },
        {
          key: 'active',
          label: 'Ativo',
          data: null,
        },
        {
          key: 'atleta',
          label: 'Atleta',
          data: null,
        },
      ],
    },
  ],
};

describe('Graphql Integration - Services', () => {
  it('Get service', async () => {
    nock('http://localhost:3001')
      .get('/health-hub-services/42')
      .reply(200, {
        ...originalService,
        procedureFields: [
          {
            ...originalService.procedureFields[0],
            position: 0,
          },
        ],
      });

    const { query } = createTestServer(() => ({ services: servicesAPI }));

    const responseRequest = await query({
      query: GET_SERVICE,
      variables: {
        id: '42',
      },
    });

    expect(responseRequest.data.service).toEqual({
      ...graphqlResponseService,
      price: '150,59',
      procedureFields: [
        {
          ...graphqlResponseService.procedureFields[0],
          position: 0,
          values: [
            { key: 'low', label: 'Sedentário', data: [] },
            { key: 'active', label: 'Ativo', data: [] },
            { key: 'atleta', label: 'Atleta', data: [] },
          ],
        },
      ],
    });
  });

  it('Get services', async () => {
    const response = {
      content: [originalService],
      pageable: {
        pageNumber: 1,
      },
      totalElements: 1,
      totalPages: 1,
    };

    const params = {
      type: 'VACCINE',
      sort: 'name,asc',
      page: 1,
      size: 10,
    };

    nock('http://localhost:3001')
      .get('/health-hub-services')
      .query(params)
      .reply(200, response);

    const { query } = createTestServer(() => ({ services: servicesAPI }));

    const responseRequest = await query({
      query: GET_SERVICES,
      variables: params,
    });

    expect(responseRequest.data.services).toEqual({
      page: 1,
      totalPages: 1,
      totalElements: 1,
      content: [graphqlResponseService],
    });
  });

  it('Update service', async () => {
    const responseUpdate = {
      ...originalService,
      name: 'Updated service',
    };

    const graphqlResponseServiceUpdate = {
      ...graphqlResponseService,
      name: 'Updated service',
    };
    delete graphqlResponseServiceUpdate.id;

    nock('http://localhost:3001')
      .put('/health-hub-services/42')
      .reply(200, responseUpdate);

    const { mutate } = createTestServer(() => ({ services: servicesAPI }));

    const responseRequest = await mutate({
      query: UPDATE_SERVICE,
      variables: {
        id: '42',
        service: graphqlResponseServiceUpdate,
      },
    });

    expect(responseRequest.data.updateService).toEqual({
      id: '42',
      ...graphqlResponseServiceUpdate,
    });
  });
});
