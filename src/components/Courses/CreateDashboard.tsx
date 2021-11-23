import React from 'react'
import { View,StyleSheet,TextInput,TouchableOpacity ,SafeAreaView,ScrollView} from 'react-native'
import theme, {  Card, Text } from '../../theme'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {
 Pending,
 CompletedDash,
 InReview
} from '../../Dashboard/index'
import { DashboardTabRoutes } from '../../types/navigation'


const DashboardTopTab = createMaterialTopTabNavigator<DashboardTabRoutes>()

const CreateDashboard =()=>{
return(
  <>
  <View style={{height:350,width:390,}}>
    <Text style={{color:theme.colors.primary,fontSize:15,marginHorizontal:20}}>
    Paper Manager
    </Text>
 
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
          name='Pending'
          component={Pending}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={styles(focused).tabBarLabel}>Pending</Text>
            ),
          }}
        />
        <DashboardTopTab.Screen
          name ='InReview'
          component={InReview}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
              In Review
              </Text>
            ),
          }}
        />
        <DashboardTopTab.Screen
           name='CompletedDash'
          component={CompletedDash}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
                Completed
              </Text>
            ),
          }}
        />
        </DashboardTopTab.Navigator>
        
              
 
  
</View>
     </>
);
}

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

export default CreateDashboard