import React from "react";
import { View,Linking } from "react-native";
import { Text } from '../../theme'
import theme, { Card, Box } from '../../theme'
import Profile from '../../assets/svgs/Profile.svg'
import { ScrollView } from "react-native-gesture-handler";
import GroupPro from '../../assets/svgs/GroupPro.svg'
import Point from '../../assets/svgs/Point.svg'
import Certificate from '../../assets/svgs/Certificate.svg'
import Unorderedlist from 'react-native-unordered-list';
import Learners from '../../assets/svgs/Learner.svg'
const OverView=()=>{
  return(
   
    <View style={{height:1000,backgroundColor:'white',borderBottomLeftRadius:20,marginVertical:5}}>
      <ScrollView>
     
      <View>
      
       <Text 
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.primary,fontSize:20,marginHorizontal:20}
                ]}
                >
                INSTRUCTOR
              </Text>
              </View>
              <View style={{height:70,flexDirection:"row"}}>
              <Profile style={{top:13,marginHorizontal:50}}/>      
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.text,fontSize:18,top:7}
                ]}
                >
               Sarah william
              </Text>   
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.darkSilver,fontSize:12,top:29,right:105}
                ]}
                >
               Instructor at FuelUp Education 
              </Text>   
              <Text  onPress={() => Linking.openURL('https://www.linkedin.com/')}
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.secondary,fontSize:17,top:45,right:257}
                ]}
                >
              View on Linkedin 
              </Text>   
        </View>
        <View style={{top:15,height:100}}>
        <Text 
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.primary,fontSize:20,marginHorizontal:20}
                ]}
                >
                RELETED TO THIS COURSE
              </Text>
              <View style={{flexDirection:'row'}}>
              <GroupPro style={{top:10,marginHorizontal:20}}/>
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.darkSilver,fontSize:15,top:10}
                ]}
                >
              Study Groups        
              </Text> 
              <Point style={{top:20,marginHorizontal:10}}/>
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.secondary,fontSize:15,top:10}
                ]}
                >
              See All
              </Text>     
              </View>
              <View style={{flexDirection:'row',top:5}}>
                <Certificate style={{top:15,marginHorizontal:20}}/>
                <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.darkSilver,fontSize:15,top:10}
                ]}
                >
              Certificate    
              </Text> 
              <Point style={{top:20,marginHorizontal:10}}/>
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.secondary,fontSize:15,top:10}
                ]}
                >
              See All
              </Text>     
              </View>
        </View>
        <View style={{height:115}}>
        <Text 
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.primary,fontSize:20,marginHorizontal:20,top:10,}
                ]}
                >
                 COURSE DETAILS
              </Text>
              <Text 
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.darkSilver,fontSize:15,marginHorizontal:20,top:10}
                ]}
                >
                Length: 2h 30m
              </Text>
              <Text 
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.darkSilver,fontSize:15,marginHorizontal:20,top:20}
                ]}
                >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </Text>
        </View>
        <View style={{top:15,height:100}}>
        <Text 
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.primary,fontSize:20,marginHorizontal:20}
                ]}
                >
               LEARNING OBJECTIVE
              </Text>
              <View>
             
                <View style={{marginHorizontal:20,justifyContent:'space-between'}}>
                <Unorderedlist color='#707070'  ><Text>Lorem ipsum dolor sit amet</Text></Unorderedlist>
                <Unorderedlist color='#707070'><Text>Lorem ipsum dolor sit amet</Text></Unorderedlist>
                <Unorderedlist color='#707070'><Text>Lorem ipsum dolor sit amet</Text></Unorderedlist>
                <Unorderedlist color='#707070'><Text>Lorem ipsum dolor sit amet</Text></Unorderedlist>
                </View>
             </View>
             
        </View>
        <View style={{height:70}}>
        <Text 
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.primary,fontSize:20,marginHorizontal:20,top:10}
                ]}
                >
               LANGUAGE
              </Text>
              <Text 
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.darkSilver,fontSize:18,marginHorizontal:30,top:15}
                ]}
                >
                  English
              </Text>
        </View>
        <View style={{height:70}}>
        <Text 
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.primary,fontSize:20,marginHorizontal:20,top:10}
                ]}
                >
               BOARD/UNIVERSITY
              </Text>
              <Text 
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.darkSilver,fontSize:18,marginHorizontal:30,top:15}
                ]}
                >
                 Rajasthan
              </Text>
        </View>
        <View style={{height:100}}>
        <Text 
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.primary,fontSize:20,marginHorizontal:20,top:10}
                ]}
                >
               LEARNERS
              </Text>
              <View style={{flexDirection:'row'}}>
                <Learners style={{top:20,marginHorizontal:20}}/>
                <Text 
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.darkSilver,fontSize:18,top:20}
                ]}
                >
                 50 Member In The Class
              </Text>
                </View>
        </View>
     </ScrollView>
    </View>
    
  )
}
export default OverView