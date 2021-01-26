/* eslint-disable react/display-name */
import React, { ComponentType } from 'react';
import userEvent, { TargetElement } from '@testing-library/user-event';
import { render, screen, within, waitFor } from 'utils/testing';
import matchMediaPolyfill from 'mq-polyfill';

import Layout from '.';

const mockRouterPush = jest.fn();

type NextLinkProps = {
  children: ComponentType;
};

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

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.resetAllMocks();
});

beforeAll(() => {
  matchMediaPolyfill(window);
  window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height,
    }).dispatchEvent(new this.Event('resize'));
  };
});

const getButtonFromMenu = (
  sidebar: HTMLElement,
  text: RegExp
): HTMLElement | TargetElement =>
  within(sidebar).getByRole('button', {
    name: text,
  });

const ComponentTest = () => <div>Test</div>;

describe('Layout component', () => {
  it('Should render layout correctly', () => {
    render(
      <Layout
        path={[
          {
            label: 'link1',
            link: '/link1',
          },
          {
            label: 'link2',
          },
        ]}
      >
        <ComponentTest />
      </Layout>
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(
      screen.getByLabelText('breadcrumb').children[0].children[0].textContent
    ).toEqual('link1');
    expect(
      screen.getByLabelText('breadcrumb').children[0].children[2].textContent
    ).toEqual('link2');

    const menuIcon = within(screen.getByTestId('menu-item-homepage')).getByTestId(
      'menu-icon'
    );
    expect(menuIcon).toHaveStyle({
      color: 'hsla(0,0%,100%,.65)',
    });
    userEvent.hover(screen.getByTestId('menu-item-homepage'));
    expect(menuIcon).toHaveStyle({
      color: '#fff',
    });
    userEvent.unhover(screen.getByTestId('menu-item-homepage'));
    expect(menuIcon).toHaveStyle({
      color: 'hsla(0,0%,100%,.65)',
    });
  });

  it('Should mock route push when click on breadcrumb with link', () => {
    render(
      <Layout
        path={[
          {
            label: 'link1',
            link: '/link1',
          },
          {
            label: 'link2',
          },
        ]}
      >
        <ComponentTest />
      </Layout>
    );

    expect(mockRouterPush).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByText('link1'));
    expect(mockRouterPush).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByText('link2'));
    expect(mockRouterPush).toHaveBeenCalledTimes(1);
  });

  it('Should render menu icon when is mobile', async () => {
    window.resizeTo(320, 580);
    render(
      <Layout
        path={[
          {
            label: 'link1',
            link: '/link1',
          },
          {
            label: 'link2',
          },
        ]}
      >
        <ComponentTest />
      </Layout>
    );
    expect(
      screen.getByRole('button', { name: /abrir menu de navegação/i })
    ).toBeVisible();
    const sidebar = screen.getByTestId('mobile-sidebar');
    expect(sidebar).not.toBeVisible();
    userEvent.click(screen.getByRole('button', { name: /abrir menu de navegação/i }));
    expect(sidebar).toBeVisible();
    userEvent.click(getButtonFromMenu(sidebar, /fechar menu de navegação/i));
    await waitFor(() => {
      expect(screen.getByTestId('mobile-sidebar')).not.toBeVisible();
    });
  });

  it('Should render sidebar when is desktop', async () => {
    window.resizeTo(1280, 580);
    render(
      <Layout
        path={[
          {
            label: 'link1',
            link: '/link1',
          },
          {
            label: 'link2',
          },
        ]}
      >
        <ComponentTest />
      </Layout>
    );
    const sidebar = screen.getByTestId('desktop-sidebar');
    expect(sidebar).toBeInTheDocument();
    const openMenuIcon = getButtonFromMenu(sidebar, /abrir menu de navegação/i);
    expect(openMenuIcon).toBeInTheDocument();
    userEvent.click(openMenuIcon);
    expect(
      within(sidebar).queryByRole('button', {
        name: /abrir menu de navegação/i,
      })
    ).not.toBeInTheDocument();
    const closeMenuIcon = getButtonFromMenu(sidebar, /fechar menu de navegação/i);
    expect(closeMenuIcon).toBeInTheDocument();
    userEvent.click(closeMenuIcon);
    await waitFor(() => {
      expect(
        within(sidebar).queryByRole('button', {
          name: /fechar menu de navegação/i,
        })
      ).not.toBeInTheDocument();
    });
    expect(getButtonFromMenu(sidebar, /abrir menu de navegação/i)).toBeInTheDocument();
  });

  it('Should redirect when I click in a menu item', () => {
    render(
      <Layout>
        <ComponentTest />
      </Layout>
    );

    const homePageMenuIcon = within(screen.getByTestId('menu-item-homepage')).getByTestId(
      'menu-icon'
    );
    userEvent.click(homePageMenuIcon);
    expect(mockRouterPush).toHaveBeenCalledTimes(1);
    expect(mockRouterPush).toHaveBeenCalledWith('/');
  });
});
