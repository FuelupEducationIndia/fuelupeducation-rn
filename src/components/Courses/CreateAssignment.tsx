import React,{useState,useRef} from 'react'
import { View, ScrollView, KeyboardAvoidingView,Linking} from 'react-native'
import theme, { Card,Text } from '../../theme'
import { CourseDetailCard, Button, RadioGroup} from '..'

// import TeacherImage from '../../assets/images/teacherImage.png'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Lines from '../../assets/svgs/line.svg'
import Doc from '../../assets/svgs/Document.svg'
import DropDown from '../DropdownBoardUni'
import DropDownC from '../DropdownClS'
import DropDownCourse from '../DropDownCourse'
import DropDownI from '../DropDownC'
import DropDownCour from '../DropDownCour'
import DropDownLang from '../DropDownLangugae'
import DropDownDue from '../DropDownDue'
import DropDownAssType from '../DropDownAssType'
import  DropDownSG  from '../DropDownStudentGroup'
import ImagePicker from 'react-native-image-crop-picker'
import { Link } from '@react-navigation/native';

const CreateAssignment=(props)=>{
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

  const [change,setChange] = React.useState(0);

const onNext = (Value: number) =>
  {
    if(Value == 0){
      setChange(1);
    }
    else if (Value == 1){
      setChange(1);
    }
  }

  return(
<Card
variant='elevated'
borderRadius='l'
marginBottom='m'
padding='none'
backgroundColor='white'>
{/* <ScrollView>

</ScrollView> */}
{/* For Board/University */}
<View
  style={{
    marginVertical: theme.spacing.m,
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    height:100,
    // backgroundColor:'blue',
  }}>
    <View>
    
    <Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:30},
       ]}>
   Board/University
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.Orange, fontSize:18,marginHorizontal:170},
       ]}>
     *
   </Text>
   </Text>

   <DropDown/>
    </View>
</View>

<View
  style={{
    // marginVertical: theme.spacing.s,
    display: 'flex',
    justifyContent: 'center',
    height:100,
    alignItems:'center',
    // backgroundColor:'aqua',
    bottom:10,
  }}>
    <View>
    
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:18,marginHorizontal:30,bottom:15},
]}>
Class/Semester
<Text  
  style={[
    theme.textVariants.body,
  { color: theme.colors.Orange, fontSize:18,marginHorizontal:170},
]}>
  *
   </Text>
   </Text>
  
   <DropDownC/>
      </View>
</View>
{/* For course */}
<View
style={{
display: 'flex',
justifyContent: 'center',
height:100,
alignItems:'center',
// backgroundColor:'red',
}}>
<View>

<Text
style={[
  theme.textVariants.body,
  { color: theme.colors.primary, fontSize:18,marginHorizontal:30,bottom:15},
]}>
   Course
   <Text   
style={[
 theme.textVariants.body,
 { color: theme.colors.Orange, fontSize:18,marginHorizontal:90},
]}>
 *
</Text>
   </Text>
  
   <DropDownCourse/>
    </View>
</View>
{/* For Instructor */}
<View
style={{
  display:'flex',
  justifyContent: 'center',
  height:100,
  alignItems:'center',
  // backgroundColor:'yellow',
  top:10,
 }}>
      <View>
  
<Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:30,bottom:10},
       ]}>
   Instructor
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.Orange, fontSize:18,},
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
alignItems:'center',
// backgroundColor:'green',
top:20,
  }}>
      <View>
   
<Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:30},
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
 
   <DropDownI/>
      </View>
  </View>

{/* For Course/Language         */}
<View
style={{
marginVertical: theme.spacing.s,
display: 'flex',
justifyContent: 'center',
height:100,
alignItems:'center',
// backgroundColor:'aqua',
top:20,
  }}>

    <View style={{flexDirection:'row',height:50}}>
    

<Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,top:10,left:10},
       ]}>
   Course
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.Orange, fontSize:18,right:30,top:5},
       ]}>
     *
   </Text>
   </Text>

  
   
 <Text

style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:18,top:10,marginHorizontal:80,left:30},
]}>
Language

<Text

style={[
theme.textVariants.body,
{ color: theme.colors.Orange, fontSize:18,top:5,right:80},
]}>
*
</Text>
</Text>   

</View>
<View style={{flexDirection:'row',height:50}}>
<DropDownCour/>
<DropDownLang/>

</View>
</View>

{/* For Due */}
<View
  style={{
    display: 'flex',
    justifyContent: 'center',
   height:85,
    alignItems:'center',
    // backgroundColor:'pink',
    top:20  }}>


<View>

<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:18,marginHorizontal:30},
]}>
Due
<Text

style={[
theme.textVariants.body,
{ color: theme.colors.Orange, fontSize:18},
]}>
*
</Text>
</Text>

<DropDownDue/>

</View>
</View>

{/* For Assignment type */}
<View
  style={{
    marginVertical: theme.spacing.s,
    justifyContent: 'center',
    height:85,
    alignItems:'center',
    // backgroundColor:'red',
    top:20,
  }}>
       <View>

<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:18,marginHorizontal:30},
]}>
Assignment Type
<Text

style={[
theme.textVariants.body,
{ color: theme.colors.Orange, fontSize:18},
]}>
*
</Text>
</Text>
<DropDownAssType/>

</View>
</View>
{/* For Assignment title */}
<View
  style={{
    display: 'flex',
    justifyContent: 'center',
    height:85,
    alignItems:'center',
    // backgroundColor:'aqua',
    top:20
  }}>
<View>

<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:18,marginHorizontal:30},
]}>
Assignment Title
<Text

style={[
theme.textVariants.body,
{ color: theme.colors.Orange, fontSize:18},
]}>
*
</Text>
</Text>
<KeyboardAvoidingView behavior='padding'>
<TextInput placeholder='Type Title Here.......'
style={{
width:300,
height:40,
backgroundColor:'rgba(209, 214, 255, 0.5)',
marginHorizontal:30,
borderRadius:8,top:5}}/>
</KeyboardAvoidingView>
</View>
</View>
{/* For OverView */}
<View
  style={{
    display:'flex',
    justifyContent: 'center',
    height:110,
    alignItems:'center',
    // backgroundColor:'pink',
    top:25
  }}>
<View>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:18,},
]}>
OverView
</Text>
<TextInput placeholder='Type Here.......'  
style={{
width:300,
height:65,
backgroundColor:'rgba(209, 214, 255, 0.5)',
borderRadius:8,
top:5}} multiline={true}/>
<Lines style={{left:280,bottom:15}}/>

</View>
</View>

{/* for Note */}
<View
  style={{
    marginVertical: theme.spacing.s,
    justifyContent: 'center',
    height:100,
    alignItems:'center',
    // backgroundColor:'red',
    top:25
    
  }}>
<View>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:18,top:10},
]}>
Note
</Text>
<KeyboardAvoidingView behavior='padding'>
<TextInput placeholder='Type Here.......' 
style={{
width:300,
height:65,
backgroundColor:'rgba(209, 214, 255, 0.5)',
borderRadius:8,
top:15}} multiline={true}/> 
</KeyboardAvoidingView>

<Lines style={{left:280,bottom:5}}/>

</View>
</View>

{/* For Deliverable */}
<View
  style={{
    marginVertical: theme.spacing.s,
    justifyContent: 'center',
    // backgroundColor:'yellow',
    height:100,
    alignItems:'center',
    top:15
  }}>
<View>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:18,top:5},
]}>
Deliverable(s)
</Text>
<TextInput placeholder='Type Here.......' 
style={{
width:300,
height:65,
backgroundColor:'rgba(209, 214, 255, 0.5)',
borderRadius:8,
top:10}}
multiline={true}/>
<Lines style={{bottom:10,left:280}}/>
</View>
</View>

{/* For Upload Image Content*/}
<View
  style={{
    justifyContent: 'center',
   
    height:130,
    alignItems:'center',
    
  }}>
<View>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:18},
]}>
Upload Documnet(s)
</Text>

<View style={{width:300,height:90,top:5,borderTopColor:'black',borderWidth:1,borderStyle:'dashed'}}>
<Doc style={{justifyContent:'center',alignContent:'center',alignItems:'center',marginHorizontal:130,top:10}}/>

<Text
style={[
theme.textVariants.body,
{ color: theme.colors.darkSilver, fontSize:13,marginHorizontal:40,top:20},
]}>
Drag and Drop or Click to   
<Text  onPress={ChooseFile}
style={[
theme.textVariants.body,
{ color: theme.colors.Orange, fontSize:15,left:20},
]}>
Browse
</Text>

</Text>

</View>


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
top:5,
justifyContent:'center',
alignItems:'center',
alignContent:'space-between'}}>

<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:18,right:30},
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
  right:15}} multiline={true}/>
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
<View style={{flexDirection:'row',height:50}}>
<TouchableOpacity onPress={props.onPress} style={{height:35,width:165,borderRadius:20,top:5,justifyContent:'center',alignContent:'center'}}>
<Text 
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:15,marginHorizontal:10,top:5},
]}>

Assignment Summary
</Text>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:15,marginHorizontal:10,bottom:7},
]}>
____________________</Text>

</TouchableOpacity>

<TouchableOpacity onPress={()=>alert('Your Assignment Updated Successfully')} style={{height:40,width:140,backgroundColor:'#F16600',borderRadius:20,top:5,left:5}}>
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
  export default CreateAssignment