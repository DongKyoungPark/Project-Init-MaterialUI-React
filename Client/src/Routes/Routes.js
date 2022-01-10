import React, { memo } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import theme from '../Theme/theme';
import history from '../Config/History';

import Main from '../Pages/Main/Main';

import './style.css';

const Routes = memo(() => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Route
          render={({ location }) => {
            return (
              <TransitionGroup>
                <CSSTransition key={location.key} timeout={500} classNames='fade'>
                  <Switch location={location}>
                    <Route exact path='/' component={Main} />
                    <Redirect path='*' to={Main} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </Router>
    </ThemeProvider>
  );
});

export default Routes;
