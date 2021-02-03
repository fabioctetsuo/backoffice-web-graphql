module.exports = [
  {
    procedureFields: [
      {
        key: 'observation',
        label: 'Observação',
        position: 2,
        type: 'TEXTAREA',
        validations: {
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'non_hdl_cholesterol',
        label: 'Colesterol não HDL',
        position: 3,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 600,
        },
        data: {
          unit: 'mg/dl',
        },
      },
      {
        key: 'triglycerides',
        label: 'Triglicérides',
        position: 4,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 600,
        },
        data: {
          unit: 'mg/dl',
        },
      },
      {
        key: 'total cholesterol',
        label: 'Colesterol Total',
        position: 5,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 600,
        },
        data: {
          unit: 'mg/dl',
        },
      },
      {
        key: 'ldl_cholesterol',
        label: 'Colesterol LDL',
        position: 6,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 600,
        },
        data: {
          unit: 'mg/dl',
        },
      },
      {
        key: 'upload_medical_report',
        label: 'Anexar laudo médico',
        position: 7,
        type: 'FILE_UPLOAD',
        validations: {
          required: true,
        },
      },
      {
        key: 'hdl_cholesterol',
        label: 'Colesterol HDL',
        position: 8,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 600,
        },
        data: {
          unit: 'mg/dl',
        },
      },
    ],
    price: 45,
    attachMedicalReport: true,
    emitDeclaration: false,
    name: 'Perfil Lipídico',
    id: '3',
    type: 'RAPID_TEST',
  },
  {
    id: '1',
    type: 'RAPID_TEST',
    name: 'Vacina Gripe',
    price: 150.59,
    info: 'Aplicável em pessoas fora de grupo de risco',
    attachMedicalReport: true,
    emitDeclaration: false,
    procedureFields: [
      {
        key: 'healthcare_professional_area',
        label: 'Se sim, qual a área?',
        position: 16,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
        },
      },
      {
        key: 'physical_activities',
        label: 'Qual frequência de atividade física?',
        type: 'SELECT',
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
      {
        label:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi viverra, iaculis ligula sit amet, convallis erat. Integer feugiat augue sem, eu viverra odio auctor id. Vivamus ornare sagittis quam, vitae pretium sem semper sit amet. Nulla nec pellentesque odio. Integer nunc magna, ultricies vitae metus sagittis, euismod dignissim libero. Ut cursus velit a libero lobortis efficitur. Curabitur finibus mi ac est lobortis posuere. Nulla tempor erat nunc, nec efficitur nisl tempus eu. Curabitur eleifend, eros non condimentum fringilla, neque turpis facilisis turpis, vel porta arcu nulla mattis sapien. Nulla lectus arcu, auctor sed urna sit amet, pellentesque posuere felis. Ut vestibulum mauris sed consectetur tincidunt. Aenean eu justo vel metus suscipit dapibus non at mi.',
        type: 'LABEL',
      },
      {
        key: 'dyspnea',
        label: 'Dispnéia?',
        position: 3,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'hb_hemoglobin',
        label: 'Hemoglobina - HB',
        position: 1,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 4,
        },
        data: {
          unit: 'g/dL',
        },
      },
      {
        key: 'ms_number',
        label: 'Número MS',
        position: 4,
        type: 'INTEGER',
        validations: {
          min: 5,
          max: 30,
          required: true,
        },
      },
      {
        key: 'vaccine',
        label: 'Vacina',
        position: 2,
        type: 'SELECT',
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
        key: 'shelf_life',
        label: 'Validade',
        position: 9,
        type: 'DATE',
        validations: {
          currentDate: true,
        },
      },
      {
        key: 'exam_date_time',
        label: 'Data e hora do exame',
        position: 10,
        type: 'DATETIME',
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 14,
        type: 'TEXTAREA',
        validations: {
          min: 1,
          max: 1000,
        },
      },
    ],
  },
  {
    id: '2',
    info: 'Diretamente na farmácia',
    procedureFields: [
      {
        key: 'covid19_contact',
        label: 'Teve contato com paciente confirmado ou suspeito de Covid-19?',
        position: 2,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'symptoms_date',
        label: 'Data de início dos sintomas',
        position: 4,
        type: 'DATE',
        validations: {
          required: true,
        },
      },
      {
        key: 'IgG',
        label: 'IgG',
        position: 5,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Reagente',
          },
          {
            key: 'false',
            label: 'Não Reagente',
          },
        ],
      },
      {
        key: 'fever',
        label: 'Febre?',
        position: 6,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'immunosuppression',
        label: 'Imunossupressão?',
        position: 7,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'cough',
        label: 'Tosse?',
        position: 8,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'High-risk_pregnant',
        label: 'Gestante de alto risco?',
        position: 9,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'sample_type',
        label: 'Tipo de amostra',
        position: 10,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 100,
        },
      },
      {
        key: 'IgM',
        label: 'IgM',
        position: 11,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Reagente',
          },
          {
            key: 'false',
            label: 'Não Reagente',
          },
        ],
      },
      {
        key: 'shelf_life',
        label: 'Validade',
        position: 12,
        type: 'DATE',
        validations: {
          currentDate: true,
        },
      },
      {
        key: 'lot',
        label: 'Lote',
        position: 13,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
        },
      },
      {
        key: 'result',
        label: 'Resultado',
        position: 14,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 300,
        },
      },
      {
        key: 'ms_number',
        label: 'Número MS',
        position: 15,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 20,
          numbersOnly: true,
        },
      },
      {
        key: 'guidelines',
        label: 'Orientações',
        position: 16,
        type: 'TEXTAREA',
        validations: {
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'test_used',
        label: 'Teste utilizado',
        position: 17,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
        },
      },
      {
        key: 'question',
        label:
          'Apresentou algum sintoma abaixo nos últimos 8 dias? (Em caso de sintomas apresentados em menos de 8 dias o resultado IgM (fase aguda) não será preciso/satisfatório)',
        position: 18,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'asymptomatic',
        label: 'Assintomático?',
        position: 19,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 20,
        type: 'TEXTAREA',
        validations: {
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'healthcare_professional',
        label: 'É profissional da área da saúde?',
        position: 21,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'maker',
        label: 'Fabricante',
        position: 22,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
        },
      },
      {
        key: 'dyspnea',
        label: 'Dispnéia?',
        position: 23,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'carrier_of_chromosomal_diseases_or_state_of_immune_weakness',
        label: 'Portador de doenças cromossômicas ou estado de fragilidade imunológica?',
        position: 24,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'exam_applicant',
        label: 'Solicitante do exame',
        position: 25,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 300,
        },
      },
      {
        key: 'user_authorization',
        label: 'Autorização do usuário',
        position: 26,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'chronic_heart_disease',
        label: 'Doença cardíacas crônicas?',
        position: 27,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'advanced_chronic_kidney_disease',
        label: 'Doenças renais crônicas em estado avançado',
        position: 28,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'headache',
        label: 'Dor de cabeça?',
        position: 29,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'decompensated_respiratory_diseases',
        label: 'Doenças respiratórias descompensadas?',
        position: 30,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'diabetes',
        label: 'Diabetes?',
        position: 31,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
        position: 32,
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Sim',
          },
          {
            key: 'false',
            label: 'Não',
          },
        ],
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    name: 'Covid 19',
    type: 'PHARMA_SERVICE',
  },
];
