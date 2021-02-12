import * as React from 'react';
import { Grid, IconButton, Typography, Button } from '@material-ui/core';
import { HealthHubServiceFieldType } from 'generated-types';
import { useFormContext, useFieldArray } from 'react-hook-form';
import TextField from 'components/FormInput/TextFieldInput';
import { DeleteOutline, AddOutlined } from '@material-ui/icons';
import strings from 'strings';
import * as Styled from './styled';

type OptionDataProps = {
  rowPosition: number;
  procedurePosition: number;
};

type OptionsGeneratorProps = {
  position: number;
  rowType: HealthHubServiceFieldType;
};

const texts = strings.services.edit.form.questions.table.fields.options;

const OptionData: React.FC<OptionDataProps> = ({ rowPosition, procedurePosition }) => {
  const { control } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name: `procedureFields[${procedurePosition}].values[${rowPosition}].data`,
  });

  return (
    <Styled.OptionDetailsContainer>
      <Button
        size="small"
        endIcon={<AddOutlined />}
        onClick={() => append({ label: '', value: '' })}
      >
        {texts.optionData.add}
      </Button>
      {fields.map((option, index) => (
        <Grid container spacing={2} key={option.id} style={{ marginTop: 8 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              field={`procedureFields[${procedurePosition}].values[${rowPosition}].data[${index}].label`}
              label={texts.optionData.label.text}
              rules={{ required: texts.optionData.label.required }}
              defaultValue={option.label}
              fullWidth
              padding="0"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              field={`procedureFields[${procedurePosition}].values[${rowPosition}].data[${index}].value`}
              label={texts.optionData.value.text}
              rules={{ required: texts.optionData.value.required }}
              defaultValue={option.value}
              fullWidth
              padding="0"
            />
          </Grid>
          <Grid item container xs={12} sm={1} alignContent="center" justify="center">
            <IconButton
              size="small"
              aria-label={texts.a11y.remove}
              onClick={() => remove(index)}
            >
              <DeleteOutline titleAccess={texts.a11y.trash} />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Styled.OptionDetailsContainer>
  );
};

function OptionsGenerator({ position, rowType }: OptionsGeneratorProps) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `procedureFields[${position}].values`,
  });
  const handleAddOption = () => {
    append({ key: '', label: '' });
  };

  if (rowType === HealthHubServiceFieldType.Select) {
    if (fields.length === 0) handleAddOption();
  }

  return (
    <div style={{ marginTop: 16 }}>
      <Typography
        variant="subtitle1"
        style={{ fontWeight: 'bold' }}
        id="options-generator-form"
      >
        {texts.title}
      </Typography>
      <div style={{ marginTop: 8 }}>
        {fields.map((option, rowPosition) => (
          <div
            key={option.id}
            style={{ marginBottom: 24 }}
            aria-labelledby="options-generator-form"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <TextField
                  field={`procedureFields[${position}].values[${rowPosition}].label`}
                  label={texts.label.text}
                  rules={{ required: texts.label.required }}
                  defaultValue={option.label}
                  fullWidth
                  padding="0"
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  field={`procedureFields[${position}].values[${rowPosition}].key`}
                  label={texts.value.text}
                  rules={{ required: texts.value.required }}
                  defaultValue={option.key}
                  fullWidth
                  padding="0"
                />
              </Grid>
              <Grid item container xs={12} sm={2} alignContent="center" justify="center">
                <IconButton
                  aria-label={texts.a11y.remove}
                  disabled={fields.length <= 1}
                  onClick={() => remove(rowPosition)}
                >
                  <DeleteOutline titleAccess={texts.a11y.trash} />
                </IconButton>
              </Grid>
            </Grid>
            <OptionData rowPosition={rowPosition} procedurePosition={position} />
          </div>
        ))}
        <Button
          variant="contained"
          onClick={handleAddOption}
          style={{ marginTop: 8 }}
          color="primary"
        >
          {texts.add}
        </Button>
      </div>
    </div>
  );
}

export default OptionsGenerator;
