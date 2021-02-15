import { Box, Typography, Grid } from '@material-ui/core';
import { HealthHubService } from 'generated-types';
import strings from 'strings';

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

function AdditionalInfo({ row }: Props) {
  return (
    <Box margin={1}>
      <Typography variant="subtitle1" gutterBottom style={{ fontWeight: 'bold' }}>
        {texts.title}
      </Typography>
      <Grid container spacing={1} style={{ marginTop: 8, marginBottom: 24 }}>
        <Grid item xs={12} sm={6}>
          <strong id={`${row.name}-price`}>{texts.price}</strong>{' '}
          <span aria-labelledby={`${row.name}-price`}>{getPriceInfo(row)}</span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong id={`${row.name}-declaration`}>{texts.emitDeclaration}</strong>{' '}
          <span aria-labelledby={`${row.name}-declaration`}>
            {row.emitDeclaration ? 'Sim' : 'Não'}
          </span>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdditionalInfo;
