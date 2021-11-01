import React from 'react'
import { View, ScrollView,} from 'react-native'
import theme, { Card,Text } from '../../theme'
import { CourseDetailCard, Button, RadioGroup} from '../../components'

// import TeacherImage from '../../assets/images/teacherImage.png'
import TeacherImage from '../../assets/images/teacherImage.png'
import Thumbnail1 from '../../assets/images/thumbnail1.png'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Lines from '../../assets/svgs/line.svg'
import Doc from '../../assets/svgs/Document.svg'
import DownArrow from '../../assets/svgs/DownArrow.svg'
import DropDown from '../../components/DropdownBoardUni'
import DropDownC from '../../components/DropdownClS'
import DropDownCourse from '../../components/DropDownCourse'
import DropDownI from '../../components/DropDownC'
import DropDownStu from '../../components/DropDownD'
import DropDownCour from '../../components/DropDownCour'
import DropDownLang from '../../components/DropDownLangugae'
import DropdownDue from '../../components/DropDownDue'
import DropDownDue from '../../components/DropDownDue'
import DropDownAssType from '../../components/DropDownAssType'
import { backgroundColor } from '@shopify/restyle'
import  DropDownSG  from '../../components/DropDownStudentGroup'
const topButtons = ['Create Assignment', 'Review AssignMent','Grading']

const Lectures = () => {
  const [activeButton, setActiveButton] = React.useState(topButtons[0])

  const onPrev = () => {
    return
  }
  const onNext = () => {
    return
  }
  return (
    <ScrollView>
      <Card
        variant='elevated'
        borderRadius='l'
        borderTopLeftRadius='none'
        borderTopRightRadius='none'
        marginBottom='l'
        padding='none'
        backgroundColor='white'>
        <RadioGroup
          options={topButtons}
          activeButton={activeButton}
          buttonStyle={{right:10}}
          onChange={(button: string) => setActiveButton(button)}
        />
      </Card>
     
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
          }}>
            <View>
            
            <Text
   
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,marginHorizontal:30,top:10},
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
          }}>
            <View>
            
     <Text
      style={[
        theme.textVariants.body,
        { color: theme.colors.primary, fontSize:18,marginHorizontal:30},
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
    }}>
   <View>
   
     <Text
        style={[
          theme.textVariants.body,
          { color: theme.colors.primary, fontSize:18,marginHorizontal:30},
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
                 { color: theme.colors.primary, fontSize:18,marginHorizontal:30},
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
           height:65,
            alignItems:'center',
          }}>


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
            height:65,
            alignItems:'center',
          }}>
               <View>
       
<Text
   style={[
     theme.textVariants.body,
     { color: theme.colors.primary, fontSize:18,marginHorizontal:30,top:15},
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
            height:100,
            alignItems:'center',
          }}>
   <View>
   
<Text
   style={[
     theme.textVariants.body,
     { color: theme.colors.primary, fontSize:18,marginHorizontal:30,top:10},
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
<TextInput placeholder='Type Title Here.......'
 style={{
   width:300,
   height:40,
   backgroundColor:'rgba(209, 214, 255, 0.5)',
   marginHorizontal:30,
   borderRadius:8,
   top:15}}/>
  </View>
</View>
{/* For OverView */}
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
     { color: theme.colors.primary, fontSize:18,top:15},
   ]}>
OverView
</Text>
<TextInput placeholder='Type Here.......'  
style={{
  width:300,
  height:70,
  backgroundColor:'rgba(209, 214, 255, 0.5)',
  borderRadius:8,
  top:20}} multiline={true}/>
<Lines style={{left:280}}/>

    </View>
  </View>

{/* for Note */}
  <View
          style={{
            marginVertical: theme.spacing.s,
            justifyContent: 'center',
            height:100,
            alignItems:'center',
            
          }}>
    <View>
  <Text
   style={[
     theme.textVariants.body,
     { color: theme.colors.primary, fontSize:18,top:10},
   ]}>
Note
</Text>
<TextInput placeholder='Type Here.......' 
 style={{
   width:300,
   height:70,
   backgroundColor:'rgba(209, 214, 255, 0.5)',
   borderRadius:8,
   top:15}} multiline={true}/>
<Lines style={{left:280,bottom:5}}/>

    </View>
</View>

{/* For Deliverable */}
<View
          style={{
            marginVertical: theme.spacing.s,
            justifyContent: 'center',
           
            height:100,
            alignItems:'center',
            
          }}>
    <View>
  <Text
   style={[
     theme.textVariants.body,
     { color: theme.colors.primary, fontSize:18,top:10},
   ]}>
Deliverable(s)
</Text>
<TextInput placeholder='Type Here.......' 
 style={{
   width:300,
   height:70,
   backgroundColor:'rgba(209, 214, 255, 0.5)',
   borderRadius:8,
   top:15}}
    multiline={true}/>
<Lines style={{bottom:5,left:280}}/>
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
<Text
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
<View style={{top:10,flexDirection:'row',height:50}}>
<Text
   style={[
     theme.textVariants.body,
     { color: theme.colors.primary, fontSize:16,top:10},
   ]}>
 Assignment Summary</Text>
 
 <TouchableOpacity style={{height:40,width:140,backgroundColor:'#F16600',borderRadius:20,top:5,left:15}}>
 <Text
   style={[
     theme.textVariants.body,
     { color: theme.colors.white, fontSize:18,textAlign:'center',top:5,},
   ]}>
 Update</Text>
 </TouchableOpacity>
  </View>
  <View>
  <Text
   style={[
     theme.textVariants.body,
     { color: theme.colors.primary, fontSize:18,right:70,bottom:25},
   ]}>
 __________________</Text>
 </View>
  </View>
            
            </Card>
            </ScrollView> 
  )}
     export default Lectures
