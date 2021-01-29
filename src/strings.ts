export default {
  errors: {
    generic: 'Ocorreu um erro inesperado, tente novamente mais tarde',
  },
  login: {
    message: {
      hello: 'Olá!',
      welcome: 'Seja bem-vindo(a)',
      forgotPassword:
        'Se você esqueceu a senha, entre em contato por meio do e-mail atendimento@rdsaude.com.br',
    },
    fields: {
      email: {
        label: 'E-mail',
        required: 'O campo e-mail é obrigatório',
        invalid: 'Você deve digitar um e-mail válido',
      },
      password: {
        label: 'Senha',
        required: 'O campo senha é obrigatório',
      },
    },
    errors: {
      invalidUser: 'E-mail ou senha inválidos. Verifique os dados e tente novamente',
      userDisabled:
        'Essa conta foi desativada. Em caso de dúvidas, entre em contato com o atendimento',
      unauthorized: 'Usuário não autorizado',
    },
    submitButton: 'Entrar',
  },
  sidebar: {
    menuIcon: {
      open: 'Abrir menu de navegação',
      close: 'Fechar menu de navegação',
      logout: 'Sair',
    },
  },
  services: {
    list: {
      title: 'Serviços',
      table: {
        general: {
          title: 'Tabela de serviços do health hub',
          column: {
            serviceName: 'Serviço',
            serviceType: 'Tipo de Serviço',
            edit: 'Editar',
          },
          hideInfo: 'Ocultar detalhes do serviço',
          showInfo: 'Ver detalhes do serviço',
          edit: 'Editar serviço',
        },
        additionalInfo: {
          title: 'Informações complementares',
          price: 'Valor:',
          attachMedicalReport: 'Anexar relatório médico:',
          emitDeclaration: 'Emitir declaração:',
        },
      },
    },
  },
};
