import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Course extends Component {
    render() {
        return (
            <View style={styles.attend}>
                    <Text style={styles.attendheader}>
                        COURSES {'\n'}
                        -----------------------------------------------------------------------------
                    </Text>

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