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
  sellers: {
    list: {
      title: 'Lojas',
      newSellerButton: 'Nova loja',
      search: {
        nameInputLabel: 'Nome',
        documentNumberInputLabel: 'CNPJ',
        submitButton: 'Pesquisar',
        clearButton: 'limpar pesquisa',
      },
      table: {
        title: 'tabela de lojas',
        header: {
          sellerName: 'Nome da loja',
          edit: 'Editar',
        },
        emptyState: 'Nenhuma loja encontrada',
      },
    },
    edit: {
      title: 'Editar loja',
      buttons: {
        save: 'Salvar',
        cancel: 'Cancelar',
      },
      fields: {
        tradingName: {
          label: 'Bandeira',
          required: 'O campo "Bandeira" é obrigatório',
        },
        name: {
          label: 'Nome',
          required: 'O campo "Nome" é obrigatório',
        },
        documentNumber: {
          label: 'CNPJ',
          required: 'O campo "CNPJ" é obrigatório',
        },
        externalCode: {
          label: 'Código externo',
        },
        phoneNumber: {
          label: 'Telefone fixo',
          required: 'O campo "Telefone" é obrigatório',
        },
        mobilePhone: {
          label: 'Telefone celular',
          required: 'O campo "Celular" é obrigatório',
        },
      },
      feedback: {
        success: 'Loja atualizada com sucesso.',
        error: 'Houve um erro ao atualizar a loja. Por favor, tente novamente.',
        loadSellerError:
          'Não foi possível encontrar a loja selecionada. Tente novamente.',
        cnpjAlreadyRegistered: 'Já existe uma loja cadastrada com este CNPJ.',
      },
      alertDialog: {
        title: 'Deseja cancelar a edição?',
        contentText: 'Alterações não salvas serão perdidas. Deseja mesmo continuar?',
        buttons: {
          confirm: 'Sim',
          cancel: 'Não',
        },
      },
    },
  },
  address: {
    buttons: {
      search: 'Pesquisar',
      loading: 'Pesquisando...',
    },
    fields: {
      zipcode: {
        label: 'CEP',
        required: 'O campo "CEP" é obrigatório',
      },
      street: {
        label: 'Logradouro',
        required: 'O campo "Logradouro" é obrigatório',
      },
      number: {
        label: 'Número',
        required: 'O campo "Número" é obrigatório',
      },
      complement: {
        label: 'Complemento',
      },
      neighborhood: {
        label: 'Bairro',
        required: 'O campo "Bairro" é obrigatório',
      },
      city: {
        label: 'Cidade',
        required: 'O campo "Cidade" é obrigatório',
      },
      state: {
        label: 'Estado',
        required: 'O campo "Estado" é obrigatório',
      },
    },
    toasts: {
      success: 'Cadastro atualizado com sucesso.',
      error: 'Ocorreu um erro durante o cadastro de endereço. Tente novamente.',
      zipCodeError: 'Não conseguimos encontrar este CEP. Por favor, complete o endereço.',
    },
  },
};
