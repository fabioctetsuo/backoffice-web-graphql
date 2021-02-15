import * as React from 'react';
import { render, screen, userEvent, within, fireEvent } from 'utils/testing';
import Sellers from './Sellers';

import graphqlMock from './mocks/graphql';

describe('Sellers list', () => {
  it('Must render sellers list correctly', async () => {
    render(<Sellers />, {
      mocks: [graphqlMock.getSellersSuccess],
    });

    const table = await screen.findByLabelText(/tabela de lojas/i);
    const paulista = within(table).getByText(/paulista 6/i);
    const vilaGuilherme = within(table).getByText(/vila guilherme a/i);

    expect(table).toBeDefined();
    expect(paulista).toBeDefined();
    expect(vilaGuilherme).toBeDefined();
  });

  it('Must render empty state if do not have sellers', async () => {
    render(<Sellers />, {
      mocks: [graphqlMock.getSellersSuccessEmpty],
    });

    const table = await screen.findByLabelText(/tabela de lojas/i);
    const emptyState = within(table).getByText(/Nenhuma loja encontrada/i);

    expect(table).toBeDefined();
    expect(emptyState).toBeDefined();
  });

  it('Must render the list of sellers according to the search by name', async () => {
    render(<Sellers />, {
      mocks: [graphqlMock.getSellersSuccess, graphqlMock.getSellersSuccessFilteredByName],
    });
    userEvent.type(await screen.findByLabelText(/nome/i), 'paulista');
    userEvent.click(screen.getByLabelText(/pesquisar/i));

    const table = await screen.findByLabelText(/tabela de lojas/i);

    expect(within(table).queryByText(/Vila Guilherme A/i)).not.toBeInTheDocument();
    expect(within(table).queryByText(/Paulista 6/i)).toBeInTheDocument();
  });

  it('Must render the list of sellers according to the search by documentNumber (CNPJ)', async () => {
    render(<Sellers />, {
      mocks: [
        graphqlMock.getSellersSuccess,
        graphqlMock.getSellersSuccessFilteredByDocumentNumber,
      ],
    });
    fireEvent.change(await screen.findByLabelText(/CNPJ/i), {
      target: { value: '61585865064800' },
    });
    userEvent.click(screen.getByLabelText(/pesquisar/i));

    const table = await screen.findByLabelText(/tabela de lojas/i);

    expect(within(table).queryByText(/Vila Guilherme A/i)).toBeInTheDocument();
    expect(within(table).queryByText(/Paulista 6/i)).not.toBeInTheDocument();
  });

  it('Must clear the search params and get all sellers with no search params', async () => {
    render(<Sellers />, {
      mocks: [
        graphqlMock.getSellersSuccess,
        graphqlMock.getSellersSuccessFilteredByDocumentNumber,
        graphqlMock.getSellersResetSuccess,
      ],
    });

    const documentNumberInput = await screen.findByLabelText(/CNPJ/i);

    // make a search using the Vila Guilherme CNPJ
    fireEvent.change(documentNumberInput, {
      target: { value: '61585865064800' },
    });

    userEvent.click(screen.getByLabelText(/pesquisar/i));

    const table = await screen.findByLabelText(/tabela de lojas/i);

    expect(within(table).queryByText(/Vila Guilherme A/i)).toBeInTheDocument();
    expect(within(table).queryByText(/Paulista 6/i)).not.toBeInTheDocument();

    // clear search
    userEvent.click(screen.getByLabelText(/limpar pesquisa/i));

    expect(await within(table).findByText(/Vila Guilherme A/i)).toBeInTheDocument();
    expect(within(table).queryByText(/Paulista 6/i)).toBeInTheDocument();
  });
});
