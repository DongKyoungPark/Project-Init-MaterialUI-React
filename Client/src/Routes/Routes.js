import React, { memo } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import theme from '../Theme/theme';
import history from '../Config/History';

import Main from '../Pages/Main/Main';

const Routes = memo(() => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Main} />
          <Redirect path='*' to={Main} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
});

export default Routes;
