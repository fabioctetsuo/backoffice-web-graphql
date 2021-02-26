import NewService from '.';
import { useRouter } from 'next/router';
import { render, screen, userEvent, waitFor } from 'utils/testing';
import { HealthHubFieldType, HealthHubServiceFieldType } from 'generated-types';
import mocks from './mocks/graphql';
import { createNewQuestion, fillServiceQuestion, removeQuestion } from '../utils/tests';

jest.mock('next/router');

const mockedPush = jest.fn();

beforeEach(() => {
  jest.setTimeout(10000);
  (useRouter as jest.Mock).mockReturnValue({ push: mockedPush });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<NewService />', () => {
  it('Must create a new service with success', async () => {
    render(<NewService />, {
      mocks: [mocks.createServiceSuccessMock],
    });
    const saveButton = screen.getByRole('button', { name: /criar serviço/i });
    expect(saveButton).toBeInTheDocument();
    expect(saveButton).toBeDisabled();

    const serviceQuestions = screen.getAllByTestId('questions-row-testid');
    const questionContainer = serviceQuestions[serviceQuestions.length - 1];

    fillServiceQuestion({
      name: 'Serviço teste',
      serviceType: HealthHubFieldType.PharmaService,
      info: 'Diretamente na farmácia',
      container: questionContainer,
      key: 'diastolic_blood_pressure',
      label: 'Pressão arterial - diastólica',
      type: HealthHubServiceFieldType.Integer,
      unit: 'mmHg',
      min: '1',
      max: '300',
      numbersOnly: true,
    });

    expect(saveButton).not.toBeDisabled();
    userEvent.click(saveButton);

    expect(await screen.findByText('Serviço criado com sucesso.')).toBeInTheDocument();
    expect(mockedPush).toHaveBeenCalledTimes(1);
    expect(mockedPush).toHaveBeenCalledWith('/services');
  });

  it('Must validate new service form correctly', async () => {
    render(<NewService />, {
      mocks: [mocks.createServiceSuccessMock],
    });
    const saveButton = screen.getByRole('button', { name: /criar serviço/i });

    const serviceQuestions = screen.getAllByTestId('questions-row-testid');
    const questionContainer = serviceQuestions[serviceQuestions.length - 1];

    // validate required fields
    fillServiceQuestion({
      container: questionContainer,
      label: '',
      type: HealthHubServiceFieldType.Select,
    });
    userEvent.click(saveButton);

    expect(
      await screen.findByText(/Nome do serviço é obrigatório./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Caso o produto não tenha preço definido, informe mais detalhes sobre o preço/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/O campo de identificação é obrigatório/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Campo label da opção é obrigatório/i)).toBeInTheDocument();
    expect(screen.getByText(/Campo valor é obrigatório/i)).toBeInTheDocument();

    // validate special characters
    fillServiceQuestion({
      name: 'Serviço teste',
      info: 'Diretamente na farmácia',
      container: questionContainer,
      key: 'diastolic blood pressure',
      label: 'Pressão arterial - diastólica',
      type: HealthHubServiceFieldType.Integer,
      unit: 'mmHg',
      min: '1',
      max: '300',
      numbersOnly: true,
    });

    userEvent.click(saveButton);

    expect(
      await screen.findByText(
        /Não são permitidos caracteres especiais e espaços, apenas letras e _/i
      )
    ).toBeInTheDocument();

    fillServiceQuestion({
      container: questionContainer,
      label: 'Pressão arterial - diastólica',
      key: 'diastolic_blood_pressure',
      type: HealthHubServiceFieldType.Integer,
    });

    // validate duplicate key fields
    createNewQuestion({
      key: 'diastolic_blood_pressure',
      label: 'Pressão arterial - diastólica',
      type: HealthHubServiceFieldType.Integer,
      unit: 'mmHg',
      min: '1',
      max: '300',
      numbersOnly: true,
    });

    userEvent.click(saveButton);

    expect(
      await screen.findByText(
        /Já existe um campo de identificação com esse valor, por gentileza altere o campo./i
      )
    ).toBeInTheDocument();

    removeQuestion('Pressão arterial - diastólica');

    // Testing save service
    userEvent.click(saveButton);
    expect(await screen.findByText('Serviço criado com sucesso.')).toBeInTheDocument();
    expect(mockedPush).toHaveBeenCalledTimes(1);
    expect(mockedPush).toHaveBeenCalledWith('/services');
  });

  it('Must validate duplicate service name and type', async () => {
    render(<NewService />, {
      mocks: [mocks.createServiceDuplicateErrorMock],
    });
    const saveButton = screen.getByRole('button', { name: /criar serviço/i });
    expect(saveButton).toBeInTheDocument();
    expect(saveButton).toBeDisabled();

    const serviceQuestions = screen.getAllByTestId('questions-row-testid');
    const questionContainer = serviceQuestions[serviceQuestions.length - 1];

    fillServiceQuestion({
      name: 'Serviço teste',
      serviceType: HealthHubFieldType.PharmaService,
      info: 'Diretamente na farmácia',
      container: questionContainer,
      key: 'diastolic_blood_pressure',
      label: 'Pressão arterial - diastólica',
      type: HealthHubServiceFieldType.Integer,
      unit: 'mmHg',
      min: '1',
      max: '300',
      numbersOnly: true,
    });

    expect(saveButton).not.toBeDisabled();
    userEvent.click(saveButton);

    expect(
      await screen.findByText(
        'Já existe um serviço/vacina cadastrado com o mesmo nome e tipo, por gentileza altere o nome do seu serviço/vacina.'
      )
    ).toBeInTheDocument();
    expect(mockedPush).not.toHaveBeenCalled();
  });

  it('Must show generic error when service returns 500', async () => {
    render(<NewService />, {
      mocks: [mocks.createServiceErrorMock],
    });
    const saveButton = screen.getByRole('button', { name: /criar serviço/i });
    expect(saveButton).toBeInTheDocument();
    expect(saveButton).toBeDisabled();

    const serviceQuestions = screen.getAllByTestId('questions-row-testid');
    const questionContainer = serviceQuestions[serviceQuestions.length - 1];

    fillServiceQuestion({
      name: 'Serviço teste',
      serviceType: HealthHubFieldType.PharmaService,
      info: 'Diretamente na farmácia',
      container: questionContainer,
      key: 'diastolic_blood_pressure',
      label: 'Pressão arterial - diastólica',
      type: HealthHubServiceFieldType.Integer,
      unit: 'mmHg',
      min: '1',
      max: '300',
      numbersOnly: true,
    });

    expect(saveButton).not.toBeDisabled();
    userEvent.click(saveButton);

    expect(
      await screen.findByText('Erro ao cadastrar o serviço/vacina, tente novamente.')
    ).toBeInTheDocument();
    expect(mockedPush).not.toHaveBeenCalled();
  });

  it('Must disable delete question when there is only one question', async () => {
    render(<NewService />);

    const deleteButtons = screen.getAllByRole('button', { name: 'Remover pergunta' });
    expect(deleteButtons).toHaveLength(1);

    deleteButtons.forEach(button => {
      expect(button).toBeDisabled();
    });

    userEvent.click(screen.getByRole('button', { name: /nova pergunta/i }));

    const updatedDeleteButtons = screen.getAllByRole('button', {
      name: 'Remover pergunta',
    });

    await waitFor(() => {
      expect(updatedDeleteButtons).toHaveLength(2);
    });

    updatedDeleteButtons.forEach(button => {
      expect(button).not.toBeDisabled();
    });
  });
});
