import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import Event from './Event'
export default class Upcoming extends Component {
    render() {
        const data=[
            {
                id:'1',
                title:'Event title Goes here',
                Desc:'Short description goes here...'
            },
            {
                id:'2',
                title:'Event title Goes here',
                Desc:'Short description goes here...'
            },
            {
                id:'3',
                title:'Event title Goes here',
                Desc:'Short description goes here...'
            }
        ];
        const value = (data.map((datavalue,i)=>{
                return <Event id={data[i].id} title={data[i].title } data1={data[i].Desc}/>
        }))
        return (
            <View style={styles.attend}>
                    <Text style={styles.attendheader}>
                        UPCOMING EVENTS 
                        {'\n'}
                        -----------------------------------------------------------------------------
                        {'\n'}
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <TouchableOpacity>
                                <Image
                                style={{width:25,height:25}}
                                source={require('../dashboard-images/calender.png')}/>
                            </TouchableOpacity>
                        
                        <Text style={{fontSize:15,marginLeft:2}}>{Date.now().toString()}</Text>
                        </View>
                    </Text>
                    <ScrollView
                    scrollEventThrottle={16}
                    nestedScrollEnabled = {true}>
                    {value}
                    </ScrollView> 
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
        //flexDirection:'column'

    },
    attendheader:{
        //padding:15,
        margin:10,
        fontWeight:'500',
        fontSize:17

    }
})