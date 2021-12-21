import React,{useState,useRef} from 'react'
import { View, ScrollView, KeyboardAvoidingView,Linking} from 'react-native'
import theme, { Card,Text } from '../../theme'

// import TeacherImage from '../../assets/images/teacherImage.png'

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import DropDown from '../DropdownBoardUni'
import  DropDownSG  from '../DropDownStudentGroup'
import FileI from '../../assets/svgs/FileI.svg'
import Downarrow from '../../assets/svgs/Download_Arrow.svg'
import DropDownSG1 from '../dropDownSD1'



const GradingAssignment=(props)=>{
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
       Flag
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
       <Text onPress={() => Linking.openURL('https://archive.nwp.org/cs/public/download/nwp_file/15410/Writing_Assignment_Framework_and_Overview.pdf?x-r=pcfile_d')}
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
      <TouchableOpacity onPress={()=>alert("You downloaded all files")} 
      style={{borderRadius:20,borderColor:'#F16600',height:40,width:170,borderWidth:2,marginHorizontal:20}}>
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
       {/* </View> */}

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
            { color: theme.colors.primary, fontSize:18,marginHorizontal:20,bottom:25},
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
    <DropDownSG1/>
   </View>
</View>
 <View>
   <Text
           style={[
           theme.textVariants.body,
            { color: theme.colors.primary, fontSize:18,marginHorizontal:20,bottom:10},
           ]}>
           Grade
           <Text
        
        style={[
          theme.textVariants.body,
          { color: theme.colors.Orange, fontSize:18},
        ]}>
      *
    </Text>
    </Text>
    <View style={{flexDirection:'row',bottom:15}}>
    <KeyboardAvoidingView behavior='padding'>

    <TextInput
         style={{
           width:120,
          height:40,
          backgroundColor:'rgba(209, 214, 255, 0.5)',
           borderRadius:8,
          top:15,marginHorizontal:20}}/>
          </KeyboardAvoidingView>
<Text
        
        style={[
          theme.textVariants.body,
          { color: theme.colors.primary, fontSize:32,top:12,right:5},
        ]}>
      /
    </Text>
    <TextInput
         style={{
           width:120,
          height:40,
          backgroundColor:'rgba(209, 214, 255, 0.5)',
           borderRadius:8,
          top:15,marginHorizontal:10}}/>
    </View>
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
fontSize:18,left:20},
]}>
Captcha Code</Text>
</View>
<View
style={{
flexDirection:'row',
width:300,
height:50,
justifyContent:'center',
alignItems:'center',
alignContent:'space-between'}}>
 <TextInput 
   style={{
   width:170,
   height:40,
   backgroundColor:'rgba(209, 214, 255, 0.5)',
   borderRadius:8,
   right:20}}/>
       <View
        style={{
          width:100,
          height:40,
          backgroundColor:'#380885',
          borderRadius:8}}>
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
<TouchableOpacity onPress={props.onPress} style={{height:35,width:165,borderRadius:20,top:8,justifyContent:'center',alignContent:'center',left:20}}>
<Text 
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:15,marginHorizontal:10,top:5},
]}>

Grades Summary
</Text>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:15,marginHorizontal:10,bottom:7},
]}>
________________</Text>

</TouchableOpacity>


<TouchableOpacity  onPress={()=>alert('Your Grading  Assignment Updated Successfully')} style={{height:40,width:140,backgroundColor:'#F16600',borderRadius:20,top:5,marginHorizontal:10}}>
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
   </Card>

  )}
  export default GradingAssignment