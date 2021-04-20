const guideline = {
  howTo: `##### 1 - Coletar amostra\nColete os 10μL de sangue até a linha preta da pipeta capilar. Dispensar a amostra coletada no tubo de tampão extrator.\n##### 2 - Aplicar a amostra\nAplique 10μL de sangue na cavidade ‘S’ do dispositivo teste.\n##### 3 - Aplicar o Tampão\nDispense 3 gotas no tampão na cavidade inferior e maior do dispositivo teste.\n##### 4 - Leitura do Resultado\nLeia o resultado do teste em 15 minutos.`,
  attentionPoints: `Utilize SEMPRE a pipeta do kit para a coleta de amostra. Não utilize pipeta de outro kit.\n\n\nColete sempre o volume de amostras indicado pela marcação preta da pipeta e na bula do teste. Nunca pingue o sangue direto do dedo do paciente no teste.\n\n\nNão utilize tampão outros kits, utlize somente o tampão que acompanha os testes do seu kit.\n\n\nNunca fracione os tampões. Não encostar a ponta do tampão na membrana do dispositivo.\n\n\nAplicar o sangue etampão em suas respectivas cavidades sem extravasar.\n\n\nAtentar ao local de aplicação do sangue e do tampão. NUNCA inverter os locais.\n\n\nCertifique-se que não há presença de bolhas de ar na coleta da amostra.\n\n\nAplique primeiro o sangue e depois o tampão, e fique atento ao tempo - o sangue não pode coagular.\n\n\nLeia o teste no tempo indicado. Jamais leia o teste após o tempo indicado.`,
};

module.exports = [
  {
    guideline,
    procedureFields: [
      {
        key: 'indication',
        label: 'Indicação',
        position: 1,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 500,
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'vaccine',
        label: 'Vacina',
        position: 2,
        type: 'SELECT',
        values: [
          {
            key: 'twinrix',
            label: 'Twinrix',
            data: {
              fabricante: 'GSK',
            },
          },
        ],
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'pharmaceutical_form',
        label: 'Forma farmacêutica',
        position: 3,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 500,
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'ms_number',
        label: 'Número MS',
        position: 4,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          required: true,
          numbersOnly: true,
          currentDate: false,
        },
      },
      {
        key: 'lot',
        label: 'Lote',
        position: 5,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'administered_dose',
        label: 'Dose administrada',
        position: 6,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 30,
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'shelf_life',
        label: 'Validade',
        position: 7,
        type: 'DATE',
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'next_vaccine',
        label: 'Data da próxima vacina',
        position: 8,
        type: 'DATE',
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'via_administration',
        label: 'Via de administração',
        position: 9,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'dosage',
        label: 'Posologia',
        position: 10,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'application_location',
        label: 'Local de aplicação',
        position: 11,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 200,
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'side',
        label: 'Lado',
        position: 12,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'prescriber_name',
        label: 'Nome do prescritor',
        position: 13,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 300,
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'crm',
        label: 'CRM',
        position: 14,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 50,
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 15,
        type: 'TEXTAREA',
        validations: {
          min: 1,
          max: 1000,
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
        position: 16,
        type: 'BOOLEAN',
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a assistência farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento de seu histórico de vacinas',
        position: 17,
        type: 'BOOLEAN',
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    info: 'Diretamente na farmácia',
    name: 'Hepatite A e B',
    id: '5fc9607adea2302e164d721f',
    type: 'VACCINE',
  },
  {
    preparation: 'Não é necessário preparo.',
    guideline,
    procedureFields: [
      {
        key: 'indication',
        label: 'Indicação',
        position: 1,
        type: 'TEXT',
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
        key: 'pharmaceutical_form',
        label: 'Forma farmacêutica',
        position: 3,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 500,
          required: true,
        },
      },
      {
        key: 'ms_number',
        label: 'Número MS',
        position: 4,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          numbersOnly: true,
          required: true,
        },
      },
      {
        key: 'lot',
        label: 'Lote',
        position: 5,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          required: true,
        },
      },
      {
        key: 'administered_dose',
        label: 'Dose administrada',
        position: 6,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 30,
          required: true,
        },
      },
      {
        key: 'shelf_life',
        label: 'Validade',
        position: 7,
        type: 'DATE',
        validations: {
          required: true,
        },
      },
      {
        key: 'next_vaccine',
        label: 'Data da próxima vacina',
        position: 8,
        type: 'DATE',
        validations: {
          required: false,
        },
      },
      {
        key: 'via_administration',
        label: 'Via de administração',
        position: 9,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'dosage',
        label: 'Posologia',
        position: 10,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
          required: true,
        },
      },
      {
        key: 'application_location',
        label: 'Local de aplicação',
        position: 11,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 200,
          required: true,
        },
      },
      {
        key: 'side',
        label: 'Lado',
        position: 12,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'prescriber_name',
        label: 'Nome do prescritor',
        position: 13,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 300,
          required: false,
        },
      },
      {
        key: 'crm',
        label: 'CRM',
        position: 14,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 50,
          required: false,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 15,
        type: 'TEXTAREA',
        validations: {
          min: 1,
          max: 1000,
          required: false,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
        position: 16,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
      {
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a assistência farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento de seu histórico de vacinas',
        position: 17,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    info: 'Diretamente na farmácia',
    description:
      'Indicada para imunização ativa para a prevenção da influenza causada pelos subtipos A e B de vírus influenza.',
    name: 'Gripe tetravalente',
    id: '5fc9607bdea2302e164d7220',
    type: 'VACCINE',
  },
  {
    preparation: 'Em caso de febre recomenda-se adiar a vacinação até a melhora.',
    guideline,
    procedureFields: [
      {
        key: 'indication',
        label: 'Indicação',
        position: 1,
        type: 'TEXT',
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
        type: 'SELECT',
        values: [
          {
            key: 'stamaril',
            label: 'Stamaril',
            data: {
              fabricante: 'Sanofi',
            },
          },
        ],
      },
      {
        key: 'pharmaceutical_form',
        label: 'Forma farmacêutica',
        position: 3,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 500,
          required: true,
        },
      },
      {
        key: 'ms_number',
        label: 'Número MS',
        position: 4,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          numbersOnly: true,
          required: true,
        },
      },
      {
        key: 'lot',
        label: 'Lote',
        position: 5,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          required: true,
        },
      },
      {
        key: 'administered_dose',
        label: 'Dose administrada',
        position: 6,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 30,
          required: true,
        },
      },
      {
        key: 'shelf_life',
        label: 'Validade',
        position: 7,
        type: 'DATE',
        validations: {
          required: true,
        },
      },
      {
        key: 'next_vaccine',
        label: 'Data da próxima vacina',
        position: 8,
        type: 'DATE',
        validations: {
          required: false,
        },
      },
      {
        key: 'via_administration',
        label: 'Via de administração',
        position: 9,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'dosage',
        label: 'Posologia',
        position: 10,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
          required: true,
        },
      },
      {
        key: 'application_location',
        label: 'Local de aplicação',
        position: 11,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 200,
          required: true,
        },
      },
      {
        key: 'side',
        label: 'Lado',
        position: 12,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'prescriber_name',
        label: 'Nome do prescritor',
        position: 13,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 300,
          required: false,
        },
      },
      {
        key: 'crm',
        label: 'CRM',
        position: 14,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 50,
          required: false,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 15,
        type: 'TEXTAREA',
        validations: {
          min: 1,
          max: 1000,
          required: false,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
        position: 16,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
      {
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a assistência farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento de seu histórico de vacinas',
        position: 17,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    info: 'Diretamente na farmácia',
    description:
      'A vacina febre amarela (atenuada) é utilizada na prevenção da febre amarela, doença causada por um arbovírus da família Flaviviridae, do gênero Flavivírus. É recomendada para vacinação em áreas endêmicas ou epizoóticas ou para os viajantes que a elas se destinam.',
    name: 'Febre Amarela',
    id: '5fc9607cdea2302e164d7221',
    type: 'VACCINE',
  },
  {
    preparation: 'Em caso de febre, deve-se adiar a vacinação até que ocorra a melhora.',
    guideline,
    procedureFields: [
      {
        key: 'indication',
        label: 'Indicação',
        position: 1,
        type: 'TEXT',
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
        type: 'SELECT',
        values: [
          {
            key: 'gardasil',
            label: 'Gardasil',
            data: {
              fabricante: 'MSD',
            },
          },
        ],
      },
      {
        key: 'pharmaceutical_form',
        label: 'Forma farmacêutica',
        position: 3,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 500,
          required: true,
        },
      },
      {
        key: 'ms_number',
        label: 'Número MS',
        position: 4,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          numbersOnly: true,
          required: true,
        },
      },
      {
        key: 'lot',
        label: 'Lote',
        position: 5,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          required: true,
        },
      },
      {
        key: 'administered_dose',
        label: 'Dose administrada',
        position: 6,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 30,
          required: true,
        },
      },
      {
        key: 'shelf_life',
        label: 'Validade',
        position: 7,
        type: 'DATE',
        validations: {
          required: true,
        },
      },
      {
        key: 'next_vaccine',
        label: 'Data da próxima vacina',
        position: 8,
        type: 'DATE',
        validations: {
          required: false,
        },
      },
      {
        key: 'via_administration',
        label: 'Via de administração',
        position: 9,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'dosage',
        label: 'Posologia',
        position: 10,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
          required: true,
        },
      },
      {
        key: 'application_location',
        label: 'Local de aplicação',
        position: 11,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 200,
          required: true,
        },
      },
      {
        key: 'side',
        label: 'Lado',
        position: 12,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'prescriber_name',
        label: 'Nome do prescritor',
        position: 13,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 300,
          required: false,
        },
      },
      {
        key: 'crm',
        label: 'CRM',
        position: 14,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 50,
          required: false,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 15,
        type: 'TEXTAREA',
        validations: {
          min: 1,
          max: 1000,
          required: false,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
        position: 16,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
      {
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a assistência farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento de seu histórico de vacinas',
        position: 17,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    info: 'Diretamente na farmácia',
    description:
      'A vacina de HPV protege contra verrugas genitais e infecções persistentes, lesões pré-malignas e malignas causadas pelos tipos de HPV 6,11,16,18. Indicado para ambos os sexos a partir dos 9 anos de idade.',
    name: 'HPV',
    id: '5fc9607cdea2302e164d7222',
    type: 'VACCINE',
  },
  {
    preparation: 'Em caso de febre, deve-se adiar a vacinação até que ocorra a melhora.',
    guideline,
    procedureFields: [
      {
        key: 'indication',
        label: 'Indicação',
        position: 1,
        type: 'TEXT',
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
        type: 'SELECT',
        values: [
          {
            key: 'zostavax',
            label: 'Zostavax',
            data: {
              fabricante: 'MSD',
            },
          },
        ],
      },
      {
        key: 'pharmaceutical_form',
        label: 'Forma farmacêutica',
        position: 3,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 500,
          required: true,
        },
      },
      {
        key: 'ms_number',
        label: 'Número MS',
        position: 4,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          numbersOnly: true,
          required: true,
        },
      },
      {
        key: 'lot',
        label: 'Lote',
        position: 5,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          required: true,
        },
      },
      {
        key: 'administered_dose',
        label: 'Dose administrada',
        position: 6,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 30,
          required: true,
        },
      },
      {
        key: 'shelf_life',
        label: 'Validade',
        position: 7,
        type: 'DATE',
        validations: {
          required: true,
        },
      },
      {
        key: 'next_vaccine',
        label: 'Data da próxima vacina',
        position: 8,
        type: 'DATE',
        validations: {
          required: false,
        },
      },
      {
        key: 'via_administration',
        label: 'Via de administração',
        position: 9,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'dosage',
        label: 'Posologia',
        position: 10,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
          required: true,
        },
      },
      {
        key: 'application_location',
        label: 'Local de aplicação',
        position: 11,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 200,
          required: true,
        },
      },
      {
        key: 'side',
        label: 'Lado',
        position: 12,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'prescriber_name',
        label: 'Nome do prescritor',
        position: 13,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 300,
          required: false,
        },
      },
      {
        key: 'crm',
        label: 'CRM',
        position: 14,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 50,
          required: false,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 15,
        type: 'TEXTAREA',
        validations: {
          min: 1,
          max: 1000,
          required: false,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
        position: 16,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
      {
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a assistência farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento de seu histórico de vacinas',
        position: 17,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    info: 'Diretamente na farmácia',
    description:
      'Previne o vírus herpes zoster e sua principal complicação, a neuropatia pós-herpética, responsável por dor crônica, prolongada, de difícil controle e extremamente debilitante.',
    name: 'Herpes Zoster',
    id: '5fc9607ddea2302e164d7223',
    type: 'VACCINE',
  },
  {
    preparation: 'Em caso de febre, deve-se adiar a vacinação até que ocorra a melhora.',
    guideline,
    procedureFields: [
      {
        key: 'indication',
        label: 'Indicação',
        position: 1,
        type: 'TEXT',
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
        type: 'SELECT',
        values: [
          {
            key: 'mmrii',
            label: 'MMRII',
            data: {
              fabricante: 'MSD',
            },
          },
        ],
      },
      {
        key: 'pharmaceutical_form',
        label: 'Forma farmacêutica',
        position: 3,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 500,
          required: true,
        },
      },
      {
        key: 'ms_number',
        label: 'Número MS',
        position: 4,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          numbersOnly: true,
          required: true,
        },
      },
      {
        key: 'lot',
        label: 'Lote',
        position: 5,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          required: true,
        },
      },
      {
        key: 'administered_dose',
        label: 'Dose administrada',
        position: 6,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 30,
          required: true,
        },
      },
      {
        key: 'shelf_life',
        label: 'Validade',
        position: 7,
        type: 'DATE',
        validations: {
          required: true,
        },
      },
      {
        key: 'next_vaccine',
        label: 'Data da próxima vacina',
        position: 8,
        type: 'DATE',
        validations: {
          required: false,
        },
      },
      {
        key: 'via_administration',
        label: 'Via de administração',
        position: 9,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'dosage',
        label: 'Posologia',
        position: 10,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
          required: true,
        },
      },
      {
        key: 'application_location',
        label: 'Local de aplicação',
        position: 11,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 200,
          required: true,
        },
      },
      {
        key: 'side',
        label: 'Lado',
        position: 12,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'prescriber_name',
        label: 'Nome do prescritor',
        position: 13,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 300,
          required: false,
        },
      },
      {
        key: 'crm',
        label: 'CRM',
        position: 14,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 50,
          required: false,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 15,
        type: 'TEXTAREA',
        validations: {
          min: 1,
          max: 1000,
          required: false,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
        position: 16,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
      {
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a assistência farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento de seu histórico de vacinas',
        position: 17,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    info: 'Diretamente na farmácia',
    description:
      'A Vacina Tríplice Viral é indicada para proteger contra 3 doença virais, o Sarampo, Caxumba e Rubéola.',
    name: 'Tríplice Viral (Sarampo, Caxumba e Rubéola)',
    id: '5fc9607ddea2302e164d7224',
    type: 'VACCINE',
  },
  {
    preparation: 'Em caso de febre, deve-se adiar a vacinação até que ocorra a melhora.',
    guideline,
    procedureFields: [
      {
        key: 'indication',
        label: 'Indicação',
        position: 1,
        type: 'TEXT',
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
        type: 'SELECT',
        values: [
          {
            key: 'bexsero',
            label: 'Bexsero',
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
        type: 'TEXT',
        validations: {
          min: 5,
          max: 500,
          required: true,
        },
      },
      {
        key: 'ms_number',
        label: 'Número MS',
        position: 4,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          numbersOnly: true,
          required: true,
        },
      },
      {
        key: 'lot',
        label: 'Lote',
        position: 5,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          required: true,
        },
      },
      {
        key: 'administered_dose',
        label: 'Dose administrada',
        position: 6,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 30,
          required: true,
        },
      },
      {
        key: 'shelf_life',
        label: 'Validade',
        position: 7,
        type: 'DATE',
        validations: {
          required: true,
        },
      },
      {
        key: 'next_vaccine',
        label: 'Data da próxima vacina',
        position: 8,
        type: 'DATE',
        validations: {
          required: false,
        },
      },
      {
        key: 'via_administration',
        label: 'Via de administração',
        position: 9,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'dosage',
        label: 'Posologia',
        position: 10,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
          required: true,
        },
      },
      {
        key: 'application_location',
        label: 'Local de aplicação',
        position: 11,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 200,
          required: true,
        },
      },
      {
        key: 'side',
        label: 'Lado',
        position: 12,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'prescriber_name',
        label: 'Nome do prescritor',
        position: 13,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 300,
          required: false,
        },
      },
      {
        key: 'crm',
        label: 'CRM',
        position: 14,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 50,
          required: false,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 15,
        type: 'TEXTAREA',
        validations: {
          min: 1,
          max: 1000,
          required: false,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
        position: 16,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
      {
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a assistência farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento de seu histórico de vacinas',
        position: 17,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    info: 'Diretamente na farmácia',
    description:
      'Previne Meningites e infecções generalizadas causadas pela bactéria meningococo do tipo B.',
    name: 'Meningite B',
    id: '5fc9607edea2302e164d7225',
    type: 'VACCINE',
  },
  {
    preparation: 'Em caso de febre, deve-se adiar a vacinação até que ocorra a melhora.',
    guideline,
    procedureFields: [
      {
        key: 'indication',
        label: 'Indicação',
        position: 1,
        type: 'TEXT',
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
        type: 'SELECT',
        values: [
          {
            key: 'prevanar',
            label: 'Prevenar 13',
            data: {
              fabricante: 'Pfizer',
            },
          },
          {
            key: 'pneumovax',
            label: 'Pneumovax 23',
            data: {
              fabricante: 'MSD',
            },
          },
        ],
      },
      {
        key: 'pharmaceutical_form',
        label: 'Forma farmacêutica',
        position: 3,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 500,
          required: true,
        },
      },
      {
        key: 'ms_number',
        label: 'Número MS',
        position: 4,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          numbersOnly: true,
          required: true,
        },
      },
      {
        key: 'lot',
        label: 'Lote',
        position: 5,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          required: true,
        },
      },
      {
        key: 'administered_dose',
        label: 'Dose administrada',
        position: 6,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 30,
          required: true,
        },
      },
      {
        key: 'shelf_life',
        label: 'Validade',
        position: 7,
        type: 'DATE',
        validations: {
          required: true,
        },
      },
      {
        key: 'next_vaccine',
        label: 'Data da próxima vacina',
        position: 8,
        type: 'DATE',
        validations: {
          required: false,
        },
      },
      {
        key: 'via_administration',
        label: 'Via de administração',
        position: 9,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'dosage',
        label: 'Posologia',
        position: 10,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
          required: true,
        },
      },
      {
        key: 'application_location',
        label: 'Local de aplicação',
        position: 11,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 200,
          required: true,
        },
      },
      {
        key: 'side',
        label: 'Lado',
        position: 12,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'prescriber_name',
        label: 'Nome do prescritor',
        position: 13,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 300,
          required: false,
        },
      },
      {
        key: 'crm',
        label: 'CRM',
        position: 14,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 50,
          required: false,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 15,
        type: 'TEXTAREA',
        validations: {
          min: 1,
          max: 1000,
          required: false,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
        position: 16,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
      {
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a assistência farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento de seu histórico de vacinas',
        position: 17,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    info: 'Diretamente na farmácia',
    description:
      'A vacina pneumocócica conjungada 13 previne os 13 sorotipos de doença pneumocócica (incluindo pneumonia e doença invasiva) causada pelo Streptococcus pneumoniae dos sorotipos 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F e 23F.',
    name: 'Pneumonia (13-valente)',
    id: '5fc9607edea2302e164d7226',
    type: 'VACCINE',
  },
  {
    price: 15,
    preparation:
      'Aconselhável aguardar 2 horas após refeições, após ingerir grande quantidades de líquido e após ingerir bebida alcoólica.',
    guideline,
    procedureFields: [
      {
        key: 'weight',
        label: 'Peso',
        position: 1,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 999.99,
        },
      },
      {
        key: 'height',
        label: 'Altura',
        position: 2,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 9.99,
        },
      },
      {
        key: 'IMC',
        label: 'IMC',
        position: 3,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 100,
        },
        data: {
          unit: 'kg/m2',
        },
      },
      {
        key: 'body_fat',
        label: 'Gordura corporal',
        position: 4,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 100,
        },
        data: {
          unit: '%',
        },
      },
      {
        key: 'skeletal_muscles',
        label: 'Músculos esqueléticos',
        position: 5,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 100,
        },
        data: {
          unit: '%',
        },
      },
      {
        key: 'visceral_fat',
        label: 'Gordura visceral',
        position: 6,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 100,
        },
        data: {
          unit: '%',
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 7,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
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
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a assistência farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento do histórico de avaliações.',
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
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    result: 'Resultado em 15 min.',
    description:
      'A bioimpedância é um exame destinado à avaliação da composição corporal, estimando a massa magra, gordura corporal, água corporal total, entre outros dados que proporcionam informações mais precisas sobre o estado nutricional do paciente.',
    name: 'Bioimpedância',
    id: '5fc9607fdea2302e164d7227',
    type: 'PHARMA_SERVICE',
  },
  {
    preparation: 'Não é necessário preparo.',
    guideline,
    procedureFields: [
      {
        key: 'asymptomatic',
        label: 'Assintomático?',
        position: 1,
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
        key: 'question',
        label:
          'Apresentou algum sintoma abaixo nos últimos 8 dias? (Em caso de sintomas apresentados em menos de 8 dias o resultado IgM (fase aguda) não será preciso/satisfatório)',
        position: 2,
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
        position: 3,
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
        key: 'dyspnea',
        label: 'Dispnéia?',
        position: 4,
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
        key: 'fever',
        label: 'Febre?',
        position: 5,
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
        key: 'other_symptoms',
        label: 'Outros sintomas',
        position: 7,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 500,
        },
      },
      {
        key: 'symptoms_date',
        label: 'Data de início dos sintomas',
        position: 8,
        type: 'DATE',
      },
      {
        key: 'decompensated_respiratory_diseases',
        label: 'Doenças respiratórias descompensadas?',
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
        key: 'chronic_heart_disease',
        label: 'Doença cardíacas crônicas?',
        position: 10,
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
        position: 11,
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
        position: 12,
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
        position: 13,
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
        key: 'high_risk_pregnant',
        label: 'Gestante de alto risco?',
        position: 14,
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
        position: 15,
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
        key: 'covid19_contact',
        label: 'Teve contato com paciente confirmado ou suspeito de Covid-19?',
        position: 16,
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
        key: 'healthcare_professional',
        label: 'É profissional da área da saúde?',
        position: 17,
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
        key: 'healthcare_professional_area',
        label: 'Se sim, qual a área?',
        position: 18,
        type: 'TEXT',
        validations: {
          required: false,
          min: 1,
          max: 200,
        },
      },
      {
        key: 'test_used',
        label: 'Teste utilizado',
        position: 19,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
        },
      },
      {
        key: 'maker',
        label: 'Fabricante',
        position: 20,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
        },
      },
      {
        key: 'ms_number',
        label: 'Número MS',
        position: 21,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 20,
          numbersOnly: true,
        },
      },
      {
        key: 'lot',
        label: 'Lote',
        position: 22,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
        },
      },
      {
        key: 'shelf_life',
        label: 'Validade',
        position: 23,
        type: 'DATE',
      },
      {
        key: 'sample_type',
        label: 'Tipo de amostra',
        position: 24,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 100,
        },
      },
      {
        key: 'exam_applicant',
        label: 'Solicitante do exame',
        position: 25,
        type: 'TEXT',
        validations: {
          required: false,
          min: 1,
          max: 300,
        },
      },
      {
        key: 'IgM',
        label: 'IgM',
        position: 26,
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
        key: 'IgG',
        label: 'IgG',
        position: 27,
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
        key: 'observation',
        label: 'Observação',
        position: 28,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a atenção farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento do histórico e está ciente que os mesmos serão armazenadas pelo período de 5 anos segundo a RDC 44/09 da Anvisa.',
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
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    result: 'Resultado em 15 min.',
    info: 'Diretamente na farmácia',
    description:
      'O teste rápido para coronavírus (anticorpos) é um exame indicado para pacientes com suspeita de Covid-19 , que apresentam sintomas compativeis a uma gripe há pelo menos 8 dias ou pacientes assintomáticos que tiveram possível exposição ao vírus há pelo menos 20 dias. Essa precaução reduz a chance de resultados falso-negativos.',
    name: 'Covid 19 - Sorológico',
    id: '5fc9607fdea2302e164d7228',
    type: 'PHARMA_SERVICE',
  },
  {
    price: 15,
    guideline,
    procedureFields: [
      {
        key: 'diabetes',
        label: 'Diabetes?',
        position: 1,
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
        key: 'hemophilia',
        label: 'Hemofilia?',
        position: 2,
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
        key: 'coagulation_disorders',
        label: 'Disturbios de coagulação?',
        position: 3,
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
        key: 'ear_inflammation',
        label: 'Inflamação no local?',
        position: 4,
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
        key: 'cysts_wounds_or_pimples',
        label: 'Sinais de cistos, feridas ou espinhas?',
        position: 5,
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
        key: 'earring_manufacturer_name',
        label: 'Nome do fabricante do brinco',
        position: 6,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
        },
      },
      {
        key: 'CNPJ_earring_manufacturer',
        label: 'CNPJ do fabricante do brinco',
        position: 7,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 14,
          numbersOnly: true,
        },
      },
      {
        key: 'lot_earring',
        label: 'Lote',
        position: 8,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
        },
      },
      {
        key: 'pistol_manufacturer_name',
        label: 'Nome do fabricante da pistola',
        position: 9,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
        },
      },
      {
        key: 'CNPJ_pistol_manufacturer',
        label: 'CNPJ do fabricante da pistola',
        position: 10,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 14,
          numbersOnly: true,
        },
      },
      {
        key: 'lot_pistol',
        label: 'Lote',
        position: 11,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 12,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
        position: 13,
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
        key: 'user_authorization',
        label: 'O usuário autoriza o uso das informações para assistência farmacêutica.',
        position: 14,
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
    description:
      'Este procedimento trata-se de perfuração de lóbulo de orelha (colocação de brincos).',
    name: 'Perfuração de Lóbulo',
    id: '5fc96080dea2302e164d7229',
    type: 'PHARMA_SERVICE',
  },
  {
    price: 8.5,
    guideline,
    procedureFields: [
      {
        key: 'hypertension',
        label: 'Hipertensão?',
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
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'dislipidemia',
        label: 'Dislipidemia?',
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
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'diabetes',
        label: 'Diabetes?',
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
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'kidney_disease',
        label: 'Doença renal?',
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
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'previous_stroke',
        label: 'Acidente cerebrovascular prévio?',
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
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'revascularization_angioplasties',
        label: 'Revascularização/Angioplastias?',
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
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'history_diabetes',
        label: 'Histórico familiar de diabetes?',
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
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'smoking',
        label: 'Tabagismo?',
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
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'peripheral_arterial_disease',
        label: 'Doença arterial periférica?',
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
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'cardiac_insufficiency',
        label: 'Insuficiência Cardíaca?',
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
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'metabolic_syndrome',
        label: 'Sindrome metabólica?',
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
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'heart_attack_or_angina',
        label: 'Histórico de infarto ou angina?',
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
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'capillary_glycemia',
        label: 'Glicemia capilar',
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 500,
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
        data: {
          unit: 'mg/dl',
        },
      },
      {
        key: 'fasting_casual',
        label: 'Jejum/Casual',
        type: 'BOOLEAN',
        values: [
          {
            key: 'true',
            label: 'Jejum',
          },
          {
            key: 'false',
            label: 'Casual',
          },
        ],
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'guidelines',
        label: 'Orientações',
        type: 'TEXTAREA',
        validations: {
          min: 1,
          max: 1000,
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        type: 'TEXTAREA',
        validations: {
          min: 1,
          max: 1000,
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
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
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a assistência farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento do histórico glicêmico',
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
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    name: 'Glicemia',
    id: '5fc96080dea2302e164d722a',
    type: 'PHARMA_SERVICE',
  },
  {
    price: 5,
    preparation:
      '1- Recomenda-se repouso de 15 minutos, caso o paciente venha caminhando até a filial. 2- Após Alcool, café, exercício ou fumo, aguarde 30 minutos para medir 3- Deve-se esvaziar a bexiga',
    guideline,
    procedureFields: [
      {
        key: 'hypertension',
        label: 'Hipertensão?',
        position: 1,
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
        key: 'dislipidemia',
        label: 'Dislipidemia?',
        position: 2,
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
        position: 3,
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
        key: 'kidney_disease',
        label: 'Doença renal?',
        position: 4,
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
        key: 'previous_stroke',
        label: 'Acidente cerebrovascular prévio?',
        position: 5,
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
        key: 'revascularization_angioplasties',
        label: 'Revascularização/Angioplastias?',
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
        key: 'history_diabetes',
        label: 'Histórico familiar de diabetes?',
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
        key: 'smoking',
        label: 'Tabagismo?',
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
        key: 'peripheral_arterial_disease',
        label: 'Doença arterial periférica?',
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
        key: 'cardiac_insufficiency',
        label: 'Insuficiência Cardíaca?',
        position: 10,
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
        key: 'metabolic_syndrome',
        label: 'Sindrome metabólica?',
        position: 11,
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
        key: 'heart_attack_or_angina',
        label: 'Histórico de infarto ou angina?',
        position: 12,
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
        key: 'systolic_blood_pressure',
        label: 'Pressão arterial - sistólica',
        position: 13,
        type: 'INTEGER',
        validations: {
          min: 1,
          max: 300,
        },
        data: {
          unit: 'mmHg',
        },
      },
      {
        key: 'diastolic_blood_pressure',
        label: 'Pressão arterial - diastólica',
        position: 14,
        type: 'INTEGER',
        validations: {
          min: 1,
          max: 300,
        },
        data: {
          unit: 'mmHg',
        },
      },
      {
        key: 'heart_rate',
        label: 'Frequência Cardiaca',
        position: 15,
        type: 'INTEGER',
        validations: {
          min: 1,
          max: 300,
        },
        data: {
          unit: 'bpm',
        },
      },
      {
        key: 'guidelines',
        label: 'Orientações',
        position: 16,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 17,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
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
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a assistência farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento do histórico de medição depressão arterial',
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
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    result: 'Resultado em 5 min.',
    description:
      'É a condição clínica multifatorial caracterizada por elevação sustentada dos níveis pressóricos ≥ 140 e/ou 90 mmHg.',
    name: 'Pressão Arterial',
    id: '5fc96081dea2302e164d722b',
    type: 'PHARMA_SERVICE',
  },
  {
    price: 15,
    preparation: 'Não é necessário preparo.',
    guideline,
    procedureFields: [
      {
        key: 'diabetes',
        label: 'Diabetes?',
        position: 1,
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
        key: 'lot',
        label: 'Lote',
        position: 2,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
        },
      },
      {
        key: 'shelf_life',
        label: 'Validade',
        position: 3,
        type: 'DATE',
      },
      {
        key: 'application_location',
        label: 'Local de aplicação',
        position: 4,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 200,
        },
      },
      {
        key: 'guidelines',
        label: 'Orientações',
        position: 5,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 6,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
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
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a assistência farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento do histórico de aplicações.',
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
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    description:
      'Aplicação do sensor libre no paciente. É um medidor de glicose livre de picadas. Este sensor permite a verificação da glicose quantas vezes o paciente quiser por até 2 semanas com um rápido “scan”. Ele também permite ver impactos nos níveis de glicose, causados por alimentos e insulina.',
    name: 'Aplicação de Libre',
    id: '5fc96081dea2302e164d722c',
    type: 'PHARMA_SERVICE',
  },
  {
    price: 5,
    preparation: 'Não é necessário preparo.',
    guideline,
    procedureFields: [
      {
        key: 'saturation',
        label: 'Saturação',
        position: 1,
        type: 'FLOAT',
        validations: {
          min: 0,
          max: 100,
        },
        data: {
          unit: '%',
        },
      },
      {
        key: 'guidelines',
        label: 'Orientações',
        position: 2,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 3,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
        position: 4,
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
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a assistência farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento do histórico de avaliações',
        position: 5,
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
    result: 'Resultado em 5 min.',
    description:
      'Este procedimento mede a porcentagem de oxigênio nas células sanguíneas.',
    name: 'Oximetria',
    id: '5fc96082dea2302e164d722d',
    type: 'PHARMA_SERVICE',
  },
  {
    guideline,
    procedureFields: [
      {
        key: 'body_temperature',
        label: 'Temperatura Corporal',
        position: 1,
        type: 'FLOAT',
        validations: {
          min: 0,
          max: 60,
        },
        data: {
          unit: 'ºC',
        },
      },
      {
        key: 'guidelines',
        label: 'Orientações',
        position: 2,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 3,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
        position: 4,
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
        key: 'user_authorization',
        label: 'O usuário autoriza o uso das informações para assistência farmacêutica',
        position: 5,
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
    info: 'Gratuito',
    description:
      'É a mensuração da temperatura corporal por meio de um termômetro clínico.',
    name: 'Temperatura Corporal',
    id: '5fc96082dea2302e164d722e',
    type: 'PHARMA_SERVICE',
  },
  {
    guideline,
    procedureFields: [
      {
        key: 'prescriber_name',
        label: 'Nome do Prescritor',
        position: 1,
        type: 'TEXT',
        validations: {
          required: false,
          min: 1,
          max: 500,
        },
      },
      {
        key: 'prescriber_CRM_CRO',
        label: 'CRM/CRO do Prescritor',
        position: 2,
        type: 'TEXT',
        validations: {
          required: false,
          min: 1,
          max: 50,
        },
      },
      {
        key: 'medicine',
        label: 'Medicamento',
        position: 3,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 150,
        },
      },
      {
        key: 'substance',
        label: 'Substância',
        position: 4,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 400,
        },
      },
      {
        key: 'concentration',
        label: 'Concentração',
        position: 5,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 100,
        },
      },
      {
        key: 'pharmaceutical_form',
        label: 'Forma Farmacêutica',
        position: 6,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 100,
        },
      },
      {
        key: 'ms_number',
        label: 'Número MS',
        position: 7,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 20,
          numbersOnly: true,
        },
      },
      {
        key: 'lot',
        label: 'Lote',
        position: 8,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
        },
      },
      {
        key: 'shelf_life',
        label: 'Validade',
        position: 9,
        type: 'DATE',
      },
      {
        key: 'dosage',
        label: 'Posologia',
        position: 10,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
        },
      },
      {
        key: 'via_administration',
        label: 'Via de administração',
        position: 11,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
        },
      },
      {
        key: 'application_location',
        label: 'Local de aplicação',
        position: 12,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 200,
        },
      },
      {
        key: 'side',
        label: 'Lado',
        position: 13,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
        },
      },
      {
        key: 'responsible_service',
        label: 'Responsável pelo atendimento',
        position: 14,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 150,
        },
      },
      {
        key: 'responsible_registration',
        label: 'Matrícula do responsável',
        position: 15,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 50,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 16,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
        position: 17,
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
        key: 'user_authorization',
        label: 'O usuário autoriza o uso das informações para assistência farmacêutica',
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
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    info: 'Diretamente na farmácia',
    description: 'Aplicação de medicamentos injetáveis.',
    name: 'Aplicação de injetáveis',
    id: '5fc96083dea2302e164d722f',
    type: 'PHARMA_SERVICE',
  },
  {
    price: 120,
    preparation: 'Não é necessário preparo.',
    guideline,
    procedureFields: [
      {
        key: 'IgM',
        label: 'IgM',
        position: 1,
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
        key: 'IgG',
        label: 'IgG',
        position: 2,
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
        key: 'observation',
        label: 'Observação',
        position: 3,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'upload_medical_report',
        label: 'Anexar laudo médico',
        position: 4,
        type: 'FILE_UPLOAD',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: true,
    emitDeclaration: false,
    result: 'Resultado em 15 min.',
    description:
      'O Teste de Zika verifica o contato com o vírus Zika no organismo para o diagnóstico precoce, evitando que as complicações se desenvolvam gravemente ou deixem sequelas.',
    name: 'Zika',
    id: '5fc96084dea2302e164d7231',
    type: 'RAPID_TEST',
  },
  {
    price: 120,
    preparation: 'Não é necessário preparo.',
    guideline,
    procedureFields: [
      {
        key: 'IgM',
        label: 'IgM',
        position: 1,
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
        key: 'IgG',
        label: 'IgG',
        position: 2,
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
        key: 'observation',
        label: 'Observação',
        position: 3,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'upload_medical_report',
        label: 'Anexar laudo médico',
        position: 4,
        type: 'FILE_UPLOAD',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: true,
    emitDeclaration: false,
    result: 'Resultado em 15 min.',
    description:
      'O Teste de Chikungunya verifica o contato com o vírus Chikungunya no organismo.',
    name: 'Chikungunya',
    id: '5fc96084dea2302e164d7232',
    type: 'RAPID_TEST',
  },
  {
    price: 60,
    preparation: 'Não é necessário preparo.',
    guideline,
    procedureFields: [
      {
        key: 'IgM',
        label: 'IgM',
        position: 1,
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
        key: 'IgG',
        label: 'IgG',
        position: 2,
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
        key: 'observation',
        label: 'Observação',
        position: 3,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'upload_medical_report',
        label: 'Anexar laudo médico',
        position: 4,
        type: 'FILE_UPLOAD',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: true,
    emitDeclaration: false,
    result: 'Resultado em 15 min.',
    description:
      'O Teste de Dengue verifica o contato com o vírus da dengue no organismo para o diagnóstico precoce, evitando que as complicações se desenvolvam gravemente.',
    name: 'Dengue',
    id: '5fc96085dea2302e164d7233',
    type: 'RAPID_TEST',
  },
  {
    price: 120,
    preparation: 'Em caso de febre recomenda-se adiar a vacinação até a melhora.',
    guideline,
    procedureFields: [
      {
        key: 'IgM',
        label: 'IgM',
        position: 1,
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
        key: 'IgG',
        label: 'IgG',
        position: 2,
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
        key: 'observation',
        label: 'Observação',
        position: 3,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'upload_medical_report',
        label: 'Anexar laudo médico',
        position: 4,
        type: 'FILE_UPLOAD',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: true,
    emitDeclaration: false,
    result: 'Resultado em 15 min.',
    description:
      'Exame detecta a presença do vírus da Febre Amarela. O diagnóstico precoce ajuda no tratamento do paciente.',
    name: 'Febre Amarela',
    id: '5fc96085dea2302e164d7234',
    type: 'RAPID_TEST',
  },
  {
    price: 65,
    preparation: 'Não é necessário preparo.',
    guideline,
    procedureFields: [
      {
        key: 'Result',
        label: 'Resultado',
        position: 1,
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
        key: 'observation',
        label: 'Observação',
        position: 2,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'upload_medical_report',
        label: 'Anexar laudo médico',
        position: 3,
        type: 'FILE_UPLOAD',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: true,
    emitDeclaration: false,
    result: 'Resultado em 15 min.',
    description:
      'O Teste de Hepatite C verifica o contato com o vírus C (HCV) no organismo e auxilia no diagnóstico precoce e tratamento adequado.',
    name: 'Hepatite C',
    id: '5fc96086dea2302e164d7235',
    type: 'RAPID_TEST',
  },
  {
    price: 20,
    preparation: 'Não é necessário preparo.',
    guideline,
    procedureFields: [
      {
        key: 'hb_hemoglobin',
        label: 'Hemoglobina - HB',
        position: 1,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 100,
        },
        data: {
          unit: 'g/dL',
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 2,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'upload_medical_report',
        label: 'Anexar laudo médico',
        position: 3,
        type: 'FILE_UPLOAD',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: true,
    emitDeclaration: false,
    result: 'Resultado em 15 min.',
    description:
      'Dosagem da hemoglobina, ou Hb, é um componente dos glóbulos vermelhos do sangue e tem como principal função transportar oxigênio para os tecidos.',
    name: 'Hemoglobina - HB',
    id: '5fc96086dea2302e164d7236',
    type: 'RAPID_TEST',
  },
  {
    price: 30,
    preparation: 'Não é necessário preparo.',
    guideline,
    procedureFields: [
      {
        key: 'uric_acid',
        label: 'Ácido Úrico',
        position: 1,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 100,
        },
        data: {
          unit: 'mg/dL',
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 2,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'upload_medical_report',
        label: 'Anexar laudo médico',
        position: 3,
        type: 'FILE_UPLOAD',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: true,
    emitDeclaration: false,
    result: 'Resultado em 15 min.',
    description:
      'Dosagem do ácido úrico no organismo para controle ou triagem para GOTA. A gota é uma doença inflamatória que acomete sobretudo as articulações e ocorre quando a taxa de ácido úrico no sangue está em níveis acima do normal (hiperuricemia).*',
    name: 'Ácido Úrico',
    id: '5fc96087dea2302e164d7237',
    type: 'RAPID_TEST',
  },
  {
    price: 35,
    guideline,
    procedureFields: [
      {
        key: 'lactate',
        label: 'Lactato',
        position: 1,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 600,
        },
        data: {
          unit: 'mmol/L',
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 2,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'upload_medical_report',
        label: 'Anexar laudo médico',
        position: 3,
        type: 'FILE_UPLOAD',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: true,
    emitDeclaration: false,
    result: 'Resultado em 15 min.',
    description:
      'Este teste é destinado para esportistas ou pessoas que realizam atividade física. A Lactato é a forma ionizada do ácido láctico, produzido principalmente pelos músculos, glóbulos vermelhos e células cerebrais durante a produção de energia anaeróbica. Em condições normais, a concentração no sangue humano é baixa. O lactato é produzido durante esforço muscular intenso quando as células não são suficientes ou são completamente privadas de oxigênio (glicose anaeróbica).',
    name: 'Lactato',
    id: '5fc96087dea2302e164d7238',
    type: 'RAPID_TEST',
  },
  {
    price: 55,
    guideline,
    procedureFields: [
      {
        key: 'luteinizing_hormone',
        label: 'LH - Hormônio Luteinizante',
        position: 1,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 600,
        },
        data: {
          unit: 'mUI/mL',
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 2,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'upload_medical_report',
        label: 'Anexar laudo médico',
        position: 3,
        type: 'FILE_UPLOAD',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: true,
    emitDeclaration: false,
    result: 'Resultado em 15 min.',
    description:
      'Exame quantitativo do hormônio LH no sangue. Destinado principalmente para mulheres procurando avaliar o pico de ovulação.',
    name: 'LH - Hormônio Luteinizante',
    id: '5fc96088dea2302e164d7239',
    type: 'RAPID_TEST',
  },
  {
    price: 45,
    guideline,
    procedureFields: [
      {
        key: 'beta_hcg',
        label: 'Teste de Gravidez - Beta HCG',
        position: 1,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 600,
        },
        data: {
          unit: 'mUI/mL',
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 2,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'upload_medical_report',
        label: 'Anexar laudo médico',
        position: 3,
        type: 'FILE_UPLOAD',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: true,
    emitDeclaration: false,
    result: 'Resultado em 15 min.',
    description:
      'Detecta a presença do hormônio HCG  no sangue para detecção da gravidez.',
    name: 'Teste de Gravidez (Beta HCG)',
    id: '5fc96088dea2302e164d723a',
    type: 'RAPID_TEST',
  },
  {
    price: 99,
    guideline,
    procedureFields: [
      {
        key: 'influenza_AB',
        label: 'Influenza A/B - COI',
        position: 1,
        type: 'INTEGER',
        validations: {
          min: 1,
          max: 600,
        },
      },
      {
        key: 'influenza_A',
        label: 'Influenza A - COI',
        position: 2,
        type: 'INTEGER',
        validations: {
          min: 1,
          max: 600,
        },
      },
      {
        key: 'influenza_B',
        label: 'Influenza B - COI',
        position: 3,
        type: 'INTEGER',
        validations: {
          min: 1,
          max: 600,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 4,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'upload_medical_report',
        label: 'Anexar laudo médico',
        position: 5,
        type: 'FILE_UPLOAD',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: true,
    emitDeclaration: false,
    result: 'Resultado em 15 min.',
    description:
      'Teste Rápido Influenza A/B realiza a detecção qualitativa e diferenciação de vírus influenza A, incluindo o H5N1 e H1N1 e o vírus Influenza B.',
    name: 'Influenza A e B',
    id: '5fc96089dea2302e164d723b',
    type: 'RAPID_TEST',
  },
  {
    price: 45,
    guideline,
    procedureFields: [
      {
        key: 'Result',
        label: 'Resultado',
        position: 1,
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
        key: 'observation',
        label: 'Observação',
        position: 2,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'upload_medical_report',
        label: 'Anexar laudo médico',
        position: 3,
        type: 'FILE_UPLOAD',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: true,
    emitDeclaration: false,
    result: 'Resultado em 15 min.',
    description: 'Teste rápido para detecção da Sífilis.',
    name: 'Sífilis',
    id: '5fc96089dea2302e164d723c',
    type: 'RAPID_TEST',
  },
  {
    price: 35,
    guideline,
    procedureFields: [
      {
        key: 'glycated_hemoglobin',
        label: 'Hemoglobina Glicada',
        position: 1,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 100,
        },
        data: {
          unit: '%',
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 2,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'upload_medical_report',
        label: 'Anexar laudo médico',
        position: 3,
        type: 'FILE_UPLOAD',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: true,
    emitDeclaration: false,
    result: 'Resultado em 5 min.',
    description:
      ' A hemoglobina glicada, também conhecida como hemoglobina glicosilada ou Hb1Ac, é um exame de sangue que tem como objetivo avaliar os níveis de glicose nos últimos três meses.',
    name: 'Hemoglobina Glicada',
    id: '5fc9608adea2302e164d723d',
    type: 'RAPID_TEST',
  },
  {
    preparation: 'Não é necessário preparo.',
    guideline,
    procedureFields: [
      {
        key: 'asymptomatic',
        label: 'Assintomático?',
        position: 1,
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
        key: 'question',
        label:
          'Apresentou algum sintoma abaixo nos últimos 8 dias? (O teste de antígeno deve ser realizadono início da infecção, nos primeiros 7 dias de sintomas)',
        position: 2,
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
        position: 3,
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
        key: 'dyspnea',
        label: 'Dispnéia?',
        position: 4,
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
        key: 'fever',
        label: 'Febre?',
        position: 5,
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
        key: 'other_symptoms',
        label: 'Outros sintomas',
        position: 6,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 500,
        },
      },
      {
        key: 'cough',
        label: 'Tosse?',
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
        key: 'symptoms_date',
        label: 'Data de início dos sintomas',
        position: 8,
        type: 'DATE',
      },
      {
        key: 'decompensated_respiratory_diseases',
        label: 'Doenças respiratórias descompensadas?',
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
        key: 'chronic_heart_disease',
        label: 'Doença cardíacas crônicas?',
        position: 10,
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
        position: 11,
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
        position: 12,
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
        position: 13,
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
        key: 'high_risk_pregnant',
        label: 'Gestante de alto risco?',
        position: 14,
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
        position: 15,
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
        key: 'covid19_contact',
        label: 'Teve contato com paciente confirmado ou suspeito de Covid-19?',
        position: 16,
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
        key: 'healthcare_professional',
        label: 'É profissional da área da saúde?',
        position: 17,
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
        key: 'healthcare_professional_area',
        label: 'Se sim, qual a área?',
        position: 18,
        type: 'TEXT',
        validations: {
          required: false,
          min: 1,
          max: 200,
        },
      },
      {
        key: 'test_used',
        label: 'Teste utilizado',
        position: 19,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
        },
      },
      {
        key: 'maker',
        label: 'Fabricante',
        position: 20,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
        },
      },
      {
        key: 'ms_number',
        label: 'Número MS',
        position: 21,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 20,
        },
      },
      {
        key: 'lot',
        label: 'Lote',
        position: 22,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
        },
      },
      {
        key: 'shelf_life',
        label: 'Validade',
        position: 23,
        type: 'DATE',
      },
      {
        key: 'exam_applicant',
        label: 'Solicitante do exame (se houver)',
        position: 24,
        type: 'TEXT',
        validations: {
          required: false,
          min: 1,
          max: 300,
        },
      },
      {
        key: 'result',
        label: 'Resultado',
        position: 25,
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
        key: 'observation',
        label: 'Observação',
        position: 26,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a atenção farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogaraia para acompanhamento do histórico e está ciente que os mesmos serão armazenadas pelo período de 5 anos segundo a RDC 44/09 da Anvisa.',
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
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    result: 'Resultado em 15 min.',
    info: 'Diretamente na farmácia',
    description:
      'O Teste Rápido de Coronavírus (Antígeno) é um exame para detecção do coronavírus entre 2° e 8° dia de sintoma. O método Antígeno consiste na coleta de secreções do nariz, permitindo detectar o vírus com 93,3% de sensibilidade e 99,4% de especificidade.',
    name: 'Covid 19 - Antígeno',
    id: '5fdba9de75e6bd0e31b225ee',
    type: 'PHARMA_SERVICE',
  },
  {
    price: 30,
    preparation: 'Preparation test updated',
    guideline,
    procedureFields: [
      {
        key: 'indication',
        label: 'Indicação',
        position: 1,
        type: 'TEXT',
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
        type: 'SELECT',
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
        key: 'pharmaceutical_form',
        label: 'Forma farmacêutica',
        position: 3,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 500,
          required: true,
        },
      },
      {
        key: 'ms_number',
        label: 'Número MS',
        position: 4,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          numbersOnly: true,
          required: true,
        },
      },
      {
        key: 'lot',
        label: 'Lote',
        position: 5,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 30,
          required: true,
        },
      },
      {
        key: 'administered_dose',
        label: 'Dose administrada',
        position: 6,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 30,
          required: true,
        },
      },
      {
        key: 'shelf_life',
        label: 'Validade',
        position: 7,
        type: 'DATE',
        validations: {
          required: true,
        },
      },
      {
        key: 'next_vaccine',
        label: 'Data da próxima vacina',
        position: 8,
        type: 'DATE',
        validations: {
          required: false,
        },
      },
      {
        key: 'via_administration',
        label: 'Via de administração',
        position: 9,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'dosage',
        label: 'Posologia',
        position: 10,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 200,
          required: true,
        },
      },
      {
        key: 'application_location',
        label: 'Local de aplicação',
        position: 11,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 200,
          required: true,
        },
      },
      {
        key: 'side',
        label: 'Lado',
        position: 12,
        type: 'TEXT',
        validations: {
          min: 3,
          max: 100,
          required: true,
        },
      },
      {
        key: 'prescriber_name',
        label: 'Nome do prescritor',
        position: 13,
        type: 'TEXT',
        validations: {
          min: 5,
          max: 300,
          required: false,
        },
      },
      {
        key: 'crm',
        label: 'CRM',
        position: 14,
        type: 'TEXT',
        validations: {
          min: 1,
          max: 50,
          required: false,
        },
      },
      {
        key: 'observation',
        label: 'Observação',
        position: 15,
        type: 'TEXTAREA',
        validations: {
          min: 1,
          max: 1000,
          required: false,
        },
      },
      {
        key: 'medical_referral',
        label: 'Encaminhamento médico',
        position: 16,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
      {
        key: 'user_authorization',
        label:
          'O usuário autoriza o uso das informações fornecidas para a assistência farmacêutica, que consiste em ações voltadas para a promoção, a proteção e a recuperação da saúde, seja ela individual ou coletiva, tendo o medicamento como elemento essencial e com o objetivo ao seu acesso e ao seu uso racional. Desta forma, o usuário autoriza o uso de suas informações pela Drogasil para acompanhamento de seu histórico de vacinas',
        position: 17,
        type: 'BOOLEAN',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    result: 'Result test updated',
    info: 'Diretamente na farmácia!!!!',
    description: 'Description test! 4 updated',
    name: 'Teste! 5',
    id: '6025838e00662f555b17d174',
    type: 'VACCINE',
  },
  {
    price: 60,
    guideline,
    procedureFields: [
      {
        key: 'tsh',
        label: 'TSH',
        position: 1,
        type: 'FLOAT',
        validations: {
          min: 1,
          max: 100,
        },
        data: {
          unit: 'mUI/mL',
        },
      },
      {
        key: 'hypertension',
        label: 'Usa alguma medicação de uso contínuo?',
        position: 2,
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
        position: 3,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
        },
      },
      {
        key: 'upload_medical_report',
        label: 'Anexar laudo médico',
        position: 4,
        type: 'FILE_UPLOAD',
        validations: {
          required: true,
        },
      },
    ],
    attachMedicalReport: true,
    emitDeclaration: false,
    result: 'Resultado em 15 min.',
    description: 'Dosagem do hormônio estimulante da Tireóide.',
    name: 'Tireóide - TSH',
    id: '6026b6d7896d251832593c5f',
    type: 'RAPID_TEST',
  },
  {
    guideline,
    procedureFields: [
      {
        key: 'orientation',
        label: 'Orientação',
        type: 'TEXT',
        validations: {
          min: 1,
          max: 500,
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'vaccine',
        label: 'Vacina',
        type: 'SELECT',
        values: [
          {
            key: 'pfizer',
            label: 'Pfizer',
            data: {
              fabricante: 'pfizer',
            },
          },
        ],
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
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
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    info: 'Diretamente na farmácia',
    name: 'Serviço Teste',
    id: '602fc0479d0fb951dd3efd06',
    type: 'PHARMA_SERVICE',
  },
  {
    price: 45,
    preparation: 'Não é necessário preparo.',
    guideline,
    procedureFields: [
      {
        key: 'total cholesterol',
        label: 'Colesterol Total',
        position: 1,
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
        key: 'hdl_cholesterol',
        label: 'Colesterol HDL',
        position: 2,
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
        key: 'non_hdl_cholesterol',
        label: 'Colesterol não HDL',
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
        key: 'triglycerides',
        label: 'Triglicérides',
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
        key: 'observation',
        label: 'Observação',
        position: 6,
        type: 'TEXTAREA',
        validations: {
          required: false,
          min: 1,
          max: 1000,
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
    ],
    attachMedicalReport: true,
    emitDeclaration: false,
    result: 'Resultado em 5 min.',
    description:
      'Perfil lipídico, é um grupo de testes capaz de determinar a quantidade de lipídios, isto é, moléculas de gordura na circulação sanguínea. Neste teste medimos colesterol total, LDL, HDL, Não HDL e Triglicérides.',
    name: 'Perfil Lipídico (colesterol)',
    id: '602fc1049d0fb951dd3efd07',
    type: 'RAPID_TEST',
  },
  {
    guideline,
    procedureFields: [
      {
        key: 'vaccine',
        label: 'Vacina',
        type: 'SELECT',
        values: [
          {
            key: 'astrazeneca',
            label: 'Astrazeneca',
            data: {
              fabricante: 'Oxford',
            },
          },
        ],
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'vaccine_marota',
        label: 'Vacina Marota',
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
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    info: 'Diretamente na farmácia',
    name: 'Serviço Teste 2',
    id: '60367332bad8bf55edbb74bb',
    type: 'PHARMA_SERVICE',
  },
  {
    price: 150,
    guideline,
    procedureFields: [
      {
        key: 'vaccine',
        label: 'Vacina',
        type: 'SELECT',
        values: [
          {
            key: '500',
            label: 'Astrazeneca',
            data: {
              fabricante: 'Oxford',
            },
          },
          {
            key: '800',
            label: 'Jhonson&Jhonson',
          },
        ],
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    name: 'Serviço Teste 20',
    id: '60379b68da7a676b6343c7b7',
    type: 'PHARMA_SERVICE',
  },
  {
    price: 200,
    preparation: 'Como se preparar teste Editado',
    guideline,
    procedureFields: [
      {
        key: 'meu_campo',
        label: 'Teste',
        type: 'TEXT',
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    result: 'Resultado teste Editado',
    info: 'Teste',
    description: 'Teste Editado',
    name: 'Teste',
    id: '603e4982bf1da064f8b354dc',
    type: 'PHARMA_SERVICE',
  },
  {
    guideline,
    procedureFields: [
      {
        key: 'vaccine',
        label: 'Vacina',
        position: 1,
        type: 'SELECT',
        values: [
          {
            key: 'coronavac',
            label: 'Coronavac',
            data: {
              fabricante: 'GSK',
            },
          },
        ],
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: false,
        },
      },
      {
        key: 'shelf_life',
        label: 'Validade',
        position: 2,
        type: 'DATE',
        validations: {
          required: true,
          numbersOnly: false,
          currentDate: true,
        },
      },
      {
        key: 'diastolic_blood_pressure',
        label: 'Pressão arterial - diastólica',
        position: 3,
        type: 'FLOAT',
        validations: {
          required: true,
          numbersOnly: true,
          currentDate: false,
        },
      },
    ],
    attachMedicalReport: false,
    emitDeclaration: true,
    info: 'Diretamente na farmácia',
    name: 'Hepatite Z',
    id: '603fad88ca87065a0b9d24f8',
    type: 'PHARMA_SERVICE',
  },
];
