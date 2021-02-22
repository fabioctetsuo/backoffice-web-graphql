import { render, screen, userEvent, fireEvent, waitFor } from 'utils/testing';
import EditSeller from './EditSeller';

import mocks from './mocks/graphql';

const mockRouterPush = jest.fn();
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockRouterPush,
    query: {
      id: '5fc96401dcbf6550dba10695',
    },
  }),
}));

describe('<EditSeller />', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('Should fill the form with Seller data', async () => {
    render(<EditSeller />, {
      mocks: [mocks.getSellerSuccess],
    });
    await waitFor(() => {
      expect(screen.getByLabelText(/Nome/i)).toHaveValue('Paulista 6');
    });

    // seller info
    expect(screen.getByLabelText(/Bandeira/i)).toHaveValue('Drogasil');
    expect(screen.getByLabelText(/CNPJ/i)).toHaveValue('61.585.865/2168-39');
    expect(screen.getByLabelText(/Código externo/i)).toHaveValue('3003');
    expect(screen.getByLabelText(/Telefone fixo/i)).toHaveValue('(11) 4007 - 2528');
    expect(screen.getByLabelText(/Telefone celular/i)).toHaveValue('(11) 96859 - 9194');

    // seller address
    expect(screen.getByLabelText(/Logradouro/i)).toHaveValue('Avenida Paulista');
    expect(screen.getByLabelText(/Número/i)).toHaveValue(1257);
    expect(screen.getByLabelText(/Bairro/i)).toHaveValue('Bela Vista');
    expect(screen.getByLabelText(/Cidade/i)).toHaveValue('São Paulo');
    expect(screen.getByLabelText(/Estado/i)).toHaveValue('SP');
    expect(screen.getByLabelText(/País/i)).toHaveValue('Brasil');
  });

  it('Should edit the seller name, submit with success and redirect to "/sellers"', async () => {
    render(<EditSeller />, {
      mocks: [mocks.getSellerSuccess, mocks.updateSeller],
    });

    userEvent.clear(await screen.findByLabelText(/nome/i));
    userEvent.type(screen.getByLabelText(/nome/i), 'Nova drogaria Paulista');

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    await waitFor(() => {
      expect(mockRouterPush).toHaveBeenCalledWith('/sellers');
    });
  });

  it('Should display a toast message if CNPJ is already registered', async () => {
    render(<EditSeller />, {
      mocks: [mocks.getSellerSuccess, mocks.updateSellerWithCnpjAlreadRegistered],
    });

    fireEvent.change(await screen.findByLabelText(/CNPJ/i), {
      target: { value: '61585865216800' },
    });

    userEvent.click(screen.getByText(/salvar/i));

    expect(
      await screen.findByText(/Já existe uma loja cadastrada com este CNPJ./i)
    ).toBeInTheDocument();
  });

  it('Should display a toast message if a generic error occurs when trying to update the seller', async () => {
    render(<EditSeller />, {
      mocks: [mocks.getSellerSuccess, mocks.updateSellerError],
    });

    fireEvent.change(await screen.findByLabelText(/CNPJ/i), {
      target: { value: '61585865216822' },
    });

    userEvent.click(screen.getByText(/salvar/i));

    expect(
      await screen.findByText(
        /Houve um erro ao atualizar a loja. Por favor, tente novamente./i
      )
    ).toBeInTheDocument();
  });

  it('Should not update the seller if have at least one empty required field', async () => {
    render(<EditSeller />, {
      mocks: [mocks.getSellerSuccess],
    });

    userEvent.clear(await screen.findByLabelText(/nome/i));
    userEvent.click(screen.getByText(/salvar/i));

    expect(screen.getByLabelText(/nome/i)).toHaveValue('');
    expect(await screen.findByText(/O campo "Nome" é obrigatório/i)).toBeInTheDocument();
    expect(mockRouterPush).not.toHaveBeenCalledWith('/sellers');
  });

  describe('Confirm dialog', () => {
    it('Should display the comfirm dialog and stay on the form if click "Não"', async () => {
      render(<EditSeller />, {
        mocks: [mocks.getSellerSuccess],
      });

      userEvent.type(await screen.findByLabelText(/nome/i), 'teste');

      userEvent.click(screen.getByText(/cancelar/i));

      // show confirm diealog
      expect(await screen.findByText(/Deseja cancelar a edição?/i)).toBeInTheDocument();
      expect(
        await screen.findByText(
          /Alterações não salvas serão perdidas. Deseja mesmo continuar?/i
        )
      ).toBeInTheDocument();

      userEvent.click(screen.getByLabelText(/Não/i));

      expect(mockRouterPush).not.toHaveBeenCalledWith('/sellers');
    });

    it('Should display the comfirm dialog and go to "/sellers" if click "Sim"', async () => {
      render(<EditSeller />, {
        mocks: [mocks.getSellerSuccess],
      });

      userEvent.type(await screen.findByLabelText(/nome/i), 'teste');

      userEvent.click(screen.getByText(/cancelar/i));

      // show confirm diealog
      expect(await screen.findByText(/Deseja cancelar a edição?/i)).toBeInTheDocument();
      expect(
        await screen.findByText(
          /Alterações não salvas serão perdidas. Deseja mesmo continuar?/i
        )
      ).toBeInTheDocument();

      userEvent.click(screen.getByLabelText(/Sim/i));

      expect(mockRouterPush).toHaveBeenCalledWith('/sellers');
    });
  });
});
