import { ServiceDocument, UpdateServiceDocument } from 'generated-types';

const graphqlGetServiceResponse = {
  emitDeclaration: true,
  id: '5fc9607adea2302e164d721f',
  info: 'Diretamente na farmácia',
  name: 'Hepatite A e B',
  price: null,
  type: 'VACCINE',
  result: null,
  description: null,
  preparation: null,
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
      position: 1,
      values: null,
      data: null,
      __typename: 'HealthHubServiceFieldById',
    },
    {
      key: 'vaccine',
      label: 'Vacina',
      type: 'SELECT',
      position: 2,
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
      position: 3,
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
      position: 4,
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
  description: 'Description test',
  result: 'Result test',
  preparation: 'Preparation test',
  procedureFields: [
    {
      key: 'vaccine',
      label: 'Vacina Marota',
      type: 'SELECT',
      position: 1,
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
      position: 1,
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

const editedForm = {
  info: 'Diretamente na farmácia',
  name: 'Crazy Service',
  price: 10,
  type: 'VACCINE',
  description: 'Description test',
  result: 'Result test',
  preparation: 'Preparation test',
  procedureFields: [
    {
      key: 'indication',
      label: 'Indicação médica',
      type: 'TEXTAREA',
      position: 1,
      validations: {
        min: 5,
        max: 500,
        required: true,
        numbersOnly: false,
        currentDate: false,
      },
      values: null,
      data: null,
    },
    {
      key: 'vaccine',
      label: 'Vacina',
      type: 'SELECT',
      position: 2,
      validations: {
        required: true,
        numbersOnly: false,
        currentDate: false,
      },
      values: [
        {
          key: 'twinrix',
          label: 'Twinrix',
          data: { fabricante: 'GSK' },
        },
      ],
      data: null,
    },
    {
      key: 'shelf_life',
      label: 'Validade',
      type: 'DATE',
      position: 3,
      validations: {
        required: true,
        numbersOnly: false,
        currentDate: true,
      },
      values: null,
      data: null,
    },
    {
      key: 'diastolic_blood_pressure',
      label: 'Pressão arterial - diastólica',
      type: 'INTEGER',
      position: 4,
      validations: {
        min: 1,
        max: 300,
        required: true,
        numbersOnly: true,
        currentDate: false,
      },
      values: null,
      data: { unit: 'mmHg' },
    },
  ],
};

const editedFormWithSelect = {
  info: 'Diretamente na farmácia',
  name: 'Hepatite A e B',
  price: null,
  type: 'VACCINE',
  description: 'Description test',
  result: 'Result test',
  preparation: 'Preparation test',
  procedureFields: [
    {
      key: 'vaccine',
      label: 'Vacina Marota',
      type: 'SELECT',
      position: 1,
      validations: {
        required: true,
        numbersOnly: false,
        currentDate: false,
      },
      values: [
        {
          key: 'twinrix',
          label: 'Twinrix edited',
          data: { fabricante: 'GSK' },
        },
        {
          key: 'pfizer',
          label: 'Pfizer',
          data: { fabricante: 'Pfizer' },
        },
      ],
      data: null,
    },
  ],
};

const editedFormWithOption = {
  ...editedForm,
  price: null,
  name: 'Serviço teste editado',
  procedureFields: [
    {
      key: 'hypertension',
      label: 'Hipertensão?',
      type: 'BOOLEAN',
      position: 1,
      validations: {
        required: true,
        numbersOnly: false,
        currentDate: false,
      },
      values: [
        { key: 'true', label: 'Sim' },
        { key: 'false', label: 'Não' },
      ],
      data: null,
    },
  ],
};

export default {
  getServiceSuccessMock: {
    request: {
      query: ServiceDocument,
      variables: { id: '1' },
    },
    result: {
      data: {
        service: graphqlGetServiceResponse,
      },
    },
  },
  getServiceReorderQuestionSuccessMock: {
    request: {
      query: ServiceDocument,
      variables: { id: '1' },
    },
    result: {
      data: {
        service: {
          emitDeclaration: true,
          id: '5fc9607adea2302e164d721f',
          info: 'Diretamente na farmácia',
          name: 'Hepatite A e B',
          price: null,
          type: 'VACCINE',
          description: 'Description test',
          result: 'Result test',
          preparation: 'Preparation test',
          procedureFields: [
            {
              key: 'shelf_life',
              label: 'Validade',
              type: 'DATE',
              position: 1,
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
              position: 2,
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
            {
              key: 'observation',
              label: 'Observação',
              type: 'TEXT',
              position: 3,
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
        },
      },
    },
  },
  getServiceSuccessWithPriceMock: {
    request: {
      query: ServiceDocument,
      variables: { id: '1' },
    },
    result: {
      data: {
        service: {
          ...graphqlGetServiceResponse,
          price: 10,
        },
      },
    },
  },
  getServiceSuccessProcedureWithOptionMock: {
    request: {
      query: ServiceDocument,
      variables: { id: '1' },
    },
    result: {
      data: {
        service: serviceWithOptionFields,
      },
    },
  },
  getServiceSuccessProcedureWithSelectMock: {
    request: {
      query: ServiceDocument,
      variables: { id: '1' },
    },
    result: {
      data: {
        service: serviceWithSelectField,
      },
    },
  },
  updateServiceSuccessMock: {
    request: {
      query: UpdateServiceDocument,
      variables: {
        id: '1',
        service: { ...editedForm, price: 20 },
      },
    },
    result: {
      data: {
        service: { ...editedForm, price: 20 },
      },
    },
  },
  updateServiceSuccessSelectMock: {
    request: {
      query: UpdateServiceDocument,
      variables: {
        id: '1',
        service: editedFormWithSelect,
      },
    },
    result: {
      data: {
        service: editedFormWithSelect,
      },
    },
  },
  updateServiceWithOptionsSuccessMock: {
    request: {
      query: UpdateServiceDocument,
      variables: {
        id: '1',
        service: editedFormWithOption,
      },
    },
    result: {
      data: {
        service: editedFormWithOption,
      },
    },
  },
  updateServiceSuccessNoPriceMock: {
    request: {
      query: UpdateServiceDocument,
      variables: {
        id: '1',
        service: { ...editedForm, price: null },
      },
    },
    result: {
      data: {
        service: { ...editedForm, price: null },
      },
    },
  },
  updateServiceErrorMock: {
    request: {
      query: UpdateServiceDocument,
      variables: {
        id: '1',
        service: editedForm,
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
  duplicateServiceErrorMock: {
    request: {
      query: UpdateServiceDocument,
      variables: {
        id: '1',
        service: editedForm,
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
};
