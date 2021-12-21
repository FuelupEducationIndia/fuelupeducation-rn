import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import theme, { Box, Card,Text } from '../theme'
import { StyleSheet,View,Dimensions,Alert } from "react-native";
const WIDTH=Dimensions.get('window').width;
const HEIGHT_MODAL=300;

const QuestionBankM=(props)=>{
  return(
    <TouchableOpacity disabled={true}
    style={style2.container}>
      <View style={style2.modal}>
        <View style={{backgroundColor:'#F5F4F4',height:40,flexDirection:"row"}}>
           
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
           </View>
           </TouchableOpacity>
           
  )
}
export default QuestionBankM
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