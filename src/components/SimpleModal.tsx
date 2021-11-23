import React,{useState} from "react";
import { StyleSheet,Text,View,TouchableOpacity,Dimensions,} from "react-native";
import theme, { Card, Box } from '../theme'
import Faceid from '../assets/svgs/FI.svg'
import Round from '../assets/svgs/Round.svg'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import TouchID from "react-native-touch-id";
// import Facescanner from '../components/FaceScanner'
const WIDTH=Dimensions.get('window').width;
const HEIGHT_MODAL=300;

const SimpleModal=(props)=>{

  

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
             Your Face ID
           </Text>
           
           <TouchableOpacity onPress={props.onPress} style={{height:20,width:40,justifyContent:"center",alignItems:'center',marginHorizontal:120,top:10}}>
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
                 { color: theme.colors.text, fontSize:16,marginHorizontal:10},
               ]}>
            Confirm Your Face ID so fuelup Education
           </Text>
           <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.text, fontSize:16,top:10,marginHorizontal:80},
               ]}>
                 Can verify It's You
           </Text>
       </View>
       <View style={{flexDirection:'row'}}>
         <Round style={{justifyContent:"center",alignItems:'center',top:20,left:100}}/>
         <Faceid style={{justifyContent:"center",alignItems:'center',top:35,left:17}}/>
               {/* <Facescanner/> */}
       </View>
       <View>
       <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.darkSilver, fontSize:15,top:20,marginHorizontal:30},
               ]}>
                 Place the Eye Camera at the eye level
           </Text>
       </View>
       <View style={{flexDirection:'row'}}>
       <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:16,top:35,marginHorizontal:30},
               ]}>
                 Change Face ID
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
export default SimpleModal
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
  },
  
})