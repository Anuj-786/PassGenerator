import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  WebView,
  ToastAndroid,
  Dimensions,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import styles from './../styles';

export default class FillTemplateScreen extends Component {
  constructor(props) {
    super();
  };

  goToPageThree = () => { Actions.pageThree() };

  render = () => {
      const window = Dimensions.get('window');
      return (
            <View style={{width: window.width, height: window.height}}>
              <View style={styles.card1}>
                <View>
                  <Text onPress={this.props.addCounter} style={{color: 'white', fontSize: 20, marginTop: 10 }}>Fill Details</Text>
                </View>
                <TextInput placeholder="Name" />
                <View style={{ paddingBottom: 30 }}>
                <Text style={{ fontSize: 20, color: 'white' }} onPress={this.goToPageThree}>Next</Text>
                </View>
              </View>
            </View>
      );
  };
}
