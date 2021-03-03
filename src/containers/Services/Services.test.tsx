import * as React from 'react';
import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
  within,
} from 'utils/testing';
import Services from './Services';

import graphqlMock from './mocks';
import {
  vaccineQuestions,
  lipidProfileQuestions,
  covidQuestions,
} from './expectedQuestions';

const mockedPush = jest.fn();

const getServiceData = (dataExpandRow: HTMLElement) => {
  const expandRowButton = within(dataExpandRow).getByRole('button', {
    name: 'Ver detalhes do serviço',
  });

  userEvent.click(expandRowButton);

  const elementsInfos = screen
    .getByText(/^informações complementares/i)
    .nextElementSibling?.querySelectorAll('strong');

  const infos = Array.from(elementsInfos as NodeList).map(info => {
    const element = info as HTMLElement;
    const infoKey = element.textContent?.split(':')[0] as string;
    const infoValue = element?.nextElementSibling?.textContent;
    return {
      [infoKey]: infoValue,
    };
  });

  const questions = screen.getAllByLabelText('Label').map(question => {
    const validationsColumn = question.nextElementSibling
      ?.nextElementSibling as HTMLElement;
    const validations = within(validationsColumn)
      .queryAllByTestId('table-validations-column')
      .reduce((prev, curr) => {
        const [label, value] = curr?.textContent?.split(': ') || [];
        return { ...prev, [label]: value };
      }, {});
    return {
      label: question.textContent,
      type: question.nextElementSibling?.textContent,
      validations,
    };
  });

  return {
    infos,
    questions,
  };
};

const closeRow = async (dataExpandRow: HTMLElement) => {
  userEvent.click(
    within(dataExpandRow).getByRole('button', {
      name: 'Ocultar detalhes do serviço',
    })
  );

  await waitForElementToBeRemoved(
    screen.getByRole('heading', {
      name: /informações complementares/i,
    })
  )
    .then(() => {
      expect(
        screen.queryByRole('heading', {
          name: /informações complementares/i,
        })
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole('heading', { name: /Campos de perguntas/i })
      ).not.toBeInTheDocument();
    })
    .catch(err => console.log(err));
};

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockedPush,
  }),
}));

describe('Services list', () => {
  it('Must render services list correctly', async () => {
    render(<Services />, {
      mocks: [graphqlMock.getServicesSuccess],
    });

    const table = await screen.findByLabelText(/Tabela de serviços do health hub/i);
    const serviceList = within(table)
      .getAllByLabelText(/^serviço/i)
      .map(service => {
        return {
          service: service.textContent,
          type: service.nextElementSibling?.textContent,
        };
      });
    expect(serviceList).toEqual([
      { service: 'Perfil Lipídico', type: 'Teste Rápido' },
      { service: 'Vacina Gripe', type: 'Vacina' },
      { service: 'Covid 19', type: 'Serviços Farmacêuticos' },
    ]);
  });

  it('must render service details', async () => {
    render(<Services />, {
      mocks: [graphqlMock.getServicesSuccess],
    });

    const table = await screen.findByLabelText(/Tabela de serviços do health hub/i);

    const vaccineRow = within(table).getByText(/^vacina gripe/i)
      .previousElementSibling as HTMLElement;
    const vaccineFieldsTable = getServiceData(vaccineRow);

    expect(vaccineFieldsTable.infos).toEqual([
      { Valor: 'R$\xa0150,59' },
      { 'Emitir declaração': 'Não' },
      { 'Como se preparar': 'How to prepare Test 2' },
      { Resultado: 'Result Test 2' },
      { 'Breve descritivo': 'Description Test 2' },
    ]);
    expect(vaccineFieldsTable.questions).toEqual(vaccineQuestions);
    await closeRow(vaccineRow);

    const lipidProfileRow = within(table).getByText(/^perfil lipídico/i)
      .previousElementSibling as HTMLElement;
    const lipidProfileTable = getServiceData(lipidProfileRow);

    expect(lipidProfileTable.infos).toEqual([
      { Valor: 'R$\xa045,00' },
      { 'Emitir declaração': 'Sim' },
      { 'Como se preparar': 'How to prepare Test' },
      { Resultado: 'Result Test' },
      { 'Breve descritivo': 'Description Test' },
    ]);
    expect(lipidProfileTable.questions).toEqual(lipidProfileQuestions);
    await closeRow(lipidProfileRow);

    const covidRow = within(table).getByText(/^Covid 19/i)
      .previousElementSibling as HTMLElement;
    const covidTable = getServiceData(covidRow);

    expect(covidTable.infos).toEqual([
      { Valor: 'Diretamente na farmácia' },
      { 'Emitir declaração': 'Não' },
      { 'Como se preparar': 'How to prepare Test 3' },
      { Resultado: 'Result Test 3' },
      { 'Breve descritivo': 'Description Test 3' },
    ]);
    expect(covidTable.questions).toEqual(covidQuestions);
    await closeRow(covidRow);
  });

  it('must redirect to new service form page', async () => {
    render(<Services />, {
      mocks: [graphqlMock.getServicesSuccess],
    });

    const newServiceButton = await screen.findByRole('button', { name: /NOVO SERVIÇO/i });
    userEvent.click(newServiceButton);
    expect(mockedPush).toHaveBeenCalledTimes(1);
    expect(mockedPush).toHaveBeenCalledWith('/services/new');
  });
});
