import React,{useState,useRef} from 'react'
import { View, ScrollView, KeyboardAvoidingView,Linking} from 'react-native'
import theme, { Card,Text } from '../../theme'
import { CourseDetailCard, Button, RadioGroup} from '../../components'

// import TeacherImage from '../../assets/images/teacherImage.png'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Lines from '../../assets/svgs/line.svg'
import Doc from '../../assets/svgs/Document.svg'
import DropDown from '../../components/DropDownBoardUnI2'
import DropDownC from '../../components/Dropdowncollege'
import DropDownCourse from '../../components/DropDownCourse2'
import DropDownI from '../../components/DropDownSTuUGR'

import  DropDownSG  from '../../components/DropDownSG2'
import ImagePicker from 'react-native-image-crop-picker'
import { Link } from '@react-navigation/native';
const Notebook=(props)=>{
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
    <>
    <View style={{height:950,backgroundColor:'white',marginVertical:10}}>
    
        <View
  style={{
    marginVertical: theme.spacing.m,
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    height:100,
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
  }}>
    <View style={{height:50}}>
    
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:18,marginHorizontal:20,bottom:30},
]}>
Class/Semester
<Text  
  style={[
    theme.textVariants.body,
  { color: theme.colors.Orange, fontSize:18,marginHorizontal:20},
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
}}>
<View>

<Text
style={[
  theme.textVariants.body,
  { color: theme.colors.primary, fontSize:18,marginHorizontal:40,bottom:40},
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
  justifyContent: 'center',
  height:100,
  alignItems:'center',
 }}>
      <View>
  
<Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:30,bottom:40},
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
  }}>
      <View>
   
<Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:30,bottom:40},
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




{/* For Assignment type */}
<View
  style={{
    marginVertical: theme.spacing.s,
    justifyContent: 'center',
    height:65,
    alignItems:'center',
  }}>
       <View>



</View>
</View>
{/* For Assignment title */}
<View
  style={{
    display: 'flex',
    justifyContent: 'center',
    height:100,
    alignItems:'center',
  }}>







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
{ color: theme.colors.primary, fontSize:18,right:30,bottom:20},
]}>
Enter Captcha</Text>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, 
fontSize:18,left:30,bottom:20},
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
  right:15,bottom:35}} multiline={true}/>
      <View
       style={{
         width:100,
         height:40,
         backgroundColor:'#380885',
         borderRadius:8,bottom:35}}>
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
    justifyContent: 'center',
    height:100,
    alignItems:'center',

    
  }}> 
<View style={{flexDirection:'row',height:50,bottom:30}}>
<TouchableOpacity onPress={props.onPress} style={{height:30,width:150,borderRadius:20,top:10,left:5}}>
{/* <Link to={{screen:'AssignmentSummary'}}> */}
<Text 
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:15,},
]}>

Notebook Summary
</Text>
{/* </Link> */}
</TouchableOpacity>

<TouchableOpacity onPress={()=>alert('Your Notebook Uploaded Successfully')} style={{height:40,width:140,backgroundColor:'#F16600',borderRadius:20,left:15}}>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.white, fontSize:18,textAlign:'center',top:5,},
]}>
Upload</Text>
</TouchableOpacity>
</View>
<View>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:18,right:80,bottom:70},
]}>
________________</Text>
</View>
</View>
    
    </View>
   
    </View>
    </>
  )
}
export default Notebook