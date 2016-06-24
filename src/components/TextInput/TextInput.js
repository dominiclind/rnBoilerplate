import React, { Component } from 'react';
import TextField from 'react-native-md-textinput';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';


class TextInput extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { secure, label, color = 'black' } = this.props;

    return (
      <TextField
        label={label}
        highlightColor={color}
        keyboardType={'numeric'}
        secureTextEntry={secure}
      />
    )
  }
}


// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'blue'
  }
});


export default TextInput
