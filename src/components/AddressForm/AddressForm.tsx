import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { TextField } from 'components/FormInput/TextFieldInput';
import SelectInput from 'components/FormInput/SelectInput';
import removeInputMask from 'components/FormInput/TextFieldInput/helpers/removeInputMask';
import { CEP_MASK } from 'components/FormInput/TextFieldInput/helpers/mask';
import FieldContext from 'components/FormInput/fieldContext';
import { useFormContext } from 'react-hook-form';
import { AddressByZipCode, useGetAddressByZipcodeLazyQuery } from 'generated-types';
import stateOptions from './stateOptions';
import strings from 'strings';
import useToast from 'hooks/useToast';

const fieldTexts = strings.address.fields;
const buttons = strings.address.buttons;
const toasts = strings.address.toasts;

const AddressForm = () => {
  const renderToast = useToast();
  const fillAddress = (zipcodeData?: AddressByZipCode) => {
    setValue('address.street', zipcodeData?.street || '');
    setValue('address.number', '');
    setValue('address.neighborhood', zipcodeData?.neighborhood || '');
    setValue('address.city', zipcodeData?.city || '');
    setValue('address.state', zipcodeData?.state || '');
    setValue('address.country', zipcodeData ? 'Brasil' : '');
  };

  const [
    getAddressByZipcode,
    { loading: zipcodeLoading },
  ] = useGetAddressByZipcodeLazyQuery({
    onCompleted: ({ getAddressByZipcode }) => {
      if (getAddressByZipcode) {
        fillAddress(getAddressByZipcode);
      }
    },
    onError: () => {
      renderToast(toasts.zipCodeError, 'warning');
      fillAddress();
    },
  });

  const { setValue, getValues } = useFormContext();

  const handleSearch = () => {
    const zipcode = getValues('address.zipCode');

    getAddressByZipcode({
      variables: {
        zipcode: removeInputMask(zipcode),
      },
    });
  };

  return (
    <FieldContext.Provider value={{ path: 'address' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <TextField.Mask
            id="address-cep"
            field="zipCode"
            label={fieldTexts.zipcode.label}
            mask={CEP_MASK}
            rules={{
              required: fieldTexts.zipcode.required,
            }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            disabled={zipcodeLoading}
          >
            {zipcodeLoading ? buttons.loading : buttons.search}
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={4} alignItems="baseline">
        <Grid item xs={12} md={4}>
          <TextField
            disabled={zipcodeLoading}
            field="street"
            label={fieldTexts.street.label}
            rules={{
              required: fieldTexts.street.required,
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            disabled={zipcodeLoading}
            type="number"
            field="number"
            label={fieldTexts.number.label}
            rules={{
              required: fieldTexts.number.required,
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            disabled={zipcodeLoading}
            field="neighborhood"
            label={fieldTexts.neighborhood.label}
            rules={{
              required: fieldTexts.neighborhood.required,
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} alignItems="baseline">
        <Grid item xs={12} md={4}>
          <TextField
            disabled={zipcodeLoading}
            field="city"
            label={fieldTexts.city.label}
            rules={{
              required: fieldTexts.city.required,
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectInput
            fullWidth
            disabled={zipcodeLoading}
            field="state"
            label={fieldTexts.state.label}
            options={stateOptions}
            rules={{
              required: fieldTexts.state.required,
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            disabled={zipcodeLoading}
            field="country"
            label={fieldTexts.country.label}
            rules={{
              required: fieldTexts.country.required,
            }}
          />
        </Grid>
      </Grid>
    </FieldContext.Provider>
  );
};

export default AddressForm;
