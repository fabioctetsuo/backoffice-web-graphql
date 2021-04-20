const guideline = {
  howTo: '#### Olá pessoas',
  attentionPoints: 'Tudo bem?',
};

export const mockedResponse = {
  id: '1',
  service: {
    name: 'Crazy Service',
    type: 'VACCINE',
    info: 'Diretamente na farmácia',
    price: 20,
    result: 'Result test',
    preparation: 'Preparation test',
    description: 'Description test',
    guideline,
    procedureFields: [
      {
        data: null,
        key: 'indication',
        label: 'Indicação médica',
        position: 1,
        type: 'TEXTAREA',
        validations: {
          currentDate: false,
          max: 500,
          min: 5,
          numbersOnly: false,
          required: true,
        },
        values: null,
      },
      {
        data: null,
        key: 'vaccine',
        label: 'Vacina',
        position: 2,
        type: 'SELECT',
        validations: { currentDate: false, numbersOnly: false, required: true },
        values: [{ data: { fabricante: 'GSK' }, key: 'twinrix', label: 'Twinrix' }],
      },
      {
        data: null,
        key: 'shelf_life',
        label: 'Validade',
        position: 3,
        type: 'DATE',
        validations: { currentDate: true, numbersOnly: false, required: true },
        values: null,
      },
      {
        data: { unit: 'mmHg' },
        key: 'diastolic_blood_pressure',
        label: 'Pressão arterial - diastólica',
        position: 4,
        type: 'INTEGER',
        validations: {
          currentDate: false,
          max: 300,
          min: 1,
          numbersOnly: true,
          required: true,
        },
        values: null,
      },
    ],
  },
};

export const graphqlGetServiceResponse = {
  emitDeclaration: true,
  id: '5fc9607adea2302e164d721f',
  info: 'Diretamente na farmácia',
  name: 'Hepatite A e B',
  price: null,
  type: 'VACCINE',
  result: null,
  description: null,
  preparation: null,
  guideline,
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

export const serviceWithSelectField = {
  emitDeclaration: true,
  id: '5fc9607adea2302e164d721f',
  info: 'Diretamente na farmácia',
  name: 'Hepatite A e B',
  price: null,
  type: 'VACCINE',
  description: 'Description test',
  result: 'Result test',
  preparation: 'Preparation test',
  guideline,
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

export const serviceWithOptionFields = {
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

export const error500 = {
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
};

export const reorderQuestions = {
  emitDeclaration: true,
  id: '5fc9607adea2302e164d721f',
  info: 'Diretamente na farmácia',
  name: 'Hepatite A e B',
  price: null,
  type: 'VACCINE',
  description: 'Description test',
  result: 'Result test',
  preparation: 'Preparation test',
  guideline,
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
};

export const editedFormWithSelect = {
  info: 'Diretamente na farmácia',
  name: 'Hepatite A e B',
  price: null,
  type: 'VACCINE',
  description: 'Description test',
  result: 'Result test',
  preparation: 'Preparation test',
  guideline,
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

export const editedFormWithOption = {
  info: 'Diretamente na farmácia',
  price: null,
  name: 'Serviço teste editado',
  type: 'VACCINE',
  description: 'Description test',
  result: 'Result test',
  preparation: 'Preparation test',
  guideline,
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

export const duplicateResponse = {
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
};
