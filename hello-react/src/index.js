/*
 * @Author: tim
 * @Date: 2020-06-12 17:45:25
 * @LastEditors: tim
 * @LastEditTime: 2020-07-31 13:55:35
 * @Description: 
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import './index.css';
import App from './App';
import Routes from './components/Routes';
import reducer from "./store/reducer"
import * as serviceWorker from './serviceWorker';

// const store = createStore(reducer)  // 创建store
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
