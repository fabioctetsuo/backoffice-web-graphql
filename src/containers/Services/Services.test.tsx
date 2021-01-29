import * as React from 'react';
import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
  within,
} from 'utils/testing';
import Services from './Services';

describe('Services list', () => {
  it('Must render services list correctly', () => {
    render(<Services />);

    const table = screen.getByLabelText(/Tabela de serviços do health hub/i);
    const serviceList = within(table)
      .getAllByLabelText(/^serviço/i)
      .map(service => {
        return {
          service: service.textContent,
          type: service.nextElementSibling?.textContent,
        };
      });
    expect(serviceList).toEqual([
      { service: 'Hepatite A e B', type: 'Vacina' },
      { service: 'Gripe tetravalente', type: 'Vacina' },
    ]);
  });

  it('must render service details', () => {
    render(<Services />);

    const table = screen.getByLabelText(/Tabela de serviços do health hub/i);
    const hepatitisRow = within(table).getByText(/^hepatite a e b/i);
    const hepatitisExpandRow = hepatitisRow.previousElementSibling as HTMLElement;
    const expandRowButton = within(hepatitisExpandRow).getByRole('button', {
      name: 'Ver detalhes do serviço',
    });

    userEvent.click(expandRowButton);

    expect(
      screen.getByRole('heading', {
        name: /informações complementares/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Campos de perguntas/i })
    ).toBeInTheDocument();

    userEvent.click(
      within(hepatitisExpandRow).getByRole('button', {
        name: 'Ocultar detalhes do serviço',
      })
    );

    waitForElementToBeRemoved(
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
  });
});
