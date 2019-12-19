import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './app';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App name="jam" />
  </Provider>, 
  document.getElementById('root')
);
