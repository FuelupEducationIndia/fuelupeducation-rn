import React,{useState} from "react";
import { StyleSheet,Text,View,TouchableOpacity,Dimensions,Alert,AlertIOS } from "react-native";
import theme, { Card, Box } from '../theme'
import Round from '../assets/svgs/Round.svg'
import FingerPrint from '../assets/svgs/fingerprint.svg'
import TouchID from "react-native-touch-id";
const WIDTH=Dimensions.get('window').width;
const HEIGHT_MODAL=300;

const FingerPrintModal=(props)=>{

  
 
  return(
    <TouchableOpacity disabled={true}
    style={style2.container}>
      <View style={style2.modal}>
        <View style={{backgroundColor:'#F5F4F4',height:40,flexDirection:"row"}}>
        <Text
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.text, fontWeight:'bold',fontSize:20,top:10,marginHorizontal:10},
               ]}>
             Your FingerPrint
           </Text>
           
           <TouchableOpacity onPress={props.onPress} style={{height:20,width:40,justifyContent:"center",alignItems:'center',marginHorizontal:100,top:10}}>
           <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.text, fontSize:22,},
               ]}>
            X
           </Text>
           </TouchableOpacity>
       </View>
       <View>
       <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.text, fontSize:16,marginHorizontal:50},
               ]}>
            Put Your FingerPrint so fuelup Education  Can verify It's You
           </Text>
           
       </View>
       <View style={{flexDirection:'row'}}>
         <Round style={{justifyContent:"center",alignItems:'center',top:20,left:100}}/>
         <FingerPrint style={{justifyContent:"center",alignItems:'center',top:30,left:10}}/>
       </View>
       <View>
       <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.darkSilver, fontSize:16,top:20,textAlign:'center'},
               ]}>
                Touch Sensor
           </Text>
       </View>
       <View style={{flexDirection:'row'}}>
       <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:16,top:35,marginHorizontal:30},
               ]}>
                 Add FingerPrint
           </Text>
           <TouchableOpacity onPress={props.onPress} style={{height:30,width:100,backgroundColor:'#380885',borderRadius:30,top:30}}>
          <Text
               
               style={[
                 theme.textVariants.body,
                 {  color: theme.colors.white, fontSize:18,textAlign:'center',justifyContent:'center',alignItems:'center'},
               ]}>
             Done
           </Text>
          </TouchableOpacity>
         
       </View>
      </View>
    </TouchableOpacity>
  )
}
export default FingerPrintModal
const style2=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modal:{
    height:HEIGHT_MODAL,
    width:WIDTH-60,
    paddingTop:10,
    backgroundColor:'white',
    borderRadius:10,
  }
})