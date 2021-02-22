import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { fireEvent, render, screen, userEvent, waitFor, act } from 'utils/testing';
import AddressForm from './AddressForm';
import { SellerAddressInput } from 'generated-types';
import mocks from './mocks/graphql';

const mockSubmit = jest.fn();

type FormProps = {
  defaultValues?: Record<string, unknown>;
};

const Form = ({ defaultValues }: FormProps) => {
  const methods = useForm({
    defaultValues,
  });

  const onSubmit = (data: SellerAddressInput) => {
    mockSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <AddressForm />
        <input type="submit" value="submit" />
      </form>
    </FormProvider>
  );
};

const fillZipcode = async (zipcode: string) => {
  fireEvent.change(await screen.findByLabelText(/CEP/i), {
    target: { value: zipcode },
  });

  userEvent.click(screen.getByText(/Pesquisar/i));
};

describe('SellerForm component', () => {
  it('Must fill in the address with defaultValues if it exists', async () => {
    const defaultAddressData = {
      'address.zipCode': '09230640',
      'address.street': 'Rua Maria Quitéria',
      'address.number': '1',
      'address.neighborhood': 'Vila Camilópolis',
      'address.city': 'Santo André',
      'address.state': 'SP',
      'address.country': 'Brasil',
    };
    render(<Form defaultValues={defaultAddressData} />);

    expect(screen.getByLabelText(/CEP/i)).toHaveValue('09230-640');
    expect(screen.getByLabelText(/Logradouro/i)).toHaveValue('Rua Maria Quitéria');
    expect(screen.getByLabelText(/Número/i)).toHaveValue(1);
    expect(screen.getByLabelText(/Bairro/i)).toHaveValue('Vila Camilópolis');
    expect(screen.getByLabelText(/Cidade/i)).toHaveValue('Santo André');
    expect(screen.getByLabelText(/Estado/i)).toHaveValue('SP');
    expect(screen.getByLabelText(/País/i)).toHaveValue('Brasil');
  });

  it('Must fill in the address after entering the zipcode and press "pesquisar"', async () => {
    render(<Form />, { mocks: [mocks.getAddressSuccess] });

    await act(async () => {
      await fillZipcode('09230640');
    });

    await waitFor(() => {
      expect(screen.getByLabelText(/Logradouro/i)).toHaveValue('Rua Maria Quitéria');
    });

    expect(screen.getByLabelText(/Bairro/i)).toHaveValue('Vila Camilópolis');
    expect(screen.getByLabelText(/Cidade/i)).toHaveValue('Santo André');
    expect(screen.getByLabelText(/Estado/i)).toHaveValue('SP');
    expect(screen.getByLabelText(/País/i)).toHaveValue('Brasil');
  });

  it('Must clear the address form if the zipcode is not found', async () => {
    render(<Form />, { mocks: [mocks.getAddressSuccess, mocks.getAddressEmpty] });

    // search a valid zipcode
    await act(async () => {
      await fillZipcode('09230640');
    });

    await waitFor(() => {
      expect(screen.getByLabelText(/Logradouro/i)).toHaveValue('Rua Maria Quitéria');
    });

    expect(screen.getByLabelText(/Bairro/i)).toHaveValue('Vila Camilópolis');
    expect(screen.getByLabelText(/Cidade/i)).toHaveValue('Santo André');
    expect(screen.getByLabelText(/Estado/i)).toHaveValue('SP');
    expect(screen.getByLabelText(/País/i)).toHaveValue('Brasil');

    // search a invalid zipcode
    await act(async () => {
      await fillZipcode('09230641');
    });

    await waitFor(() => {
      expect(screen.getByLabelText(/Logradouro/i)).toHaveValue('');
    });

    expect(screen.getByLabelText(/Bairro/i)).toHaveValue('');
    expect(screen.getByLabelText(/Cidade/i)).toHaveValue('');
    expect(screen.getByLabelText(/Estado/i)).toHaveValue('');
    expect(screen.getByLabelText(/País/i)).toHaveValue('');

    expect(
      screen.getByText(
        'Não conseguimos encontrar este CEP. Por favor, complete o endereço.'
      )
    ).toBeInTheDocument();
  });
});
