import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#44CB85',
      main: '#14A96A',
      dark: '#0E9167',
    },
    success: {
      light: '#40DB7E',
      main: '#0BC468',
      dark: '#08A868',
    },
    error: {
      light: '#E66A62',
      main: '#D63338',
      dark: '#B82536',
    },
    info: {
      light: '#5A96FB',
      main: '#256CF9',
      dark: '#1B53D6',
    },
    warning: {
      light: '#FFE23F',
      main: '#FFD400',
      dark: '#DBB200',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
