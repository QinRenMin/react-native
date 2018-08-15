import React, { Component } from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';

export default class Card extends Component{

   render(){
           return(
               <View style = {S.box}>
                    <View style={S.avatar}>

                   <Image
                        source={require('../../public/img/bg2.jpg')}
                        style = {S.img}
                   />
                   </View>

                   <View style={S.text}>
                   <Text style={S.connect}
                     numberOfLines={4}>
                         如果你是春天里的一朵花
                         我会带你赶往冬日里醺醺暖梦
                         如果你是一抹青黛
                         我会带你去云雾缭绕的深处
                         如果你是一汪碧潭
                         我会带你去纤尘不染的山谷
                         如果你是一渺笛音
                         我会带你去一望无际的天宇
                         如果你是一缕炊烟
                         我会带你去山凹散落的毡房
                         如果你是一条路
                         我会带你去往天际尽头
                         如果你是一道光
                         我会把你带到太阳的身边
                         </Text>
                    <Text style={S.time}>2018/8/15</Text>
                   </View>
               </View>
           )
       }
}

const S = StyleSheet.create({
        box:{
            flexDirection:'row',
            backgroundColor:'white',
            height:100,
            marginHorizontal: 20,
            shadowColor: '#9932CC',
            shadowOpacity: .3,
            shadowRadius: 8,
            borderRadius:8,
            elevation: 3,
            marginBottom:10,
        },
        avatar:{
            marginRight:18,
            marginLeft:5,
            alignItems:'center',
            justifyContent:'center',

       },
        img:{
            width:90,
            height:90,
            borderRadius:45/2,
        },
        text:{
            flex:1,
            marginTop:4,
        },
        time:{
            marginTop:5,

        },
        connect:{
            color:'black',

        }
});