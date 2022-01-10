import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    ...defaultTheme.palette,
    type: 'light',
    primary: { main: '#4D89FF' },
    error: { main: '#EA4D4D' },
    background: { default: '#FAFAFC', paper: '#FFFFFF', card: '#F6F6F6' },
    text: { primary: '#282D35', secondary: '#3D4148', disabled: '#B6B9BF' },
  },
  typography: { fontFamily: `"S-CoreDream-4Regular", "Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif` },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: { height: '100%', margin: 0, padding: 0 },
        body: { height: '100%', color: '#5A5E66' },
        '#root': { position: 'relative' },
        a: { textDecoration: 'none', color: 'inherit' },
      },
    },
  },
});

theme.typography.h1 = { ...theme.typography.h1, [theme.breakpoints.down('md')]: { fontSize: '5.5rem' } };
theme.typography.h2 = { ...theme.typography.h2, [theme.breakpoints.down('md')]: { fontSize: '3.25rem' } };
theme.typography.h3 = { ...theme.typography.h3, [theme.breakpoints.down('md')]: { fontSize: '2.5rem' } };
theme.typography.h4 = { ...theme.typography.h4, [theme.breakpoints.down('md')]: { fontSize: '1.625rem' } };
theme.typography.h5 = { ...theme.typography.h5, [theme.breakpoints.down('md')]: { fontSize: '1.2rem' } };
theme.typography.h6 = { ...theme.typography.h6, [theme.breakpoints.down('md')]: { fontSize: '1rem' } };
theme.typography.subtitle1 = { ...theme.typography.subtitle1, [theme.breakpoints.down('md')]: { fontSize: '0.5rem' } };
theme.typography.subtitle2 = { ...theme.typography.subtitle2, [theme.breakpoints.down('md')]: { fontSize: '0.35rem' } };
theme.typography.body1 = { ...theme.typography.body1, [theme.breakpoints.down('md')]: { fontSize: '0.5rem' } };
theme.typography.body2 = { ...theme.typography.body2, [theme.breakpoints.down('md')]: { fontSize: '0.35rem' } };
theme.typography.caption = { ...theme.typography.caption, [theme.breakpoints.down('md')]: { fontSize: '0.2rem' } };
theme.typography.button = { ...theme.typography.button, [theme.breakpoints.down('md')]: { fontSize: '0.2rem' } };

theme.typography.h1 = { ...theme.typography.h1, [theme.breakpoints.down('xs')]: { fontSize: '5.5rem' } };
theme.typography.h2 = { ...theme.typography.h2, [theme.breakpoints.down('xs')]: { fontSize: '3.25rem' } };
theme.typography.h3 = { ...theme.typography.h3, [theme.breakpoints.down('xs')]: { fontSize: '2.5rem' } };
theme.typography.h4 = { ...theme.typography.h4, [theme.breakpoints.down('xs')]: { fontSize: '1.625rem' } };
theme.typography.h5 = { ...theme.typography.h5, [theme.breakpoints.down('xs')]: { fontSize: '1.2rem' } };
theme.typography.h6 = { ...theme.typography.h6, [theme.breakpoints.down('xs')]: { fontSize: '1rem' } };
theme.typography.subtitle1 = { ...theme.typography.subtitle1, [theme.breakpoints.down('xs')]: { fontSize: '0.8rem' } };
theme.typography.subtitle2 = { ...theme.typography.subtitle2, [theme.breakpoints.down('xs')]: { fontSize: '0.65rem' } };
theme.typography.body1 = { ...theme.typography.body1, [theme.breakpoints.down('xs')]: { fontSize: '0.8rem' } };
theme.typography.body2 = { ...theme.typography.body2, [theme.breakpoints.down('xs')]: { fontSize: '0.65rem' } };
theme.typography.caption = { ...theme.typography.caption, [theme.breakpoints.down('xs')]: { fontSize: '0.5rem' } };
theme.typography.button = { ...theme.typography.button, [theme.breakpoints.down('xs')]: { fontSize: '0.5rem' } };

export default theme;
