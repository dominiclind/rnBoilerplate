import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { incrementValue } from '../actions/ui';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Button from '../components/Button/Button';

class InitialContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props;
  }
  increase() {
    const { dispatch } = this.props;
    console.log('increaseee!!');
    dispatch(incrementValue());
  }

  render() {
    const { value } = this.props;

    return (
      <View style={ styles.page }>
        <Text>Value: {value}</Text>
        <Button onPress={() => this.increase() }>INCREASE</Button>
    </View>
    )
  }
}


// styles
const styles = StyleSheet.create({
  page : {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  }
});


// get relevant props from state
function mapStateToProps(state) {
  const { ui } = state;
  const { value } = ui;

  return {
		value
  }
}

export default connect(mapStateToProps)(InitialContainer)
