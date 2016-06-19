import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';

/*containers*/
import InitialContainer from './containers/InitialContainer'

class Routes extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router hideNavBar={true}>
        <Scene key="root">
          <Scene
            key="initial"
            initial
            component={InitialContainer}
          />
        </Scene>
      </Router>
    )
  }
}
export default Routes;
