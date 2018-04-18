import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Style from './../Styles';
import {
    View, Text,
    TouchableOpacity, StyleSheet, Image, Button
} from 'react-native';
import profileIcon from './../../media/temp/profile.png';

export default class Menu extends Component {
    
    constructor(props){
        super(props);
    }

    onSignOut() {
        //this.setState({ user: null });
        //saveToken('');
    }

    gotoAuthentication() {
        const { navigation } = this.props;
        navigation.navigate('Authentication')
    }

    gotoChangeInfo() {
        const { navigation } = this.props;
        navigation.navigate('ChangeInfo')
    }

    gotoOrderHistory() {
        const { navigation } = this.props;
        navigation.navigate('OrderHistory')
    }


    render() {
        const { navigate } = this.props.navigation;
        const { 
            container, profile, btnStyle, btnText, 
            btnSignInStyle, btnTextSignIn, loginContainer,
            username
        } = styles;


        const loginJSX = (
            <View style={loginContainer}>
                <Text style={username}>Username</Text>
                <View>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.gotoOrderHistory.bind(this)}>
                        <Text style={btnTextSignIn}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.gotoChangeInfo.bind(this)}>
                        <Text style={btnTextSignIn}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.onSignOut.bind(this)}>
                        <Text style={btnTextSignIn}>Sign out</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );
        const mainJSX = loginJSX;
        return (
            // <View style={Style.container}>
            //     <Text style={Style.welcome}>
            //         Welcome to Menu
            //     </Text>
            //     <Button
            //         title="Go to Authentication"
            //         onPress={() => navigate('Authentication')}
            //     />
            //     {/* <Button
            //         title="Go to Cart"
            //         onPress={() => navigate('Cart')}
            //     />
            //     <Button
            //         title="Go to Search"
            //         onPress={() => navigate('Search')}
            //     />
            //     <Button
            //         title="Go to Contact"
            //         onPress={() => navigate('Contact')}
            //     /> */}
            // </View>
            <View style={container}>
                <Image source={profileIcon} style={profile} />
                {mainJSX}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center'
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 30
    },
    btnStyle: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 70
    },
    btnText: {
        color: '#34B089',
        fontFamily: 'Avenir', 
        fontSize: 20
    },
    btnSignInStyle: {
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 200,
        marginBottom: 10,
        justifyContent: 'center',
        paddingLeft: 10
    },
    btnTextSignIn: {
        color: '#34B089',
        fontSize: 15
    },
    loginContainer: {
        flex: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    username: {
        color: '#fff', 
        fontFamily: 'Avenir', 
        fontSize: 15
    }
});