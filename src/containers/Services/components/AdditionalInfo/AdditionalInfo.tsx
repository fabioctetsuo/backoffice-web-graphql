import { Box, Typography, Grid } from '@material-ui/core';
import { HealthHubService } from 'generated-types';
import strings from 'strings';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  margin-bottom: ${({ theme }) => theme.spacing(6)}px;
`;

const Row = styled(Grid)`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

interface Props {
  row: HealthHubService;
}

const getPriceInfo = (row: HealthHubService) => {
  if (row.price) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
      row.price
    );
  }
  return row.info;
};

const texts = strings.services.list.table.additionalInfo;

const getInfo = (info: string | null | undefined) => info ?? '-';

function AdditionalInfo({ row }: Props) {
  return (
    <Box margin={1}>
      <Typography variant="subtitle1" gutterBottom style={{ fontWeight: 'bold' }}>
        {texts.title}
      </Typography>
      <Container>
        <Row item sm={12} style={{ marginTop: 8 }}>
          <strong id={`${row.name}-price`}>{texts.price}</strong>{' '}
          <span aria-labelledby={`${row.name}-price`}>{getPriceInfo(row)}</span>
        </Row>
        <Row item sm={12} style={{ marginTop: 8 }}>
          <strong id={`${row.name}-declaration`}>{texts.emitDeclaration}</strong>{' '}
          <span aria-labelledby={`${row.name}-declaration`}>
            {row.emitDeclaration ? 'Sim' : 'Não'}
          </span>
        </Row>
        <Row item sm={12} style={{ marginTop: 8 }}>
          <strong id={`${row.name}-how-to-prepare`}>{texts.howToPrepare}</strong>{' '}
          <span aria-labelledby={`${row.name}-how-to-prepare`}>
            {getInfo(row.preparation)}
          </span>
        </Row>
        <Row item sm={12} style={{ marginTop: 8 }}>
          <strong id={`${row.name}-result`}>{texts.result}</strong>{' '}
          <span aria-labelledby={`${row.name}-resutl`}>{getInfo(row.result)}</span>
        </Row>
        <Row item sm={12} style={{ marginTop: 8 }}>
          <strong id={`${row.name}-description`}>{texts.description}</strong>{' '}
          <span aria-labelledby={`${row.name}-description`}>
            {getInfo(row.description)}
          </span>
        </Row>
      </Container>
    </Box>
  );
}

export default AdditionalInfo;
