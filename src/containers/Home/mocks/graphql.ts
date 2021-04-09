import { GetUserByIdDocument } from 'generated-types';

export default {
  userSuccessMock: {
    request: {
      query: GetUserByIdDocument,
      variables: { id: '0eff5d5a-1f4b-4d47-81a7-f82f567ba816' },
    },
    result: {
      data: {
        getUserById: {
          id: '0eff5d5a-1f4b-4d47-81a7-f82f567ba816',
          name: 'John Doe',
          active: true,
        },
      },
    },
  },
};
