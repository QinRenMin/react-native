import React, { Component } from 'react';
import { StyleSheet,View ,ScrollView,Text} from 'react-native';
import Card from './card'
export default class App extends Component {
    render() {
        return (
            <View style = {S.container}>
                <View style={S.home}>
                    <Text style={S.text}>Home</Text>
                </View>

                <View style={S.scroll}>
            <ScrollView >
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                </ScrollView>
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
    },
    home:{
        backgroundColor:'gray',
        justifyContent:'center',
        alignItems:'center',
        height:40,
        marginBottom:40,
        marginTop:0,
    },
    text:{
        fontWeight:'200',
        fontSize:18,
        color:'white',
    },
    scroll:{
        backgroundColor:'lightgreen',
        height:400,
    },
});
