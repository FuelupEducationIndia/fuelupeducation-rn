import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image, TouchableOpacity} from 'react-native'

export default class Instructordata extends Component {
    render() {
     
        return (
            <View style={styles.instructor}>
                <View>
                    <Image source={require('../dashboard-images/profile.png')}
                    style={styles.profilepic}/>
                </View>
                <View style={styles.instructordata}>
                    <Text style={styles.data1}>
                        {this.props.name}  
                    </Text>
                    <Text style={styles.data2}>
                        {this.props.work}
                    </Text>
                    <TouchableOpacity>
                       <Text style={styles.btn}> View on Linkedin</Text> 
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    instructor:{
        backgroundColor:'#f6f4fa',
        height:100,
        margin:12,
        flexDirection:'row',
        borderRadius:10
        //marginBottom:10,


        
    },
    profilepic:{
        margin:20,
        //marginTop:20,
        height:50,
        width:50
    },
    instructordata:{
        flexDirection:'column',
        margin:20,
        justifyContent:'space-between'
    },
    data1:{
        fontSize:19,
        fontWeight:'600'
    },
    data2:{
        fontWeight:'400',
        fontSize:15,
    },
    btn:{
        color:'#ff6320'
    }

})
