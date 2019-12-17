import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import globalReducer from './reducers/index';


ReactDOM.render(
  <Provider store={createStore(globalReducer)}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
