import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {PieChart} from 'react-native-svg-charts'


export default class Exam extends Component {
    render() {
      const data = [
        {
            key: 1,
            amount: 0.33,
            svg: { fill: 'green' },
        },
        {
            key: 2,
            amount: 0.25,
            svg: { fill: 'orange' }
        },
        {
            key: 3,
            amount: 0.42,
            svg: { fill: 'gray' }
        },
        
    ];
        return (
          <View style={styles.attend}>
                  <Text style={styles.attendheader}>
                        EXAM {'\n'}
                        -----------------------------------------------------------------------------
                  </Text>
                  <View>

                  <PieChart
                            style={{ height: 200 ,marginTop:-20}}
                            valueAccessor={({ item }) => item.amount}
                            data={data}
                            spacing={0}
                            outerRadius={'95%'}
                        />
                     <View style={{flexDirection:'row',justifyContent:'space-evenly',padding:20}}>
                       
                       <Text style={{fontSize:17,fontWeight:'600',color:'green'}}>Completed</Text>
                       <Text style={{fontSize:17,fontWeight:'600',color:'gray'}}>Ongoing</Text>
                       <Text style={{fontSize:17,fontWeight:'600',color:'orange'}}>Todo</Text>
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
    justifyContent:'center',
    alignContent:'center'

},
attendheader:{
    padding:15,
    fontWeight:'500',
    fontSize:17

},
})
