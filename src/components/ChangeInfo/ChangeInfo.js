import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Style from './../Styles';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class ChangeInfo extends Component{
  render() {
    return (
      <View style={Style.container}>
        <Text style={Style.welcome}>
          Welcome to ChangeInfo
        </Text>
        <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}