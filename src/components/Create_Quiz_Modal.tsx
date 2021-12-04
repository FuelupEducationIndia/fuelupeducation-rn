import React,{useState} from "react";
import { StyleSheet,Text,View,TouchableOpacity,Dimensions } from "react-native";
import theme, { Card, Box } from '../theme'
import QRcodeScanner from '../components/QRCodeScanner'
const WIDTH=Dimensions.get('window').width;
const HEIGHT_MODAL=300;

const CreateQuiz=(props)=>{

  
 
  return(
    <TouchableOpacity disabled={true}
    style={style2.container}>
      <View style={style2.modal}>
        <View style={{height:40,flexDirection:"row"}}>
        <Text
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.secondary,fontSize:20,top:10,marginHorizontal:10,left:30},
               ]}>Question bank </Text>
           
           <TouchableOpacity onPress={props.onPress} style={{height:20,width:40,justifyContent:"center",alignItems:'center',marginHorizontal:100,top:10}}>
           <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.secondary, fontSize:22,},
               ]}>
            X
           </Text>
           </TouchableOpacity>
       </View>
       <View>
       <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.text, fontSize:14,marginHorizontal:50,top:10},
               ]}>
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit magna aliqua?           </Text>
           
       </View>
       <View>
       <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.text, fontSize:14,marginHorizontal:50,top:10},
               ]}>
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit magna aliqua?           </Text>
           
       </View>
       <View>
       <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.text, fontSize:14,marginHorizontal:50,top:10},
               ]}>
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit magna aliqua?           </Text>
           
       </View>
   </View>    
    </TouchableOpacity>
  )
}
export default CreateQuiz
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