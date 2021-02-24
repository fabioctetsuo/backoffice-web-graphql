import { HealthHubServiceFieldType, HealthHubFieldType } from 'generated-types';
import { userEvent, screen, within, fireEvent } from 'utils/testing';

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

export const fillServiceQuestion = ({
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
    const typeField = within(mainForm).getByLabelText(/tipo de serviço/i);
    fireEvent.change(typeField, { target: { value: serviceType } });
  }
  if (price) {
    const priceInput = within(mainForm).getByLabelText(/Valor/i);
    userEvent.clear(priceInput);
    userEvent.type(priceInput, price);
  }
  if (info) {
    const infoInput = within(mainForm).getByLabelText(/Informações/i);
    userEvent.clear(infoInput);
    userEvent.type(infoInput, info);
  }

  // edit indication questions row
  if (container || queryLabel) {
    const containerRow = container
      ? container
      : screen.getByLabelText(queryLabel as string);
    if (key) {
      const keyField = within(containerRow).getByLabelText(/^id$/i);
      userEvent.clear(keyField);
      userEvent.type(keyField, key);
    }
    if (label) {
      const labelField = within(containerRow).getByLabelText(/^label$/i);
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

export const createNewQuestion = async (props = {}) => {
  userEvent.click(screen.getByRole('button', { name: /nova pergunta/i }));
  const serviceQuestions = screen.getAllByTestId('questions-row-testid');
  const newQuestion = serviceQuestions[serviceQuestions.length - 1];
  fillServiceQuestion({
    container: newQuestion,
    ...props,
  });
};

export const removeQuestion = (question: string) => {
  const table = screen.getByLabelText(question).previousSibling as HTMLElement;
  userEvent.click(within(table).getByLabelText(/remover pergunta/i));
};

export const editOptionFieldByLabelText = ({
  option,
  label,
  value,
}: {
  option: HTMLElement;
  label?: string;
  value?: string;
}) => {
  if (label) {
    userEvent.clear(within(option).getByLabelText(/label da opção/i));
    userEvent.type(within(option).getByLabelText(/label da opção/i), label);
  }
  if (value) {
    userEvent.clear(within(option).getByLabelText(/valor/i));
    userEvent.type(within(option).getByLabelText(/valor/i), value);
  }
};

export const findOptionFieldByLabelText = (label: string, container: any) => {
  const options = within(container).getAllByLabelText(/opções/i);
  return options.find(option => {
    const labelInput = within(option).getByLabelText(/label da opção/i);
    return (labelInput as HTMLInputElement).value === label;
  });
};

export const getLastOptionFieldRow = (container: HTMLElement) => {
  const options = within(container).getAllByLabelText(/opções/i);
  return options[options.length - 1];
};
