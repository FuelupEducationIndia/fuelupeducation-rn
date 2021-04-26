import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class Certificate extends Component {
    render() {
        return (
            <View style={styles.attend}>
                    <Text style={styles.attendheader}>
                        CERTIFICATES {'\n'}
                        ----------------------------------------------------------------------------
                    </Text>
                    <View style={{marginTop:-15,padding:15}}>

                    <Text style={{fontSize:17}}>
                        You have earned 5 certificates 
                    </Text>
                    <TouchableOpacity style={{backgroundColor:'#512da8',height:36,width:120,borderRadius:15,marginTop:10}}
                    onPress={()=>{alert('button under construction')}}>
                        <Text style={{color:'white',fontSize:18,marginTop:5,textAlign:'center'}}>View All</Text>
                    </TouchableOpacity>
                    </View>
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
        //padding:15,
        margin:15,
        fontWeight:'500',
        fontSize:17

    }
})