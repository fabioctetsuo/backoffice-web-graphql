import { CreateServiceDocument } from 'generated-types';

const graphqlGetServiceResponse = {
  emitDeclaration: true,
  id: '5fc9607adea2302e164d721f',
  info: 'Diretamente na farmácia',
  name: 'Hepatite A e B',
  price: null,
  type: 'VACCINE',
  procedureFields: [
    {
      key: 'indication',
      label: 'Indicação',
      type: 'TEXT',
      validations: {
        min: 5,
        max: 500,
        required: true,
        numbersOnly: false,
        currentDate: false,
        __typename: 'HealthHubFieldValidation',
      },
      values: null,
      data: null,
      __typename: 'HealthHubServiceFieldById',
    },
    {
      key: 'vaccine',
      label: 'Vacina',
      type: 'SELECT',
      validations: {
        min: null,
        max: null,
        required: true,
        numbersOnly: false,
        currentDate: false,
        __typename: 'HealthHubFieldValidation',
      },
      values: [
        {
          key: 'twinrix',
          label: 'Twinrix',
          data: [{ label: 'fabricante', value: 'GSK' }],
          __typename: 'HealthHubServiceValueById',
        },
      ],
      data: null,
      __typename: 'HealthHubServiceFieldById',
    },
    {
      key: 'shelf_life',
      label: 'Validade',
      type: 'DATE',
      validations: {
        min: null,
        max: null,
        required: true,
        numbersOnly: false,
        currentDate: true,
        __typename: 'HealthHubFieldValidation',
      },
      values: null,
      data: null,
      __typename: 'HealthHubServiceFieldById',
    },
    {
      key: 'healthcare_professional_area',
      label: 'Se sim, qual a área?',
      type: 'TEXT',
      validations: {
        min: 1,
        max: 200,
        required: true,
        numbersOnly: false,
        currentDate: true,
        __typename: 'HealthHubFieldValidation',
      },
      values: null,
      data: null,
      __typename: 'HealthHubServiceById',
    },
  ],
};

const serviceWithSelectField = {
  emitDeclaration: true,
  id: '5fc9607adea2302e164d721f',
  info: 'Diretamente na farmácia',
  name: 'Hepatite A e B',
  price: null,
  type: 'VACCINE',
  procedureFields: [
    {
      key: 'vaccine',
      label: 'Vacina Marota',
      type: 'SELECT',
      validations: {
        min: null,
        max: null,
        required: true,
        numbersOnly: false,
        currentDate: false,
        __typename: 'HealthHubFieldValidation',
      },
      values: [
        {
          key: 'twinrix',
          label: 'Twinrix',
          data: [{ label: 'fabricante', value: 'GSK' }],
          __typename: 'HealthHubServiceValueById',
        },
      ],
      data: null,
      __typename: 'HealthHubServiceFieldById',
    },
  ],
};

const serviceWithOptionFields = {
  ...graphqlGetServiceResponse,
  name: 'Serviço teste',
  procedureFields: [
    {
      key: 'hypertension',
      label: 'Hipertensão?',
      type: 'BOOLEAN',
      validations: {
        min: null,
        max: null,
        required: true,
        numbersOnly: false,
        currentDate: false,
        __typename: 'HealthHubFieldValidation',
      },
      values: [
        {
          key: 'true',
          label: 'Sim',
          data: [],
          __typename: 'HealthHubServiceValue',
        },
        {
          key: 'false',
          label: 'Não',
          data: [],
          __typename: 'HealthHubServiceValue',
        },
      ],
      data: null,
      __typename: 'HealthHubServiceField',
    },
  ],
};

const form = {
  name: 'Serviço teste',
  type: 'PHARMA_SERVICE',
  info: 'Diretamente na farmácia',
  price: null,
  procedureFields: [
    {
      key: 'diastolic_blood_pressure',
      label: 'Pressão arterial - diastólica',
      type: 'INTEGER',
      values: null,
      validations: {
        required: true,
        numbersOnly: true,
        currentDate: false,
        min: 1,
        max: 300,
      },
      data: {
        unit: 'mmHg',
      },
    },
  ],
};

export default {
  createServiceSuccessMock: {
    request: {
      query: CreateServiceDocument,
      variables: {
        service: form,
      },
    },
    result: {
      data: {
        service: { ...form, id: '1' },
      },
    },
  },
  createServiceDuplicateErrorMock: {
    request: {
      query: CreateServiceDocument,
      variables: {
        service: form,
      },
    },
    result: {
      errors: [
        {
          message: '409: Conflict',
          locations: [{ line: 2, column: 3 }],
          path: ['createService'],
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
            response: {
              url: 'https://develop.devtest.zone/hh-services/health-hub-services',
              status: 409,
              statusText: 'Conflict',
              body: {
                errorDescription: 'Serviço com nome {0} e tipo {1} já existe',
              },
            },
          },
        },
      ],
    },
  },
  createServiceErrorMock: {
    request: {
      query: CreateServiceDocument,
      variables: {
        service: form,
      },
    },
    result: {
      errors: [
        {
          message: '500: Internal server error',
          locations: [{ line: 2, column: 3 }],
          path: ['editService'],
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
            response: {
              url: 'service-api-url',
              status: 500,
              statusText: 'Internal server error',
              body: {
                errors: [
                  {
                    type: 'conflict',
                    parameter_name: null,
                    message: 'Erro desconhecido',
                  },
                ],
                url: '/services/1',
                method: 'post',
              },
            },
          },
        },
      ],
    },
  },
};
