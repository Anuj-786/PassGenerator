/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';
import Container from './app/Container';
import ContainerView from './app/ContainerView';


class passGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { screen : 2 };
  }

  _renderScreen = (route, navigator) => {
    switch (route.id) {
      case 1:
        return <Container />;
      break;

      case 2:
        return <WebView />;
      break;
    }
  };

  render() {
    if (this.state.screen === 1) {
      return <Container />
    } else if (this.state.screen === 2){
      return <ContainerView />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('passGenerator', () => passGenerator);
