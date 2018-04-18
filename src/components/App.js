import React, { Component } from 'react';
import Style from './Styles';
import { StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//import screen
import Main from './Main/Main';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';

const AppStack =StackNavigator ({
  Main: { screen: Main, },
  Authentication: { screen: Authentication, },
  ChangeInfo: { screen: ChangeInfo, },
  OrderHistory: { screen: OrderHistory, },
},{
  initialRouteName: 'Main',
  navigationOptions: {
    header: null,
  },
});

export default class App extends Component {
  render() {
    return (
      <AppStack />
    );
  }
}
