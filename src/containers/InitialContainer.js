import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { incrementValue, decreaseValue } from '../actions/ui';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import Button from '../components/Button/Button';
import TextInput from '../components/TextInput/TextInput';

class InitialContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props;
  }
  increase() {
    const { dispatch } = this.props;
    dispatch(incrementValue());
  }
  decrease() {
    const { dispatch } = this.props;
    dispatch(decreaseValue());
  }

  render() {
    const { value } = this.props;

    return (
      <View style={ styles.page }>
        <View style={{
            flex: 1,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={styles.value}>{value}</Text>
        </View>
        <Button
          style={{marginBottom: 0}}
          color="#6aeec0"
          onPress={() => this.increase()}
        >
          Increase
        </Button>
        <Button
          style={{marginBottom: 0}}
          color="#a990e0"
          onPress={() => this.decrease()}
        >
          Decrease
        </Button>
    </View>
    )
  }
}


// styles
const styles = StyleSheet.create({
  page : {
    flex: 1
  },
  value: {
    color: 'white',
    fontSize: 180
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
