import { GraphQLError } from 'graphql';
import {
  GraphQLContext,
  GraphQLRequest,
  GraphQLVariables,
  ResponseComposition,
} from 'msw';

type MockedResolverArgs = {
  data?: Record<string, any>;
  errors?: readonly Partial<GraphQLError>[] | null | undefined;
};

const mockedResolver = {
  requests: [] as GraphQLVariables[],
  clearAllMocks: function () {
    this.requests = [];
  },
  getTotalCalls: function () {
    return this.requests.length;
  },
};

export const withMockedResolver = ({ data, errors }: MockedResolverArgs) => (
  req: GraphQLRequest<GraphQLVariables>,
  res: ResponseComposition<any>,
  ctx: GraphQLContext<Record<string, any>>
) => {
  mockedResolver.requests = [...mockedResolver.requests, req.variables];
  if (errors) return res(ctx.errors(errors));
  if (data) return res(ctx.data(data));
  return res(ctx.data({}));
};

export default mockedResolver;
