import React,{useState} from "react";
import { View,TouchableOpacity } from "react-native";
import theme, { Box, Card,Text } from '../theme'
import DropDown from '../../src/components/DropdownBoardUniQuiz'
import DropDownLact from '../components/DropDownLacture'
import DropDownLanguage from '../components/DropDownLanguage'
import { ScrollView, TextInput } from "react-native-gesture-handler";
import PinUpload from '../assets/svgs/PinUpload.svg'
import ImagePicker from 'react-native-image-crop-picker'

const Recommended_Reading=(props)=>{

    const[image,setImage]=useState();
    const ChooseFile=()=>{
      ImagePicker.openPicker({
        width:300,
        height:300,
        cropping:true,
        compressImageQuality:0.7
  
      }).then(image=>{
        console.log(image.path);
        setImage(image.path);
        this.bs.current.snapTo(1)
      });
    }

  return(
    <>
    
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
         { color: theme.colors.primary, fontSize:18,top:50},
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
         { color: theme.colors.primary, fontSize:18,top:70},
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
         { color: theme.colors.primary, fontSize:18,top:70},
       ]}>
   Paste URL here
   </Text>
   <TextInput style={{height:40,width:290,borderRadius:10,borderWidth:.5,borderStyle:'solid',top:80}}/>
    </View>
    </View>
    <View style={{top:70}}>
      <View>
      <Text

style={[
  theme.textVariants.body,
  { color: theme.colors.primary, fontSize:18,top:70},
]}>
Short Descriptin
</Text>
    <Box style={{borderRadius:5,borderStyle:'dashed',borderWidth:1,top:80,height:80,width:290}}>
        <PinUpload style={{justifyContent:'center',alignContent:'center',marginHorizontal:100}}/>
        <Text

style={[
  theme.textVariants.body,
  { color: theme.colors.darkSilver, fontSize:14,marginHorizontal:40,bottom:10},
]}>
Drag and drop Or Click to
<Text
onPress={ChooseFile}
style={[
  theme.textVariants.body,
  { color: theme.colors.secondary, fontSize:18,marginHorizontal:20},
]}>
Browse
</Text>
</Text>
    </Box>
    </View>
    </View>
    <View style={{top:150}}>
    <View style={{
flexDirection:'row',
width:300,
height:40,
justifyContent:'center',
alignItems:'center',
alignContent:'space-between'}}>

<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:18,right:40},
]}>
Enter Captcha</Text>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, 
fontSize:18,left:30},
]}>
Captcha Code</Text>
</View>
<View
style={{
flexDirection:'row',
width:300,
height:50,
top:5,
justifyContent:'center',
alignItems:'center',
alignContent:'space-between'}}>
<TextInput 
  style={{
  width:170,
  height:40,
  backgroundColor:'rgba(209, 214, 255, 0.5)',
  borderRadius:8,
  right:15,bottom:15}} multiline={true}/>
      <View
       style={{
         width:100,
         height:40,
         backgroundColor:'#380885',
         borderRadius:8,bottom:15,}}>
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
</View></View>
<View style={{height:50,top:155,flexDirection:'row',right:10}}>
<TouchableOpacity onPress={props.onPress} style={{height:30,justifyContent:'center',alignContent:'center',top:15}}>
<Text 
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:15},
]}>

Recommendation Summary 
</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>alert('Your Assignment Uploaded Successfully')} style={{height:40,width:140,backgroundColor:'#F16600',borderRadius:20,top:5,left:5,}}>
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
{ color: theme.colors.primary, fontSize:17,textAlign:'center',right:315,top:22},
]}>
______________________</Text>
</View>
</View>
{/* For Upload Button */}
<View style={{top:150,flexDirection:'row',backgroundColor:'red',bottom:100}}>
    
    </View>
   
   
    
    </>
  )
}
export default Recommended_Reading;