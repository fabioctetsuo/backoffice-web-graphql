import { GetUserByIdDocument } from 'generated-types';

export default {
  userSuccessMock: {
    request: {
      query: GetUserByIdDocument,
      variables: { id: '1' },
    },
    result: {
      data: {
        getUserById: {
          id: 1,
          name: 'John Doe',
          active: true,
        },
      },
    },
  },
};
