import React,{useState} from "react";
import { StyleSheet,Text,View,TouchableOpacity,Dimensions, TextInput,Image } from "react-native";
import theme, { Card, Box } from '../theme'
import QRcodeScanner from '../components/QRCodeScanner'
const WIDTH=Dimensions.get('window').width;
const HEIGHT_MODAL=350;
// import Map from '../assets/svgs/Map.jpg'
import { Searchbar } from "react-native-paper";
// import Right from '../assets/svgs/RightMark1.svg'

const checkIn=(props)=>{

  return(
    <TouchableOpacity disabled={true}
    style={style2.container}>
      <View style={style2.modal}>
        <View style={{height:40,top:60}}>
        <Image source={require("../assets/images/check.png")}   style={{marginHorizontal:100,height:60,width:60,left:20}}></Image>
        <Text
style={[
  theme.textVariants.body,
  { color: theme.colors.Green, fontSize:20,textAlign:'center',marginHorizontal:20},
]}>
Take Attendence Successfully
</Text>
 </View>
   </View>  
   <View style={{flexDirection:'row',bottom:150}}>
         <TouchableOpacity onPress={props.onPress}
         style={{height:30,width:120,borderWidth:.5,borderRadius:20,backgroundColor:'#380885',marginHorizontal:10}}>
         <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.white, fontSize:20,textAlign:'center'},
               ]}>
            Live Lacture
           </Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={props.onPress}
         style={{top:3,height:30,width:180,borderRadius:20,marginHorizontal:5,right:10}}>
         <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:17,textAlign:'center'},
               ]}>
            Historic Attendence
           </Text>
           <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,bottom:20,marginHorizontal:17},
               ]}>
            _________________
           </Text>
         </TouchableOpacity>

     </View>
    </TouchableOpacity>
  )
}
export default checkIn
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