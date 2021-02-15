// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import gqls from 'gqls/sellers.gql';

const result = {
  content: [
    {
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
    {
      id: '5fc963c2dcbf6550dba10694',
      name: 'Vila Guilherme A',
      externalCode: '153',
      documentNumber: '61585865064800',
      mobileNumber: '11997906330',
      phoneNumber: '1129504369',
      tradingName: 'Raia',
      address: {
        zipCode: '02085000',
        city: 'São Paulo',
        neighborhood: 'Vila Guilherme',
        country: 'Brasil',
        state: 'SP',
        street: 'Avenida Luiz Dumont Villares',
        number: 522,
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
      ],
      __typename: 'Seller',
    },
  ],
  page: null,
  totalPages: 1,
  totalElements: 2,
  __typename: 'SellersAll',
};

export default {
  getSellersSuccess: {
    request: {
      query: gqls.sellers,
      variables: { sort: 'name,asc' },
    },
    result: {
      data: {
        sellers: result,
      },
    },
  },
  getSellersResetSuccess: {
    request: {
      query: gqls.sellers,
      variables: { sort: 'name,asc', name: '', documentNumber: '' },
    },
    result: {
      data: {
        sellers: result,
      },
    },
  },
  getSellersSuccessEmpty: {
    request: {
      query: gqls.sellers,
      variables: { sort: 'name,asc' },
    },
    result: {
      data: {
        sellers: {
          content: [],
          page: null,
          totalPages: 0,
          totalElements: 0,
          __typename: 'SellersAll',
        },
      },
    },
  },
  getSellersSuccessFilteredByName: {
    request: {
      query: gqls.sellers,
      variables: { sort: 'name,asc', name: 'paulista', documentNumber: '' },
    },
    result: {
      data: {
        sellers: {
          content: [result.content[0]],
          page: null,
          totalPages: 1,
          totalElements: 1,
          __typename: 'SellersAll',
        },
      },
    },
  },
  getSellersSuccessFilteredByDocumentNumber: {
    request: {
      query: gqls.sellers,
      variables: { sort: 'name,asc', name: '', documentNumber: '61585865064800' },
    },
    result: {
      data: {
        sellers: {
          content: [result.content[1]],
          page: null,
          totalPages: 1,
          totalElements: 1,
          __typename: 'SellersAll',
        },
      },
    },
  },
};
