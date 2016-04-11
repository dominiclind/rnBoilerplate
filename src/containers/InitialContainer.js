import React from 'react-native'
import {connect} from 'react-redux'

import {Actions} from 'react-native-router-flux';

let {
  View,
  Text,
  StyleSheet,
  Component
} = React

import Button from '../components/Button/Button';

class InitialContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {dispatch} = this.props;
  }

  render() {
    return (
      <View style={ styles.page }>
        <Text>i am container InitialContainer!</Text>
        <Button>CLick me!</Button>
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
  const { navigation } = state

  return {
		navigation
  }
}

export default connect(mapStateToProps)(InitialContainer)
