// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import gqls from 'gqls/zipcode.gql';

export default {
  getAddressSuccess: {
    request: {
      query: gqls.getAddressByZipcode,
      variables: { zipcode: '09230640' },
    },
    result: {
      data: {
        getAddressByZipcode: {
          __typename: 'AddressByZipCode',
          street: 'Rua Maria Quitéria',
          neighborhood: 'Vila Camilópolis',
          city: 'Santo André',
          state: 'SP',
          zipcode: '09230640',
        },
      },
    },
  },
  getAddressEmpty: {
    request: {
      query: gqls.getAddressByZipcode,
      variables: { zipcode: '09230641' },
    },
    result: {
      errors: [
        {
          message: '404: Not Found',
          locations: [{ line: 2, column: 3 }],
          path: ['getAddressByZipcode'],
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
            response: {
              url: 'https://api.pagar.me/1/zipcodes/09230641',
              status: 404,
              statusText: 'Not Found',
              body: {
                errors: [
                  {
                    type: 'not_found',
                    parameter_name: null,
                    message: 'CEP não encontrado',
                  },
                ],
                url: '/zipcodes/09230641',
                method: 'get',
              },
            },
          },
        },
      ],
      data: { getAddressByZipcode: null },
    },
  },
};
