import { createTheme } from '@material-ui/core/styles';

const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    ...defaultTheme.palette,
    type: 'light',
    // primary: { main: '#4D89FF' },
    // error: { main: '#EA4D4D' },
    // background: { default: '#FAFAFC', paper: '#FFFFFF', card: '#F6F6F6' },
    // text: { primary: '#282D35', secondary: '#3D4148', disabled: '#B6B9BF' },
  },
  typography: { fontFamily: `"S-CoreDream-4Regular", "Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif` },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: { margin: 0, padding: 0 },
        body: { color: '#5A5E66', wordBreak: 'keep-all' },
        a: { textDecoration: 'none', color: 'inherit' },
        '#root': { position: 'relative' },
      },
    },
  },
});

export default theme;
