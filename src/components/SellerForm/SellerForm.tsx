import * as React from 'react';
import { useRouter } from 'next/router';
import { Grid, Button, Divider } from '@material-ui/core';
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
import { Seller, SellerService, useServicesQuery } from 'generated-types';

import strings from 'strings';
import { isCNPJValid } from 'utils/validations/cnpj';
import ServicesManagement from 'components/ServicesManagement';
import useToast from 'hooks/useToast';
import Title from 'components/Title';
import styled from 'styled-components';

const texts = strings.sellers.sellerForm;

const LoadingWrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  const renderToast = useToast();
  const router = useRouter();
  const methods = useForm({
    defaultValues,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const [selectedServices, setSelectedServices] = React.useState(
    defaultValues?.services || []
  );

  const [formattedServiceList, setFormattedServiceList] = React.useState<
    SellerService[]
  >();

  const [formIsDirty, setFormIsDirty] = React.useState(false);

  const { loading: servicesLoading } = useServicesQuery({
    variables: {
      size: 1000, // Get all service on one page
    },
    onCompleted: ({ services }) => {
      setFormattedServiceList(
        (services?.content || []).map(service => ({
          id: service.id,
          info: service.info,
          name: service.name,
          type: service.type,
          price: service.price,
        }))
      );
    },
    onError: () => {
      renderToast(texts.toasts.getServicesError, 'error');
    },
  });

  const { isDirty } = methods.formState;

  const [showConfirmDialog, setShowConfirmDialog] = React.useState(false);

  const handleCancel = () => {
    if (formIsDirty) {
      setShowConfirmDialog(true);
    } else {
      router.push('/sellers');
    }
  };

  const handleServiceListChange = (services: SellerService[]) => {
    setFormIsDirty(true);
    setSelectedServices(services);
  };

  const handleEditSeller = (data: Seller) => {
    if (!selectedServices.length) {
      renderToast(texts.toasts.minServicesQuantity, 'error');
    } else {
      const payload = {
        ...data,
        services: selectedServices,
      };

      onSubmit(payload);
    }
  };

  React.useEffect(() => {
    setFormIsDirty(isDirty);
  }, [isDirty]);

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
        <Divider style={{ margin: '32px 0' }} />
        <Title style={{ marginBottom: 32 }}>{texts.servicesSectionTitle}</Title>
        {servicesLoading && (
          <LoadingWrapper>
            <Loading color="primary" overlay={false} />
          </LoadingWrapper>
        )}
        {!servicesLoading && formattedServiceList && (
          <ServicesManagement
            onChange={handleServiceListChange}
            selectedServices={selectedServices}
            sellerServices={formattedServiceList}
          />
        )}
        <Grid item container justify="flex-end" spacing={2} style={{ marginTop: 32 }}>
          <Grid item>
            <Button disabled={isSubmitting} variant="contained" onClick={handleCancel}>
              {texts.buttons.cancel}
            </Button>
          </Grid>
          <Grid item>
            <Button
              disabled={isSubmitting || !formIsDirty}
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
