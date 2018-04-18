import React, { Component } from 'react';
import Style from './../Styles';
import { StackNavigator, TabNavigator, DrawerNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform, StyleSheet, Text, View } from 'react-native';

//import screen
import Menu from './Menu';
import Header from './Header';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';
import Shop from './Shop/Shop';
import Authentication from './../Authentication/Authentication';
import SignIn from './../Authentication/SignIn';
import SignUp from './../Authentication/SignIn';
import ChangeInfo from './../ChangeInfo/ChangeInfo';
import OrderHistory from './../OrderHistory/OrderHistory';

const HomeStack = StackNavigator({
  Home: { screen: Shop, },
});

const CartStack = StackNavigator({
  Cart: { screen: Cart, },
});

const SearchStack = StackNavigator({
  Search: { screen: Search, },
});

const ContactStack = StackNavigator({
  Contact: { screen: Contact, },
});

const MainTab = TabNavigator({
  Home: { screen: HomeStack, },
  Cart: { screen: CartStack, },
  Search: { screen: SearchStack, },
  Contact: { screen: ContactStack, },
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Cart') {
          iconName = `ios-cart${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Contact') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
});

const AuthenticationStack =StackNavigator ({
  Authentication: { screen: Authentication, },
  SignIn: { screen: SignIn, },
  SignUp: { screen: SignUp, },
});


const MenuStack =StackNavigator ({
  Authentication: { screen: AuthenticationStack, },
  ChangeInfo: { screen: ChangeInfo, },
  OrderHistory: { screen: OrderHistory, },
});

const AppDrawer = DrawerNavigator({
  Tab: { screen: MainTab, },
  Menu: {screen: MenuStack,},
}, {
    contentComponent: props => <Menu {...props} />
});

export default class Main extends Component {
  render() {
    return (<AppDrawer />);
  }
}
