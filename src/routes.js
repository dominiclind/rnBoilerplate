import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';

/*containers*/
import InitialContainer from './containers/InitialContainer'

// define this based on the styles/dimensions you use
const getSceneStyle = function (/* NavigationSceneRendererProps */ props, computedProps) {
  const style = {
    flex: 1,
    backgroundColor: 'black',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    // style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

class Routes extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router hideNavBar={true} getSceneStyle={getSceneStyle}>
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
