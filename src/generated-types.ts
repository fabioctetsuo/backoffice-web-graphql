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

export type ProviderCreateInput = {
  startHour: Scalars['String'];
  endHour: Scalars['String'];
  startIntervalHour?: Maybe<Scalars['String']>;
  endIntervalHour?: Maybe<Scalars['String']>;
  slots: Scalars['Int'];
  interval: Scalars['Int'];
  providerId: Scalars['ID'];
};

export type ProviderUpdateInput = {
  startHour: Scalars['String'];
  endHour: Scalars['String'];
  startIntervalHour?: Maybe<Scalars['String']>;
  endIntervalHour?: Maybe<Scalars['String']>;
  slots: Scalars['Int'];
  interval: Scalars['Int'];
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
  getAllUsers: UsersAll;
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


export type QueryGetAllUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
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
  createUser?: Maybe<User>;
  updateProvider?: Maybe<Provider>;
  updateSeller?: Maybe<Seller>;
  updateService?: Maybe<HealthHubService>;
  updateUser?: Maybe<User>;
};


export type MutationCreateProviderArgs = {
  provider: ProviderCreateInput;
};


export type MutationCreateSellerArgs = {
  seller: SellerInput;
};


export type MutationCreateServiceArgs = {
  service: HealthHubServiceInput;
};


export type MutationCreateUserArgs = {
  user: UserInput;
};


export type MutationUpdateProviderArgs = {
  provider: ProviderUpdateInput;
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


export type MutationUpdateUserArgs = {
  user: UserInput;
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

export type Guideline = {
  __typename?: 'Guideline';
  howTo: Scalars['String'];
  attentionPoints?: Maybe<Scalars['String']>;
};

export type GuidelineInput = {
  howTo: Scalars['String'];
  attentionPoints?: Maybe<Scalars['String']>;
};

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
  position?: Maybe<Scalars['Int']>;
};

export type HealthHubServiceField = {
  __typename?: 'HealthHubServiceField';
  key?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  type: HealthHubServiceFieldType;
  values?: Maybe<Array<HealthHubServiceValue>>;
  validations?: Maybe<HealthHubFieldValidation>;
  data?: Maybe<HealthHubServiceFieldData>;
  position?: Maybe<Scalars['Int']>;
};

export type HealthHubServiceFieldInput = {
  key?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  type: HealthHubServiceFieldType;
  values?: Maybe<Array<HealthHubServiceValueInput>>;
  validations?: Maybe<HealthHubFieldValidationInput>;
  data?: Maybe<HealthHubServiceFieldDataInput>;
  position?: Maybe<Scalars['Int']>;
};

export type HealthHubService = {
  __typename?: 'HealthHubService';
  id: Scalars['ID'];
  info?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
  guideline: Guideline;
  procedureFields: Array<HealthHubServiceField>;
  type: HealthHubFieldType;
  attachMedicalReport?: Maybe<Scalars['Boolean']>;
  emitDeclaration?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  preparation?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
};

export type HealthHubServiceById = {
  __typename?: 'HealthHubServiceById';
  id: Scalars['ID'];
  info?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price?: Maybe<Scalars['String']>;
  guideline: Guideline;
  procedureFields: Array<HealthHubServiceFieldById>;
  type: HealthHubFieldType;
  emitDeclaration?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  preparation?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
};

export type HealthHubServiceInput = {
  info?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
  guideline: GuidelineInput;
  procedureFields: Array<Maybe<HealthHubServiceFieldInput>>;
  type: HealthHubFieldType;
  attachMedicalReport?: Maybe<Scalars['Boolean']>;
  emitDeclaration?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  preparation?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
};

export type HealthHubServiceAll = {
  __typename?: 'HealthHubServiceAll';
  content: Array<HealthHubService>;
  page?: Maybe<Scalars['Int']>;
  totalElements?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type Role = {
  __typename?: 'Role';
  name: Scalars['String'];
  description: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  disabled: Scalars['Boolean'];
  profile: Scalars['String'];
  email: Scalars['String'];
  roles: Array<Maybe<Role>>;
  partnerId: Scalars['String'];
  name: Scalars['String'];
  id: Scalars['ID'];
};

export type UserInput = {
  disabled?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  partnerId?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UsersAll = {
  __typename?: 'UsersAll';
  content: Array<User>;
  page?: Maybe<Scalars['Int']>;
  totalElements?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
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

export type ProvidersPartFragment = (
  { __typename?: 'Provider' }
  & Pick<Provider, 'startHour' | 'endHour' | 'startIntervalHour' | 'endIntervalHour' | 'slots' | 'interval' | 'id'>
);

export type ProviderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProviderQuery = (
  { __typename?: 'Query' }
  & { provider: (
    { __typename?: 'Provider' }
    & ProvidersPartFragment
  ) }
);

export type CreateProviderMutationVariables = Exact<{
  provider: ProviderCreateInput;
}>;


export type CreateProviderMutation = (
  { __typename?: 'Mutation' }
  & { createProvider?: Maybe<(
    { __typename?: 'Provider' }
    & ProvidersPartFragment
  )> }
);

export type UpdateProviderMutationVariables = Exact<{
  id: Scalars['ID'];
  provider: ProviderUpdateInput;
}>;


export type UpdateProviderMutation = (
  { __typename?: 'Mutation' }
  & { updateProvider?: Maybe<(
    { __typename?: 'Provider' }
    & ProvidersPartFragment
  )> }
);

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
  & Pick<HealthHubService, 'emitDeclaration' | 'id' | 'info' | 'name' | 'price' | 'type' | 'description' | 'preparation' | 'result'>
  & { guideline: (
    { __typename?: 'Guideline' }
    & Pick<Guideline, 'howTo' | 'attentionPoints'>
  ), procedureFields: Array<(
    { __typename?: 'HealthHubServiceField' }
    & Pick<HealthHubServiceField, 'key' | 'label' | 'type' | 'position'>
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
    & Pick<HealthHubServiceById, 'emitDeclaration' | 'id' | 'info' | 'name' | 'price' | 'type' | 'description' | 'preparation' | 'result'>
    & { guideline: (
      { __typename?: 'Guideline' }
      & Pick<Guideline, 'howTo' | 'attentionPoints'>
    ), procedureFields: Array<(
      { __typename?: 'HealthHubServiceFieldById' }
      & Pick<HealthHubServiceFieldById, 'key' | 'label' | 'type' | 'position'>
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

export type UserPartsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'profile' | 'partnerId' | 'disabled'>
  & { roles: Array<Maybe<(
    { __typename?: 'Role' }
    & Pick<Role, 'name' | 'description'>
  )>> }
);

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserByIdQuery = (
  { __typename?: 'Query' }
  & { getUserById?: Maybe<(
    { __typename?: 'User' }
    & UserPartsFragment
  )> }
);

export type GetAllUsersQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
}>;


export type GetAllUsersQuery = (
  { __typename?: 'Query' }
  & { getAllUsers: (
    { __typename?: 'UsersAll' }
    & Pick<UsersAll, 'page' | 'totalPages' | 'totalElements'>
    & { content: Array<(
      { __typename?: 'User' }
      & UserPartsFragment
    )> }
  ) }
);

export type CreateUserMutationVariables = Exact<{
  user: UserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'User' }
    & UserPartsFragment
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID'];
  user: UserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'User' }
    & UserPartsFragment
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

export const ProvidersPartFragmentDoc = gql`
    fragment ProvidersPart on Provider {
  startHour
  endHour
  startIntervalHour
  endIntervalHour
  slots
  interval
  id
}
    `;
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
  description
  preparation
  result
  guideline {
    howTo
    attentionPoints
  }
  procedureFields {
    key
    label
    type
    position
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
export const UserPartsFragmentDoc = gql`
    fragment UserParts on User {
  id
  name
  email
  profile
  partnerId
  disabled
  roles {
    name
    description
  }
}
    `;
export const ProviderDocument = gql`
    query provider($id: ID!) {
  provider(id: $id) {
    ...ProvidersPart
  }
}
    ${ProvidersPartFragmentDoc}`;

/**
 * __useProviderQuery__
 *
 * To run a query within a React component, call `useProviderQuery` and pass it any options that fit your needs.
 * When your component renders, `useProviderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProviderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProviderQuery(baseOptions: Apollo.QueryHookOptions<ProviderQuery, ProviderQueryVariables>) {
        return Apollo.useQuery<ProviderQuery, ProviderQueryVariables>(ProviderDocument, baseOptions);
      }
export function useProviderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProviderQuery, ProviderQueryVariables>) {
          return Apollo.useLazyQuery<ProviderQuery, ProviderQueryVariables>(ProviderDocument, baseOptions);
        }
export type ProviderQueryHookResult = ReturnType<typeof useProviderQuery>;
export type ProviderLazyQueryHookResult = ReturnType<typeof useProviderLazyQuery>;
export type ProviderQueryResult = Apollo.QueryResult<ProviderQuery, ProviderQueryVariables>;
export const CreateProviderDocument = gql`
    mutation createProvider($provider: ProviderCreateInput!) {
  createProvider(provider: $provider) {
    ...ProvidersPart
  }
}
    ${ProvidersPartFragmentDoc}`;
export type CreateProviderMutationFn = Apollo.MutationFunction<CreateProviderMutation, CreateProviderMutationVariables>;

/**
 * __useCreateProviderMutation__
 *
 * To run a mutation, you first call `useCreateProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProviderMutation, { data, loading, error }] = useCreateProviderMutation({
 *   variables: {
 *      provider: // value for 'provider'
 *   },
 * });
 */
export function useCreateProviderMutation(baseOptions?: Apollo.MutationHookOptions<CreateProviderMutation, CreateProviderMutationVariables>) {
        return Apollo.useMutation<CreateProviderMutation, CreateProviderMutationVariables>(CreateProviderDocument, baseOptions);
      }
export type CreateProviderMutationHookResult = ReturnType<typeof useCreateProviderMutation>;
export type CreateProviderMutationResult = Apollo.MutationResult<CreateProviderMutation>;
export type CreateProviderMutationOptions = Apollo.BaseMutationOptions<CreateProviderMutation, CreateProviderMutationVariables>;
export const UpdateProviderDocument = gql`
    mutation updateProvider($id: ID!, $provider: ProviderUpdateInput!) {
  updateProvider(id: $id, provider: $provider) {
    ...ProvidersPart
  }
}
    ${ProvidersPartFragmentDoc}`;
export type UpdateProviderMutationFn = Apollo.MutationFunction<UpdateProviderMutation, UpdateProviderMutationVariables>;

/**
 * __useUpdateProviderMutation__
 *
 * To run a mutation, you first call `useUpdateProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProviderMutation, { data, loading, error }] = useUpdateProviderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      provider: // value for 'provider'
 *   },
 * });
 */
export function useUpdateProviderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProviderMutation, UpdateProviderMutationVariables>) {
        return Apollo.useMutation<UpdateProviderMutation, UpdateProviderMutationVariables>(UpdateProviderDocument, baseOptions);
      }
export type UpdateProviderMutationHookResult = ReturnType<typeof useUpdateProviderMutation>;
export type UpdateProviderMutationResult = Apollo.MutationResult<UpdateProviderMutation>;
export type UpdateProviderMutationOptions = Apollo.BaseMutationOptions<UpdateProviderMutation, UpdateProviderMutationVariables>;
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
  sellers(
    page: $page
    size: $size
    sort: $sort
    name: $name
    documentNumber: $documentNumber
  ) {
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
    description
    preparation
    result
    guideline {
      howTo
      attentionPoints
    }
    procedureFields {
      key
      label
      type
      position
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
    ...UserParts
  }
}
    ${UserPartsFragmentDoc}`;

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
export const GetAllUsersDocument = gql`
    query getAllUsers($page: Int, $size: Int, $sort: String, $name: String, $email: String) {
  getAllUsers(page: $page, size: $size, sort: $sort, name: $name, email: $email) {
    content {
      ...UserParts
    }
    page
    totalPages
    totalElements
  }
}
    ${UserPartsFragmentDoc}`;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *      sort: // value for 'sort'
 *      name: // value for 'name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, baseOptions);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, baseOptions);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($user: UserInput!) {
  createUser(user: $user) {
    ...UserParts
  }
}
    ${UserPartsFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($id: ID!, $user: UserInput!) {
  updateUser(id: $id, user: $user) {
    ...UserParts
  }
}
    ${UserPartsFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
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