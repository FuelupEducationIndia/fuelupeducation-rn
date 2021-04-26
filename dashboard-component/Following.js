import React, { Component } from 'react'
import { Text, StyleSheet,Dimensions, View, ScrollView, TouchableOpacity, ListViewComponent } from 'react-native'
import Instructordata from './instructordata'
export default class Discussion extends Component {
    render() {
        const data=[
            {
                id:'1',
                name:'Awais khan ',
                work:'Cyber Security Researcher'
              },
              {
                id:'2',
                name:'Akif khan',
                work:'Data Scientist'
              },
              {
                id:'3',
                name:'Anonymous404',
                work:'Blackhat Hacker'
              },
              {
                id:'4' ,
                name:'Rao Anwaar ',
                work:'Full Stack Developer'
              },
              {
                id:'5' ,
                name:'Rahi khan ',
                work:'React-Native Developer'
              },
              {
                id:'6' ,
                name:'Sadiya khan ',
                work:'React-js Developer'
              }
        ];
        const avtarvalue=(data.map((avatarcard,i)=>{
            return <Instructordata id={data[i].id} name={data[i].name} work={data[i].work}/>}))
        const screenHeight = Dimensions.get('window').height
        return (
            <View style={styles.attend}>
                    <Text style={styles.attendheader}>
                        FOLLOWING INSTRUCTORS ({data.length}) {'\n'}
                        ----------------------------------------------------------------------------
                    </Text>
                    <ScrollView
                    nestedScrollEnabled = {true}>
                            {avtarvalue}
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
        marginBottom:32,
        borderRadius:15,
        height:600,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,

        elevation: 4,
        flexGrow:1,
        position:'relative'

    },
    attendheader:{
        //padding:15,
        margin:15,
        fontWeight:'500',
        fontSize:17

    },
    btn2:{
        flexDirection:'row',
        justifyContent:'flex-end',
        margin:10,
    },
    data1:{
        fontSize:15,
        padding:2
    },
    data2:{
        fontSize:15,
        padding:2,
        color:'#ff6320'
    }
   
})