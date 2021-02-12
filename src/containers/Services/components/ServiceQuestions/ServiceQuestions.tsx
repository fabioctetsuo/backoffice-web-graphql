import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import {
  HealthHubService,
  HealthHubFieldValidation,
  HealthHubServiceFieldType,
} from 'generated-types';
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  row: HealthHubService;
};

export const VALIDATIONS_DICT: Record<string, string> = {
  min: 'Valor mínimo',
  max: 'Valor máximo',
  minText: 'Mínimo de caracteres',
  maxText: 'Máximo de caracteres',
  required: 'Campo obrigatório',
  numbersOnly: 'Númerico',
  currentDate: 'Data corrente',
};

export const FIELD_TYPE_DICT: Record<string, string> = {
  FLOAT: 'Decimal',
  INTEGER: 'Inteiro',
  BOOLEAN: 'Opção',
  DATE: 'Data',
  DATETIME: 'Data hora',
  TEXT: 'Texto',
  TEXTAREA: 'Área de texto',
  SELECT: 'Seletor',
  FILE_UPLOAD: 'Upload',
  LABEL: 'Label',
};

const StyledColumn = styled.p`
  width: intrinsic; /* Safari/WebKit uses a non-standard name */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content;
`;

const getValidations = (validations?: HealthHubFieldValidation) => {
  if (!validations) {
    return [];
  }

  const validationsEntries = Object.entries(validations);

  return validationsEntries.filter(([keyValidation]) => keyValidation !== '__typename');
};

const getValue = (key: string, value: unknown) => {
  if (value === null) {
    if (key === VALIDATIONS_DICT.required) return 'Sim';
    return 'Não';
  }

  return value;
};

const getBooleanLabel = (value: boolean) => (value ? 'Sim' : 'Não');

const ValidationsColumn = ({
  validations,
  typeField,
}: {
  validations?: HealthHubFieldValidation;
  typeField: HealthHubServiceFieldType;
}) => {
  const validationsList = getValidations(validations);

  const isTextField =
    typeField === HealthHubServiceFieldType.Text ||
    typeField === HealthHubServiceFieldType.Textarea;

  const getKey = (validationKey: string) => {
    if (validationKey === 'max' && isTextField) {
      return VALIDATIONS_DICT.maxText;
    }

    if (validationKey === 'min' && isTextField) {
      return VALIDATIONS_DICT.minText;
    }

    return VALIDATIONS_DICT[validationKey];
  };

  return (
    <div>
      {validationsList.map(([key, value]) => {
        const renderValue =
          typeof value === 'boolean' ? getBooleanLabel(value) : getValue(key, value);

        return (
          <StyledColumn key={`${key}-${value}`} data-testid="table-validations-column">
            {getKey(key)}: {renderValue}
          </StyledColumn>
        );
      })}
    </div>
  );
};

function ServiceQuestions({ row }: Props) {
  return (
    <Box margin={1}>
      <Typography variant="subtitle1" gutterBottom style={{ fontWeight: 'bold' }}>
        Campos de perguntas
      </Typography>
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            <TableCell id="table-service-question-label-column">Label</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Validações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.procedureFields.map(procedureField => (
            <TableRow
              key={`${row.id}-${procedureField.key}`}
              style={{ verticalAlign: 'top' }}
            >
              <TableCell
                component="th"
                scope="row"
                aria-labelledby="table-service-question-label-column"
              >
                {procedureField.label}
              </TableCell>
              <TableCell>
                <StyledColumn>{FIELD_TYPE_DICT[procedureField.type]}</StyledColumn>
              </TableCell>
              <TableCell>
                {procedureField.validations && (
                  <ValidationsColumn
                    validations={procedureField.validations}
                    typeField={procedureField.type}
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default ServiceQuestions;
