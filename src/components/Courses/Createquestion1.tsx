import React from 'react'
import { View,  StyleSheet, TextInput ,TouchableOpacity ,Image} from 'react-native'
import theme, { Card, Text } from '../../theme'


const Createquestion1 =()=>{
  return(

  <View>
   
    <Text style={{fontWeight:'bold',color:'black'}}>Choose from a Question Bank</Text>
    <View 
      style={{
      padding:13,
      width:'100%',
      backgroundColor:'rgba(209, 214, 255, 0.5)',
      borderRadius: 10,
      marginVertical:15
    }}>
      <Text style={{justifyContent:'flex-start',}} numberOfLines={2} ellipsizeMode='middle'>"Lorem ipsum dolor sit amet, consectetur adipiscing </Text>
      <Text style={{justifyContent:'flex-start',}}>elit, sed do eiusmod tempor incididunt ut labore </Text>
      <Text style={{justifyContent:'flex-start',}}>et dolore magna aliqua. Ut enim ad minim.</Text>
 </View> 
 <View 
      style={{
      padding:13,
      width:'100%',
      backgroundColor:'rgba(209, 214, 255, 0.5)',
      borderRadius: 10,
    marginBottom:15
    }}>
      <Text style={{justifyContent:'flex-start',}} numberOfLines={2} ellipsizeMode='middle'>"Lorem ipsum dolor sit amet, consectetur adipiscing </Text>
      <Text style={{justifyContent:'flex-start',}}>elit, sed do eiusmod tempor incididunt ut labore </Text>
      <Text style={{justifyContent:'flex-start',}}>et dolore magna aliqua. Ut enim ad minim.</Text>
 </View> 
 <View 
      style={{
      padding:13,
      width:'100%',
      backgroundColor:'rgba(209, 214, 255, 0.5)',
      borderRadius: 10,
      
    }}>
      <Text style={{justifyContent:'flex-start',}} numberOfLines={2} ellipsizeMode='middle'>"Lorem ipsum dolor sit amet, consectetur adipiscing </Text>
      <Text style={{justifyContent:'flex-start',}}>elit, sed do eiusmod tempor incididunt ut labore </Text>
      <Text style={{justifyContent:'flex-start',}}>et dolore magna aliqua. Ut enim ad minim.</Text>
 </View> 
 <View 
      style={{
      padding:13,
      width:'100%',
      backgroundColor:'rgba(209, 214, 255, 0.5)',
      borderRadius: 10,
      marginVertical:15
    }}>
      <Text style={{justifyContent:'flex-start',}} numberOfLines={2} ellipsizeMode='middle'>"Lorem ipsum dolor sit amet, consectetur adipiscing </Text>
      <Text style={{justifyContent:'flex-start',}}>elit, sed do eiusmod tempor incididunt ut labore </Text>
      <Text style={{justifyContent:'flex-start',}}>et dolore magna aliqua. Ut enim ad minim.</Text>
 </View> 
   </View>
   
  );

}

export default Createquestion1