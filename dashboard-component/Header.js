import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image, ScrollView, TouchableOpacity} from 'react-native'
//import Course from './course'
export default class Header extends Component {
    render() {
        return (
            <ScrollView>
            <View style={styles.back}>

                <View style={styles.mainheader}>
                    <TouchableOpacity>
                        <Image style={styles.logoimage1}
                        source={require('../dashboard-images/Vector.png')}/>
                    </TouchableOpacity>
                
                    <Image style={styles.logoimage2}
                    source={require('../dashboard-images/WomanTel.png')}/>
                    
                   
                    <View style={styles.headertext}>
                        <Text style={styles.text1}>
                        Welcome Sheela! 
                        </Text>
                        
                        <Text style={styles.text2}>
                        Check what's up with {'\n'} your shedule... 
                        </Text>
                         
                    </View>
                </View>
                
            </View>
            </ScrollView>
            )
    }
}

const styles = StyleSheet.create({
    mainheader:{
        backgroundColor:'#512da8',
        height:140,
        borderBottomEndRadius:15,
        borderBottomStartRadius:15,
        flexDirection:'row',
        justifyContent:'space-around',
        position:'relative'
    },
    logoimage1:{
        marginTop:23,
        width: 50, 
        height: 50 ,
    },
    logoimage2:{
        marginTop:23,
        width: 100, 
        height: 100 
    },
    headertext:{
        marginTop:30,
        flexDirection:'column',
    },
    text1:{
        color:'white',
        fontSize:17,
        textAlign:'center',
        fontWeight:'700'
    },
    text2:{
        marginTop:10,
        color:'white',
        fontSize:14,
        textAlign:'justify'
    },
})
