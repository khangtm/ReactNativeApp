import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Style from './../../Styles';
import Header from './../Header';
import {
    Platform,
    Text,
    View,
    Button
} from 'react-native';

export default class Shop extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header navigation = { navigation }/>,
    });

    render() {
        return (
            <View style={Style.container}>
                <Text style={Style.welcome}>
                    Welcome to Shop
                 </Text>
            </View>
        );
    }
}