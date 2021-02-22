import { SellerDocument, UpdateSellerDocument } from 'generated-types';

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
          documentNumber: '61585865216822',
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
};
