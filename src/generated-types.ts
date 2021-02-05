import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
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
  Label = 'LABEL',
}

export enum HealthHubFieldType {
  Vaccine = 'VACCINE',
  PharmaService = 'PHARMA_SERVICE',
  RapidTest = 'RAPID_TEST',
}

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

export type HealthHubServiceField = {
  __typename?: 'HealthHubServiceField';
  key?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  type: HealthHubServiceFieldType;
  value?: Maybe<Scalars['String']>;
  values?: Maybe<Array<HealthHubServiceValue>>;
  validations?: Maybe<HealthHubFieldValidation>;
  data?: Maybe<HealthHubServiceFieldData>;
};

export type HealthHubServiceFieldInput = {
  key?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  type: HealthHubServiceFieldType;
  value?: Maybe<Scalars['String']>;
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

export type Query = {
  __typename?: 'Query';
  getUserById?: Maybe<User>;
  service?: Maybe<HealthHubService>;
  services?: Maybe<HealthHubServiceAll>;
};

export type QueryGetUserByIdArgs = {
  id: Scalars['ID'];
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
  updateService?: Maybe<HealthHubService>;
};

export type MutationUpdateServiceArgs = {
  service: HealthHubServiceInput;
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  active?: Maybe<Scalars['String']>;
};

export type ServicePartsFragment = { __typename?: 'HealthHubService' } & Pick<
  HealthHubService,
  'emitDeclaration' | 'id' | 'info' | 'name' | 'price' | 'type'
> & {
    procedureFields: Array<
      { __typename?: 'HealthHubServiceField' } & Pick<
        HealthHubServiceField,
        'key' | 'label' | 'type' | 'value'
      > & {
          validations?: Maybe<
            { __typename?: 'HealthHubFieldValidation' } & Pick<
              HealthHubFieldValidation,
              'min' | 'max' | 'required' | 'numbersOnly' | 'currentDate'
            >
          >;
          values?: Maybe<
            Array<
              { __typename?: 'HealthHubServiceValue' } & Pick<
                HealthHubServiceValue,
                'key' | 'label' | 'data'
              >
            >
          >;
          data?: Maybe<
            { __typename?: 'HealthHubServiceFieldData' } & Pick<
              HealthHubServiceFieldData,
              'unit'
            >
          >;
        }
    >;
  };

export type ServiceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type ServiceQuery = { __typename?: 'Query' } & {
  service?: Maybe<{ __typename?: 'HealthHubService' } & ServicePartsFragment>;
};

export type ServicesQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<HealthHubFieldType>;
  sort?: Maybe<Scalars['String']>;
}>;

export type ServicesQuery = { __typename?: 'Query' } & {
  services?: Maybe<
    { __typename?: 'HealthHubServiceAll' } & Pick<
      HealthHubServiceAll,
      'page' | 'totalPages' | 'totalElements'
    > & { content: Array<{ __typename?: 'HealthHubService' } & ServicePartsFragment> }
  >;
};

export type UpdateServiceMutationVariables = Exact<{
  id: Scalars['ID'];
  service: HealthHubServiceInput;
}>;

export type UpdateServiceMutation = { __typename?: 'Mutation' } & {
  updateService?: Maybe<{ __typename?: 'HealthHubService' } & ServicePartsFragment>;
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetUserByIdQuery = { __typename?: 'Query' } & {
  getUserById?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'name' | 'active'>>;
};

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
      value
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
export const ServiceDocument = gql`
  query service($id: ID!) {
    service(id: $id) {
      ...ServiceParts
    }
  }
  ${ServicePartsFragmentDoc}
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
export function useServiceQuery(
  baseOptions: Apollo.QueryHookOptions<ServiceQuery, ServiceQueryVariables>
) {
  return Apollo.useQuery<ServiceQuery, ServiceQueryVariables>(
    ServiceDocument,
    baseOptions
  );
}
export function useServiceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ServiceQuery, ServiceQueryVariables>
) {
  return Apollo.useLazyQuery<ServiceQuery, ServiceQueryVariables>(
    ServiceDocument,
    baseOptions
  );
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
  ${ServicePartsFragmentDoc}
`;

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
export function useServicesQuery(
  baseOptions?: Apollo.QueryHookOptions<ServicesQuery, ServicesQueryVariables>
) {
  return Apollo.useQuery<ServicesQuery, ServicesQueryVariables>(
    ServicesDocument,
    baseOptions
  );
}
export function useServicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ServicesQuery, ServicesQueryVariables>
) {
  return Apollo.useLazyQuery<ServicesQuery, ServicesQueryVariables>(
    ServicesDocument,
    baseOptions
  );
}
export type ServicesQueryHookResult = ReturnType<typeof useServicesQuery>;
export type ServicesLazyQueryHookResult = ReturnType<typeof useServicesLazyQuery>;
export type ServicesQueryResult = Apollo.QueryResult<
  ServicesQuery,
  ServicesQueryVariables
>;
export const UpdateServiceDocument = gql`
  mutation updateService($id: ID!, $service: HealthHubServiceInput!) {
    updateService(id: $id, service: $service) {
      ...ServiceParts
    }
  }
  ${ServicePartsFragmentDoc}
`;
export type UpdateServiceMutationFn = Apollo.MutationFunction<
  UpdateServiceMutation,
  UpdateServiceMutationVariables
>;

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
export function useUpdateServiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateServiceMutation,
    UpdateServiceMutationVariables
  >
) {
  return Apollo.useMutation<UpdateServiceMutation, UpdateServiceMutationVariables>(
    UpdateServiceDocument,
    baseOptions
  );
}
export type UpdateServiceMutationHookResult = ReturnType<typeof useUpdateServiceMutation>;
export type UpdateServiceMutationResult = Apollo.MutationResult<UpdateServiceMutation>;
export type UpdateServiceMutationOptions = Apollo.BaseMutationOptions<
  UpdateServiceMutation,
  UpdateServiceMutationVariables
>;
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
export function useGetUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>
) {
  return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    baseOptions
  );
}
export function useGetUserByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>
) {
  return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    baseOptions
  );
}
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<
  GetUserByIdQuery,
  GetUserByIdQueryVariables
>;
