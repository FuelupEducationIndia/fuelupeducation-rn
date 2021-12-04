import React from "react";
import { ImageBackground, Text, View,Image } from "react-native";
import { DrawerContentScrollView,DrawerItemList} from "@react-navigation/drawer";
// import Design from '../assets/svgs/design.svg'
import { height } from "../constants";
// import User from '../assets/svgs/UserS.svg'
import { Use } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";

const Drawer=(props)=>{
  

  return(
    <View style={{flex:1,flexDirection:'column',backgroundColor:'red'}}>
      <View style={{height:190,backgroundColor:'white'}}>
    <View style={{height:190,backgroundColor:'#380885',borderBottomLeftRadius:30}}>
      <View style={{flexDirection:'row',height:60,top:110,marginHorizontal:30}}>
        <TouchableOpacity onPress={props.onPress}>
        {/* <User/> */}
        </TouchableOpacity>
        <View style={{flexDirection:'column',height:40}}>
        <Text style={{fontSize:18,color:'white',marginHorizontal:9,top:10}}>Sheela</Text>
        <Text style={{fontSize:15,color:'white',marginHorizontal:9,top:10}}>@teachersheela</Text>
        </View>
      </View>
    </View>
    </View>
    <View style={{height:600,backgroundColor:'#380885'}}>
    <View style={{borderTopRightRadius:30,height:600,backgroundColor:'white',justifyContent:'center',alignContent:'center',}}>      
      <DrawerContentScrollView {...props} 
      contentContainerStyle={{backgroundColor:'white',borderTopRightRadius:30,alignContent:'center',justifyContent:'center',marginHorizontal:70}}>

        <DrawerItemList {...props} >
          
          </DrawerItemList>
      </DrawerContentScrollView>
      </View>
      </View>
     
      </View>
  )
}
export default Drawer