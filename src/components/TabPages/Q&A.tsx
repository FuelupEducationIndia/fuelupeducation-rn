import React from "react";
import { View,Linking } from "react-native";
import { Text } from '../../theme'
import theme, { Card, Box } from '../../theme'
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import TeacherImage from '../../assets/svgs/TeacherImage.svg'
import Pin from '../../assets/svgs/Pin.svg'
import Help from '../../assets/svgs/Help.svg'
import StudentPrfile from  '../../assets/svgs/StudentProfile.svg'
import Point from '../../assets/svgs/Point.svg'
import Like from '../../assets/svgs/Like.svg'
import Reply from '../../assets/svgs/Reply.svg'
import StuProfile from '../../assets/svgs/StuProfile_1.svg'
const QA=()=>{
  return(
   
    <View style={{marginVertical:10,height:850,backgroundColor:'white'}}>
      <ScrollView>
        <View style={{height:80,flexDirection:'row'}}>
          <TeacherImage style={{ marginHorizontal:20,top:5}}/>
          <TextInput placeholder='Ask here to share with learners, professionals, and others ' style={{height:70,width:200,marginHorizontal:10,borderWidth:.5,borderRadius:10,}} multiline={true}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <Pin style={{top:10,marginHorizontal:50,left:100}}/>
          <TouchableOpacity style={{height:40,width:120,backgroundColor:'#380885',borderRadius:20,marginHorizontal:60}}>
          <Text
              style={[
               theme.textVariants.body,
              { color: theme.colors.white, fontSize:18,textAlign:'center',top:5,}]}>
Post</Text>
          </TouchableOpacity>
        </View>
        <View style={{height:50}}>
        <View style={{borderBottomWidth:.5,width:300,marginHorizontal:15,top:10,flexDirection:'row'}}>
          <Help/>
          <Text
              style={[
               theme.textVariants.body,
              { color: theme.colors.text, fontSize:18,textAlign:'center',marginHorizontal:20,fontWeight:'bold'}]}>
272 Questions</Text>
        </View>
        </View>
       
        <View>
          <View style={{flexDirection:'row',height:80}}>
            <StudentPrfile style={{marginHorizontal:10,top:15}}/>
            <Text
              style={[
               theme.textVariants.body,
              { color: theme.colors.primary, fontSize:18,textAlign:'center',top:10}]}>Congue Moris</Text>
              <Point style={{top:25,left:10}}/>
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.secondary,fontSize:15,top:15,left:15}
                ]}
                >
              2d ago
              </Text>   
              <View style={{height:30,width:260,top:35,right:150}}>
            <Text
              style={[
               theme.textVariants.body,
              { color: theme.colors.darkSilver, fontSize:12.5,}]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           </Text>
           </View>
          </View>
        </View>
        <View style={{top:5,height:30,flexDirection:'row'}}>
          <Like style={{marginHorizontal:70,top:2}}/>
          <Text
              style={[
               theme.textVariants.body,
              { color: theme.colors.darkSilver, fontSize:17,right:60}]}>
               1 
           </Text>
           <Reply style={{top:2}}/>
           <Text
              style={[
               theme.textVariants.body,
              { color: theme.colors.darkSilver, fontSize:17,marginHorizontal:5,}]}>
               3 
           </Text>
        </View>
        <View>
          <View style={{marginHorizontal:70,top:10,height:60}}>
            <TeacherImage/>
            <TextInput
             placeholder='Add Your Answer' style={{height:45,width:200,marginHorizontal:10,borderWidth:.5,borderRadius:10,left:35,bottom:41}} multiline={true}/>
            <Pin style={{bottom:70,left:220}}/>
           </View>
        </View>
        <View>
          <View style={{height:95,flexDirection:'row'}}>
        <TeacherImage style={{top:15,marginHorizontal:70}}/>
        <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.primary,fontSize:13,top:12,right:60}
                ]}
                >
              Sarah William    
              </Text> 
              <TouchableOpacity style={{height:15,width:70,top:15,right:60,backgroundColor:'#EBE7F3',borderRadius:20}}>
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.primary,fontSize:12,textAlign:'center'}
                ]}
                >
              Instructor   
              </Text> 
              </TouchableOpacity>
              <Point style={{right:59,top:25}}/>
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.secondary,fontSize:12,right:57,top:15}
                ]}
                >
              15hrs ago
              </Text>    
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.darkSilver,fontSize:12,right:260,top:30}
                ]}
                >
              Instructor at FuelUp Education
              </Text>    
          </View>
          <View style={{width:220,bottom:50,left:120}}>
          <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.darkSilver,fontSize:12}
                ]}
                >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore    
           </Text>   
           <View style={{flexDirection:'row',top:5}}> 
           <Like/>
           <Reply style={{marginHorizontal:30}}/>
           </View>
          </View>
        </View>
        <View style={{flexDirection:'row',bottom:30,height:80}}>
          <StudentPrfile style={{marginHorizontal:110}}/>
          <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.primary,fontSize:15,right:100}
                ]}
                >
              Congue Moris  
              </Text> 
              <Point style={{right:90,top:10}}/>
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.secondary,fontSize:12,right:80}
                ]}
                >
              2hrs ago
              </Text> 
              <View style={{height:50}}>
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.darkSilver,fontSize:14,right:230,top:20}
                ]}
                >
                  Thank You!
           </Text>   
           <Like style={{right:230,top:25}}/>
           <Reply style={{right:190,top:3}}/>
             </View>   
        </View>
        <View style={{flexDirection:'row'}}>
            <StuProfile style={{bottom:40,left:65}}/>
            <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.primary,fontSize:15,bottom:40,left:80}
                ]}
                >
              Congue Moris  
              </Text> 
              <View style={{bottom:17,right:5,width:200}}>
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.darkSilver,fontSize:14,}
                ]}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor !
           </Text> 
           <Like/>
           <Reply style={{bottom:17,marginHorizontal:50}}/>
           </View>
        </View>
     </ScrollView>
     </View>
  )}
  export default QA