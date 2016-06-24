import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

import onecolor from 'onecolor';

class Button extends Component {

  constructor(props) {
    super(props)
    this.state = {
      down: false
    }
  }

  componentDidMount() {
  }

  _onPressIn() {
    const { color } = this.props;
    this.setState({ down: true });
  }
  _onPressOut() {
    this.setState({ down: false });
  }
  render() {
    const { pill, small, color, style} = this.props;
    const { down } = this.state;
    const darkerColor = onecolor(color).black(.4).hex();
    const colorStyle = {
      backgroundColor: down ? darkerColor : color
    };
    return (
      <TouchableWithoutFeedback
        onPress={this.props.onPress}
        onPressIn={() => this._onPressIn()}
        onPressOut={() => this._onPressOut()}
      >
        <View style={[
            styles.component,
            this.props.pill ? styles.pill : {},
            this.props.small ? styles.small : {},
            // color
            colorStyle,
            style || {}
          ]}
        >
          <Text style={[
              styles.text,
              this.props.small ? styles.smallText : {}
            ]}
          >
            {this.props.children}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


// styles
const FONT_SIZE = 16;
const HEIGHT = FONT_SIZE * 4.5;
const PADDING = HEIGHT * 0.8;
const SMALL_MODIFIER = 0.7;
const styles = StyleSheet.create({
  component : {
    paddingHorizontal: PADDING,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: PADDING * .2
  },
  pill : {
    borderRadius: HEIGHT / 2
  },
  small: {
    height: HEIGHT * SMALL_MODIFIER,
    paddingHorizontal: PADDING * SMALL_MODIFIER
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: FONT_SIZE,
  },
  smallText: {
    fontSize: FONT_SIZE * SMALL_MODIFIER,
    fontWeight: '700',
    letterSpacing: 1
  }
});


export default Button;
