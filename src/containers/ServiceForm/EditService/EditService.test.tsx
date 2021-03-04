import {
  fireEvent,
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
  within,
} from 'utils/testing';
import { useRouter } from 'next/router';
import EditService from '.';
import { HealthHubServiceFieldType } from 'generated-types';
import mocks from './mocks/graphql';
import {
  createNewQuestion,
  fillServiceQuestion,
  removeQuestion,
  editOptionFieldByLabelText,
  findOptionFieldByLabelText,
  getLastOptionFieldRow,
} from '../utils/tests';

jest.mock('next/router');

const mockedPush = jest.fn();

beforeEach(() => {
  jest.setTimeout(15000);
  (useRouter as jest.Mock).mockReturnValue({
    query: { id: '1' },
    push: mockedPush,
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<EditService />', () => {
  it('Must edit service with success', async () => {
    render(<EditService />, {
      mocks: [mocks.getServiceSuccessMock, mocks.updateServiceSuccessMock],
    });

    try {
      await waitForElementToBeRemoved(screen.queryByTestId('loading-overlay'));
      const saveButton = screen.getByRole('button', { name: /salvar serviço/i });
      expect(screen.getByRole('button', { name: /salvar serviço/i })).toBeInTheDocument();
      expect(saveButton).toBeDisabled();
      fillServiceQuestion({
        queryLabel: 'Indicação',
        name: 'Crazy Service',
        price: '20',
        result: 'Result test',
        preparation: 'Preparation test',
        description: 'Description test',
      });
      createNewQuestion({
        key: 'diastolic_blood_pressure',
        label: 'Pressão arterial - diastólica',
        type: HealthHubServiceFieldType.Integer,
        unit: 'mmHg',
        min: '1',
        max: '300',
        numbersOnly: true,
      });
      removeQuestion('Se sim, qual a área?');
      expect(saveButton).not.toBeDisabled();
      userEvent.click(saveButton);
      expect(
        await screen.findByText('Serviço atualizado com sucesso.')
      ).toBeInTheDocument();
      expect(mockedPush).toHaveBeenCalledTimes(1);
      expect(mockedPush).toHaveBeenCalledWith('/services');
    } catch (err) {
      throw new Error(err);
    }
  });

  it('Must edit service with boolean options with success', async () => {
    render(<EditService />, {
      mocks: [
        mocks.getServiceSuccessProcedureWithOptionMock,
        mocks.updateServiceWithOptionsSuccessMock,
      ],
    });

    try {
      await waitForElementToBeRemoved(screen.queryByTestId('loading-overlay'));
      fillServiceQuestion({
        name: 'Serviço teste editado',
        result: 'Result test',
        preparation: 'Preparation test',
        description: 'Description test',
      });
      const saveButton = screen.getByRole('button', { name: /salvar serviço/i });
      userEvent.click(saveButton);
      expect(
        await screen.findByText('Serviço atualizado com sucesso.')
      ).toBeInTheDocument();
      expect(mockedPush).toHaveBeenCalledTimes(1);
      expect(mockedPush).toHaveBeenCalledWith('/services');
    } catch (err) {
      throw new Error(err);
    }
  });

  it('Should render error toast when update service fail', async () => {
    render(<EditService />, {
      mocks: [mocks.getServiceSuccessWithPriceMock, mocks.updateServiceErrorMock],
    });

    try {
      await waitForElementToBeRemoved(screen.queryByTestId('loading-overlay'));
      fillServiceQuestion({ queryLabel: 'Indicação', name: 'Crazy Service' });
      createNewQuestion({
        key: 'diastolic_blood_pressure',
        label: 'Pressão arterial - diastólica',
        type: HealthHubServiceFieldType.Integer,
        unit: 'mmHg',
        min: '1',
        max: '300',
        numbersOnly: true,
        result: 'Result test',
        preparation: 'Preparation test',
        description: 'Description test',
      });
      removeQuestion('Se sim, qual a área?');
      const saveButton = screen.getByRole('button', { name: /salvar serviço/i });
      userEvent.click(saveButton);
      expect(
        await screen.findByText(/Erro ao cadastrar o serviço\/vacina, tente novamente./i)
      ).toBeInTheDocument();
      expect(mockedPush).not.toHaveBeenCalled();
    } catch (err) {
      throw new Error(err);
    }
  });

  it('Should render duplicated error toast when update service and service type already exists', async () => {
    render(<EditService />, {
      mocks: [mocks.getServiceSuccessWithPriceMock, mocks.duplicateServiceErrorMock],
    });

    try {
      await waitForElementToBeRemoved(screen.queryByTestId('loading-overlay'));
      fillServiceQuestion({
        queryLabel: 'Indicação',
        name: 'Crazy Service',
        result: 'Result test',
        preparation: 'Preparation test',
        description: 'Description test',
      });
      createNewQuestion({
        key: 'diastolic_blood_pressure',
        label: 'Pressão arterial - diastólica',
        type: HealthHubServiceFieldType.Integer,
        unit: 'mmHg',
        min: '1',
        max: '300',
        numbersOnly: true,
      });
      removeQuestion('Se sim, qual a área?');
      const saveButton = screen.getByRole('button', { name: /salvar serviço/i });
      userEvent.click(saveButton);
      expect(
        await screen.findByText(
          /Já existe um serviço\/vacina cadastrado com o mesmo nome e tipo, por gentileza altere o nome do seu serviço\/vacina./i
        )
      ).toBeInTheDocument();
      expect(mockedPush).not.toHaveBeenCalled();
    } catch (err) {
      throw new Error(err);
    }
  });

  it('Should be able to create options for select fields', async () => {
    render(<EditService />, {
      mocks: [
        mocks.getServiceSuccessProcedureWithSelectMock,
        mocks.updateServiceSuccessSelectMock,
      ],
    });

    try {
      await waitForElementToBeRemoved(screen.queryByTestId('loading-overlay'));
      const questionRow = screen.getByLabelText('Vacina Marota');
      const option = findOptionFieldByLabelText('Twinrix', questionRow) as HTMLElement;
      editOptionFieldByLabelText({ option, label: 'Twinrix edited' });
      userEvent.click(within(questionRow).getByText(/adicionar opção/i));
      const newOption = getLastOptionFieldRow(questionRow);
      editOptionFieldByLabelText({ option: newOption, label: 'Pfizer', value: 'pfizer' });
      userEvent.click(within(newOption).getByText(/Adicionar detalhes à opção/i));
      userEvent.type(
        within(newOption).getByLabelText(/identificação do detalhe/i),
        'fabricante'
      );
      userEvent.type(within(newOption).getByLabelText(/valor do detalhe/i), 'Pfizer');
      const saveButton = screen.getByRole('button', { name: /salvar serviço/i });
      userEvent.click(saveButton);
      expect(
        await screen.findByText('Serviço atualizado com sucesso.')
      ).toBeInTheDocument();
    } catch (err) {
      throw new Error(err);
    }
  });

  it('Should show duplicated error in input field when there is duplicated keys', async () => {
    render(<EditService />, {
      mocks: [mocks.getServiceSuccessProcedureWithOptionMock],
    });

    try {
      await waitForElementToBeRemoved(screen.queryByTestId('loading-overlay'));
      // check if there is a key called hypertension
      const questionRows = screen.getAllByTestId('questions-row-testid');
      expect(within(questionRows[0]).getByLabelText(/^id$/i)).toHaveValue('hypertension');

      // create a new question with same key
      createNewQuestion({
        key: 'hypertension',
        label: 'Hipertensão marota',
        type: HealthHubServiceFieldType.Integer,
        min: '1',
        max: '300',
        numbersOnly: true,
      });

      // check if error message was rendered
      const saveButton = screen.getByRole('button', { name: /salvar serviço/i });
      userEvent.click(saveButton);
      expect(
        await screen.findByText(
          'Já existe um campo de identificação com esse valor, por gentileza altere o campo.'
        )
      ).toBeInTheDocument();
      expect(mockedPush).not.toHaveBeenCalled();
    } catch (err) {
      throw new Error(err);
    }
  });

  it('Must show invalid pattern error in key field', async () => {
    render(<EditService />, {
      mocks: [mocks.getServiceSuccessMock, mocks.updateServiceSuccessMock],
    });

    try {
      await waitForElementToBeRemoved(screen.queryByTestId('loading-overlay'));
      fillServiceQuestion({
        queryLabel: 'Indicação',
        key: 'crazy service', // invalid field with space
      });

      const saveButton = screen.getByRole('button', { name: /salvar serviço/i });
      userEvent.click(saveButton);
      expect(
        await screen.findByText(
          'Não são permitidos caracteres especiais e espaços, apenas letras e _'
        )
      ).toBeInTheDocument();
    } catch (err) {
      throw new Error(err);
    }
  });

  it('Must reorder question services using drag and drop', async () => {
    render(<EditService />, {
      mocks: [mocks.getServiceReorderQuestionSuccessMock],
    });

    try {
      await waitForElementToBeRemoved(screen.queryByTestId('loading-overlay'));
      const saveButton = screen.getByRole('button', { name: /salvar serviço/i });
      expect(saveButton).toBeDisabled();
      const questions = screen.getAllByRole('row');
      const questionsName = questions.map(row => row.textContent);
      expect(questionsName).toEqual(['Validade', 'Se sim, qual a área?', 'Observação']);
      const shelfLifeQuestion = questions[0];
      const dropRow = questions[2];

      fireEvent.dragStart(shelfLifeQuestion);
      fireEvent.dragEnter(dropRow);
      fireEvent.dragOver(dropRow);
      fireEvent.drop(dropRow);

      const reorderedQuestions = screen.getAllByRole('row');
      const reorderedQuestionsName = reorderedQuestions.map(row => row.textContent);
      expect(reorderedQuestionsName).toEqual([
        'Se sim, qual a área?',
        'Observação',
        'Validade',
      ]);
    } catch (err) {
      throw new Error(err);
    }
  });
});
