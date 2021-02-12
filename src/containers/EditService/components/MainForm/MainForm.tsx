import React from 'react';
import { createNumberMask } from 'text-mask-addons';
import { TextField } from 'components/FormInput/TextFieldInput/TextFieldInput';
import SelectInput from 'components/FormInput/SelectInput';
import { HealthHubFieldType } from 'generated-types';
import { SERVICE_TYPES } from 'containers/Services/Services';
import { Grid, Typography } from '@material-ui/core';
import strings from 'strings';

const texts = strings.services.edit.form.main;

const currencyMask = createNumberMask({
  prefix: 'R$ ',
  allowDecimal: true,
  decimalSymbol: ',',
  thousandsSeparatorSymbol: '.',
  integerLimit: 5,
});

const selectOptions = Object.values(HealthHubFieldType).map(serviceType => ({
  label: SERVICE_TYPES[serviceType],
  value: serviceType,
}));

function MainForm() {
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
          <TextField field="name" label={texts.name} />
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
          <TextField field="info" label={texts.info} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField.Mask
            field="price"
            label={texts.price}
            mask={currencyMask}
            id="price"
            padding="0"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default MainForm;
