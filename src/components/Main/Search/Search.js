import React, { Component } from 'react';
import Style from './../../Styles';
import Header from './../Header';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Search extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} />,
  });

  render() {
    return (
      <View style={Style.container}>
        <Text style={Style.welcome}>
          Welcome to Search
        </Text>
      </View>
    );
  }
}