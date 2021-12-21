import React,{useState} from "react";
import { View, ScrollView, KeyboardAvoidingView,Linking,Modal, TouchableOpacity} from 'react-native'
import theme, { Box, Card,Text } from '../theme'
import DropDown from './DropdownBoardUniQuiz'
import DropDownLact from './DropDownLacture'
import DropDownLanguage from './DropDownLanguage'
import { TextInput } from "react-native-gesture-handler";
import { RadioButton, } from 'react-native-paper';
import Add from '../assets/svgs/Plus.svg'
import { baseProps } from "react-native-gesture-handler/dist/src/handlers/gestureHandlers";

const CreateQuizSummary=(props)=>{
  const [value, setValue] = React.useState('first');

  const [isModalVisible, setModalVisible] = useState(false);
  const [QuestionBank,setQuestionBank]=useState(false)
  const changeModalVisible=(Boolean: boolean | ((prevState: boolean) => boolean))=>{
    setModalVisible(Boolean);
  }
  return(
    <>
    <View>
     <View>
    
    <Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:10,top:10},
       ]}>
   Board/University
   
   </Text>
   <DropDown/>
</View>
<View>
    
    <Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:10,top:30},
       ]}>
   Lecture
   
   </Text>
   <DropDownLact/>
</View>
    </View>
    <View>
    <View>
    
    <Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:10,top:50},
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
         { color: theme.colors.primary, fontSize:18,marginHorizontal:10,top:70},
       ]}>
   Quiz Title
   
   </Text>
   <TextInput style={{height:40,width:290,marginHorizontal:10,borderRadius:10,borderWidth:.5,borderStyle:'solid',top:80}}/>
    </View>
    <View style={{height:60,top:90}}>
    <Text

style={[
  theme.textVariants.body,
  { color: theme.colors.darkSilver, fontSize:16,marginHorizontal:20},
]}>
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua?

</Text>
      </View>
    </View>
    <View style={{top:110}}>
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={{flexDirection:'row',left:10}}>
      <RadioButton value="first" />
        <View>
        <Text style={{left:10,top:10,fontSize:14}}>commodo ullamcorper a lacus vestibulum</Text>
        
        </View>
      </View>
      <View  style={{flexDirection:'row',left:10}}>
      <RadioButton value="second" />
        <View>
        <Text style={{left:10,top:10,fontSize:14}} >commodo ullamcorper a lacus vestibulum</Text>
        </View>
      </View>
      <View  style={{flexDirection:'row',left:10}}>
      <RadioButton value="Third"   />
        <View>
        <Text style={{left:10,top:10,fontSize:14}} >commodo ullamcorper a lacus vestibulum</Text>
        </View>
      </View>
    </RadioButton.Group>
    </View>
    <View style={{top:120}}>
      <Box style={{height:80,width:310,backgroundColor:'#F5F4F4',justifyContent:'center'}}>
          <TouchableOpacity style={{height:50,width:170,backgroundColor:'white',left:60,borderColor:'#3B0E8A',borderWidth:1,borderRadius:5}}>
          <View style={{flexDirection:'row'}}>
            <Add style={{top:13,left:15}}/>
          <Text
        style={[
        theme.textVariants.body,
          { color: theme.colors.primary, fontSize:18,marginHorizontal:20,justifyContent:'center',top:10},
          ]}>
        New Question
        </Text>
        </View>
    </TouchableOpacity>
      </Box>
      <View style={{height:70,top:10,width:'auto'}}>
      <View style={{
flexDirection:'row',
width:300,
height:50,
justifyContent:'center',
alignItems:'center',
alignContent:'space-between'}}>

<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:18,right:30,bottom:10},
]}>
Enter Captcha</Text>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, 
fontSize:18,left:30,bottom:10},
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
  right:15,bottom:30}} multiline={true}/>
      <View
       style={{
         width:100,
         height:40,
         backgroundColor:'#380885',
         borderRadius:8,bottom:30}}>
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
</View>

{/* For Upload Button */}
<View style={{top:150,flexDirection:'row'}}>
  <TouchableOpacity onPress={props.onPress}
 style={{height:25,width:120,top:15,left:20}}>
    <Text style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:15},
]}>

Quizzes Summary 
</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>alert('Your Assignment Uploaded Successfully')} style={{height:40,width:140,backgroundColor:'#F16600',borderRadius:20,top:5,left:50}}>
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
{ color: theme.colors.primary, fontSize:18,textAlign:'center',right:235,top:15},
]}>
_____________</Text>
    </View>
    </>
  )}
  export default CreateQuizSummary