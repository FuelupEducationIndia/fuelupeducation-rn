import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity,  } from 'react-native'

import {Picker} from '@react-native-community/picker'
import { Dropdown } from 'react-native-material-dropdown';

export default class Discussion extends Component {
    render() {
            const data=[
                {
                    key:'1',
                    name:'jessi smith',
                    mess:'we will discuss',
                    last_seen:'10m ago',
                    msg_count:'4'
                }
            ];
        return (
            <View style={styles.attend}>
                    <Text style={styles.attendheader}>
                        DISCUSSION 
                        
                        {'\n'}
                        <Text>
                        -----------------------------------------------------------------------------
                        </Text>
                    </Text>
                    
                    <TouchableOpacity
                    onPress={()=>{alert('checkmessage')}}
                    >

                    <View style={{flexDirection:'row',backgroundColor:'#fff',justifyContent:'space-around',height:80,marginTop:-30,margin:10,borderRadius:10}}>
                        <Image 
                        style={{height:40,width:40,marginTop:20,marginLeft:-10}}
                        source={require('../dashboard-images/profile.png')}/>
                        <View style={{marginTop:10,flexDirection:'column',marginLeft:-30}}>
                            <Text style={{fontSize:19,fontWeight:'500'}}>{data[0].name}</Text>
                            <Text style={{fontSize:15,fontWeight:'500'}}>{data[0].mess}</Text>
                            <Text style={{fontSize:12,fontWeight:'500'}}>{data[0].last_seen}</Text>
                            <View>
                                
                            </View>
                        </View>
                        <Text style={{padding:3,marginTop:30,backgroundColor:'orange',color:'white',height:30,width:30,borderRadius:30,fontSize:15,textAlign:'center',justifyContent:'center'}}>{data[0].msg_count}</Text>
                    </View>
                    </TouchableOpacity>
                    
                    
                </View>
        )
    }
}

const styles = StyleSheet.create({
    attend:{
        marginTop:32,
        backgroundColor:'white',
        marginLeft:15,
        marginRight:15,
        borderRadius:15,
        height:'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,

        elevation: 4,

    },
    attendheader:{
        padding:15,
        fontWeight:'500',
        fontSize:17

    }
})