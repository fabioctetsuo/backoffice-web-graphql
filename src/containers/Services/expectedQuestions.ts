export const vaccineQuestions = [
  {
    label: 'Se sim, qual a área?',
    type: 'Texto',
    validations: {
      'Mínimo de caracteres': '1',
      'Máximo de caracteres': '200',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  {
    label: 'Qual frequência de atividade física?',
    type: 'Seletor',
    validations: {},
  },
  {
    label:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi viverra, iaculis ligula sit amet, convallis erat. Integer feugiat augue sem, eu viverra odio auctor id. Vivamus ornare sagittis quam, vitae pretium sem semper sit amet. Nulla nec pellentesque odio. Integer nunc magna, ultricies vitae metus sagittis, euismod dignissim libero. Ut cursus velit a libero lobortis efficitur. Curabitur finibus mi ac est lobortis posuere. Nulla tempor erat nunc, nec efficitur nisl tempus eu. Curabitur eleifend, eros non condimentum fringilla, neque turpis facilisis turpis, vel porta arcu nulla mattis sapien. Nulla lectus arcu, auctor sed urna sit amet, pellentesque posuere felis. Ut vestibulum mauris sed consectetur tincidunt. Aenean eu justo vel metus suscipit dapibus non at mi.',
    type: 'Label',
    validations: {},
  },
  {
    label: 'Dispnéia?',
    type: 'Opção',
    validations: {
      'Valor mínimo': 'Não',
      'Valor máximo': 'Não',
      'Campo obrigatório': 'Sim',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  {
    label: 'Hemoglobina - HB',
    type: 'Decimal',
    validations: {
      'Valor mínimo': '1',
      'Valor máximo': '4',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  {
    label: 'Número MS',
    type: 'Inteiro',
    validations: {
      'Valor mínimo': '5',
      'Valor máximo': '30',
      'Campo obrigatório': 'Sim',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  { label: 'Vacina', type: 'Seletor', validations: {} },
  {
    label: 'Validade',
    type: 'Data',
    validations: {
      'Valor mínimo': 'Não',
      'Valor máximo': 'Não',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Sim',
    },
  },
  { label: 'Data e hora do exame', type: '', validations: {} },
  {
    label: 'Observação',
    type: 'Área de texto',
    validations: {
      'Mínimo de caracteres': '1',
      'Máximo de caracteres': '1000',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
];

export const lipidProfileQuestions = [
  {
    label: 'Observação',
    type: 'Área de texto',
    validations: {
      'Mínimo de caracteres': '1',
      'Máximo de caracteres': '1000',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  {
    label: 'Colesterol não HDL',
    type: 'Decimal',
    validations: {
      'Valor mínimo': '1',
      'Valor máximo': '600',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  {
    label: 'Triglicérides',
    type: 'Decimal',
    validations: {
      'Valor mínimo': '1',
      'Valor máximo': '600',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  {
    label: 'Colesterol Total',
    type: 'Decimal',
    validations: {
      'Valor mínimo': '1',
      'Valor máximo': '600',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  {
    label: 'Colesterol LDL',
    type: 'Decimal',
    validations: {
      'Valor mínimo': '1',
      'Valor máximo': '600',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  {
    label: 'Anexar laudo médico',
    type: 'Upload',
    validations: {
      'Valor mínimo': 'Não',
      'Valor máximo': 'Não',
      'Campo obrigatório': 'Sim',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  {
    label: 'Colesterol HDL',
    type: 'Decimal',
    validations: {
      'Valor mínimo': '1',
      'Valor máximo': '600',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
];

export const covidQuestions = [
  {
    label: 'Teve contato com paciente confirmado ou suspeito de Covid-19?',
    type: 'Opção',
    validations: {
      'Valor mínimo': 'Não',
      'Valor máximo': 'Não',
      'Campo obrigatório': 'Sim',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  {
    label: 'Data de início dos sintomas',
    type: 'Data',
    validations: {
      'Valor mínimo': 'Não',
      'Valor máximo': 'Não',
      'Campo obrigatório': 'Sim',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  { label: 'IgG', type: 'Opção', validations: {} },
  { label: 'Febre?', type: 'Opção', validations: {} },
  { label: 'Imunossupressão?', type: 'Opção', validations: {} },
  { label: 'Tosse?', type: 'Opção', validations: {} },
  { label: 'Gestante de alto risco?', type: 'Opção', validations: {} },
  {
    label: 'Tipo de amostra',
    type: 'Texto',
    validations: {
      'Mínimo de caracteres': '1',
      'Máximo de caracteres': '100',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  { label: 'IgM', type: 'Opção', validations: {} },
  {
    label: 'Validade',
    type: 'Data',
    validations: {
      'Valor mínimo': 'Não',
      'Valor máximo': 'Não',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Sim',
    },
  },
  {
    label: 'Lote',
    type: 'Texto',
    validations: {
      'Mínimo de caracteres': '5',
      'Máximo de caracteres': '30',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  {
    label: 'Resultado',
    type: 'Texto',
    validations: {
      'Mínimo de caracteres': '1',
      'Máximo de caracteres': '300',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  {
    label: 'Número MS',
    type: 'Texto',
    validations: {
      'Mínimo de caracteres': '1',
      'Máximo de caracteres': '20',
      'Campo obrigatório': 'Não',
      Númerico: 'Sim',
      'Data corrente': 'Não',
    },
  },
  {
    label: 'Orientações',
    type: 'Área de texto',
    validations: {
      'Mínimo de caracteres': '1',
      'Máximo de caracteres': '1000',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  {
    label: 'Teste utilizado',
    type: 'Texto',
    validations: {
      'Mínimo de caracteres': '1',
      'Máximo de caracteres': '200',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  {
    label:
      'Apresentou algum sintoma abaixo nos últimos 8 dias? (Em caso de sintomas apresentados em menos de 8 dias o resultado IgM (fase aguda) não será preciso/satisfatório)',
    type: 'Opção',
    validations: {},
  },
  { label: 'Assintomático?', type: 'Opção', validations: {} },
  {
    label: 'Observação',
    type: 'Área de texto',
    validations: {
      'Mínimo de caracteres': '1',
      'Máximo de caracteres': '1000',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  {
    label: 'É profissional da área da saúde?',
    type: 'Opção',
    validations: {},
  },
  {
    label: 'Fabricante',
    type: 'Texto',
    validations: {
      'Mínimo de caracteres': '1',
      'Máximo de caracteres': '200',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  { label: 'Dispnéia?', type: 'Opção', validations: {} },
  {
    label: 'Portador de doenças cromossômicas ou estado de fragilidade imunológica?',
    type: 'Opção',
    validations: {},
  },
  {
    label: 'Solicitante do exame',
    type: 'Texto',
    validations: {
      'Mínimo de caracteres': '1',
      'Máximo de caracteres': '300',
      'Campo obrigatório': 'Não',
      Númerico: 'Não',
      'Data corrente': 'Não',
    },
  },
  { label: 'Autorização do usuário', type: 'Opção', validations: {} },
  {
    label: 'Doença cardíacas crônicas?',
    type: 'Opção',
    validations: {},
  },
  {
    label: 'Doenças renais crônicas em estado avançado',
    type: 'Opção',
    validations: {},
  },
  { label: 'Dor de cabeça?', type: 'Opção', validations: {} },
  {
    label: 'Doenças respiratórias descompensadas?',
    type: 'Opção',
    validations: {},
  },
  { label: 'Diabetes?', type: 'Opção', validations: {} },
  { label: 'Encaminhamento médico', type: 'Opção', validations: {} },
];
