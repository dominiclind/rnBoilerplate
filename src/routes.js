import React from 'react-native'
import {Router, Scene} from 'react-native-router-flux'

let {
  Component
} = React

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
          <Scene key="initial" type="replace" initial={true} component={InitialContainer}/>
        </Scene>
      </Router>
    )
  }
}
export default Routes;
