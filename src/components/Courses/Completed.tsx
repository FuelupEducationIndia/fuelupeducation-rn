import React from 'react'
import { View,  StyleSheet, TextInput ,TouchableOpacity ,Image} from 'react-native'
import theme, {  Text } from '../../theme'
import { Slider } from 'react-native-elements'
import Img from '../../assets/svgs/Completed.svg'


const Completed = (props)=>{


  return (
    
  <View style={styles.container}>
  <Text style={styles.text}>Completed</Text>
  <View style={{height:1,width:'100%',backgroundColor:'lightgrey',marginVertical:20}}></View>
<View style={{justifyContent:'center',alignItems:'center'}}>
  <Img style={{width:theme.spacing.xl}}/>
</View>
  <View style={{flexDirection:'row',marginVertical:theme.spacing.xl,justifyContent:'center'}}>
            <TouchableOpacity
            style={{backgroundColor:'#380885',width:100,height:30,borderRadius:20,marginVertical:theme.spacing.l,}}
         onPress={props.onPress}>
         <Text style={{color:'white',textAlign:'center',fontSize:17,paddingTop:3}}>View</Text>
          </TouchableOpacity>
        
          </View>
  </View>

  )
}

const styles = StyleSheet.create({
  container : {
    marginHorizontal:10,
    flex:1
  },
  text : {
  textAlign:'center',
    fontSize:17,
    fontWeight:'bold'
  },
  view2 : {
flex:0.3,
backgroundColor:'grey',
width:380
  },
  text2:{
    fontSize:15,
    color:'#3F148D',
    marginHorizontal:10,
    marginVertical:10

  }
})

export default Completed
