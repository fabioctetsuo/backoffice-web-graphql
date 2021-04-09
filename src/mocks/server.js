import { setupServer } from 'msw/node';
import { graphql } from 'msw';
import { handlers } from './handlers';

// Setup requests interception using the given handlers.
export const server = setupServer(...handlers);
export { graphql };
