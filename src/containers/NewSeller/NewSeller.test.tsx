import { render, screen, userEvent, fireEvent, waitFor, within } from 'utils/testing';
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

const selectAnService = (service = /vacina gripe/i) => {
  const button = screen.getByRole('button', {
    name: service,
  });

  fireEvent.click(
    within(button).getByRole('button', {
      name: /adicionar serviço/i,
    })
  );
};

describe('<NewSeller />', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('Should fill the form and submit with success', async () => {
    render(<NewSeller />, {
      mocks: [
        mocks.getAddressSuccess,
        mocks.createSellerSuccess,
        mocks.getServicesSuccess,
      ],
    });

    await fillSellerForm();

    selectAnService();

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    expect(await screen.findByText('Loja cadastrada com sucesso.')).toBeInTheDocument();
  });

  it('Should display a warning toast if CNPJ is already registered', async () => {
    render(<NewSeller />, {
      mocks: [
        mocks.getAddressSuccess,
        mocks.createSellerWithCnpjAlreadRegistered,
        mocks.getServicesSuccess,
      ],
    });

    await fillSellerForm();

    selectAnService();

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    expect(
      await screen.findByText('Já existe uma loja cadastrada com este CNPJ.')
    ).toBeInTheDocument();
  });

  it('Should display the generic error toast if throw a unmapped error on submit', async () => {
    render(<NewSeller />, {
      mocks: [mocks.getAddressSuccess, mocks.createSellerError, mocks.getServicesSuccess],
    });

    await fillSellerForm();
    selectAnService();

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    expect(
      await screen.findByText(
        'Houve um erro ao cadastrar a loja. Por favor, tente novamente.'
      )
    ).toBeInTheDocument();
  });

  it('Should validate CNPJ', async () => {
    render(<NewSeller />, { mocks: [mocks.getServicesSuccess] });

    // fill with a invalid CNPJ
    fireEvent.change(screen.getByLabelText(/CNPJ/i), {
      target: { value: '12123123123411' },
    });

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));
    expect(await screen.findByText(/CNPJ inválido/i)).toBeInTheDocument();

    // change to a valid CNPJ
    fireEvent.change(screen.getByLabelText(/CNPJ/i), {
      target: { value: '51921594000104' },
    });

    await waitFor(() => {
      expect(screen.queryByText(/CNPJ inválido/i)).not.toBeInTheDocument();
    });
  });

  describe('Confirm dialog', () => {
    it('Should display the comfirm dialog and stay on the form if click "Não"', async () => {
      render(<NewSeller />, {
        mocks: [mocks.getAddressSuccess, mocks.getServicesSuccess],
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
        mocks: [mocks.getAddressSuccess, mocks.getServicesSuccess],
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
      render(<NewSeller />, { mocks: [mocks.getServicesSuccess] });

      userEvent.click(screen.getByText(/cancelar/i));

      expect(mockRouterPush).toHaveBeenCalledWith('/sellers');
    });
  });
});
