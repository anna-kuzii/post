import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux/configureStore';
import rootSaga from './redux/sagas';

const store = configureStore();
store.runSaga(rootSaga);

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
