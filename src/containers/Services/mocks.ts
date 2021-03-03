// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import gqls from '../../../graphql/gqls/services.gql';

const result = {
  __typename: 'HealthHubServiceAll',
  content: [
    {
      __typename: 'HealthHubService',
      id: '3',
      info: null,
      name: 'Perfil Lipídico',
      price: 45,
      type: 'RAPID_TEST',
      emitDeclaration: true,
      attachMedicalReport: false,
      result: 'Result Test',
      description: 'Description Test',
      preparation: 'How to prepare Test',
      procedureFields: [
        {
          __typename: 'HealthHubServiceField',
          key: 'observation',
          label: 'Observação',
          type: 'TEXTAREA',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 1000,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'non_hdl_cholesterol',
          label: 'Colesterol não HDL',
          type: 'FLOAT',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 600,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: {
            __typename: 'HealthHubServiceFieldData',
            unit: 'mg/dl',
          },
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'triglycerides',
          label: 'Triglicérides',
          type: 'FLOAT',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 600,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: {
            __typename: 'HealthHubServiceFieldData',
            unit: 'mg/dl',
          },
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'total cholesterol',
          label: 'Colesterol Total',
          type: 'FLOAT',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 600,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: {
            __typename: 'HealthHubServiceFieldData',
            unit: 'mg/dl',
          },
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'ldl_cholesterol',
          label: 'Colesterol LDL',
          type: 'FLOAT',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 600,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: {
            __typename: 'HealthHubServiceFieldData',
            unit: 'mg/dl',
          },
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'upload_medical_report',
          label: 'Anexar laudo médico',
          type: 'FILE_UPLOAD',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: null,
            max: null,
            required: true,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'hdl_cholesterol',
          label: 'Colesterol HDL',
          type: 'FLOAT',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 600,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: {
            __typename: 'HealthHubServiceFieldData',
            unit: 'mg/dl',
          },
        },
      ],
    },
    {
      __typename: 'HealthHubService',
      id: '1',
      info: 'Aplicável em pessoas fora de grupo de risco',
      name: 'Vacina Gripe',
      price: 150.59,
      type: 'VACCINE',
      emitDeclaration: false,
      attachMedicalReport: true,
      result: 'Result Test 2',
      description: 'Description Test 2',
      preparation: 'How to prepare Test 2',
      procedureFields: [
        {
          __typename: 'HealthHubServiceField',
          key: 'healthcare_professional_area',
          label: 'Se sim, qual a área?',
          type: 'TEXT',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 200,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'physical_activities',
          label: 'Qual frequência de atividade física?',
          type: 'SELECT',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'low',
              label: 'Sedentário',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'active',
              label: 'Ativo',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'atleta',
              label: 'Atleta',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: null,
          label:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi viverra, iaculis ligula sit amet, convallis erat. Integer feugiat augue sem, eu viverra odio auctor id. Vivamus ornare sagittis quam, vitae pretium sem semper sit amet. Nulla nec pellentesque odio. Integer nunc magna, ultricies vitae metus sagittis, euismod dignissim libero. Ut cursus velit a libero lobortis efficitur. Curabitur finibus mi ac est lobortis posuere. Nulla tempor erat nunc, nec efficitur nisl tempus eu. Curabitur eleifend, eros non condimentum fringilla, neque turpis facilisis turpis, vel porta arcu nulla mattis sapien. Nulla lectus arcu, auctor sed urna sit amet, pellentesque posuere felis. Ut vestibulum mauris sed consectetur tincidunt. Aenean eu justo vel metus suscipit dapibus non at mi.',
          type: 'LABEL',
          validations: null,
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'dyspnea',
          label: 'Dispnéia?',
          type: 'BOOLEAN',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: null,
            max: null,
            required: true,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'hb_hemoglobin',
          label: 'Hemoglobina - HB',
          type: 'FLOAT',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 4,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: {
            __typename: 'HealthHubServiceFieldData',
            unit: 'g/dL',
          },
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'ms_number',
          label: 'Número MS',
          type: 'INTEGER',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 5,
            max: 30,
            required: true,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'vaccine',
          label: 'Vacina',
          type: 'SELECT',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'influvac',
              label: 'Influvac',
              data: {
                fabricante: 'Abbott',
              },
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'fluquadri',
              label: 'Fluquadri',
              data: {
                fabricante: 'Sanofi',
              },
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'fluarix',
              label: 'Fluarix',
              data: {
                fabricante: 'GSK',
              },
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'shelf_life',
          label: 'Validade',
          type: 'DATE',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: null,
            max: null,
            required: null,
            numbersOnly: null,
            currentDate: true,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'exam_date_time',
          label: 'Data e hora do exame',
          type: 'DATETIME',
          validations: null,
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'observation',
          label: 'Observação',
          type: 'TEXTAREA',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 1000,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: null,
        },
      ],
    },
    {
      __typename: 'HealthHubService',
      id: '2',
      info: 'Diretamente na farmácia',
      name: 'Covid 19',
      price: null,
      type: 'PHARMA_SERVICE',
      emitDeclaration: false,
      attachMedicalReport: false,
      result: 'Result Test 3',
      description: 'Description Test 3',
      preparation: 'How to prepare Test 3',
      procedureFields: [
        {
          __typename: 'HealthHubServiceField',
          key: 'covid19_contact',
          label: 'Teve contato com paciente confirmado ou suspeito de Covid-19?',
          type: 'BOOLEAN',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: null,
            max: null,
            required: true,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'symptoms_date',
          label: 'Data de início dos sintomas',
          type: 'DATE',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: null,
            max: null,
            required: true,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'IgG',
          label: 'IgG',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Reagente',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não Reagente',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'fever',
          label: 'Febre?',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'immunosuppression',
          label: 'Imunossupressão?',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'cough',
          label: 'Tosse?',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'High-risk_pregnant',
          label: 'Gestante de alto risco?',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'sample_type',
          label: 'Tipo de amostra',
          type: 'TEXT',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 100,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'IgM',
          label: 'IgM',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Reagente',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não Reagente',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'shelf_life',
          label: 'Validade',
          type: 'DATE',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: null,
            max: null,
            required: null,
            numbersOnly: null,
            currentDate: true,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'lot',
          label: 'Lote',
          type: 'TEXT',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 5,
            max: 30,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'result',
          label: 'Resultado',
          type: 'TEXT',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 300,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'ms_number',
          label: 'Número MS',
          type: 'TEXT',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 20,
            required: null,
            numbersOnly: true,
            currentDate: null,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'guidelines',
          label: 'Orientações',
          type: 'TEXTAREA',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 1000,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'test_used',
          label: 'Teste utilizado',
          type: 'TEXT',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 200,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'question',
          label:
            'Apresentou algum sintoma abaixo nos últimos 8 dias? (Em caso de sintomas apresentados em menos de 8 dias o resultado IgM (fase aguda) não será preciso/satisfatório)',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'asymptomatic',
          label: 'Assintomático?',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'observation',
          label: 'Observação',
          type: 'TEXTAREA',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 1000,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'healthcare_professional',
          label: 'É profissional da área da saúde?',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'maker',
          label: 'Fabricante',
          type: 'TEXT',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 200,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'dyspnea',
          label: 'Dispnéia?',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'carrier_of_chromosomal_diseases_or_state_of_immune_weakness',
          label:
            'Portador de doenças cromossômicas ou estado de fragilidade imunológica?',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'exam_applicant',
          label: 'Solicitante do exame',
          type: 'TEXT',
          validations: {
            __typename: 'HealthHubFieldValidation',
            min: 1,
            max: 300,
            required: null,
            numbersOnly: null,
            currentDate: null,
          },
          value: null,
          values: null,
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'user_authorization',
          label: 'Autorização do usuário',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'chronic_heart_disease',
          label: 'Doença cardíacas crônicas?',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'advanced_chronic_kidney_disease',
          label: 'Doenças renais crônicas em estado avançado',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'headache',
          label: 'Dor de cabeça?',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'decompensated_respiratory_diseases',
          label: 'Doenças respiratórias descompensadas?',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'diabetes',
          label: 'Diabetes?',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
        {
          __typename: 'HealthHubServiceField',
          key: 'medical_referral',
          label: 'Encaminhamento médico',
          type: 'BOOLEAN',
          validations: null,
          value: null,
          values: [
            {
              __typename: 'HealthHubServiceValue',
              key: 'true',
              label: 'Sim',
              data: null,
            },
            {
              __typename: 'HealthHubServiceValue',
              key: 'false',
              label: 'Não',
              data: null,
            },
          ],
          data: null,
        },
      ],
    },
  ],
  page: 0,
  totalPages: 1,
  totalElements: 3,
};

export default {
  getServicesSuccess: {
    request: {
      query: gqls.services,
      variables: {},
    },
    result: {
      data: {
        services: result,
      },
    },
  },
};
