import nock from 'nock';
import {
  getUserById as GET_USER,
  getAllUsers as GET_USERS,
  createUser as CREATE_USER,
  updateUser as UPDATE_USER,
} from 'gqls/users.gql';
import createTestServer from '../utils/test-helper';
import UsersAPI from '../datasources/users';

const usersAPI = new UsersAPI();

const originalUser = {
  profile: 'SYSTEM',
  disabled: false,
  email: 'healthhubadmin@gmail.com',
  roles: [
    {
      description: 'Admin',
      name: 'admin',
    },
    {
      description: 'Platform Admin',
      name: 'platform-admin',
    },
    {
      description: 'Health Hub Pharmacist',
      name: 'hh-pharma',
    },
  ],
  partnerId: '5fc963c2dcbf6550dba10691',
  name: 'Health Hub Admin',
  id: '0eff5d5a-1f4b-4d47-81a7-f82f567ba816',
};

describe('Graphql Integration - Users', () => {
  it('Get user', async () => {
    nock('http://localhost:3001')
      .get('/users/0eff5d5a-1f4b-4d47-81a7-f82f567ba816')
      .reply(200, originalUser);

    const { query } = createTestServer(() => ({ users: usersAPI }));

    const responseRequest = await query({
      query: GET_USER,
      variables: {
        id: '0eff5d5a-1f4b-4d47-81a7-f82f567ba816',
      },
    });

    expect(responseRequest.data.getUserById).toEqual(originalUser);
  });

  it('Get users', async () => {
    const response = {
      content: [originalUser],
      pageable: {
        pageNumber: 1,
      },
      totalElements: 1,
      totalPages: 1,
    };

    const params = {
      sort: 'name,asc',
      page: 1,
      size: 10,
    };

    nock('http://localhost:3001').get('/users').query(params).reply(200, response);

    const { query } = createTestServer(() => ({ users: usersAPI }));

    const responseRequest = await query({
      query: GET_USERS,
      variables: params,
    });
    expect(responseRequest.data.getAllUsers).toEqual({
      page: 1,
      totalPages: 1,
      totalElements: 1,
      content: [originalUser],
    });
  });

  it('Get users with sort params', async () => {
    const response = {
      content: [originalUser],
      pageable: {
        pageNumber: 1,
      },
      totalElements: 1,
      totalPages: 1,
    };

    usersAPI.get = jest.fn();

    const params = {
      sort: 'name,asc',
      page: 1,
      size: 10,
    };

    nock('http://localhost:3001').get('/users').query(params).reply(200, response);

    const { query } = createTestServer(() => ({ users: usersAPI }));

    await query({
      query: GET_USERS,
      variables: params,
    });

    expect(usersAPI.get).toHaveBeenCalledWith('users', params);
  });

  it('Get users with name and email filters', async () => {
    const response = {
      content: [originalUser],
      pageable: {
        pageNumber: 1,
      },
      totalElements: 1,
      totalPages: 1,
    };

    usersAPI.get = jest.fn();

    const params = {
      name: 'Health Hub Admin',
      email: 'healthhubadmin@gmail.com',
      page: 1,
      size: 10,
    };

    nock('http://localhost:3001').get('/users').query(params).reply(200, response);

    const { query } = createTestServer(() => ({ users: usersAPI }));

    await query({
      query: GET_USERS,
      variables: params,
    });

    expect(usersAPI.get).toHaveBeenCalledWith('users', params);
  });

  it('Create user', async () => {
    const newuser = {
      ...originalUser,
      name: 'New user',
      roles: [
        {
          description: 'Admin',
          name: 'admin',
        },
      ],
    };

    const graphqlResponseUserCreate = {
      ...originalUser,
      name: 'New user',
      disabled: false,
      password: 'Mypass123',
      roles: ['admin'],
    };

    delete graphqlResponseUserCreate.id;
    nock('http://localhost:3001').post('/users').reply(200, newuser);

    const { mutate } = createTestServer(() => ({ users: usersAPI }));

    const responseRequest = await mutate({
      query: CREATE_USER,
      variables: {
        user: graphqlResponseUserCreate,
      },
    });

    expect(responseRequest.data.createUser).toEqual(newuser);
  });

  it('Update user', async () => {
    const { id, ...updatedUser } = {
      ...originalUser,
      name: 'Updated user',
      roles: ['hh-pharma'],
      disabled: false,
    };

    const responseUpdate = {
      id,
      ...updatedUser,
      roles: [
        {
          description: 'Health Hub Pharmacist',
          name: 'hh-pharma',
        },
      ],
    };

    nock('http://localhost:3001')
      .patch('/users/0eff5d5a-1f4b-4d47-81a7-f82f567ba816')
      .reply(200, responseUpdate)
      .put('/users/0eff5d5a-1f4b-4d47-81a7-f82f567ba816/roles')
      .reply(200, responseUpdate);

    const { mutate } = createTestServer(() => ({ users: usersAPI }));

    const responseRequest = await mutate({
      query: UPDATE_USER,
      variables: {
        id: '0eff5d5a-1f4b-4d47-81a7-f82f567ba816',
        user: updatedUser,
      },
    });

    expect(responseRequest.data.updateUser).toEqual(responseUpdate);
  });
});
