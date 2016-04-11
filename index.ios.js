import React, {
  AppRegistry,
  Component,
  View,
  Text
} from 'react-native';

import Root from './src/root';

class rnBoilerplate extends Component {
  render() {
    return (
      <Root></Root>
    );
  }
}
AppRegistry.registerComponent('rnBoilerplate', () => rnBoilerplate);
