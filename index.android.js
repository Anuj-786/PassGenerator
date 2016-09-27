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
  Navigator,
  WebView,
} from 'react-native';

import { Router, Secne, Animations } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import configureStore from './app/ConfigureStore';

const RouterWithRedux = connect()(Router);
const store = configureStore();

// import Container from './app/Container';
import SelectTemplate from './app/SelectTemplate';
import FillTemplate from './app/FillTemplate';
import PreviewTemplate from './app/PreviewTemplate';

class passGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { screen : 2 };
    this.state.transfer = {};
  }

  // _renderSecne = (route, navigator) => {
  //   switch (route.id) {
  //     case 1:
  //       return <Container navigator={navigator}/>;
  //     break;
  //
  //     case 2:
  //       return <ContainerViewContainer  route={route} navigator={navigator}/>;
  //     break;
  //   }
  // };

  // render() {
  //   return (
  //     <Provider>
  //       <Navigator
  //               initialRoute={{ name: "Form Screen", id: 2 }}
  //               renderScene={this._renderSecne}
  //               configureScene={() => Navigator.SceneConfigs.FadeAndroid }
  //             />
  //     </Provider>
  //       );
  // }

  render = () => (
      <Provider store={store}>
        <RouterWithRedux>
          <Secne key="root">
            <Secne
              key="pageOne"
              component={SelectTemplate}
              title="Choose Template"
              initial={true} hideNavBar
            />
            <Secne
              key="pageTwo"
              component={FillTemplate}
              direction="vertical"
              title="pageTwo"
            />
            <Secne
              key="pageThree"
              component={PreviewTemplate}
              title="Preview"
            />
          </Secne>
        </RouterWithRedux>
      </Provider>
    );
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
