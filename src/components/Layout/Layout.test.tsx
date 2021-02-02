import React, { ComponentType } from 'react';
import userEvent, { TargetElement } from '@testing-library/user-event';
import { render, screen, waitFor, within } from 'utils/testing';
import Layout from '.';

const mockRouterPush = jest.fn();
const mockLogout = jest.fn();

type NextLinkProps = {
  children: ComponentType;
};

// eslint-disable-next-line react/display-name
jest.mock('next/link', () => ({ children }: NextLinkProps) => (
  <span onClick={mockRouterPush}>{children}</span>
));

jest.mock('next/router', () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: mockRouterPush,
      pathname: '',
    };
  },
}));

beforeAll(() => {
  /*
    mock console.error so we don't see the full log error in the middle of the test
  */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.resetAllMocks();
  // remove spyOn from console.error so the mock don't leak to other test
  (console.error as jest.Mock).mockRestore();
});

const getButtonFromMenu = (
  sidebar: HTMLElement,
  text: RegExp
): HTMLElement | TargetElement =>
  within(sidebar).getByRole('button', {
    name: text,
  });

const ComponentTest = () => <div>Test</div>;

const options = {
  mockAuth: {
    user: {
      displayName: 'Ford Perfect',
      email: 'ford.perfect@email.com',
      partnerId: '1',
    },
    logout: mockLogout,
  },
};

describe('Layout component', () => {
  it('Should render the layout correctly with app bar', async () => {
    render(
      <Layout>
        <ComponentTest />
      </Layout>,
      options
    );
    await waitFor(() => {
      expect(screen.queryByTestId(/loading-overlay/i)).not.toBeInTheDocument();
    });
    // Children component
    expect(screen.getByText('Test')).toBeInTheDocument();

    // AppBar test
    const appBar = screen.getByRole('banner', { name: /Menu de navegação/i });
    expect(appBar).toBeInTheDocument();
    expect(
      within(appBar).getByRole('heading', {
        name: /espaço saúde e bem-estar/i,
      })
    ).toBeInTheDocument();
    expect(within(appBar).getByLabelText(/^usuário$/i)).toHaveTextContent(
      /ford perfect/i
    );
  });

  it('Should redirect to home when I click in the heading title in app bar', async () => {
    render(
      <Layout>
        <ComponentTest />
      </Layout>,
      options
    );

    await waitFor(() => {
      expect(screen.queryByTestId(/loading-overlay/i)).not.toBeInTheDocument();
    });
    const appBar = screen.getByRole('banner', { name: /Menu de navegação/i });
    userEvent.click(
      within(appBar).getByRole('heading', {
        name: /espaço saúde e bem-estar/i,
      })
    );
    expect(mockRouterPush).toHaveBeenCalledTimes(1);
    expect(mockRouterPush).toHaveBeenCalledWith('/');
  });

  it('Should call mockLogout when I click in logout button', async () => {
    mockLogout.mockResolvedValue({});

    render(
      <Layout>
        <ComponentTest />
      </Layout>,
      options
    );
    await waitFor(() => {
      expect(screen.queryByTestId(/loading-overlay/i)).not.toBeInTheDocument();
    });
    const appBar = screen.getByRole('banner', { name: /menu de navegação/i });
    const openMenuIcon = getButtonFromMenu(appBar, /mostrar opções do usuário/i);
    userEvent.click(openMenuIcon);
    const optionsMenu = screen.getByRole('presentation', { name: /menu de opções/i });
    expect(optionsMenu).toBeInTheDocument();
    const logoutButton = within(optionsMenu).getByRole('menuitem', { name: /sair/i });
    expect(logoutButton).toBeInTheDocument();
    userEvent.click(logoutButton);
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });

  it('Should show toast error when logout promise rejects', async () => {
    mockLogout.mockRejectedValue({});

    render(
      <Layout>
        <ComponentTest />
      </Layout>,
      options
    );
    await waitFor(() => {
      expect(screen.queryByTestId(/loading-overlay/i)).not.toBeInTheDocument();
    });
    const appBar = screen.getByRole('banner', { name: /menu de navegação/i });
    const openMenuIcon = getButtonFromMenu(appBar, /mostrar opções do usuário/i);
    userEvent.click(openMenuIcon);
    const optionsMenu = screen.getByRole('presentation', { name: /menu de opções/i });
    const logoutButton = within(optionsMenu).getByRole('menuitem', { name: /sair/i });
    userEvent.click(logoutButton);

    expect(
      await screen.findByText(/Ocorreu um erro inesperado, tente novamente mais tarde/i)
    ).toBeInTheDocument();
  });
});
