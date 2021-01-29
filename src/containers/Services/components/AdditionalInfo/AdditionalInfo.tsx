import { Box, Typography, Grid } from '@material-ui/core';
import { HealthHubService } from 'containers/Services';
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
          <strong>{texts.price}</strong> {getPriceInfo(row)}
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong>{texts.attachMedicalReport}</strong>{' '}
          {row.attachMedicalReport ? 'Sim' : 'Não'}
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong>{texts.emitDeclaration}</strong> {row.emitDeclaration ? 'Sim' : 'Não'}
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdditionalInfo;
