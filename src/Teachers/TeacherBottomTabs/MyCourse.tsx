import React, { Component,useState,useRef ,useEffect} from 'react'
// import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme, { Card, Box } from '../../theme'
// import DrawerIcon from '../../assets/svgs/drawer-icon.svg'
import TopHero from '../../assets/svgs/top-hero.svg'
import DrawerIcon from '../../assets/svgs/drawer-icon.svg'
// import Multichoice from '../../assets/svgs/MultiChoices.svg'
// import DD from '../../assets/svgs/DropD.svg'
import { Text } from '../../theme'
import {AppRegistry, View,TextInput,StyleSheet,Switch,Modal ,Platform, Alert,Image,ImageBackground} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FingerP from '../../assets/svgs/Print.svg'
import BackArrow from '../../assets/svgs/BackAr.svg'
import { Rating, AirbnbRating } from 'react-native-ratings';
import Timer from '../../assets/svgs/Timer.svg'
import UserPro from '../../assets/svgs/user_profile.svg'
import Content from '../../assets/svgs/Content.svg'
import Video from '../../components/Video'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {
 OverView,
 QA,
 NoteBook,
 Prep_Meterial
} from '../../components/TabPages/index'
import { DashboardTabRoutes } from '../../types/navigation'
import Overview from '../../components/TabPages/OverView'


  const MyCourse=(rating)=>{
    const DashboardTopTab = createMaterialTopTabNavigator<DashboardTabRoutes>()

  //  const  bufferConfig=()=>{
  //     minBufferMs: 15000,
  //     maxBufferMs: 50000,
  //     bufferForPlaybackMs: 2500,
  //     bufferForPlaybackAfterRebufferMs: 5000
  //   }
    
      // console.log("Rating is: " + rating)
    
      const [change,setChange] = React.useState(0);
      const onNext = (Value: number) =>
      {
        if(Value == 0){
          setChange(1);
        }
        else if (Value == 1){
          setChange(1);
        }
      
      
      };
     
  return(
    <>
    {/*For Hearder */}
    <SafeAreaView style={{ backgroundColor: theme.colors.primary ,height:190,borderBottomLeftRadius:25,borderBottomRightRadius:25}}>
      <BackArrow style={{ position: 'absolute', top: 50, left: 20 }} />
      <Card padding='s'>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderBottomLeftRadius:50
          }}>
            <Text
                style={[
                  theme.textVariants.title,
                  { color: theme.colors.white,marginHorizontal:60,top:5 }
                ]}
                numberOfLines={1}>
                The Solar System
              </Text>
              
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '50%',
            }}>
              <View style={{bottom:20}}>
             <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.white,top:100,right:150}
                ]}
                numberOfLines={1}>
                5.0
              </Text>
              <Rating   type='star'
              ratingCount={5}
              // showRating
              imageSize={15}
              tintColor='#380885'
              style={{top:82,right:170}}
              >
              </Rating>
              </View>
             <View style={{bottom:20}}>
              <Timer style={{top:95,right:150}}/>
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.white,top:77,right:120}
                ]}
                numberOfLines={1}>
                2 months
              </Text>
              <UserPro style={{top:62,right:55}}/>
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.white,top:45,right:30}
                ]}
                numberOfLines={1}>
                1120
              </Text>
              </View>
              
          </Box>
        </Box>
      </Card>
    
    </SafeAreaView>

    {/* For Main Content */}
    <ScrollView>

    <Card
        variant='elevated'
        borderRadius='l'
        borderTopLeftRadius='xl'
        borderTopRightRadius='xl'
        marginBottom='l'
        padding='none'
        backgroundColor='white'
        marginVertical='m'>
      
      <View>
        {/* For content */}
        <Box style={{borderLeftWidth:1,height:55,width:130,marginHorizontal:230,}}>
          <View style={{flexDirection:'row'}}>
          <Content style={{top:15,marginHorizontal:10}}/>
            <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.primary,fontSize:18,textAlign:'center',top:15,left:5}
                ]}
                >
                Contents
              </Text>
              </View>
          </Box>
          <View>
              <Video/>
          </View>
          <Card backgroundColor='white'
          borderBottomLeftRadius='xl'
          borderBottomRightRadius='xl'>
          <View style={{height:1000,backgroundColor:'white'}}>
          <DashboardTopTab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarItemStyle: { width: 'auto' },
        
          tabBarStyle: {
            // backgroundColor: theme.colors.primary,
          },
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.secondary,
            marginBottom: 8,
          },
          tabBarScrollEnabled: true,
          tabBarBounces: true,
        }}>
        <DashboardTopTab.Screen
          name='OverView'
          component={OverView}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={styles(focused).tabBarLabel}>OverView</Text>
            ),
          }}
        />
        <DashboardTopTab.Screen
          name ='QA'
          component={QA}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
              Q&A
              </Text>
            ),
          }}
        />
        <DashboardTopTab.Screen
           name='NoteBook'

          component={NoteBook}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
                NoteBook
              </Text>
            ),
          }}
        />
        <DashboardTopTab.Screen
           name='Prep Meterials'
          component={Prep_Meterial}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
                Prep_Meterial
              </Text>
            ),
          }}
        />
        </DashboardTopTab.Navigator>
          </View>
          </Card>
      </View>
</Card>
</ScrollView>
    </>
  )
}
export default MyCourse;
const styles = (focused: Boolean) =>
  StyleSheet.create({
    tabBarLabel: {
      color: focused ? theme.colors.darkSilver : 'black',
      textAlign: 'center',
      marginHorizontal:10,
      fontSize:15,
      marginVertical:10
    },
  })