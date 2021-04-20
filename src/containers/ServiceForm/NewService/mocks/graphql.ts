import { CreateServiceDocument } from 'generated-types';

const form = {
  name: 'Serviço teste',
  type: 'PHARMA_SERVICE',
  info: 'Diretamente na farmácia',
  price: null,
  description: 'Description test',
  result: 'Result test',
  preparation: 'Preparation test',
  guideline: {
    howTo: '',
    attentionPoints: '',
  },
  procedureFields: [
    {
      key: 'diastolic_blood_pressure',
      label: 'Pressão arterial - diastólica',
      type: 'INTEGER',
      values: null,
      position: 1,
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
