import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { PieChart, ProgressCircle } from 'react-native-svg-charts'
export default class Attendance extends Component {
    render() {
        const data = [
            {
                key: 1,
                amount: 95,
                svg: { fill: 'green' },
            },
            {
                key: 2,
                amount: 50,
                svg: { fill: 'red' }
            },
            {
                key: 3,
                amount: 40,
                svg: { fill: 'orange' }
            },
            {
                key: 4,
                amount: 10,
                svg: { fill: 'cyan' }
            }
            
        ]
        return (
            <View style={styles.attend}>
                    <Text style={styles.attendheader}>
                        ATTENDANCE {'\n'}
                        -----------------------------------------------------------------------------
                    </Text>
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:-45,padding:20}}>
                            <Text style={{fontSize:20}}>Overall:
                                <Text style={{color:'green',fontSize:22}}>98/100</Text>
                            </Text>
                            <TouchableOpacity 
                            onPress={()=>{alert('under construction')}}
                            style={{backgroundColor:'#512da8',height:34,width:150,borderRadius:10}}>
                                <Text style={{color:'#fff',margin:4,fontSize:17,textAlign:'center'}}>Take Attendance</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'column'}}>
                        <PieChart
                            style={{ height: 200 }}
                            valueAccessor={({ item }) => item.amount}
                            data={data}
                            spacing={0}
                            outerRadius={'95%'}
                        />
                        <View style={{flexDirection:'row',justifyContent:'space-evenly',padding:20}}>
                       
                        <Text style={{fontSize:17,fontWeight:'600',color:'green'}}>Present</Text>
                        
                        
                        <Text style={{fontSize:17,fontWeight:'600',color:'red'}}>Absent</Text>
                    
                        <Text style={{fontSize:17,fontWeight:'600',color:'orange'}}>Late</Text>
                    
                        <Text style={{fontSize:17,fontWeight:'600',color:'cyan'}}>Excused</Text>
                        

                        </View>
                        
                        </View>
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
        padding:15,
        fontWeight:'500',
        fontSize:17

    },
    labels:{
        
        
    }
})