import { ServiceDocument, UpdateServiceDocument } from 'generated-types';

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

const editedForm = {
  info: 'Diretamente na farmácia',
  name: 'Crazy Service',
  price: 10,
  type: 'VACCINE',
  procedureFields: [
    {
      key: 'indication',
      label: 'Indicação médica',
      type: 'TEXTAREA',
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
  procedureFields: [
    {
      key: 'vaccine',
      label: 'Vacina Marota',
      type: 'SELECT',
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
    result: {},
    error: new Error('an error'),
  },
};
