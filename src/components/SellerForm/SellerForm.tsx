import * as React from 'react';
import { useRouter } from 'next/router';
import { Grid, Button, Divider } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
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
import { Provider, Seller, SellerService, useServicesQuery } from 'generated-types';

import strings from 'strings';
import { isCNPJValid } from 'utils/validations/cnpj';
import ServicesManagement from 'components/ServicesManagement';
import useToast from 'hooks/useToast';
import Title from 'components/Title';
import styled from 'styled-components';
import TimePicker from 'components/FormInput/TimePicker';

import { getDateFromHour, getHourFromDate } from './utils';

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

export type SellerInfo = Seller & { provider: Provider };

type SellerFormProps = {
  defaultValues?: SellerInfo;
  onSubmit: (data: SellerInfo) => void;
  isSubmitting: boolean;
  disableCNPJ?: boolean;
};

const SellerForm = ({
  defaultValues,
  onSubmit,
  isSubmitting,
  disableCNPJ,
}: SellerFormProps) => {
  const formattedDefaultProviderValues = defaultValues?.provider
    ? {
        ...defaultValues?.provider,
        startHour: getDateFromHour(defaultValues.provider.startHour),
        endHour: getDateFromHour(defaultValues.provider.endHour),
        startIntervalHour:
          defaultValues.provider.startIntervalHour &&
          getDateFromHour(defaultValues.provider.startIntervalHour),
        endIntervalHour:
          defaultValues.provider.endIntervalHour &&
          getDateFromHour(defaultValues.provider.endIntervalHour),
      }
    : undefined;

  const renderToast = useToast();
  const router = useRouter();

  const methods = useForm({
    defaultValues: {
      ...defaultValues,
      provider: formattedDefaultProviderValues,
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const { register, control, clearErrors } = methods;

  const BLOCKING_START = 'provider.startIntervalHour';
  const BLOCKING_END = 'provider.endIntervalHour';

  const hasBlocking = useWatch({
    name: [BLOCKING_START, BLOCKING_END],
    control,
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

  const validateProviderHours = (provider: Provider) => {
    if (provider.endHour <= provider.startHour) {
      renderToast(texts.toasts.endHourLessThanOrEqualStartHour, 'error');
      return false;
    }
    if (provider.startIntervalHour && provider.endIntervalHour) {
      if (provider.endIntervalHour <= provider.startIntervalHour) {
        renderToast(
          texts.toasts.endIntervalHourLessThanOrEqualStartIntervalHour,
          'error'
        );
        return false;
      } else if (provider.startIntervalHour < provider.startHour) {
        renderToast(texts.toasts.startIntervalHourLessThanStartHour, 'error');
        return false;
      } else if (provider.endIntervalHour > provider.endHour) {
        renderToast(texts.toasts.endIntervalHourGreaterThanEndHour, 'error');
        return false;
      }
    }
    return true;
  };

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

  const handleEditSeller = (data: SellerInfo) => {
    if (!selectedServices.length) {
      renderToast(texts.toasts.minServicesQuantity, 'error');
    } else {
      const formattedProvider = {
        ...data.provider,
        startHour: getHourFromDate(data.provider.startHour),
        endHour: getHourFromDate(data.provider.endHour),
        startIntervalHour:
          data.provider.startIntervalHour &&
          getHourFromDate(data.provider.startIntervalHour),
        endIntervalHour:
          data.provider.endIntervalHour && getHourFromDate(data.provider.endIntervalHour),
      };

      if (!validateProviderHours(formattedProvider)) return;
      const payload: SellerInfo = {
        ...data,
        services: selectedServices,
        provider: formattedProvider,
      };

      onSubmit(payload);
    }
  };

  React.useEffect(() => {
    setFormIsDirty(isDirty);
  }, [isDirty]);

  React.useEffect(() => {
    if (!hasBlocking[BLOCKING_START]) clearErrors(BLOCKING_END);
    if (!hasBlocking[BLOCKING_END]) clearErrors(BLOCKING_START);
  }, [hasBlocking[BLOCKING_START], hasBlocking[BLOCKING_END]]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleEditSeller)}>
        <Title style={{ marginBottom: 32 }}>{texts.infoTitle}</Title>
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
        <Divider style={{ margin: '32px 0' }} />
        <Title style={{ marginBottom: 32 }}>{texts.addressTitle}</Title>
        <AddressForm />
        <Divider style={{ margin: '32px 0' }} />
        <Grid container spacing={4} alignItems="baseline">
          <input
            name="provider.interval"
            type="hidden"
            ref={register({
              valueAsNumber: true,
            })}
          />
          <input
            name="provider.slots"
            type="hidden"
            ref={register({
              valueAsNumber: true,
            })}
          />
          <Grid item xs={12} md={6}>
            <Title style={{ marginBottom: 32 }}>{texts.workingHoursTitle}</Title>
            <Grid item container spacing={2}>
              <Grid item xs={12} md={6}>
                <TimePicker
                  field="provider.startHour"
                  ampm={false}
                  label={texts.fields.provider.workingHours.start.label}
                  rules={{
                    required: texts.fields.provider.workingHours.start.required,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TimePicker
                  field="provider.endHour"
                  ampm={false}
                  label={texts.fields.provider.workingHours.end.label}
                  rules={{
                    required: texts.fields.provider.workingHours.end.required,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Title style={{ marginBottom: 32 }}>{texts.blockingHoursTitle}</Title>
            <Grid item container spacing={2}>
              <Grid item xs={12} md={6}>
                <TimePicker
                  field="provider.startIntervalHour"
                  ampm={false}
                  label={texts.fields.provider.blockingHours.start.label}
                  rules={{
                    required: hasBlocking[BLOCKING_END]
                      ? texts.fields.provider.blockingHours.start.required
                      : false,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TimePicker
                  field="provider.endIntervalHour"
                  ampm={false}
                  label={texts.fields.provider.blockingHours.end.label}
                  rules={{
                    required: hasBlocking[BLOCKING_START]
                      ? texts.fields.provider.blockingHours.end.required
                      : false,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

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
