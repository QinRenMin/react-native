///**
// * Sample React Native App
// * https://github.com/facebook/react-native
// *
// * @format
// * @flow
// */
//
//
//const instructions = Platform.select({
//  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//  android:
//    'Double tap R on your keyboard to reload,\n' +
//    'Shake or press menu button for dev menu',
//});

import React, { Component } from 'react';
import { StyleSheet,View } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style = {S.container}>
                <View style = {S.subBox}>

                </View>
                <View style = {S.centerBox}>

                </View>
                <View style = {S.bottomBox}>

                </View>
            </View>
        );
    }
}

const S = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink',
        flexDirection: 'column',
//        flexDirection: 'row',
        justifyContent: 'flex-start',
//        justifyContent: 'flex-end',
//        justifyContent: 'center',
//        justifyContent: 'space-around',
//        justifyContent: 'space-between',
//        justifyContent: 'space-evenly',

    },
    subBox:{
        height:100,
        width: 100,
        backgroundColor: 'red'
    },
    centerBox:{
        height:100,
        width:100,
        backgroundColor:'blue',
    },
    bottomBox:{
        height:100,
        width:100,
        backgroundColor:'yellow',
    },
});
