import { GraphQLError } from 'graphql';

export const handleGraphqlError = (
  errors: ReadonlyArray<GraphQLError>,
  callback: (codes: number[]) => void
) => {
  const codes = errors.map(({ extensions }) => extensions?.response?.status || 500);
  callback(codes);
};
