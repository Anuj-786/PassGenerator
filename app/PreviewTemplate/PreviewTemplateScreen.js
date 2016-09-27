import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  Animated,
  Easing
} from 'react-native';
import styles from './../styles';

export default class PreviewTemplateScreen extends Component {
  constructor(props) {
    super(props);
  };

  render = () => {

    const window = Dimensions.get('window');
    return (
      <View style={{ width: window.width, height: window.height }}>
        <View>
          <View style={{ flex: 1, height: 56, borderBottomWidth: 1 }}>
            <Text onPress={this.props.doLogin}>Preview Screen not working</Text>
          </View>
        </View>
      </View>
    );
  };
}
