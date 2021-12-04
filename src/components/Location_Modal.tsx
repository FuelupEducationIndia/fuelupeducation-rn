import React,{useState} from "react";
import { StyleSheet,Text,View,TouchableOpacity,Dimensions, TextInput,Image } from "react-native";
import theme, { Card, Box } from '../theme'
import QRcodeScanner from '../components/QRCodeScanner'
const WIDTH=Dimensions.get('window').width;
const HEIGHT_MODAL=400;
// import Map from '../assets/svgs/Map.jpg'
import { Searchbar } from "react-native-paper";


const Location=(props)=>{

  
 
  return(
    <TouchableOpacity disabled={true}
    style={style2.container}>
      <View style={style2.modal}>
        <View style={{height:40,flexDirection:"row",backgroundColor:'#C0C0C0',bottom:5}}>
        <Text
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.secondary,fontSize:20,top:10,marginHorizontal:10,left:30},
               ]}>Change Location </Text>
           
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
         <TextInput placeholder="Enter Location"
          style={{height:40,width:280,borderWidth:1,top:10,marginHorizontal:10}}/>
       </View>
     <View>
       {/* <Box style={{height:150,width:250,justifyContent:'center',alignContent:'center',borderWidth:1,top:20,marginHorizontal:20}}>
       <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.secondary, fontSize:22,textAlign:'center'},
               ]}>
            Map
           </Text> */}
       {/* </Box> */}
       <Image source={require("../assets/images/Map.jpg")}   style={{ height: 200, width: 280,top:20,marginHorizontal:10}}></Image>

       </View>
       <View style={{marginVertical:40}}>
         <TouchableOpacity onPress={props.onPress}
         style={{height:40,width:120,borderWidth:.5,borderRadius:20,backgroundColor:'#380885',marginHorizontal:140}}>
         <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.white, fontSize:22,textAlign:'center'},
               ]}>
            Apply
           </Text>
         </TouchableOpacity>
     </View>
   </View>    
    </TouchableOpacity>
  )
}
export default Location
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