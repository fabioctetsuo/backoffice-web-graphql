import * as React from 'react';
import { useRouter } from 'next/router';
import { makeStyles, TableRow, TableCell, IconButton, Collapse } from '@material-ui/core';
import { KeyboardArrowUp, KeyboardArrowDown, Edit } from '@material-ui/icons';
import { SERVICE_TYPES } from 'containers/Services/Services';
import strings from 'strings';
import ServiceQuestions from '../ServiceQuestions';
import AdditionalInfo from '../AdditionalInfo';
import { HealthHubService } from 'generated-types';

type Props = { row: HealthHubService };

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
      cursor: 'pointer',
    },
  },
});

const tableTexts = strings.services.list.table;

function ServiceRow({ row }: Props) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const router = useRouter();

  return (
    <React.Fragment>
      <TableRow
        className={classes.root}
        hover
        selected={open}
        onClick={() => setOpen(!open)}
      >
        <TableCell>
          <IconButton
            aria-label={open ? tableTexts.general.hideInfo : tableTexts.general.showInfo}
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" aria-labelledby="table-service-column">
          {row.name}
        </TableCell>
        <TableCell>{SERVICE_TYPES[row.type]}</TableCell>
        <TableCell align="right">
          <IconButton
            aria-label={tableTexts.general.column.edit}
            size="small"
            onClick={() =>
              router.push({
                pathname: '/services/[id]',
                query: { id: row.id },
              })
            }
          >
            <Edit />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <AdditionalInfo row={row} />
            <ServiceQuestions row={row} />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default ServiceRow;
