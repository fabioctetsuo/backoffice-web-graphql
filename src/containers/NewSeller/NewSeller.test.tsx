import { render, screen, userEvent, fireEvent, waitFor } from 'utils/testing';
import NewSeller from './NewSeller';

import mocks from './mocks/graphql';

const mockRouterPush = jest.fn();
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

const fillSellerForm = async () => {
  fireEvent.change(screen.getByTestId('select-input-tradingName'), {
    target: { value: 'Drogasil' },
  });

  userEvent.type(screen.getByLabelText(/nome/i), 'Paulista 6');
  userEvent.type(screen.getByLabelText(/Código externo/i), '3003');

  fireEvent.change(screen.getByLabelText(/CNPJ/i), {
    target: { value: '61585865216839' },
  });

  fireEvent.change(screen.getByLabelText(/Telefone fixo/i), {
    target: { value: '1140072528' },
  });

  fireEvent.change(screen.getByLabelText(/Telefone celular/i), {
    target: { value: '11968599194' },
  });

  fireEvent.change(screen.getByLabelText(/CEP/i), {
    target: { value: '01311200' },
  });

  userEvent.click(screen.getByText(/Pesquisar/i));

  await waitFor(() => {
    expect(screen.getByLabelText(/Logradouro/i)).toHaveValue('Avenida Paulista');
  });

  userEvent.type(screen.getByLabelText(/Número/i), '1257');
};

describe('<NewSeller />', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('Should fill the form and submit with success', async () => {
    render(<NewSeller />, {
      mocks: [mocks.getAddressSuccess, mocks.createSellerSuccess],
    });

    await fillSellerForm();

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    expect(await screen.findByText('Loja cadastrada com sucesso.')).toBeInTheDocument();
  });

  it('Should display a warning toast if CNPJ is already registered', async () => {
    render(<NewSeller />, {
      mocks: [mocks.getAddressSuccess, mocks.createSellerWithCnpjAlreadRegistered],
    });

    await fillSellerForm();

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    expect(
      await screen.findByText('Já existe uma loja cadastrada com este CNPJ.')
    ).toBeInTheDocument();
  });

  it('Should display the generic error toast if throw a unmapped error on submit', async () => {
    render(<NewSeller />, {
      mocks: [mocks.getAddressSuccess, mocks.createSellerError],
    });

    await fillSellerForm();

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    expect(
      await screen.findByText(
        'Houve um erro ao cadastrar a loja. Por favor, tente novamente.'
      )
    ).toBeInTheDocument();
  });

  describe('Confirm dialog', () => {
    it('Should display the comfirm dialog and stay on the form if click "Não"', async () => {
      render(<NewSeller />, {
        mocks: [mocks.getAddressSuccess],
      });

      await fillSellerForm();

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
      render(<NewSeller />, {
        mocks: [mocks.getAddressSuccess],
      });

      await fillSellerForm();

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

    it('Should do not display the confirm dialog and go to "/sellers" if the form is not dirty', async () => {
      render(<NewSeller />);

      userEvent.click(screen.getByText(/cancelar/i));

      expect(mockRouterPush).toHaveBeenCalledWith('/sellers');
    });
  });
});
