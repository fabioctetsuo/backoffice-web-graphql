import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  JSONObject: any;
};

export type ProviderInput = {
  startHour: Scalars['String'];
  endHour: Scalars['String'];
  startIntervalHour?: Maybe<Scalars['String']>;
  endIntervalHour?: Maybe<Scalars['String']>;
  slots: Scalars['Int'];
  interval: Scalars['Int'];
  providerId: Scalars['ID'];
};

export type Provider = {
  __typename?: 'Provider';
  startHour: Scalars['String'];
  endHour: Scalars['String'];
  startIntervalHour?: Maybe<Scalars['String']>;
  endIntervalHour?: Maybe<Scalars['String']>;
  slots: Scalars['Int'];
  interval: Scalars['Int'];
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  getAddressByZipcode?: Maybe<AddressByZipCode>;
  getUserById?: Maybe<User>;
  provider: Provider;
  seller: Seller;
  sellers: SellersAll;
  service?: Maybe<HealthHubServiceById>;
  services?: Maybe<HealthHubServiceAll>;
};


export type QueryGetAddressByZipcodeArgs = {
  zipcode: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryProviderArgs = {
  id: Scalars['ID'];
};


export type QuerySellerArgs = {
  id: Scalars['ID'];
};


export type QuerySellersArgs = {
  sort?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  documentNumber?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryServiceArgs = {
  id: Scalars['ID'];
};


export type QueryServicesArgs = {
  type?: Maybe<HealthHubFieldType>;
  sort?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProvider?: Maybe<Provider>;
  createSeller?: Maybe<Seller>;
  createService?: Maybe<HealthHubService>;
  updateProvider?: Maybe<Provider>;
  updateSeller?: Maybe<Seller>;
  updateService?: Maybe<HealthHubService>;
};


export type MutationCreateProviderArgs = {
  provider: ProviderInput;
};


export type MutationCreateSellerArgs = {
  seller: SellerInput;
};


export type MutationCreateServiceArgs = {
  service: HealthHubServiceInput;
};


export type MutationUpdateProviderArgs = {
  provider: ProviderInput;
  id: Scalars['ID'];
};


export type MutationUpdateSellerArgs = {
  seller: SellerInput;
  id: Scalars['ID'];
};


export type MutationUpdateServiceArgs = {
  service: HealthHubServiceInput;
  id: Scalars['ID'];
};



export type SellerServiceInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  type: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
  info?: Maybe<Scalars['String']>;
};

export type SellerService = {
  __typename?: 'SellerService';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
  info?: Maybe<Scalars['String']>;
};

export type SellerAddressInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  neighborhood: Scalars['String'];
  number: Scalars['Int'];
  state: Scalars['String'];
  street: Scalars['String'];
  zipCode: Scalars['String'];
};

export type SellerAddress = {
  __typename?: 'SellerAddress';
  city: Scalars['String'];
  country: Scalars['String'];
  neighborhood: Scalars['String'];
  number: Scalars['Int'];
  state: Scalars['String'];
  street: Scalars['String'];
  zipCode: Scalars['String'];
};

export type SellerInput = {
  name?: Maybe<Scalars['String']>;
  services?: Maybe<Array<SellerServiceInput>>;
  address: SellerAddressInput;
  externalCode?: Maybe<Scalars['String']>;
  documentNumber: Scalars['String'];
  mobileNumber: Scalars['String'];
  phoneNumber: Scalars['String'];
  tradingName: Scalars['String'];
};

export type Seller = {
  __typename?: 'Seller';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  services?: Maybe<Array<SellerService>>;
  address: SellerAddress;
  externalCode?: Maybe<Scalars['String']>;
  documentNumber: Scalars['String'];
  mobileNumber: Scalars['String'];
  phoneNumber: Scalars['String'];
  tradingName: Scalars['String'];
};

export type SellersAll = {
  __typename?: 'SellersAll';
  content: Array<Seller>;
  page?: Maybe<Scalars['Int']>;
  totalElements?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export enum HealthHubServiceFieldType {
  Float = 'FLOAT',
  Integer = 'INTEGER',
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Datetime = 'DATETIME',
  Text = 'TEXT',
  Textarea = 'TEXTAREA',
  Select = 'SELECT',
  FileUpload = 'FILE_UPLOAD',
  Label = 'LABEL'
}

export enum HealthHubFieldType {
  Vaccine = 'VACCINE',
  PharmaService = 'PHARMA_SERVICE',
  RapidTest = 'RAPID_TEST'
}

export type HealthHubServiceValueById = {
  __typename?: 'HealthHubServiceValueById';
  key: Scalars['String'];
  label: Scalars['String'];
  data?: Maybe<Array<Maybe<Scalars['JSONObject']>>>;
};

export type HealthHubServiceValue = {
  __typename?: 'HealthHubServiceValue';
  key: Scalars['String'];
  label: Scalars['String'];
  data?: Maybe<Scalars['JSONObject']>;
};

export type HealthHubServiceValueInput = {
  key: Scalars['String'];
  label: Scalars['String'];
  data?: Maybe<Scalars['JSONObject']>;
};

export type HealthHubFieldValidation = {
  __typename?: 'HealthHubFieldValidation';
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  required?: Maybe<Scalars['Boolean']>;
  numbersOnly?: Maybe<Scalars['Boolean']>;
  currentDate?: Maybe<Scalars['Boolean']>;
};

export type HealthHubFieldValidationInput = {
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  required?: Maybe<Scalars['Boolean']>;
  numbersOnly?: Maybe<Scalars['Boolean']>;
  currentDate?: Maybe<Scalars['Boolean']>;
};

export type HealthHubServiceFieldData = {
  __typename?: 'HealthHubServiceFieldData';
  unit?: Maybe<Scalars['String']>;
};

export type HealthHubServiceFieldDataInput = {
  unit?: Maybe<Scalars['String']>;
};

export type HealthHubServiceFieldById = {
  __typename?: 'HealthHubServiceFieldById';
  key?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  type: HealthHubServiceFieldType;
  values?: Maybe<Array<HealthHubServiceValueById>>;
  validations?: Maybe<HealthHubFieldValidation>;
  data?: Maybe<HealthHubServiceFieldData>;
};

export type HealthHubServiceField = {
  __typename?: 'HealthHubServiceField';
  key?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  type: HealthHubServiceFieldType;
  values?: Maybe<Array<HealthHubServiceValue>>;
  validations?: Maybe<HealthHubFieldValidation>;
  data?: Maybe<HealthHubServiceFieldData>;
};

export type HealthHubServiceFieldInput = {
  key?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  type: HealthHubServiceFieldType;
  values?: Maybe<Array<HealthHubServiceValueInput>>;
  validations?: Maybe<HealthHubFieldValidationInput>;
  data?: Maybe<HealthHubServiceFieldDataInput>;
};

export type HealthHubService = {
  __typename?: 'HealthHubService';
  id: Scalars['ID'];
  info?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
  procedureFields: Array<HealthHubServiceField>;
  type: HealthHubFieldType;
  attachMedicalReport?: Maybe<Scalars['Boolean']>;
  emitDeclaration?: Maybe<Scalars['Boolean']>;
};

export type HealthHubServiceById = {
  __typename?: 'HealthHubServiceById';
  id: Scalars['ID'];
  info?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price?: Maybe<Scalars['String']>;
  procedureFields: Array<HealthHubServiceFieldById>;
  type: HealthHubFieldType;
  emitDeclaration?: Maybe<Scalars['Boolean']>;
};

export type HealthHubServiceInput = {
  info?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
  procedureFields: Array<Maybe<HealthHubServiceFieldInput>>;
  type: HealthHubFieldType;
  attachMedicalReport?: Maybe<Scalars['Boolean']>;
  emitDeclaration?: Maybe<Scalars['Boolean']>;
};

export type HealthHubServiceAll = {
  __typename?: 'HealthHubServiceAll';
  content: Array<HealthHubService>;
  page?: Maybe<Scalars['Int']>;
  totalElements?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  active?: Maybe<Scalars['String']>;
};

export enum States {
  Ac = 'AC',
  Al = 'AL',
  Ap = 'AP',
  Am = 'AM',
  Ba = 'BA',
  Ce = 'CE',
  Df = 'DF',
  Es = 'ES',
  Go = 'GO',
  Ma = 'MA',
  Mt = 'MT',
  Ms = 'MS',
  Mg = 'MG',
  Pa = 'PA',
  Pb = 'PB',
  Pr = 'PR',
  Pe = 'PE',
  Pi = 'PI',
  Rj = 'RJ',
  Rn = 'RN',
  Rs = 'RS',
  Ro = 'RO',
  Rr = 'RR',
  Sc = 'SC',
  Sp = 'SP',
  Se = 'SE',
  To = 'TO'
}

export type AddressByZipCode = {
  __typename?: 'AddressByZipCode';
  zipcode?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<States>;
};

export type SellerPartsFragment = (
  { __typename?: 'Seller' }
  & Pick<Seller, 'id' | 'name' | 'externalCode' | 'documentNumber' | 'mobileNumber' | 'phoneNumber' | 'tradingName'>
  & { address: (
    { __typename?: 'SellerAddress' }
    & Pick<SellerAddress, 'zipCode' | 'city' | 'neighborhood' | 'country' | 'state' | 'street' | 'number'>
  ), services?: Maybe<Array<(
    { __typename?: 'SellerService' }
    & Pick<SellerService, 'id' | 'name' | 'type' | 'price' | 'info'>
  )>> }
);

export type SellerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SellerQuery = (
  { __typename?: 'Query' }
  & { seller: (
    { __typename?: 'Seller' }
    & SellerPartsFragment
  ) }
);

export type SellersQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  documentNumber?: Maybe<Scalars['String']>;
}>;


export type SellersQuery = (
  { __typename?: 'Query' }
  & { sellers: (
    { __typename?: 'SellersAll' }
    & Pick<SellersAll, 'page' | 'totalPages' | 'totalElements'>
    & { content: Array<(
      { __typename?: 'Seller' }
      & SellerPartsFragment
    )> }
  ) }
);

export type CreateSellerMutationVariables = Exact<{
  seller: SellerInput;
}>;


export type CreateSellerMutation = (
  { __typename?: 'Mutation' }
  & { createSeller?: Maybe<(
    { __typename?: 'Seller' }
    & SellerPartsFragment
  )> }
);

export type UpdateSellerMutationVariables = Exact<{
  id: Scalars['ID'];
  seller: SellerInput;
}>;


export type UpdateSellerMutation = (
  { __typename?: 'Mutation' }
  & { updateSeller?: Maybe<(
    { __typename?: 'Seller' }
    & SellerPartsFragment
  )> }
);

export type ServicePartsFragment = (
  { __typename?: 'HealthHubService' }
  & Pick<HealthHubService, 'emitDeclaration' | 'id' | 'info' | 'name' | 'price' | 'type'>
  & { procedureFields: Array<(
    { __typename?: 'HealthHubServiceField' }
    & Pick<HealthHubServiceField, 'key' | 'label' | 'type'>
    & { validations?: Maybe<(
      { __typename?: 'HealthHubFieldValidation' }
      & Pick<HealthHubFieldValidation, 'min' | 'max' | 'required' | 'numbersOnly' | 'currentDate'>
    )>, values?: Maybe<Array<(
      { __typename?: 'HealthHubServiceValue' }
      & Pick<HealthHubServiceValue, 'key' | 'label' | 'data'>
    )>>, data?: Maybe<(
      { __typename?: 'HealthHubServiceFieldData' }
      & Pick<HealthHubServiceFieldData, 'unit'>
    )> }
  )> }
);

export type ServiceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ServiceQuery = (
  { __typename?: 'Query' }
  & { service?: Maybe<(
    { __typename?: 'HealthHubServiceById' }
    & Pick<HealthHubServiceById, 'emitDeclaration' | 'id' | 'info' | 'name' | 'price' | 'type'>
    & { procedureFields: Array<(
      { __typename?: 'HealthHubServiceFieldById' }
      & Pick<HealthHubServiceFieldById, 'key' | 'label' | 'type'>
      & { validations?: Maybe<(
        { __typename?: 'HealthHubFieldValidation' }
        & Pick<HealthHubFieldValidation, 'min' | 'max' | 'required' | 'numbersOnly' | 'currentDate'>
      )>, values?: Maybe<Array<(
        { __typename?: 'HealthHubServiceValueById' }
        & Pick<HealthHubServiceValueById, 'key' | 'label' | 'data'>
      )>>, data?: Maybe<(
        { __typename?: 'HealthHubServiceFieldData' }
        & Pick<HealthHubServiceFieldData, 'unit'>
      )> }
    )> }
  )> }
);

export type ServicesQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<HealthHubFieldType>;
  sort?: Maybe<Scalars['String']>;
}>;


export type ServicesQuery = (
  { __typename?: 'Query' }
  & { services?: Maybe<(
    { __typename?: 'HealthHubServiceAll' }
    & Pick<HealthHubServiceAll, 'page' | 'totalPages' | 'totalElements'>
    & { content: Array<(
      { __typename?: 'HealthHubService' }
      & ServicePartsFragment
    )> }
  )> }
);

export type UpdateServiceMutationVariables = Exact<{
  id: Scalars['ID'];
  service: HealthHubServiceInput;
}>;


export type UpdateServiceMutation = (
  { __typename?: 'Mutation' }
  & { updateService?: Maybe<(
    { __typename?: 'HealthHubService' }
    & ServicePartsFragment
  )> }
);

export type CreateServiceMutationVariables = Exact<{
  service: HealthHubServiceInput;
}>;


export type CreateServiceMutation = (
  { __typename?: 'Mutation' }
  & { createService?: Maybe<(
    { __typename?: 'HealthHubService' }
    & ServicePartsFragment
  )> }
);

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserByIdQuery = (
  { __typename?: 'Query' }
  & { getUserById?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'active'>
  )> }
);

export type GetAddressByZipcodeQueryVariables = Exact<{
  zipcode: Scalars['String'];
}>;


export type GetAddressByZipcodeQuery = (
  { __typename?: 'Query' }
  & { getAddressByZipcode?: Maybe<(
    { __typename?: 'AddressByZipCode' }
    & Pick<AddressByZipCode, 'zipcode' | 'street' | 'neighborhood' | 'city' | 'state'>
  )> }
);

export const SellerPartsFragmentDoc = gql`
    fragment SellerParts on Seller {
  id
  name
  externalCode
  documentNumber
  mobileNumber
  phoneNumber
  tradingName
  address {
    zipCode
    city
    neighborhood
    country
    state
    street
    number
  }
  services {
    id
    name
    type
    price
    info
  }
}
    `;
export const ServicePartsFragmentDoc = gql`
    fragment ServiceParts on HealthHubService {
  emitDeclaration
  id
  info
  name
  price
  type
  procedureFields {
    key
    label
    type
    validations {
      min
      max
      required
      numbersOnly
      currentDate
    }
    values {
      key
      label
      data
    }
    data {
      unit
    }
  }
}
    `;
export const SellerDocument = gql`
    query seller($id: ID!) {
  seller(id: $id) {
    ...SellerParts
  }
}
    ${SellerPartsFragmentDoc}`;

/**
 * __useSellerQuery__
 *
 * To run a query within a React component, call `useSellerQuery` and pass it any options that fit your needs.
 * When your component renders, `useSellerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSellerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSellerQuery(baseOptions: Apollo.QueryHookOptions<SellerQuery, SellerQueryVariables>) {
        return Apollo.useQuery<SellerQuery, SellerQueryVariables>(SellerDocument, baseOptions);
      }
export function useSellerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SellerQuery, SellerQueryVariables>) {
          return Apollo.useLazyQuery<SellerQuery, SellerQueryVariables>(SellerDocument, baseOptions);
        }
export type SellerQueryHookResult = ReturnType<typeof useSellerQuery>;
export type SellerLazyQueryHookResult = ReturnType<typeof useSellerLazyQuery>;
export type SellerQueryResult = Apollo.QueryResult<SellerQuery, SellerQueryVariables>;
export const SellersDocument = gql`
    query sellers($page: Int, $size: Int, $sort: String, $name: String, $documentNumber: String) {
  sellers(page: $page, size: $size, sort: $sort, name: $name, documentNumber: $documentNumber) {
    content {
      ...SellerParts
    }
    page
    totalPages
    totalElements
  }
}
    ${SellerPartsFragmentDoc}`;

/**
 * __useSellersQuery__
 *
 * To run a query within a React component, call `useSellersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSellersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSellersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *      sort: // value for 'sort'
 *      name: // value for 'name'
 *      documentNumber: // value for 'documentNumber'
 *   },
 * });
 */
export function useSellersQuery(baseOptions?: Apollo.QueryHookOptions<SellersQuery, SellersQueryVariables>) {
        return Apollo.useQuery<SellersQuery, SellersQueryVariables>(SellersDocument, baseOptions);
      }
export function useSellersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SellersQuery, SellersQueryVariables>) {
          return Apollo.useLazyQuery<SellersQuery, SellersQueryVariables>(SellersDocument, baseOptions);
        }
export type SellersQueryHookResult = ReturnType<typeof useSellersQuery>;
export type SellersLazyQueryHookResult = ReturnType<typeof useSellersLazyQuery>;
export type SellersQueryResult = Apollo.QueryResult<SellersQuery, SellersQueryVariables>;
export const CreateSellerDocument = gql`
    mutation createSeller($seller: SellerInput!) {
  createSeller(seller: $seller) {
    ...SellerParts
  }
}
    ${SellerPartsFragmentDoc}`;
export type CreateSellerMutationFn = Apollo.MutationFunction<CreateSellerMutation, CreateSellerMutationVariables>;

/**
 * __useCreateSellerMutation__
 *
 * To run a mutation, you first call `useCreateSellerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSellerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSellerMutation, { data, loading, error }] = useCreateSellerMutation({
 *   variables: {
 *      seller: // value for 'seller'
 *   },
 * });
 */
export function useCreateSellerMutation(baseOptions?: Apollo.MutationHookOptions<CreateSellerMutation, CreateSellerMutationVariables>) {
        return Apollo.useMutation<CreateSellerMutation, CreateSellerMutationVariables>(CreateSellerDocument, baseOptions);
      }
export type CreateSellerMutationHookResult = ReturnType<typeof useCreateSellerMutation>;
export type CreateSellerMutationResult = Apollo.MutationResult<CreateSellerMutation>;
export type CreateSellerMutationOptions = Apollo.BaseMutationOptions<CreateSellerMutation, CreateSellerMutationVariables>;
export const UpdateSellerDocument = gql`
    mutation updateSeller($id: ID!, $seller: SellerInput!) {
  updateSeller(id: $id, seller: $seller) {
    ...SellerParts
  }
}
    ${SellerPartsFragmentDoc}`;
export type UpdateSellerMutationFn = Apollo.MutationFunction<UpdateSellerMutation, UpdateSellerMutationVariables>;

/**
 * __useUpdateSellerMutation__
 *
 * To run a mutation, you first call `useUpdateSellerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSellerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSellerMutation, { data, loading, error }] = useUpdateSellerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      seller: // value for 'seller'
 *   },
 * });
 */
export function useUpdateSellerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSellerMutation, UpdateSellerMutationVariables>) {
        return Apollo.useMutation<UpdateSellerMutation, UpdateSellerMutationVariables>(UpdateSellerDocument, baseOptions);
      }
export type UpdateSellerMutationHookResult = ReturnType<typeof useUpdateSellerMutation>;
export type UpdateSellerMutationResult = Apollo.MutationResult<UpdateSellerMutation>;
export type UpdateSellerMutationOptions = Apollo.BaseMutationOptions<UpdateSellerMutation, UpdateSellerMutationVariables>;
export const ServiceDocument = gql`
    query service($id: ID!) {
  service(id: $id) {
    emitDeclaration
    id
    info
    name
    price
    type
    procedureFields {
      key
      label
      type
      validations {
        min
        max
        required
        numbersOnly
        currentDate
      }
      values {
        key
        label
        data
      }
      data {
        unit
      }
    }
  }
}
    `;

/**
 * __useServiceQuery__
 *
 * To run a query within a React component, call `useServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServiceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useServiceQuery(baseOptions: Apollo.QueryHookOptions<ServiceQuery, ServiceQueryVariables>) {
        return Apollo.useQuery<ServiceQuery, ServiceQueryVariables>(ServiceDocument, baseOptions);
      }
export function useServiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServiceQuery, ServiceQueryVariables>) {
          return Apollo.useLazyQuery<ServiceQuery, ServiceQueryVariables>(ServiceDocument, baseOptions);
        }
export type ServiceQueryHookResult = ReturnType<typeof useServiceQuery>;
export type ServiceLazyQueryHookResult = ReturnType<typeof useServiceLazyQuery>;
export type ServiceQueryResult = Apollo.QueryResult<ServiceQuery, ServiceQueryVariables>;
export const ServicesDocument = gql`
    query services($page: Int, $size: Int, $type: HealthHubFieldType, $sort: String) {
  services(page: $page, size: $size, type: $type, sort: $sort) {
    content {
      ...ServiceParts
    }
    page
    totalPages
    totalElements
  }
}
    ${ServicePartsFragmentDoc}`;

/**
 * __useServicesQuery__
 *
 * To run a query within a React component, call `useServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServicesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *      type: // value for 'type'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useServicesQuery(baseOptions?: Apollo.QueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
        return Apollo.useQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, baseOptions);
      }
export function useServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
          return Apollo.useLazyQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, baseOptions);
        }
export type ServicesQueryHookResult = ReturnType<typeof useServicesQuery>;
export type ServicesLazyQueryHookResult = ReturnType<typeof useServicesLazyQuery>;
export type ServicesQueryResult = Apollo.QueryResult<ServicesQuery, ServicesQueryVariables>;
export const UpdateServiceDocument = gql`
    mutation updateService($id: ID!, $service: HealthHubServiceInput!) {
  updateService(id: $id, service: $service) {
    ...ServiceParts
  }
}
    ${ServicePartsFragmentDoc}`;
export type UpdateServiceMutationFn = Apollo.MutationFunction<UpdateServiceMutation, UpdateServiceMutationVariables>;

/**
 * __useUpdateServiceMutation__
 *
 * To run a mutation, you first call `useUpdateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateServiceMutation, { data, loading, error }] = useUpdateServiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      service: // value for 'service'
 *   },
 * });
 */
export function useUpdateServiceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateServiceMutation, UpdateServiceMutationVariables>) {
        return Apollo.useMutation<UpdateServiceMutation, UpdateServiceMutationVariables>(UpdateServiceDocument, baseOptions);
      }
export type UpdateServiceMutationHookResult = ReturnType<typeof useUpdateServiceMutation>;
export type UpdateServiceMutationResult = Apollo.MutationResult<UpdateServiceMutation>;
export type UpdateServiceMutationOptions = Apollo.BaseMutationOptions<UpdateServiceMutation, UpdateServiceMutationVariables>;
export const CreateServiceDocument = gql`
    mutation createService($service: HealthHubServiceInput!) {
  createService(service: $service) {
    ...ServiceParts
  }
}
    ${ServicePartsFragmentDoc}`;
export type CreateServiceMutationFn = Apollo.MutationFunction<CreateServiceMutation, CreateServiceMutationVariables>;

/**
 * __useCreateServiceMutation__
 *
 * To run a mutation, you first call `useCreateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createServiceMutation, { data, loading, error }] = useCreateServiceMutation({
 *   variables: {
 *      service: // value for 'service'
 *   },
 * });
 */
export function useCreateServiceMutation(baseOptions?: Apollo.MutationHookOptions<CreateServiceMutation, CreateServiceMutationVariables>) {
        return Apollo.useMutation<CreateServiceMutation, CreateServiceMutationVariables>(CreateServiceDocument, baseOptions);
      }
export type CreateServiceMutationHookResult = ReturnType<typeof useCreateServiceMutation>;
export type CreateServiceMutationResult = Apollo.MutationResult<CreateServiceMutation>;
export type CreateServiceMutationOptions = Apollo.BaseMutationOptions<CreateServiceMutation, CreateServiceMutationVariables>;
export const GetUserByIdDocument = gql`
    query getUserById($id: ID!) {
  getUserById(id: $id) {
    id
    name
    active
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, baseOptions);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, baseOptions);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetAddressByZipcodeDocument = gql`
    query getAddressByZipcode($zipcode: String!) {
  getAddressByZipcode(zipcode: $zipcode) {
    zipcode
    street
    neighborhood
    city
    state
  }
}
    `;

/**
 * __useGetAddressByZipcodeQuery__
 *
 * To run a query within a React component, call `useGetAddressByZipcodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAddressByZipcodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAddressByZipcodeQuery({
 *   variables: {
 *      zipcode: // value for 'zipcode'
 *   },
 * });
 */
export function useGetAddressByZipcodeQuery(baseOptions: Apollo.QueryHookOptions<GetAddressByZipcodeQuery, GetAddressByZipcodeQueryVariables>) {
        return Apollo.useQuery<GetAddressByZipcodeQuery, GetAddressByZipcodeQueryVariables>(GetAddressByZipcodeDocument, baseOptions);
      }
export function useGetAddressByZipcodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAddressByZipcodeQuery, GetAddressByZipcodeQueryVariables>) {
          return Apollo.useLazyQuery<GetAddressByZipcodeQuery, GetAddressByZipcodeQueryVariables>(GetAddressByZipcodeDocument, baseOptions);
        }
export type GetAddressByZipcodeQueryHookResult = ReturnType<typeof useGetAddressByZipcodeQuery>;
export type GetAddressByZipcodeLazyQueryHookResult = ReturnType<typeof useGetAddressByZipcodeLazyQuery>;
export type GetAddressByZipcodeQueryResult = Apollo.QueryResult<GetAddressByZipcodeQuery, GetAddressByZipcodeQueryVariables>;