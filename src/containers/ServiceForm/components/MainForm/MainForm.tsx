import * as React from 'react';
import { createNumberMask } from 'text-mask-addons';
import { TextField } from 'components/FormInput/TextFieldInput/TextFieldInput';
import SelectInput from 'components/FormInput/SelectInput';
import { HealthHubFieldType } from 'generated-types';
import { SERVICE_TYPES } from 'containers/Services/Services';
import { Grid, Typography } from '@material-ui/core';
import strings from 'strings';
import { useWatch, useFormContext } from 'react-hook-form';
import { getFormattedPrice } from '../../utils/formatPayload';

const texts = strings.services.form.main;

const currencyMask = createNumberMask({
  prefix: 'R$ ',
  allowDecimal: true,
  decimalSymbol: ',',
  thousandsSeparatorSymbol: '.',
  integerLimit: 5,
  decimalLimit: 2,
});

const selectOptions = Object.values(HealthHubFieldType).map(serviceType => ({
  label: SERVICE_TYPES[serviceType],
  value: serviceType,
}));

function MainForm() {
  const { control } = useFormContext();
  const price = useWatch<number>({
    control,
    name: 'price',
  });

  return (
    <>
      <Grid container style={{ marginBottom: 16 }}>
        <Grid item xs={12}>
          <Typography variant="h6" id="main-info-form">
            {texts.title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} aria-labelledby="main-info-form">
        <Grid item xs={12} sm={5}>
          <TextField
            field="name"
            label={texts.name.text}
            rules={{ required: texts.name.required }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <SelectInput
            field="type"
            label={texts.type}
            options={selectOptions}
            padding="0"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            field="info"
            label={texts.info.text}
            rules={{
              validate: value => {
                if (price && price > 0) return true;
                if (value) return true;
                return texts.info.required;
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField.Mask
            field="price"
            label={texts.price}
            mask={currencyMask}
            id="price"
            padding="0"
            rules={{ setValueAs: getFormattedPrice }}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField field="result" label={texts.result} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField field="preparation" label={texts.howToPrepare} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField field="description" label={texts.description} multiline rows="2" />
        </Grid>
        <TextField
          field="guideline.howTo"
          label="Como realizar o procedimento"
          multiline
          rows="5"
          style={{ display: 'none' }}
          disabled
        />
        <TextField
          field="guideline.attentionPoints"
          label="Pontos de atenção"
          multiline
          rows="5"
          style={{ display: 'none' }}
          disabled
        />
      </Grid>
    </>
  );
}

export default MainForm;
