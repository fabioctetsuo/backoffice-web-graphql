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
  IconButton,
  Button,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import CustomContainer from 'components/Container';
import Title from 'components/Title';
import Loading from 'components/Loading';

import { SellersAll, useSellersQuery } from 'generated-types';
import { useRouter } from 'next/router';
import { SearchForm } from './components/SearchForm';

import strings from 'strings';
const texts = strings.sellers.list;

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

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Services = () => {
  const router = useRouter();
  const classes = useStyles();

  const [sellersResponse, setSellersResponse] = React.useState<SellersAll>();

  const defaultVariables = {
    sort: 'name,asc',
  };

  const { refetch, loading } = useSellersQuery({
    variables: defaultVariables,
    onCompleted: ({ sellers }) => {
      if (sellers) {
        setSellersResponse(sellers);
      }
    },
  });

  if (loading) {
    return <Loading overlay />;
  }

  return (
    <Container maxWidth="lg">
      <main>
        <CustomContainer
          title={<Title StartIcon={FormatListBulleted}>{texts.title}</Title>}
          TopButton={() => (
            <Button
              aria-label={texts.newSellerButton}
              variant="contained"
              color="primary"
              onClick={() => router.push('/sellers/new')}
            >
              <AddIcon /> {texts.newSellerButton}
            </Button>
          )}
        >
          <SearchForm onGetSellers={setSellersResponse} />
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label={texts.table.title}>
              <TableHead>
                <TableRow>
                  <StyledTableCell>{texts.table.header.sellerName}</StyledTableCell>
                  <StyledTableCell align="right">
                    {texts.table.header.edit}
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sellersResponse?.content.map(seller => (
                  <StyledTableRow key={seller.id}>
                    <StyledTableCell scope="seller">
                      <strong>{seller.name}</strong>
                      <br />
                      {seller.address.street}, {seller.address.number} -{' '}
                      {seller.address.neighborhood} - {seller.address.city}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton
                        onClick={() => router.push(`/sellers/${seller.id}`)}
                        aria-label={texts.table.header.edit}
                      >
                        <EditIcon />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                {!sellersResponse?.content.length && (
                  <StyledTableRow>
                    <StyledTableCell
                      colSpan={2}
                      align="center"
                      component="td"
                      scope="seller"
                    >
                      {texts.table.emptyState}
                    </StyledTableCell>
                  </StyledTableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[]}
                    count={sellersResponse?.totalElements ?? 0}
                    rowsPerPage={20}
                    page={sellersResponse?.page ?? 0}
                    onChangePage={(a, page) => {
                      refetch({
                        page,
                      });
                    }}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </CustomContainer>
      </main>
    </Container>
  );
};

export default Services;
