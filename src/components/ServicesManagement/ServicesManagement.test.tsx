import { SellerService } from 'generated-types';
import React from 'react';
import { fireEvent, render, screen, within } from 'utils/testing';
import ServicesManagement from './ServicesManagement';

const mockOnChange = jest.fn();

const SELECTED_SERVICES: SellerService[] = [
  {
    id: '5fc9607cdea2302e164d7221',
    name: 'Febre Amarela',
    type: 'VACCINE',
    price: null,
    info: 'Diretamente na farmácia',
    __typename: 'SellerService',
  },
  {
    id: '5fc96084dea2302e164d7232',
    name: 'Chikungunya',
    type: 'RAPID_TEST',
    price: 55,
    info: null,
    __typename: 'SellerService',
  },
];

const SELLER_SERVICES: SellerService[] = [
  {
    id: '5fc9607cdea2302e164d7221',
    name: 'Febre Amarela',
    type: 'VACCINE',
    price: null,
    info: 'Diretamente na farmácia',
    __typename: 'SellerService',
  },
  {
    id: '5fc96084dea2302e164d7232',
    name: 'Chikungunya',
    type: 'RAPID_TEST',
    price: 55,
    info: null,
    __typename: 'SellerService',
  },
  {
    price: 35,
    name: 'Lactato',
    id: '5fc96087dea2302e164d7238',
    type: 'RAPID_TEST',
  },
  {
    info: 'Diretamente na farmácia',
    name: 'Hepatite A e B',
    id: '5fc9607adea2302e164d721f',
    type: 'VACCINE',
  },
  {
    price: 45,
    name: 'Sífilis',
    id: '5fc96089dea2302e164d723c',
    type: 'RAPID_TEST',
  },
  {
    price: 5,
    name: 'Pressão Arterial',
    id: '5fc96081dea2302e164d722b',
    type: 'PHARMA_SERVICE',
  },
];

describe('ServicesManagement component', () => {
  it('Must render the services list correctly', async () => {
    render(
      <ServicesManagement
        onChange={mockOnChange}
        selectedServices={SELECTED_SERVICES}
        sellerServices={SELLER_SERVICES}
      />
    );

    expect(screen.queryAllByTestId('service-item')).toHaveLength(4);
    expect(screen.queryAllByTestId('selected-item')).toHaveLength(2);
  });

  it('Should call onChange with refreshed services list when user make a change', async () => {
    render(
      <ServicesManagement
        onChange={mockOnChange}
        selectedServices={SELECTED_SERVICES}
        sellerServices={SELLER_SERVICES}
      />
    );

    const button = screen.getByRole('button', {
      name: /lactato/i,
    });

    fireEvent.click(
      within(button).getByRole('button', {
        name: /adicionar serviço/i,
      })
    );

    expect(screen.queryAllByTestId('service-item')).toHaveLength(3);
    expect(screen.queryAllByTestId('selected-item')).toHaveLength(3);

    expect(mockOnChange).toHaveBeenCalled();
  });
});
