import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import newauth from './store/reducers/newauth'
import post from './store/reducers/post'

import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  newauth,
  post,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
