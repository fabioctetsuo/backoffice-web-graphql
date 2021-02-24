import * as React from 'react';
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Collapse,
  IconButton,
  Box,
  Button,
} from '@material-ui/core';
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  DeleteOutline,
  AddOutlined,
} from '@material-ui/icons';
import { HealthHubServiceField } from 'generated-types';
import { useFieldArray, useFormContext, FieldErrors } from 'react-hook-form';
import QuestionFieldsValidations from '../QuestionFieldsValidations';
import QuestionFieldsGenerator from '../QuestionFieldsGenerator';
import * as Styled from './styled';
import strings from 'strings';

const texts = strings.services.form.questions;

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
    cursor: 'pointer',
  },
});

type RowProps = {
  row: HealthHubServiceField;
  position: number;
  errors: FieldErrors;
  remove: (position: number) => void;
};

function QuestionRow({ row, position, remove, errors }: RowProps) {
  const classes = useRowStyles();
  const [open, setOpen] = React.useState(Boolean(!row.label));

  React.useEffect(() => {
    if ((errors?.procedureFields || [])[position]) setOpen(true);
  }, [errors]);

  return (
    <React.Fragment>
      <TableRow onClick={() => setOpen(!open)} className={classes.root} hover>
        <TableCell size="small">
          <IconButton
            aria-label={texts.table.a11y.viewDetails}
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" id={`questions-row-${position}`}>
          {row.label}
        </TableCell>
        <TableCell component="th" scope="row" size="small" align="right">
          <IconButton
            aria-label={texts.table.a11y.remove}
            size="small"
            onClick={() => remove(position)}
          >
            <DeleteOutline />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow
        aria-labelledby={`questions-row-${position}`}
        data-testid={`questions-row-testid`}
      >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto">
            <Box margin={2}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                  <QuestionFieldsGenerator row={row} position={position} />
                </Grid>
                <Grid item xs={12} md={5}>
                  <QuestionFieldsValidations row={row} position={position} />
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const CollapsibleQuestionsForm = ({ errors }: { errors: FieldErrors }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'procedureFields',
  });
  const addNewQuestion = () => {
    append({
      key: '',
      label: '',
      position: fields.length + 1,
      type: 'TEXT',
      validations: { required: true },
      values: [],
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Styled.TitleWrapper>
          <Typography variant="h6">{texts.title}</Typography>
          <Button
            onClick={addNewQuestion}
            variant="contained"
            color="primary"
            endIcon={<AddOutlined />}
          >
            {texts.newQuestion}
          </Button>
        </Styled.TitleWrapper>
        <TableContainer component={Paper}>
          <Table aria-label={texts.table.a11y.label} size="small">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>{texts.table.head.label}</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {fields.map((item, index) => (
                <QuestionRow
                  key={item.id}
                  row={item as any}
                  position={index}
                  remove={remove}
                  errors={errors}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default CollapsibleQuestionsForm;
