import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { createStore } from 'redux';
import todoApp from './../reducers';
import styles from './../styles';
import _ from 'lodash';

let store = createStore(todoApp);

export default class SelectTemplateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ashutosh',
      selected: 0,
      temp1: styles.temp1,
      temp2: styles.temp2
    };
  };

  // navigation to next page on next button press
  goToPageTwo = () => { Actions.pageTwo()};


  _selectTemplate = (templateId = 0) => {
    this.setState({selected: templateId});

    this._getSelectedStyle(templateId);

    this.props.selectTemplate(templateId);
    console.log("these are the props", this.props.doLogin);
  }

  // change selected template to bold
  _getSelectedStyle = (templateId) => {

    let changeBorder;
    switch (templateId) {
      case 1:
          changeBorder = StyleSheet.flatten([styles.temp1, styles.temp]);
          this.setState({ temp1:  changeBorder, temp2: StyleSheet.flatten(styles.temp2)});
        break;

      case 2:
        changeBorder = StyleSheet.flatten([ styles.temp2, styles.temp])
        this.setState({ temp1: StyleSheet.flatten(styles.temp1), temp2: changeBorder });
        break;

      default:
        return false;
    }
  };

  render() {
    const window = Dimensions.get('window');
    return (
          <View style={{width: window.width, height: window.height}}>
            <Text onPress={this.props.doLogin}>0{this.props.loggedIn}</Text>
            <View style={styles.card1}>
              <View>
                <Text style={{color: 'white', fontSize: 20, marginTop: 10 }}>Choose Template</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center'}}>
                <TouchableHighlight
                  underlayColor="transparent"
                  activeOpacity={0.3}
                  onPress={() => this._selectTemplate(1)}>
                  <View style={this.state.temp1}></View>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  activeOpacity={0.3}
                  onPress={() => this._selectTemplate(2)}>
                  <View style={this.state.temp2}></View>
                </TouchableHighlight>
              </View>
              <View style={{ paddingBottom: 30 }}>
              <Text style={{ fontSize: 20, color: 'white' }} onPress={this.goToPageTwo}>Next</Text>
              </View>
            </View>
          </View>
    );
  }
}
