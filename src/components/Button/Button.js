import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';


class Button extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={ styles.component }>
          <Text style={ styles.text }>
            {this.props.children.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}


// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'black',
    paddingHorizontal:40,
    paddingVertical:20
  },
  text: {
    color:'white',
    fontWeight:'600',
    letterSpacing:3
  }
});


export default Button;
