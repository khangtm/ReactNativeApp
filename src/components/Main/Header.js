import React, { Component } from 'react';
import Style from './../Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation';
import {
    Platform, View, Text, TouchableOpacity, Image, Dimensions, TextInput, StyleSheet
} from 'react-native';
import icMenu from './../../media/icon/ic_menu.png';
import icLogo from './../../media/icon/ic_logo.png';

const { height } = Dimensions.get('window');

const MenuButton = (props) => (
    <Icon.Button name="bars" backgroundColor="#fff" color="black"
        iconStyle={{paddingLeft:10}}
        onPress={() => { props.navigation.navigate('DrawerOpen') }} >
    </Icon.Button>
);

export default class Header extends Component {
    render() {
        const { wrapper, menuRow, textInput, iconStyle, titleStyle } = styles;
        const { navigation } = this.props;
        return (
            <View style={wrapper}>
                <View style={menuRow}>
                    <TouchableOpacity onPress={() => { navigation.navigate('DrawerOpen') }} >
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wellcome</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <TextInput
                    style={textInput}
                    placeholder="What do you want to buy?"
                    underlineColorAndroid="transparent"
                    value=''
                //onChangeText={text => this.setState({ txtSearch: text })}
                //onFocus={() => global.gotoSearch()} 
                //onSubmitEditing={this.onSearch.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-around'
    },
    menuRow: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: {
        height: height / 23,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingVertical: 0
    },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
    iconStyle: { width: 25, height: 25 }
});