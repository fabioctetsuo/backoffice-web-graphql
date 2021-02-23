import { CreateSellerDocument, GetAddressByZipcodeDocument } from 'generated-types';

const defaultSellerData = {
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
  services: [],
};

export default {
  createSellerSuccess: {
    request: {
      query: CreateSellerDocument,
      variables: {
        seller: defaultSellerData,
      },
    },
    result: {
      data: {
        createSeller: {
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
          services: [],
          __typename: 'Seller',
        },
      },
    },
  },
  createSellerWithCnpjAlreadRegistered: {
    request: {
      query: CreateSellerDocument,
      variables: {
        seller: defaultSellerData,
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
                method: 'post',
              },
            },
          },
        },
      ],
      data: { createSeller: null },
    },
  },
  createSellerError: {
    request: {
      query: CreateSellerDocument,
      variables: {
        seller: defaultSellerData,
      },
    },
    result: {
      errors: [
        {
          message: '500: Internal server error',
          locations: [{ line: 2, column: 3 }],
          path: ['createSeller'],
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
                method: 'post',
              },
            },
          },
        },
      ],
      data: { createSeller: null },
    },
  },
  getAddressSuccess: {
    request: {
      query: GetAddressByZipcodeDocument,
      variables: { zipcode: '01311200' },
    },
    result: {
      data: {
        getAddressByZipcode: {
          __typename: 'AddressByZipCode',
          zipcode: '01311200',
          city: 'São Paulo',
          neighborhood: 'Bela Vista',
          state: 'SP',
          street: 'Avenida Paulista',
        },
      },
    },
  },
};
