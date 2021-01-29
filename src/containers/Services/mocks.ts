enum HealthHubServiceFieldType {
  Float = 'FLOAT',
  Integer = 'INTEGER',
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Datetime = 'DATETIME',
  Text = 'TEXT',
  Textarea = 'TEXTAREA',
  Select = 'SELECT',
  FileUpload = 'FILE_UPLOAD',
  Label = 'LABEL',
}

enum HealthHubFieldType {
  Vaccine = 'VACCINE',
  PharmaService = 'PHARMA_SERVICE',
  RapidTest = 'RAPID_TEST',
}

export default {
  content: [
    {
      procedureFields: [
        {
          key: 'indication',
          label: 'Indicação',
          position: 1,
          type: HealthHubServiceFieldType.Text,
          validations: {
            min: 5,
            max: 500,
            required: true,
          },
        },
        {
          key: 'vaccine',
          label: 'Vacina',
          position: 2,
          type: HealthHubServiceFieldType.Select,
          values: [
            {
              key: 'twinrix',
              label: 'Twinrix',
              data: {
                fabricante: 'GSK',
              },
            },
          ],
        },
        {
          key: 'shelf_life',
          label: 'Validade',
          position: 3,
          type: HealthHubServiceFieldType.Date,
          validations: {
            required: true,
            currentDate: true,
          },
        },
        {
          key: 'observation',
          label: 'Observação',
          position: 4,
          type: HealthHubServiceFieldType.Textarea,
          validations: {
            min: 1,
            max: 1000,
            required: false,
          },
        },
        {
          key: 'user_authorization',
          label:
            'O usuário autoriza o uso das informações fornecidas para a assistência farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento de seu histórico de vacinas',
          position: 5,
          type: HealthHubServiceFieldType.Boolean,
          validations: {
            required: true,
          },
        },
      ],
      attachMedicalReport: false,
      emitDeclaration: true,
      price: 55,
      name: 'Hepatite A e B',
      id: '5fc9607adea2302e164d721f',
      type: HealthHubFieldType.Vaccine,
    },
    {
      procedureFields: [
        {
          key: 'indication',
          label: 'Indicação',
          position: 1,
          type: HealthHubServiceFieldType.Text,
          validations: {
            min: 5,
            max: 500,
            required: true,
          },
        },
        {
          key: 'vaccine',
          label: 'Vacina',
          position: 2,
          type: HealthHubServiceFieldType.Select,
          values: [
            {
              key: 'influvac',
              label: 'Influvac',
              data: {
                fabricante: 'Abbott',
              },
            },
            {
              key: 'fluquadri',
              label: 'Fluquadri',
              data: {
                fabricante: 'Sanofi',
              },
            },
            {
              key: 'fluarix',
              label: 'Fluarix',
              data: {
                fabricante: 'GSK',
              },
            },
          ],
        },
        {
          key: 'pharmaceutical_form',
          label: 'Forma farmacêutica',
          position: 3,
          type: HealthHubServiceFieldType.Text,
          validations: {
            min: 5,
            max: 500,
            required: true,
          },
        },
      ],
      attachMedicalReport: false,
      emitDeclaration: true,
      info: 'Diretamente na farmácia',
      name: 'Gripe tetravalente',
      id: '5fc9607bdea2302e164d7220',
      type: HealthHubFieldType.Vaccine,
    },
  ],
  pageable: {
    sort: {
      unsorted: true,
      sorted: false,
      empty: true,
    },
    pageNumber: 0,
    pageSize: 20,
    offset: 0,
    paged: true,
    unpaged: false,
  },
  totalPages: 1,
  totalElements: 2,
  last: false,
  first: true,
  sort: {
    unsorted: true,
    sorted: false,
    empty: true,
  },
  number: 0,
  numberOfElements: 2,
  size: 2,
  empty: false,
};
