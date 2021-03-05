import {
  ProviderDocument,
  SellerDocument,
  ServicesDocument,
  UpdateProviderDocument,
  UpdateSellerDocument,
} from 'generated-types';

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
          position: 1,
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
          position: 2,
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
          position: 3,
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
          position: 4,
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
          position: 5,
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
          position: 6,
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
          position: 7,
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
      result: 'Result Test',
      description: 'Description Test',
      preparation: 'How to prepare Test',
      procedureFields: [
        {
          __typename: 'HealthHubServiceField',
          key: 'healthcare_professional_area',
          label: 'Se sim, qual a área?',
          type: 'TEXT',
          position: 1,
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
          position: 2,
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
          position: 3,
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
          position: 4,
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
          position: 5,
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
          position: 6,
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
          position: 7,
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
          position: 8,
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
          position: 9,
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
          position: 10,
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
      result: 'Result Test',
      description: 'Description Test',
      preparation: 'How to prepare Test',
      procedureFields: [
        {
          __typename: 'HealthHubServiceField',
          key: 'covid19_contact',
          label: 'Teve contato com paciente confirmado ou suspeito de Covid-19?',
          type: 'BOOLEAN',
          position: 1,
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
          position: 2,
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
          position: 3,
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
          position: 4,
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
          position: 5,
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
          position: 6,
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
          position: 7,
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
          position: 8,
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
          position: 9,
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
          position: 10,
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
          position: 11,
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
          position: 12,
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
          position: 13,
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
          position: 14,
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
          position: 15,
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
          position: 16,
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
          position: 17,
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
          position: 18,
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
          position: 19,
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
          position: 20,
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
          position: 21,
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
          position: 22,
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
          position: 23,
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
          position: 24,
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
          position: 25,
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
          position: 26,
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
          position: 27,
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
          position: 28,
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
          position: 29,
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
          position: 30,
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

const defaultUpdateVariables = {
  id: '5fc96401dcbf6550dba10695',
  seller: {
    tradingName: 'Drogasil',
    name: 'Paulista 6',
    documentNumber: '61585865216839',
    externalCode: '3003',
    phoneNumber: '1140072528',
    mobileNumber: '11968599194',
    address: {
      zipCode: '01311200',
      street: 'Avenida Paulista',
      number: 1257,
      neighborhood: 'Bela Vista',
      city: 'São Paulo',
      state: 'SP',
      country: 'Brasil',
    },
    services: [
      {
        id: '5fc9607cdea2302e164d7221',
        name: 'Febre Amarela',
        type: 'VACCINE',
        price: null,
        info: 'Diretamente na farmácia',
      },
      {
        id: '5fc96084dea2302e164d7232',
        name: 'Chikungunya',
        type: 'RAPID_TEST',
        price: 55,
        info: null,
      },
    ],
  },
};

export default {
  getSellerSuccess: {
    request: {
      query: SellerDocument,
      variables: { id: '5fc96401dcbf6550dba10695' },
    },
    result: {
      data: {
        seller: {
          id: '5fc96401dcbf6550dba10695',
          name: 'Paulista 6',
          externalCode: '3003',
          documentNumber: '61585865216839',
          mobileNumber: '11968599194',
          phoneNumber: '1140072528',
          tradingName: 'Drogasil',
          address: {
            zipCode: '01311200',
            city: 'São Paulo',
            neighborhood: 'Bela Vista',
            country: 'Brasil',
            state: 'SP',
            street: 'Avenida Paulista',
            number: 1257,
            __typename: 'SellerAddress',
          },
          services: [
            {
              id: '5fc9607cdea2302e164d7221',
              name: 'Febre Amarela',
              type: 'VACCINE',
              price: null,
              info: 'Diretamente na farmácia',
              __typename: 'SellerService',
            },
            {
              id: '5fc96084dea2302e164d7232',
              name: 'Chikungunya',
              type: 'RAPID_TEST',
              price: 55,
              info: null,
              __typename: 'SellerService',
            },
          ],
          __typename: 'Seller',
        },
      },
    },
  },
  getProviderSuccess: {
    request: {
      query: ProviderDocument,
      variables: {
        id: '5fc96401dcbf6550dba10695',
      },
    },
    result: {
      data: {
        provider: {
          startHour: '09:00-03:00',
          endHour: '22:00-03:00',
          startIntervalHour: null,
          endIntervalHour: null,
          slots: 3,
          interval: 30,
          id: '5fc96401dcbf6550dba10695',
          __typename: 'Provider',
        },
      },
    },
  },
  updateSeller: {
    request: {
      query: UpdateSellerDocument,
      variables: {
        id: defaultUpdateVariables.id,
        seller: {
          ...defaultUpdateVariables.seller,
          name: 'Nova drogaria Paulista',
        },
      },
    },
    result: {
      data: {
        updateSeller: {
          id: '5fc96401dcbf6550dba10695',
          name: 'Paulista 6',
          externalCode: '3003',
          documentNumber: '61585865216839',
          mobileNumber: '11968599194',
          phoneNumber: '1140072528',
          tradingName: 'Drogasil',
          address: {
            zipCode: '01311200',
            city: 'São Paulo',
            neighborhood: 'Bela Vista',
            country: 'Brasil',
            state: 'SP',
            street: 'Avenida Paulista',
            number: 1257,
            __typename: 'SellerAddress',
          },
          services: [
            {
              id: '5fc9607cdea2302e164d7221',
              name: 'Febre Amarela',
              type: 'VACCINE',
              price: null,
              info: 'Diretamente na farmácia',
              __typename: 'SellerService',
            },
            {
              id: '5fc96084dea2302e164d7232',
              name: 'Chikungunya',
              type: 'RAPID_TEST',
              price: 55,
              info: null,
              __typename: 'SellerService',
            },
          ],
          __typename: 'Seller',
        },
      },
    },
  },
  updateSellerWithCnpjAlreadRegistered: {
    request: {
      query: UpdateSellerDocument,
      variables: {
        id: defaultUpdateVariables.id,
        seller: {
          ...defaultUpdateVariables.seller,
          documentNumber: '61585865216800',
        },
      },
    },
    result: {
      errors: [
        {
          message: '409: Conflict',
          locations: [{ line: 2, column: 3 }],
          path: ['updateSeller'],
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
            response: {
              url: 'sellers-api-url',
              status: 409,
              statusText: 'Conflict',
              body: {
                errors: [
                  {
                    type: 'conflict',
                    parameter_name: null,
                    message: 'CNPJ já existe',
                  },
                ],
                url: '/sellers/5fc96401dcbf6550dba10695',
                method: 'put',
              },
            },
          },
        },
      ],
      data: { updateSeller: null },
    },
  },
  updateSellerError: {
    request: {
      query: UpdateSellerDocument,
      variables: {
        id: defaultUpdateVariables.id,
        seller: {
          ...defaultUpdateVariables.seller,
          name: 'Loja atualizada',
        },
      },
    },
    result: {
      errors: [
        {
          message: '500: Internal server error',
          locations: [{ line: 2, column: 3 }],
          path: ['updateSeller'],
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
            response: {
              url: 'sellers-api-url',
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
                url: '/sellers/5fc96401dcbf6550dba10695',
                method: 'put',
              },
            },
          },
        },
      ],
      data: { updateSeller: null },
    },
  },
  getServicesSuccess: {
    request: {
      query: ServicesDocument,
      variables: {
        size: 1000,
      },
    },
    result: {
      data: {
        services: result,
      },
    },
  },
  updateProviderSuccess: {
    request: {
      query: UpdateProviderDocument,
      variables: {
        id: '5fc96401dcbf6550dba10695',
        provider: {
          interval: 30,
          slots: 3,
          startHour: '09:00-03:00',
          endHour: '22:00-03:00',
          startIntervalHour: null,
          endIntervalHour: null,
        },
      },
    },
    result: {
      data: {
        updateProvider: {
          startHour: '09:00-03:00',
          endHour: '22:00-03:00',
          startIntervalHour: null,
          endIntervalHour: null,
          slots: 3,
          interval: 30,
          id: '5fc96401dcbf6550dba10695',
          __typename: 'Provider',
        },
      },
    },
  },
  getProviderErrorNotFound: {
    request: {
      query: ProviderDocument,
      variables: {
        id: '5fc96401dcbf6550dba10695',
      },
    },
    result: {
      errors: [
        {
          message: '404: Not found',
          locations: [{ line: 2, column: 3 }],
          path: ['updateProvider'],
          extensions: {
            code: 'NOT_FOUND',
            response: {
              url: 'providers-api-url',
              status: 404,
              statusText: 'Not found',
              body: {
                errors: [
                  {
                    type: 'not found',
                    parameter_name: null,
                    message: 'Erro desconhecido',
                  },
                ],
                url: '/providers',
                method: 'post',
              },
            },
          },
        },
      ],
      data: { updateProvider: null },
    },
  },
  getProviderError: {
    request: {
      query: ProviderDocument,
      variables: {
        id: '5fc96401dcbf6550dba10695',
      },
    },
    result: {
      errors: [
        {
          message: '500: Internal server error',
          locations: [{ line: 2, column: 3 }],
          path: ['updateProvider'],
          extensions: {
            code: 'INTERNAL SERVER ERROR',
            response: {
              url: 'providers-api-url',
              status: 500,
              statusText: 'Internal server error',
              body: {
                errors: [
                  {
                    type: 'Internal server error',
                    parameter_name: null,
                    message: 'Erro desconhecido',
                  },
                ],
                url: '/providers',
                method: 'post',
              },
            },
          },
        },
      ],
      data: { updateProvider: null },
    },
  },
  getSellerError: {
    request: {
      query: SellerDocument,
      variables: {
        id: defaultUpdateVariables.id,
      },
    },
    result: {
      errors: [
        {
          message: '500: Internal server error',
          locations: [{ line: 2, column: 3 }],
          path: ['seller'],
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
            response: {
              url: 'sellers-api-url',
              status: 500,
              statusText: 'Internal server error',
              body: {
                errors: [
                  {
                    type: 'error',
                    parameter_name: null,
                    message: 'Erro desconhecido',
                  },
                ],
                url: '/sellers/5fc96401dcbf6550dba10695',
                method: 'get',
              },
            },
          },
        },
      ],
      data: { updateSeller: null },
    },
  },
};
