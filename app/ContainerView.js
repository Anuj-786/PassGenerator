
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  WebView
} from 'react-native';

export default class ContainerView extends Component {
  constructor() {
    super();
  }

  render = () => {
    return (
      <View>
        <Text>My Form</Text>
        <TextInput ref="name"/>
        <TextInput ref="info"/>
        <TextInput ref="doj"/>
        <TouchableHighlight style={{ backgroundColor: 'red'}}>
          <Text>Login</Text>
        </TouchableHighlight>
      </View>
    );
  };
}
