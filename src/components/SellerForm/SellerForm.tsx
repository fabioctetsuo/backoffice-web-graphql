import * as React from 'react';
import { useRouter } from 'next/router';
import { Grid, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { FormProvider, useForm } from 'react-hook-form';
import AddressForm from 'components/AddressForm';
import SelectInput from 'components/FormInput/SelectInput';
import { TextField } from 'components/FormInput/TextFieldInput';
import { InputWithMask } from 'components/FormInput/TextFieldInput/InputWithMask';
import {
  CNPJ_MASK,
  PHONE_NUMBER_MASK,
  CELLPHONE_NUMBER_MASK,
} from 'components/FormInput/TextFieldInput/helpers/mask';
import Loading from 'components/Loading';
import AlertDialog from './AlertDialog';
import { Seller } from 'generated-types';

import strings from 'strings';
import { isCNPJValid } from 'utils/validations/cnpj';
const texts = strings.sellers.sellerForm;

const tradingNameOptions = [
  { label: 'Raia', value: 'Raia' },
  { label: 'Drogasil', value: 'Drogasil' },
];

type SellerFormProps = {
  defaultValues?: Seller;
  onSubmit: (data: Seller) => void;
  isSubmitting: boolean;
  disableCNPJ?: boolean;
};

const SellerForm = ({
  defaultValues,
  onSubmit,
  isSubmitting,
  disableCNPJ,
}: SellerFormProps) => {
  const router = useRouter();
  const methods = useForm({
    defaultValues,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const { isDirty } = methods.formState;

  const [showConfirmDialog, setShowConfirmDialog] = React.useState(false);

  const handleCancel = () => {
    if (isDirty) {
      setShowConfirmDialog(true);
    } else {
      router.push('/sellers');
    }
  };

  const handleEditSeller = (data: Seller) => {
    const payload = {
      ...data,
      services: defaultValues?.services || null,
    };

    onSubmit(payload);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleEditSeller)}>
        <Grid container spacing={4} alignItems="baseline">
          <Grid item xs={12} md={2}>
            <SelectInput
              fullWidth
              field="tradingName"
              label={texts.fields.tradingName.label}
              options={tradingNameOptions}
              rules={{
                required: texts.fields.tradingName.required,
              }}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              id="seller-name"
              field="name"
              label={texts.fields.name.label}
              rules={{
                required: texts.fields.name.required,
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <InputWithMask
              id="seller-cnpj"
              field="documentNumber"
              disabled={Boolean(disableCNPJ)}
              label={texts.fields.documentNumber.label}
              mask={CNPJ_MASK}
              rules={{
                required: texts.fields.documentNumber.required,
                validate: value =>
                  isCNPJValid(value) || texts.fields.documentNumber.validate,
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              id="seller-external-code"
              field="externalCode"
              label={texts.fields.externalCode.label}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="baseline">
          <Grid item xs={12} md={4}>
            <InputWithMask
              id="seller-phone"
              field="phoneNumber"
              label={texts.fields.phoneNumber.label}
              mask={PHONE_NUMBER_MASK}
              rules={{
                required: texts.fields.phoneNumber.required,
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputWithMask
              id="seller-mobile"
              field="mobileNumber"
              label={texts.fields.mobilePhone.label}
              mask={CELLPHONE_NUMBER_MASK}
              rules={{
                required: texts.fields.mobilePhone.required,
              }}
            />
          </Grid>
        </Grid>
        <AddressForm />
        <Grid item container justify="flex-end" spacing={2}>
          <Grid item>
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              color="primary"
              startIcon={
                isSubmitting ? (
                  <Loading overlay={false} color="inherit" size={24} />
                ) : (
                  <SaveIcon />
                )
              }
            >
              {texts.buttons.save}
            </Button>
          </Grid>
          <Grid item>
            <Button disabled={isSubmitting} variant="contained" onClick={handleCancel}>
              {texts.buttons.cancel}
            </Button>
          </Grid>
        </Grid>
      </form>
      <AlertDialog
        open={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
        onConfirm={() => router.push('/sellers')}
      />
    </FormProvider>
  );
};

export default SellerForm;
