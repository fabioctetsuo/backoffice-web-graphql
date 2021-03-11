import { render, screen, userEvent, waitFor, within } from 'utils/testing';
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
  beforeEach(() => {
    jest.setTimeout(10000);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('Should fill the form with Seller data', async () => {
    render(<EditSeller />, {
      mocks: [mocks.getSellerSuccess, mocks.getServicesSuccess, mocks.getProviderSuccess],
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

    const startHourInput = within(
      screen.getByTestId('time-input-provider.startHour')
    ).getByRole('textbox');
    const endHourInput = within(
      screen.getByTestId('time-input-provider.endHour')
    ).getByRole('textbox');

    expect(screen.getByLabelText(/Aberta 24horas/i)).toBeTruthy();
    expect(startHourInput).toHaveValue('09:00');
    expect(startHourInput).toBeEnabled();
    expect(endHourInput).toHaveValue('22:00');
    expect(endHourInput).toBeEnabled();

    expect(
      within(screen.getByTestId('time-input-provider.startIntervalHour')).getByRole(
        'textbox'
      )
    ).not.toHaveValue();
    expect(
      within(screen.getByTestId('time-input-provider.endIntervalHour')).getByRole(
        'textbox'
      )
    ).not.toHaveValue();
  });

  it('Should check 24h box and disable startHour and endHour fields', async () => {
    render(<EditSeller />, {
      mocks: [
        mocks.getSellerSuccess,
        mocks.getServicesSuccess,
        mocks.getProvider24hSuccess,
      ],
    });
    await waitFor(() => {
      expect(screen.getByLabelText(/Nome/i)).toHaveValue('Paulista 6');
    });

    expect(screen.getByLabelText(/Aberta 24horas/i)).toBeTruthy();
    const startHourInput = within(
      screen.getByTestId('time-input-provider.startHour')
    ).getByRole('textbox');
    const endHourInput = within(
      screen.getByTestId('time-input-provider.endHour')
    ).getByRole('textbox');

    expect(startHourInput).toHaveValue('00:00');
    expect(startHourInput).toBeDisabled();

    expect(endHourInput).toHaveValue('23:59');
    expect(endHourInput).toBeDisabled();
  });

  it('Should clear and enable startHour and endHour fields if uncheck 24h checkbox', async () => {
    render(<EditSeller />, {
      mocks: [
        mocks.getSellerSuccess,
        mocks.getServicesSuccess,
        mocks.getProvider24hSuccess,
      ],
    });
    await waitFor(() => {
      expect(screen.getByLabelText(/Nome/i)).toHaveValue('Paulista 6');
    });

    const input24h = screen.getByLabelText(/Aberta 24horas/i);

    expect(input24h).toBeTruthy();
    const startHourInput = within(
      screen.getByTestId('time-input-provider.startHour')
    ).getByRole('textbox');
    const endHourInput = within(
      screen.getByTestId('time-input-provider.endHour')
    ).getByRole('textbox');

    expect(startHourInput).toHaveValue('00:00');
    expect(startHourInput).toBeDisabled();

    expect(endHourInput).toHaveValue('23:59');
    expect(endHourInput).toBeDisabled();

    // uncheck
    userEvent.click(input24h);

    expect(startHourInput).not.toHaveValue();
    expect(startHourInput).toBeEnabled();

    expect(endHourInput).not.toHaveValue();
    expect(endHourInput).toBeEnabled();
  });

  it('Should display a error toast message and redirect to "/sellers" if a error occurs when trying get Seller', async () => {
    render(<EditSeller />, {
      mocks: [mocks.getSellerError],
    });

    expect(
      await screen.findByText(
        /Não foi possível encontrar a loja selecionada. Tente novamente./i
      )
    ).toBeInTheDocument();
    expect(mockRouterPush).toHaveBeenCalledWith('/sellers');
  });

  it('Should display a error toast message and redirect to "/sellers" if a error occurs when trying get Provider', async () => {
    render(<EditSeller />, {
      mocks: [mocks.getSellerSuccess, mocks.getProviderError],
    });

    expect(
      await screen.findByText(
        /Não foi possível encontrar a loja selecionada. Tente novamente./i
      )
    ).toBeInTheDocument();
    expect(mockRouterPush).toHaveBeenCalledWith('/sellers');
  });

  it('Should display a error toast message if a cant find a provider', async () => {
    render(<EditSeller />, {
      mocks: [
        mocks.getSellerSuccess,
        mocks.updateSellerError,
        mocks.getServicesSuccess,
        mocks.getProviderErrorNotFound,
      ],
    });

    expect(
      await screen.findByText(
        /Houve algum problema no cadastro do horário de funcionamento. Por favor, informe novamente./i
      )
    ).toBeInTheDocument();
  });

  it('Should disable the CNPJ (documentNumber) field', async () => {
    render(<EditSeller />, {
      mocks: [mocks.getSellerSuccess, mocks.getServicesSuccess, mocks.getProviderSuccess],
    });
    await waitFor(() => {
      expect(screen.getByLabelText(/CNPJ/i)).toHaveValue('61.585.865/2168-39');
    });
    expect(screen.getByLabelText(/CNPJ/i)).toBeDisabled();
  });

  it('Should edit the seller name, submit with success and redirect to "/sellers"', async () => {
    render(<EditSeller />, {
      mocks: [
        mocks.getSellerSuccess,
        mocks.updateSeller,
        mocks.updateProviderSuccess,
        mocks.getServicesSuccess,
        mocks.getProviderSuccess,
      ],
    });

    userEvent.clear(await screen.findByLabelText(/nome/i));
    userEvent.type(screen.getByLabelText(/nome/i), 'Nova drogaria Paulista');

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    await waitFor(() => {
      expect(mockRouterPush).toHaveBeenCalledWith('/sellers');
    });
  });

  it('Should display a toast message if a generic error occurs when trying to update the seller', async () => {
    render(<EditSeller />, {
      mocks: [
        mocks.getSellerSuccess,
        mocks.updateSellerError,
        mocks.getServicesSuccess,
        mocks.getProviderSuccess,
      ],
    });

    userEvent.clear(await screen.findByLabelText(/nome/i));
    userEvent.type(await screen.findByLabelText(/nome/i), 'Loja atualizada');

    userEvent.click(screen.getByText(/salvar/i));

    expect(
      await screen.findByText(
        /Houve um erro ao atualizar a loja. Por favor, tente novamente./i
      )
    ).toBeInTheDocument();
  });

  it('Should not update the seller if have at least one empty required field', async () => {
    render(<EditSeller />, {
      mocks: [mocks.getSellerSuccess, mocks.getServicesSuccess, mocks.getProviderSuccess],
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
        mocks: [
          mocks.getSellerSuccess,
          mocks.getServicesSuccess,
          mocks.getProviderSuccess,
        ],
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
        mocks: [
          mocks.getSellerSuccess,
          mocks.getServicesSuccess,
          mocks.getProviderSuccess,
        ],
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
