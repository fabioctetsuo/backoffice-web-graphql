import React from 'react';
import user from '@testing-library/user-event';
import { render, screen, waitFor } from 'utils/testing';
import { useRouter } from 'next/router';
import Login from '.';
import strings from 'strings';

const customerTokenWithUserId =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJyb2xlcyI6WyJwbGF0Zm9ybS11c2VyIl0sInVzZXJfdWlkIjoiWjEyM3NkMiJ9.O-1uux_mlJX6V_BbipXbbJnKqA3E0l-xe9eQk5efL08';

const mockedOnIdTokenChanged = jest.fn();
const mockGetIdToken = jest.fn().mockResolvedValue(customerTokenWithUserId);

jest.mock('client/firebase', () => ({
  firebase: {
    auth: () => ({
      signInWithEmailAndPassword: jest.fn().mockResolvedValue({
        user: {
          getIdToken: mockGetIdToken,
        },
      }),
      onIdTokenChanged: mockedOnIdTokenChanged,
    }),
  },
}));
const mockedPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockedLogin = jest.fn();
const mockedLogout = jest.fn();

const mockAuth = {
  user: null,
  login: mockedLogin,
  logout: mockedLogout,
};

beforeEach(() => {
  (useRouter as jest.Mock).mockReturnValue({
    push: mockedPush,
    query: {
      url: '/home',
    },
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.resetAllMocks();
});

describe('Login Page', () => {
  it('should call login function with correct params and redirect to "/home"', async () => {
    mockedLogin.mockResolvedValueOnce({});
    render(<Login />, {
      mockAuth,
    });
    user.type(screen.getByLabelText(/e-mail/i), 'test@test.com');
    user.type(screen.getByLabelText(/senha/i), 'password');
    user.click(screen.getByText(/entrar/i));
    await waitFor(() => {
      expect(mockedLogin).toHaveBeenCalledTimes(1);
    });
    expect(mockedLogin).toHaveBeenCalledWith({
      email: 'test@test.com',
      password: 'password',
    });

    expect(mockedPush).toHaveBeenCalledWith('/home');
  });

  it('should call login function with correct params and redirect to "/"', async () => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockedPush,
      query: {},
    });
    mockedLogin.mockResolvedValueOnce({});
    render(<Login />, {
      mockAuth,
    });
    user.type(screen.getByLabelText(/e-mail/i), 'test@test.com');
    user.type(screen.getByLabelText(/senha/i), 'password');
    user.click(screen.getByText(/entrar/i));
    await waitFor(() => {
      expect(mockedLogin).toHaveBeenCalledTimes(1);
    });
    expect(mockedLogin).toHaveBeenCalledWith({
      email: 'test@test.com',
      password: 'password',
    });

    expect(mockedPush).toHaveBeenCalledWith('/');
  });

  it('should render warning message when user is unauthorized', async () => {
    mockedOnIdTokenChanged.mockImplementationOnce(fn => {
      fn({ displayName: 'Ford Perfect', getIdToken: mockGetIdToken });
    });
    render(<Login />);

    user.type(screen.getByLabelText(/e-mail/i), 'unauthorized_user@test.com');
    user.type(screen.getByLabelText(/senha/i), 'password');
    user.click(screen.getByText(/entrar/i));
    expect(
      await screen.findByText(strings.login.errors.unauthorized)
    ).toBeInTheDocument();
  });

  it('should render error message when fields are invalid', async () => {
    mockedLogin.mockResolvedValueOnce({});
    render(<Login />, {
      mockAuth,
    });
    user.click(screen.getByText(/entrar/i));

    expect(await screen.findByText(/o campo e-mail é obrigatório/i)).toBeInTheDocument();
    expect(screen.getByText(/o campo senha é obrigatório/i)).toBeInTheDocument();
    expect(mockedLogin).not.toHaveBeenCalled();

    user.type(screen.getByLabelText(/e-mail/i), 'notvalidemail@testcom');
    user.click(screen.getByText(/entrar/i));
    expect(
      await screen.findByText(/você deve digitar um e-mail válido/i)
    ).toBeInTheDocument();
    expect(mockedLogin).not.toHaveBeenCalled();
  });

  it('should render an error toast when e-mail is not found', async () => {
    render(<Login />, {
      mockAuth: {
        ...mockAuth,
        login: jest.fn().mockRejectedValueOnce({ code: 'auth/user-not-found' }),
      },
    });
    user.type(screen.getByLabelText(/e-mail/i), 'invalid_user@test.com');
    user.type(screen.getByLabelText(/senha/i), 'password');
    user.click(screen.getByText(/entrar/i));
    expect(await screen.findByText(strings.login.errors.invalidUser)).toBeInTheDocument();
  });

  it('should render an error toast when password invalid', async () => {
    render(<Login />, {
      mockAuth: {
        ...mockAuth,
        login: jest.fn().mockRejectedValueOnce({ code: 'auth/wrong-password' }),
      },
    });
    user.type(screen.getByLabelText(/e-mail/i), 'invalid_user@test.com');
    user.type(screen.getByLabelText(/senha/i), 'password');
    user.click(screen.getByText(/entrar/i));
    expect(await screen.findByText(strings.login.errors.invalidUser)).toBeInTheDocument();
  });

  it('should render an error toast when user is disabled in firebase', async () => {
    render(<Login />, {
      mockAuth: {
        ...mockAuth,
        login: jest.fn().mockRejectedValueOnce({ code: 'auth/user-disabled' }),
      },
    });
    user.type(screen.getByLabelText(/e-mail/i), 'invalid_user@test.com');
    user.type(screen.getByLabelText(/senha/i), 'password');
    user.click(screen.getByText(/entrar/i));
    expect(
      await screen.findByText(strings.login.errors.userDisabled)
    ).toBeInTheDocument();
  });

  it('should render an generic error toast when another error happens', async () => {
    render(<Login />, {
      mockAuth: {
        ...mockAuth,
        login: jest.fn().mockRejectedValueOnce({}),
      },
    });
    user.type(screen.getByLabelText(/e-mail/i), 'invalid_user@test.com');
    user.type(screen.getByLabelText(/senha/i), 'password');
    user.click(screen.getByText(/entrar/i));
    expect(await screen.findByText(strings.errors.generic)).toBeInTheDocument();
  });
});
