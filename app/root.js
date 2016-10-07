import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { observer } from 'mobx-react/native';

@observer
class Root extends Component {
  render () {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Amazing react app!</Text>
      </View>
    );
  }
}

export default Root;
