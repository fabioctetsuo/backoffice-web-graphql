import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { HealthHubService } from 'containers/Services';
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  row: HealthHubService;
};

type ValidationsType = {
  min?: number;
  max?: number;
  required?: boolean;
  numbersOnly?: boolean;
  currentDate?: boolean;
};

export const VALIDATIONS_DICT: Record<string, string> = {
  min: 'Valor mínimo',
  max: 'Valor máximo',
  required: 'Campo obrigatório',
  numbersOnly: 'Númerico',
  currentDate: 'Data corrente',
};

export const FIELD_TYPE_DICT: Record<string, string> = {
  FLOAT: 'Decimal',
  INTEGER: 'Inteiro',
  BOOLEAN: 'Opção',
  DATE: 'Data',
  Datetime: 'Data hora',
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

const ValidationsColumn = ({ validations }: { validations?: ValidationsType }) => {
  const validationsList = validations ? Object?.entries(validations) : [];
  const getBooleanLabel = (value: boolean) => (value ? 'Sim' : 'Não');
  return (
    <div>
      {validationsList.map(([key, value]) => {
        const renderValue = typeof value === 'boolean' ? getBooleanLabel(value) : value;
        return (
          <StyledColumn key={`${key}-${value}`} data-testid="table-validations-column">
            {VALIDATIONS_DICT[key]}: {renderValue}
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
                <ValidationsColumn validations={procedureField.validations} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default ServiceQuestions;
