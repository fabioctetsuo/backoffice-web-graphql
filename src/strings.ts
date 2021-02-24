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
      newService: 'Novo serviço',
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
    form: {
      editTitle: 'Editar serviço',
      newTitle: 'Criar serviço',
      main: {
        title: 'Informações principais',
        name: {
          text: 'Nome do serviço',
          required: 'Nome do serviço é obrigatório.',
        },
        type: 'Tipo de serviço',
        info: {
          text: 'Informações',
          required:
            'Caso o produto não tenha preço definido, informe mais detalhes sobre o preço',
        },
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
              label: 'ID',
              placeholder: 'Exemplo: meu_campo',
              helper:
                'Esse campo de configuração deve identificar resumidamente a pergunta.',
              required: 'O campo de identificação é obrigatório',
              pattern:
                'Não são permitidos caracteres especiais e espaços, apenas letras e _',
            },
            label: {
              text: 'Label',
              required: 'O campo label é obrigatório',
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
                text: 'Label da opção',
                required: 'Campo label da opção é obrigatório',
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
                  text: 'Identificação do detalhe',
                  required: 'Campo identificação do detalhe é obrigatório',
                  placeholder: 'Exemplo: fabricante',
                  helper:
                    'Esse campo de configuração deve identificar resumidamente o detalhe da opção.',
                  pattern:
                    'Não são permitidos caracteres especiais e espaços, apenas letras e _',
                },
                value: {
                  text: 'Valor do detalhe',
                  required: 'Campo valor é obrigatório',
                },
              },
            },
          },
          validations: {
            title: 'Validações do campo',
            min: 'Mínimo',
            max: 'Máximo',
            required: 'Obrigatório',
            numbersOnly: 'Numérico',
            currentDate: 'Data corrente',
          },
        },
      },
      editSave: 'Salvar serviço',
      newSave: 'Criar serviço',
      loadingSave: 'Salvando...',
      feedback: {
        updateSuccess: 'Serviço atualizado com sucesso.',
        createSuccess: 'Serviço criado com sucesso.',
        error: 'Erro ao cadastrar o serviço/vacina, tente novamente.',
        duplicated: {
          service:
            'Já existe um serviço/vacina cadastrado com o mesmo nome e tipo, por gentileza altere o nome do seu serviço/vacina.',
          key:
            'Já existe um campo de identificação com esse valor, por gentileza altere o campo.',
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
    new: {
      title: 'Cadastrar loja',
      feedback: {
        success: 'Loja cadastrada com sucesso.',
        error: 'Houve um erro ao cadastrar a loja. Por favor, tente novamente.',
        cnpjAlreadyRegistered: 'Já existe uma loja cadastrada com este CNPJ.',
      },
      alertDialog: {
        title: 'Deseja cancelar o cadastro?',
        contentText: 'Alterações não salvas serão perdidas. Deseja mesmo continuar?',
        buttons: {
          confirm: 'Sim',
          cancel: 'Não',
        },
      },
    },
    sellerForm: {
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
          validate: 'CNPJ inválido',
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
      country: {
        label: 'País',
        required: 'O campo "País" é obrigatório',
      },
    },
    toasts: {
      success: 'Cadastro atualizado com sucesso.',
      error: 'Ocorreu um erro durante o cadastro de endereço. Tente novamente.',
      zipCodeError: 'Não conseguimos encontrar este CEP. Por favor, complete o endereço.',
    },
  },
};
