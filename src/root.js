import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './store/configure-store'
import Routes from './routes'
import Reactotron from 'reactotron'

// connect with defaults
Reactotron.connect()
const store = configureStore();

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    );
  }
}

export default Root;
