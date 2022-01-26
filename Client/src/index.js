import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import './i18n';

import Routes from './Routes/Routes';
import store from './Redux/Store/Store';

ReactDOM.render(
  <Provider store={store}>
    <Routes />{' '}
  </Provider>,
  document.getElementById('root'),
);
