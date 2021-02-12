import * as React from 'react';
import TextField from 'components/FormInput/TextFieldInput';
import CheckboxesGroup from 'components/FormInput/CheckboxesGroup';
import styled from 'styled-components';
import { HealthHubServiceField } from 'generated-types';
import { Typography } from '@material-ui/core';
import strings from 'strings';

const texts = strings.services.edit.form.questions.table.validations;

const defaultCheckboxes = [
  {
    label: texts.required,
    field: 'required',
    value: true,
  },
  {
    label: texts.numbersOnly,
    field: 'numbersOnly',
    value: false,
  },
  {
    label: texts.currentDate,
    field: 'currentDate',
    value: false,
  },
];

const Container = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: row;
  border: 1px solid #c9c9c9;
  border-radius: 8px;
  gap: 16px;
  padding: 24px;
`;

function QuestionFieldsValidations({
  row,
  position,
}: {
  row: HealthHubServiceField;
  position: number;
}) {
  const checkboxValidations = defaultCheckboxes.map(defaultValue => {
    if (row.validations) {
      const value = (row.validations as any)[defaultValue.field];
      return {
        ...defaultValue,
        value: value || defaultValue?.value,
      };
    }
    return defaultValue;
  });

  return (
    <>
      <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
        Validações do campo
      </Typography>
      <Container>
        <CheckboxesGroup
          field={`procedureFields[${position}].validations`}
          options={checkboxValidations}
          padding="0"
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            type="number"
            field={`procedureFields[${position}].validations.min`}
            label={texts.min}
            defaultValue={row.validations?.min ?? ''}
            fullWidth
            padding="4px 0"
          />
          <TextField
            type="number"
            field={`procedureFields[${position}].validations.max`}
            defaultValue={row.validations?.max ?? ''}
            fullWidth
            label={texts.max}
          />
        </div>
      </Container>
    </>
  );
}

export default QuestionFieldsValidations;
