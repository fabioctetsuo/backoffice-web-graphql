import {
  render,
  screen,
  userEvent,
  fireEvent,
  waitForElementToBeRemoved,
  within,
} from 'utils/testing';
import { useRouter } from 'next/router';
import EditService from '.';
import { HealthHubFieldType, HealthHubServiceFieldType } from 'generated-types';
import mocks from './mocks/graphql';

jest.mock('next/router');

type EditServiceQuestionProps = {
  queryLabel?: string;
  key?: string | null;
  label?: string | null;
  type?: HealthHubServiceFieldType;
  serviceType?: HealthHubFieldType;
  unit?: string;
  min?: string;
  max?: string;
  price?: string;
  name?: string;
  info?: string;
  required?: boolean;
  numbersOnly?: boolean;
  currentDate?: boolean;
  container?: HTMLElement;
};

const fillServiceQuestion = ({
  queryLabel,
  key,
  label = 'Indicação médica',
  type = HealthHubServiceFieldType.Textarea,
  unit,
  required,
  min,
  max,
  numbersOnly,
  currentDate,
  container,
  price,
  name,
  serviceType,
  info,
}: EditServiceQuestionProps) => {
  const mainForm = screen.getByLabelText(/informações principais/i);
  if (name) {
    const nameInput = within(mainForm).getByLabelText(/nome do serviço/i);
    userEvent.clear(nameInput);
    userEvent.type(nameInput, name);
  }
  if (serviceType) {
    const typeField = within(mainForm).getByLabelText(/tipo de campo/i);
    fireEvent.change(typeField, { target: { value: serviceType } });
  }
  if (price) {
    const priceInput = within(mainForm).getByLabelText(/Valor/i);
    userEvent.clear(priceInput);
    userEvent.type(priceInput, price);
  }
  if (info) {
    const infoInput = within(mainForm).getByLabelText(/Valor/i);
    userEvent.clear(infoInput);
    userEvent.type(infoInput, info);
  }

  // edit indication questions row
  if (container || queryLabel) {
    const containerRow = container
      ? container
      : screen.getByLabelText(queryLabel as string);
    if (key) {
      const keyField = within(containerRow).getByLabelText(/^identificação$/i);
      userEvent.type(keyField, key);
    }
    if (label) {
      const labelField = within(containerRow).getByLabelText(/^legenda$/i);
      userEvent.clear(labelField);
      userEvent.type(labelField, label);
    }
    if (type) {
      const typeField = within(containerRow).getByLabelText(/tipo de campo/i);
      fireEvent.change(typeField, { target: { value: type } });
    }
    if (unit) {
      const unitField = within(containerRow).getByLabelText(/unidade de medida/i);
      userEvent.type(unitField, unit);
    }
    if (required) {
      const requiredField = within(containerRow).getByLabelText(/obrigatório/i);
      userEvent.click(requiredField);
    }
    if (min) userEvent.type(within(containerRow).getByLabelText(/mínimo/i), min);
    if (max) userEvent.type(within(containerRow).getByLabelText(/máximo/i), max);
    if (numbersOnly) {
      userEvent.click(within(containerRow).getByLabelText(/numérico/i));
    }
    if (currentDate) {
      userEvent.click(within(containerRow).getByLabelText(/data corrente/i));
    }
  }
};

const createNewQuestion = async (props = {}) => {
  userEvent.click(screen.getByRole('button', { name: /nova pergunta/i }));
  const serviceQuestions = screen.getAllByTestId('questions-row-testid');
  const newQuestion = serviceQuestions[serviceQuestions.length - 1];
  fillServiceQuestion({
    container: newQuestion,
    ...props,
  });
};

const removeQuestion = (question: string) => {
  const table = screen.getByLabelText(question).previousSibling as HTMLElement;
  userEvent.click(within(table).getByLabelText(/remover pergunta/i));
};

const findSelectOptionByLabel = (label: string, container: any) => {
  const options = within(container).getAllByLabelText(/opções/i);
  return options.find(option => {
    const labelInput = within(option).getByLabelText(/legenda da opção/i);
    return (labelInput as HTMLInputElement).value === label;
  });
};

const editOptionByLabel = ({
  option,
  label,
  value,
}: {
  option: HTMLElement;
  label?: string;
  value?: string;
}) => {
  if (label) {
    userEvent.clear(within(option).getByLabelText(/legenda da opção/i));
    userEvent.type(within(option).getByLabelText(/legenda da opção/i), label);
  }
  if (value) {
    userEvent.clear(within(option).getByLabelText(/valor/i));
    userEvent.type(within(option).getByLabelText(/valor/i), value);
  }
};

const getNewSelectOption = (container: HTMLElement) => {
  const options = within(container).getAllByLabelText(/opções/i);
  return options[options.length - 1];
};

beforeEach(() => {
  jest.setTimeout(10000);
  (useRouter as jest.Mock).mockReturnValue({ query: { id: '1' } });
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
      fillServiceQuestion({ name: 'Serviço teste editado' });
      const saveButton = screen.getByRole('button', { name: /salvar serviço/i });
      userEvent.click(saveButton);
      expect(
        await screen.findByText('Serviço atualizado com sucesso.')
      ).toBeInTheDocument();
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
      });
      removeQuestion('Se sim, qual a área?');
      const saveButton = screen.getByRole('button', { name: /salvar serviço/i });
      userEvent.click(saveButton);
      expect(
        await screen.findByText(
          /Houve um erro ao cadastrar o serviço, por favor tente novamente/i
        )
      ).toBeInTheDocument();
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
      const option = findSelectOptionByLabel('Twinrix', questionRow) as HTMLElement;
      editOptionByLabel({ option, label: 'Twinrix edited' });
      userEvent.click(within(questionRow).getByText(/adicionar opção/i));
      const newOption = getNewSelectOption(questionRow);
      editOptionByLabel({ option: newOption, label: 'Pfizer', value: 'pfizer' });
      userEvent.click(within(newOption).getByText(/Adicionar detalhes à opção/i));
      userEvent.type(
        within(newOption).getByLabelText(/legenda do detalhe/i),
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
});
