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
  appBar: {
    label: 'Menu de navegação',
    userDetails: {
      label: 'Usuário',
      settings: {
        label: 'Mostrar opções do usuário',
        menuOptions: 'Menu de opções',
        logout: 'Sair',
      },
    },
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
    edit: {
      title: 'Editar serviço',
      form: {
        main: {
          title: 'Informações principais',
          name: 'Nome do serviço',
          type: 'Tipo de serviço',
          info: 'Informações',
          price: 'Valor',
        },
        questions: {
          title: 'Formulário de perguntas',
          newQuestion: 'Nova pergunta',
          table: {
            a11y: {
              label: 'Tabela com campos de perguntas',
              viewDetails: 'Ver campos do formulário para pergunta',
              remove: 'Remover pergunta',
            },
            head: {
              label: 'Legenda',
            },
            fields: {
              title: 'Configuração do campo',
              key: {
                label: 'Identificação',
              },
              label: {
                text: 'Legenda',
                required: 'O campo de legenda é obrigatório',
              },
              fieldType: {
                text: 'Tipo de campo',
                required: 'O tipo do campo é obrigatório',
              },
              unit: {
                text: 'Unidade de medida',
                placeholder: 'Exemplo: mg/dl',
              },
              options: {
                title: 'Opções',
                label: {
                  text: 'Legenda da opção',
                  required: 'Campo legenda é obrigatório',
                },
                value: {
                  text: 'Valor',
                  required: 'Campo valor é obrigatório',
                },
                remove: 'Remover opção',
                add: 'Adicionar opção',
                a11y: {
                  trash: 'Lixeira',
                  remove: 'Remover opção',
                },
                optionData: {
                  add: 'Adicionar detalhes à opção',
                  label: {
                    text: 'Legenda do detalhe',
                    required: 'Campo legenda é obrigatório',
                  },
                  value: {
                    text: 'Valor do detalhe',
                    required: 'Campo valor é obrigatório',
                  },
                },
              },
            },
            validations: {
              min: 'Mínimo',
              max: 'Máximo',
              required: 'Obrigatório',
              numbersOnly: 'Numérico',
              currentDate: 'Data corrente',
            },
          },
        },
        save: 'Salvar serviço',
        feedback: {
          success: 'Serviço atualizado com sucesso.',
          error: 'Houve um erro ao cadastrar o serviço, por favor tente novamente',
        },
      },
    },
  },
};
