import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Event extends Component {
    render() {
        return (
            <View style={styles.eventdata}>
                <Text style={styles.header}>
                    {this.props.title}
                    </Text>  
                <Text style={styles.decription}>
                    {this.props.data1}
                    </Text>             
            </View>
        )
    }
}

const styles = StyleSheet.create({
    eventdata:{
        backgroundColor:'#f6f4fa',
        height:100,
        margin:12,
        flexDirection:'column',
        borderRadius:10,
        justifyContent:'space-evenly'
        
        
    },
    header:{
        marginLeft:20,
        fontSize:20
    },
    decription:{
        marginLeft:20,
        marginTop:-20,
        fontSize:17
        
    }

})
