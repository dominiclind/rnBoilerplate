import React from 'react-native'

let {
  View,
  Text,
  StyleSheet,
  Component
} = React


class Button extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={ styles.component }>
        <Text>{this.props.children}</Text>
      </View>
    )
  }
}


// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'blue',
    paddingHorizontal:20,
    paddingVertical:40
  }
});


export default Button
