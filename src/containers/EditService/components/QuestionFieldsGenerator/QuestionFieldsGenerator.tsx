import { Grid, Typography } from '@material-ui/core';
import SelectInput from 'components/FormInput/SelectInput';
import { TextField } from 'components/FormInput/TextFieldInput';
import { HealthHubServiceField, HealthHubServiceFieldType } from 'generated-types';
import { useFormContext, useWatch } from 'react-hook-form';
import OptionsGenerator from '../OptionsGenerator';
import { FIELD_TYPE_DICT } from 'containers/Services/components/ServiceQuestions/ServiceQuestions';
import strings from 'strings';

const texts = strings.services.edit.form.questions.table.fields;

type Props = {
  row: HealthHubServiceField;
  position: number;
};

const allowedOptionsByType = [
  HealthHubServiceFieldType.Select,
  HealthHubServiceFieldType.Boolean,
];

const fieldTypeOptions = Object.values(HealthHubServiceFieldType).map(serviceType => ({
  label: FIELD_TYPE_DICT[serviceType],
  value: serviceType,
}));

function QuestionFieldsGenerator({ row, position }: Props) {
  const { control } = useFormContext();
  const rowType = useWatch({
    control,
    name: `procedureFields[${position}].type`,
  }) as HealthHubServiceFieldType;
  const hasValues = row.values;
  const isSelectOrBoolean = allowedOptionsByType.includes(rowType);
  const shouldRenderValuesForm = isSelectOrBoolean && hasValues;
  return (
    <div>
      <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
        {texts.title}
      </Typography>
      <Grid container spacing={2} style={{ marginTop: 8 }}>
        <Grid item xs={12}>
          <TextField
            label={texts.key.label}
            field={`procedureFields[${position}].key`}
            defaultValue={row.key ?? undefined}
            disabled={Boolean(row.key)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={texts.label.text}
            field={`procedureFields[${position}].label`}
            defaultValue={row.label}
            rules={{ required: texts.label.required }}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <SelectInput
            label={texts.fieldType.text}
            field={`procedureFields[${position}].type`}
            padding="0"
            defaultValue={row.type}
            fullWidth
            options={fieldTypeOptions}
            rules={{ required: texts.fieldType.required }}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            label={texts.unit.text}
            placeholder={texts.unit.placeholder}
            field={`procedureFields[${position}].data.unit`}
            defaultValue={row.data?.unit}
          />
        </Grid>
        {shouldRenderValuesForm && (
          <Grid item xs={12}>
            <OptionsGenerator position={position} rowType={rowType} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default QuestionFieldsGenerator;
