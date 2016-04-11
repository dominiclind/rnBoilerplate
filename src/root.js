import React from 'react-native'

const { View } = React;
import { Provider } from 'react-redux'
import configureStore from './store/configure-store'

import Routes from './routes'

const store = configureStore()

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    )
  }
}

export default Root
