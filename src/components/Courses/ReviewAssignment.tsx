import React,{useState,useRef} from 'react'
import { View, ScrollView, KeyboardAvoidingView,Linking} from 'react-native'
import theme, { Card,Text } from '../../theme'
import { CourseDetailCard, Button, RadioGroup} from '../../components'

// import TeacherImage from '../../assets/images/teacherImage.png'

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Lines from '../../assets/svgs/line.svg'
import Doc from '../../assets/svgs/Document.svg'
import DownArrow from '../../assets/svgs/DownArrow.svg'
import DropDown from '../../components/DropdownBoardUni'
import  DropDownSG  from '../../components/DropDownStudentGroup'
import FileI from '../../assets/svgs/FileI.svg'
import Downarrow from '../../assets/svgs/Download_Arrow.svg'
import { Link } from '@react-navigation/native';
import { RadioButton, } from 'react-native-paper';

import DropdownClg from '../../components/DropdownClgSc'

const ReviewAssignment=(props)=>{
  const [value, setValue] = React.useState('');

  const topButtons = ['Create Assignment', 'Review AssignMent','Grading']
  const topButton=['Need to Improve','Good']
  const [activeButton, setActiveButton] = React.useState(topButtons[1])

  return(
    <Card
    variant='elevated'
    borderRadius='l'
    marginBottom='m'
    padding='none'
    backgroundColor='white'>
        <View
         style={{
          marginVertical: theme.spacing.m,
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Text
         style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:30,top:10},
         ]}>
          Folder
            <Text
               style={[
               theme.textVariants.body,
              { color: theme.colors.Orange, fontSize:18},
               ]}>
             *
            </Text>
          </Text>
        </View>
        <View>
        <DropDown/>
        </View>

        {/* For File Data */}
        <View style={{top:35,height:50}}>
           <View style={{height:40,flexDirection:'row'}}>
          <FileI style={{marginHorizontal:30,top:3}}/>
          <Text onPress={() => Linking.openURL('https://www.sv.uio.no/iss/english/studies/resources/writing-assignments-sociology/an-introduction-to-writing-of-assignments-in-sociology.pdf ')}
         style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:16,right:20,top:2},
         ]}>
         LastName_Assgn1_AssignName.pdf 
          </Text>
          <Text onPress={() => Linking.openURL(' https://www.sv.uio.no/iss/english/studies/resources/writing-assignments-sociology/an-introduction-to-writing-of-assignments-in-sociology.pdf ')} 
         style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:16,right:270,top:7},
         ]}>
         __________________________________
          </Text>
          
          </View>
        </View>

        <View style={{top:35,height:50}}>
           <View style={{height:40,flexDirection:'row'}}>
          <FileI style={{marginHorizontal:30,top:3}}/>
          <Text onPress={() => Linking.openURL('https://archive.nwp.org/cs/public/download/nwp_file/15410/Writing_Assignment_Framework_and_Overview.pdf?x-r=pcfile_d')}
         style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:16,right:20,top:2},
         ]}>
         LastName_Assgn1_AssignName.pdf 
          </Text>
          <Text 
         style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:16,right:270,top:5},
         ]}>
         __________________________________
          </Text>
          
          </View>  
        </View>

        <View style={{top:35,height:50}}>
           <View style={{height:40,flexDirection:'row'}}>
          <FileI style={{marginHorizontal:30,top:3}}/>
          <Text onPress={() => Linking.openURL('https://archive.nwp.org/cs/public/download/nwp_file/15410/Writing_Assignment_Framework_and_Overview.pdf?x-r=pcfile_d')}
         style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:16,right:20,top:2},
         ]}>
         LastName_Assgn1_AssignName.pdf 
          </Text>
          <Text 
         style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:16,right:270,top:5},
         ]}>
         __________________________________
          </Text>
          
          </View>
          
        </View>
        <View style={{top:35,height:50}}>
           <View style={{height:40,flexDirection:'row'}}>
          <FileI style={{marginHorizontal:30,top:3}}/>
          <Text onPress={() => Linking.openURL('https://archive.nwp.org/cs/public/download/nwp_file/15410/Writing_Assignment_Framework_and_Overview.pdf?x-r=pcfile_d')}
         style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:16,right:20,top:2},
         ]}>
         LastName_Assgn1_AssignName.pdf 
          </Text>
          <Text 
         style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:16,right:270,top:5},
         ]}>
         __________________________________
          </Text>
          
          </View>  
        </View>

        <View style={{top:35,height:50}}>
           <View style={{height:40,flexDirection:'row'}}>
          <FileI style={{marginHorizontal:30,top:3}}/>
          <Text onPress={() => Linking.openURL('https://archive.nwp.org/cs/public/download/nwp_file/15410/Writing_Assignment_Framework_and_Overview.pdf?x-r=pcfile_d')}
         style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:16,right:20,top:2},
         ]}>
         LastName_Assgn1_AssignName.pdf 
          </Text>
          <Text 
         style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:16,right:270,top:5},
         ]}>
         __________________________________
          </Text>
          
          </View>
        </View>

        <View style={{top:35,height:50}}>
           <View style={{height:40,flexDirection:'row'}}>
          <FileI style={{marginHorizontal:30,top:3}}/>
          <Text onPress={() => Linking.openURL('https://archive.nwp.org/cs/public/download/nwp_file/15410/Writing_Assignment_Framework_and_Overview.pdf?x-r=pcfile_d')}
         style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:16,right:20,top:2},
         ]}>
         LastName_Assgn1_AssignName.pdf 
          </Text>
          <Text 
         style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:16,right:270,top:5},
         ]}>
         __________________________________
          </Text>
          </View>     
        </View>
        {/* For Button */}
        <View style={{top:10,marginVertical:30}}>
          <View>
         <TouchableOpacity onPress={()=>alert("You downloaded all files")} style={{borderRadius:20,borderColor:'#F16600',height:40,width:170,borderWidth:2,marginHorizontal:20}}>
           <View style={{flexDirection:'row'}}>
           <Downarrow style={{top:10,height:50,width:50,marginHorizontal:10}}/>
           <Text
         style={[
          theme.textVariants.body,
          { color: theme.colors.Orange, fontSize:18,textAlign:'center',top:5},
           ]}>
        Download all</Text>
        </View>
         </TouchableOpacity>
         </View> 
        </View>
       <View>
        {/* For Instructor */}
       
          <View style={{height:100}}>      
           <Text

           style={[
             theme.textVariants.body,
             { color: theme.colors.primary, fontSize:18,marginHorizontal:30},
           ]}>
       Instructor
       <Text
           
           style={[
             theme.textVariants.body,
             { color: theme.colors.Orange, fontSize:18,top:5},
           ]}>
         *
       </Text>
       </Text>
      
       <DropDownSG/>
          </View>
          </View>

   {/* For Student/Group     */}
<View
style={{
display: 'flex',
justifyContent: 'center',
height:100,
// alignItems:'center',
      }}>
          <View> 
           <Text
              style={[
              theme.textVariants.body,
               { color: theme.colors.primary, fontSize:18,marginHorizontal:30,bottom:20},
              ]}>
              Student/Group
              <Text
           
           style={[
             theme.textVariants.body,
             { color: theme.colors.Orange, fontSize:18},
           ]}>
         *
       </Text>
       </Text>
       <DropdownClg/>
          </View>  
</View>
<View>
          <Text
             style={[
             theme.textVariants.body,
             { color: theme.colors.primary, fontSize:18,marginHorizontal:20,bottom:10},
             ]}>
              Feedback
            </Text>
            <KeyboardAvoidingView behavior='padding'>
            <TextInput placeholder='Type Here.......'  
            style={{
            width:300,
             height:70,
            backgroundColor:'rgba(209, 214, 255, 0.5)',
             borderRadius:8,
            marginHorizontal:20}} multiline={true}/>
            </KeyboardAvoidingView>
            <Lines style={{marginHorizontal:300,bottom:20}}/>
         </View> 
         <View style={{marginVertical:40,bottom:35}}>
           <View>
    <Text
             style={[
             theme.textVariants.body,
             { color: theme.colors.primary, fontSize:18,marginHorizontal:20},
             ]}>
              Flag
              <Text
           
           style={[
             theme.textVariants.body,
             { color: theme.colors.Orange, fontSize:18},
           ]}>
         *
       </Text>
    </Text>
    <View>
      
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={{flexDirection:'row',left:30}}>
      <RadioButton value="first" />
        <View>
        <Text style={{top:10,fontSize:16,color:'#FF0505'}}>Need To Improve</Text>
        
        </View>
        <RadioButton value="second" />
        <View>
        <Text style={{top:10,fontSize:14,color:'#2DA231'}} >Good</Text>
        </View>
      </View>
     
      </RadioButton.Group>
      </View>
       {/* For Enter Captcha code */}
<View
      style={{
        justifyContent: 'center',
        height:120,
        alignItems:'center',
        
      }}>
<View style={{
flexDirection:'row',
width:300,
height:50,
top:5,
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
      right:15}}/>
          <View
           style={{
             width:100,
             height:40,
             backgroundColor:'#380885',
             borderRadius:8,right:5}}>
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

{/* For Update & AssignMent Summary */}
<View
      style={{
        marginVertical: theme.spacing.s,
        justifyContent: 'center',
        height:100,
        alignItems:'center',
        
      }}> 
<View style={{top:10,flexDirection:'row',height:70}}>
<TouchableOpacity onPress={props.onPress} style={{height:35,width:165,borderRadius:20,top:13,justifyContent:'center',alignContent:'center',left:10}}>
<Text 
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:15,marginHorizontal:10,top:5},
]}>

Review Summary
</Text>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:15,marginHorizontal:10,bottom:7},
]}>
________________</Text>

</TouchableOpacity>
<TouchableOpacity onPress={()=>alert('Your Review Assignment Updated Successfully')} style={{height:40,width:140,backgroundColor:'#F16600',borderRadius:20,top:10,left:5}}>
<Text
style={[
 theme.textVariants.body,
 { color: theme.colors.white, fontSize:18,textAlign:'center',top:5,},
]}>
Update</Text>
</TouchableOpacity>
</View>
<View>

</View>
</View>
            
            </View>
    </View>
       </Card>
  )
}
export default ReviewAssignment