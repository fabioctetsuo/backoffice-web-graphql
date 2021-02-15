import React, { Dispatch, SetStateAction } from 'react';
import { Grid, InputAdornment, IconButton, Button } from '@material-ui/core';
import { CNPJ_MASK } from 'components/FormInput/TextFieldInput/helpers/mask';
import { InputWithMask } from 'components/FormInput/TextFieldInput/InputWithMask';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { TextField } from 'components/FormInput/TextFieldInput';
import removeInputMask from 'components/FormInput/TextFieldInput/helpers/removeInputMask';
import { SellersAll, useSellersLazyQuery } from 'generated-types';

import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

import strings from 'strings';

const texts = strings.sellers.list;

type SellersFilter = {
  name: string;
  documentNumber: string;
};

type SearchFormProps = {
  onGetSellers: Dispatch<SetStateAction<SellersAll | undefined>>;
};

export const SearchForm = ({ onGetSellers }: SearchFormProps) => {
  const methods = useForm();

  const [getSellers, { loading }] = useSellersLazyQuery({
    onCompleted: ({ sellers }) => {
      onGetSellers(sellers);
    },
  });

  const defaultVariables = {
    sort: 'name,asc',
  };

  const nameValue = useWatch({
    control: methods.control,
    name: 'name',
    defaultValue: '',
  });

  const documentNumberValue = useWatch({
    control: methods.control,
    name: 'documentNumber',
    defaultValue: '',
  });

  const handleSearchSubmit = ({ name, documentNumber }: SellersFilter) => {
    if (!name && !documentNumber) return;
    const variables = {
      ...defaultVariables,
      name,
      documentNumber: removeInputMask(documentNumber),
    };

    getSellers({ variables });
  };

  const handleSearchReset = () => {
    const defaultFormValues = { name: '', documentNumber: '' };
    methods.reset(defaultFormValues);
    if (methods.formState.isSubmitted) {
      getSellers({
        variables: {
          ...defaultVariables,
          ...defaultFormValues,
        },
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        noValidate
        autoComplete="off"
        style={{ marginBottom: 16 }}
        onSubmit={methods.handleSubmit(handleSearchSubmit)}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="seller-name-input"
              label={texts.search.nameInputLabel}
              field="name"
              endAdornment={
                nameValue && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={texts.search.clearButton}
                      color="primary"
                      onClick={handleSearchReset}
                      disabled={loading}
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputWithMask
              id="phone-number-input"
              label={texts.search.documentNumberInputLabel}
              field="documentNumber"
              mask={CNPJ_MASK}
              endAdornment={
                documentNumberValue && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={texts.search.clearButton}
                      color="primary"
                      onClick={handleSearchReset}
                      disabled={loading}
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }
            />
          </Grid>
          <Grid container item xs={12} sm={2} alignItems="center">
            <Button
              aria-label={texts.search.submitButton}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading}
              startIcon={<SearchIcon />}
            >
              {texts.search.submitButton}
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};
