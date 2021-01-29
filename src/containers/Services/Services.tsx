import * as React from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
  TablePagination,
} from '@material-ui/core';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import CustomContainer from 'components/Container';
import Title from 'components/Title';
import strings from 'strings';
import mocks from './mocks';
import ServiceRow from './components/ServiceRow';
import { HealthHubService } from '.';

export type Services = {
  content: HealthHubService[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  number: number;
};

export const SERVICE_TYPES: Record<string, string> = {
  VACCINE: 'Vacina',
  PHARMA_SERVICE: 'Serviços Farmacêuticos',
  RAPID_TEST: 'Teste Rápido',
};

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const texts = strings.services.list;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function Services() {
  const classes = useStyles();
  const [data, setData] = React.useState<Services | null>(null);

  React.useEffect(() => {
    if (mocks) {
      setData(mocks);
    }
  }, []);

  return (
    <Container maxWidth="lg">
      <main>
        <CustomContainer
          title={<Title StartIcon={FormatListBulleted}>{texts.title}</Title>}
        >
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label={texts.table.general.title}>
              <TableHead>
                <TableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell id="table-service-column">
                    {texts.table.general.column.serviceName}
                  </StyledTableCell>
                  <StyledTableCell>
                    {texts.table.general.column.serviceType}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {texts.table.general.column.edit}r
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.content?.map(row => (
                  <ServiceRow key={row.id} row={row} />
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[]}
                    count={data?.totalElements ?? 0}
                    rowsPerPage={20}
                    page={data?.number ?? 0}
                    onChangePage={console.log}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </CustomContainer>
      </main>
    </Container>
  );
}

export default Services;
