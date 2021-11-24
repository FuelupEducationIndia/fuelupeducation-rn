import React,{useState} from "react";
import { View,TouchableOpacity } from "react-native";
import theme, { Box, Card,Text } from '../theme'
import DropDown from '../../src/components/DropdownBUPost'
import DropDownLact from '../components/DropdownLecPost'
import DropDownLanguage from '../components/DropdownLangPost'
import { ScrollView, TextInput } from "react-native-gesture-handler";


const Recommended_Post=(props)=>{
  return(
<View style={{height:1000}}>
     <View>
    
    <Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,top:10},
       ]}>
   Board/University
   
   </Text>
   <DropDown/>
</View>
<View>
    
    <Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,top:30},
       ]}>
   Lecture
   
   </Text>
   <DropDownLact/>
</View>
    
    <View>
    <View>
    
    <Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,top:50,},
       ]}>
   Language
   
   </Text>
   <DropDownLanguage/>
</View>
    </View>
    <View>
    <View>
    <Text
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,top:70,},
       ]}>
   Reading Title
   </Text>
   <TextInput style={{height:40,width:290,borderRadius:10,borderWidth:.5,borderStyle:'solid',top:80}}/>
    </View>
    </View>
    <View style={{top:15}}>
    <View>
    
    <Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,top:70},
       ]}>
   Author
   </Text>
   <TextInput style={{height:40,width:290,borderRadius:10,borderWidth:.5,borderStyle:'solid',top:80}}/>
    </View>
    </View>
    <View style={{top:30}}>
    <View>
    
    <Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,top:70},
       ]}>
  Short Descriptin
   </Text>
   <TextInput style={{height:60,width:290,borderRadius:10,borderWidth:.5,borderStyle:'solid',top:80}}/>
    </View>
    </View>
    <View style={{top:55}}>
    <View>
    
    <Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,top:70,},
       ]}>
   Paste URL here
   </Text>
   <TextInput style={{height:40,width:290,borderRadius:10,borderWidth:.5,borderStyle:'solid',top:80,}}/>
    </View>
    </View>
    <View style={{top:150}}>
      <View style={{flexDirection:'row',height:30,}}>
      <Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:18,right:40,left:10},
]}>
Enter Captcha</Text>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, 
fontSize:18,marginHorizontal:70},
]}>
Captcha Code</Text>
</View>
<View style={{height:40,flexDirection:'row'}}>
<TextInput 
  style={{
  width:170,
  height:40,
  backgroundColor:'rgba(209, 214, 255, 0.5)',
  borderRadius:8,}} multiline={true}/>
      <View
       style={{
         width:100,
         height:40,
         backgroundColor:'#380885',
         borderRadius:8,marginHorizontal:20}}>
              <Text
                 style={[
                  theme.textVariants.body,
                  { color: theme.colors.white,
                   fontSize:18,
                   justifyContent:'center',
                   textAlign:'center',
                   top:5},
               ]}>11f32g</Text>
        </View>
</View>      
    </View>
    {/* For Upload Button */}
    <View style={{flexDirection:'row',height:70,top:200}}>
    <TouchableOpacity onPress={props.onPress} style={{height:30,justifyContent:'center',alignContent:'center',top:15}}>
<Text 
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:15,right:15},
]}>

Recommendation PodCast
</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>alert('Your Assignment Uploaded Successfully')} style={{height:40,width:140,backgroundColor:'#F16600',borderRadius:20,top:10,right:5}}>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.white, fontSize:18,textAlign:'center',top:5,},
]}>
Update</Text>
</TouchableOpacity>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:17,textAlign:'center',right:325,top:22},
]}>
______________________</Text>

    </View>
</View>
        
        
  )
}
export default Recommended_Post