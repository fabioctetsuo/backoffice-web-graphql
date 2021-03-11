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

  userEvent.type(
    within(screen.getByTestId('time-input-provider.startHour')).getByRole('textbox'),
    '08:00'
  );
  userEvent.type(
    within(screen.getByTestId('time-input-provider.endHour')).getByRole('textbox'),
    '22:00'
  );
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
  beforeEach(() => {
    jest.setTimeout(10000);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('Should fill the form and submit with success', async () => {
    render(<NewSeller />, {
      mocks: [
        mocks.getAddressSuccess,
        mocks.createSellerSuccess,
        mocks.getServicesSuccess,
        mocks.createProviderSuccess,
      ],
    });

    await fillSellerForm();

    selectAnService();

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    expect(await screen.findByText('Loja cadastrada com sucesso.')).toBeInTheDocument();
    expect(mockRouterPush).toHaveBeenCalledWith('/sellers');
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

  it('Should fill startHour with 00:00 and endHour with 23:59 and disable this fields', async () => {
    render(<NewSeller />, { mocks: [mocks.getServicesSuccess] });

    const checkbox24hrs = screen.getByLabelText(/Aberta 24horas/i);

    // click in this check to fill with 00:00 and 23:59 and disable fields
    userEvent.click(checkbox24hrs);

    expect(checkbox24hrs).toBeTruthy();
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

    // click again to enable the fields
    userEvent.click(checkbox24hrs);

    expect(startHourInput).toBeEnabled();
    expect(endHourInput).toBeEnabled();
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
  describe('Provider validation', () => {
    it('Must require fill in the endIntervalHour field only if the startIntervalHour is filled in.', async () => {
      render(<NewSeller />, {
        mocks: [
          mocks.getAddressSuccess,
          mocks.createSellerSuccess,
          mocks.getServicesSuccess,
          mocks.createProviderSuccess,
        ],
      });

      await fillSellerForm();

      userEvent.type(
        within(screen.getByTestId('time-input-provider.startIntervalHour')).getByRole(
          'textbox'
        ),
        '08:00'
      );

      selectAnService();

      userEvent.click(screen.getByRole('button', { name: /salvar/i }));

      expect(
        await within(
          screen.getByTestId('time-input-provider.endIntervalHour')
        ).findByText('O campo "Fim" é obrigatório')
      ).toBeInTheDocument();

      expect(mockRouterPush).not.toHaveBeenCalled();

      userEvent.clear(
        within(screen.getByTestId('time-input-provider.startIntervalHour')).getByRole(
          'textbox'
        )
      );

      expect(
        within(screen.getByTestId('time-input-provider.endIntervalHour')).queryByText(
          'O campo "Fim" é obrigatório'
        )
      ).not.toBeInTheDocument();

      userEvent.click(screen.getByRole('button', { name: /salvar/i }));

      expect(await screen.findByText('Loja cadastrada com sucesso.')).toBeInTheDocument();

      expect(mockRouterPush).toHaveBeenCalled();
    });

    it('Must display a toast with error if endHour greater than or equal startHour.', async () => {
      render(<NewSeller />, {
        mocks: [
          mocks.getAddressSuccess,
          mocks.createSellerSuccess,
          mocks.getServicesSuccess,
          mocks.createProviderSuccess,
        ],
      });

      await fillSellerForm();

      userEvent.type(
        within(screen.getByTestId('time-input-provider.startHour')).getByRole('textbox'),
        '08:00'
      );
      userEvent.clear(
        within(screen.getByTestId('time-input-provider.endHour')).getByRole('textbox')
      );
      userEvent.type(
        within(screen.getByTestId('time-input-provider.endHour')).getByRole('textbox'),
        '07:00'
      );

      selectAnService();

      userEvent.click(screen.getByRole('button', { name: /salvar/i }));

      expect(
        await screen.findByText(
          'Horário de fechamento da loja não pode ser menor que o horário de abertura da loja.'
        )
      ).toBeInTheDocument();

      expect(mockRouterPush).not.toHaveBeenCalled();
    });

    it('Must display a toast with error if blocking interval is not is not within the working hours.', async () => {
      render(<NewSeller />, {
        mocks: [
          mocks.getAddressSuccess,
          mocks.createSellerSuccess,
          mocks.getServicesSuccess,
          mocks.createProviderSuccess,
        ],
      });

      await fillSellerForm();

      const blockingStartInput = within(
        screen.getByTestId('time-input-provider.startIntervalHour')
      ).getByRole('textbox');

      const blockingEndInput = within(
        screen.getByTestId('time-input-provider.endIntervalHour')
      ).getByRole('textbox');

      // working hour is 08:00 at 22:00 and blocking hours is 07:00 at 11:00
      userEvent.type(blockingStartInput, '07:00');
      userEvent.type(blockingEndInput, '11:00');

      selectAnService();

      userEvent.click(screen.getByRole('button', { name: /salvar/i }));

      expect(
        await screen.findByText(
          'Início do bloqueio não pode ser menor que horário de abertura da loja.'
        )
      ).toBeInTheDocument();

      expect(mockRouterPush).not.toHaveBeenCalled();

      userEvent.clear(blockingStartInput);
      userEvent.clear(blockingEndInput);

      // working hour is 08:00 at 22:00 and blocking hours is 12:00 at 23:00
      userEvent.type(blockingStartInput, '12:00');
      userEvent.type(blockingEndInput, '23:00');

      userEvent.click(screen.getByRole('button', { name: /salvar/i }));

      expect(
        await screen.findByText(
          'Final do bloqueio não pode ser maior que o horário de fechamento da loja.'
        )
      ).toBeInTheDocument();

      expect(mockRouterPush).not.toHaveBeenCalled();
    });

    it('Must redirect to edit seller page if the seller is created and there is an error in creating the provider.', async () => {
      render(<NewSeller />, {
        mocks: [
          mocks.getAddressSuccess,
          mocks.createSellerSuccess,
          mocks.getServicesSuccess,
          mocks.createProviderError,
        ],
      });

      await fillSellerForm();

      selectAnService();

      userEvent.click(screen.getByRole('button', { name: /salvar/i }));

      // redirect to edit seller page
      await waitFor(() => {
        expect(mockRouterPush).toHaveBeenCalledWith('/sellers/5fc96401dcbf6550dba10695');
      });
    });
  });
});
