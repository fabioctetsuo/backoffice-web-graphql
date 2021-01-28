import React from 'react';
import { render, screen } from 'utils/testing';
import { AuthProvider, useAuth } from './auth-context';
import userEvent from '@testing-library/user-event';

const userToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJyb2xlcyI6WyJoaC1zdGFmZiJdfQ.cIPPogAfk7J7ogydK5RxtY3knUKfWlF53ULIZpY-Glk';

const customerTokenWithUserId =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJyb2xlcyI6WyJwbGF0Zm9ybS11c2VyIl0sInVzZXJfdWlkIjoiWjEyM3NkMiJ9.O-1uux_mlJX6V_BbipXbbJnKqA3E0l-xe9eQk5efL08';
const mockedOnIdTokenChanged = jest.fn();
const mockGetIdToken = jest.fn().mockResolvedValueOnce(userToken);

const mockedPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockedPush,
  }),
}));

const TestComponent = () => {
  const { user, login, logout } = useAuth();
  return (
    <div>
      <button
        onClick={() => {
          login && login({ email: 'testEmail', password: 'testPassword' });
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          logout && logout();
        }}
      >
        Logout
      </button>
      {user ? (
        <div>
          <p>{user?.displayName}</p>
        </div>
      ) : (
        'Not Authorized'
      )}
    </div>
  );
};

jest.mock('client/firebase', () => ({
  firebase: {
    auth: () => ({
      signInWithEmailAndPassword: jest.fn().mockResolvedValue({
        user: {
          displayName: 'Arthur Dent',
          getIdToken: mockGetIdToken,
        },
      }),
      signOut: jest.fn().mockImplementation(() => Promise.resolve()),
      onIdTokenChanged: mockedOnIdTokenChanged,
    }),
  },
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('Auth Context', () => {
  it('Should display the correct data when user is logged in', async () => {
    mockedOnIdTokenChanged.mockImplementationOnce(fn => {
      fn();
    });
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    userEvent.click(screen.getByText(/login/i));
    expect(await screen.findByText(/Arthur Dent/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/logout/i));

    expect(await screen.findByText(/not authorized/i)).toBeInTheDocument();
    expect(mockedPush).toHaveBeenCalledWith('/login');
  });

  it('Should display the toast with unauthorized message if user is a customer', async () => {
    mockGetIdToken.mockResolvedValueOnce(customerTokenWithUserId);
    mockedOnIdTokenChanged.mockImplementationOnce(fn => {
      fn({ getIdToken: mockGetIdToken });
    });
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    userEvent.click(screen.getByText(/login/i));
    expect(await screen.findByText(/Usuário não autorizado/i)).toBeInTheDocument();
  });

  it('Should render authenticated content when user is already logged in', async () => {
    mockGetIdToken.mockResolvedValueOnce(userToken);
    mockedOnIdTokenChanged.mockImplementationOnce(fn => {
      fn({ displayName: 'John Doe', getIdToken: mockGetIdToken });
    });
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(await screen.findByText(/John Doe/i)).toBeInTheDocument();
  });

  it('Should render unauthenticated content when user is not logged in', async () => {
    mockedOnIdTokenChanged.mockImplementationOnce(fn => {
      fn();
    });
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(await screen.findByText(/not authorized/i)).toBeInTheDocument();
  });
});
