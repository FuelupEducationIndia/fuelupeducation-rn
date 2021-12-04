import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import { AppRoutes, stackScreenOptions } from '../../types/navigation'
import Profiletab from '../../Teachers/TeacherBottomTabs/Profiletab'
import { HomeTab, MainProfiletab } from '../../Teachers/TeacherBottomTabs'
import { AssignmentSummary } from '../../components/Courses'
import { CreateAssignment } from '../../components/Courses'
import { ReviewSummary } from '../../components/Courses'
import { ReviewAssignment } from '../../components/Courses'
import { GradingSummary } from '../../components/Courses'
import { GradingAssignment } from '../../components/Courses'
import { MyCourse } from '../../Teachers/TeacherHomeTopTabs'

const AppStack = createStackNavigator<AppRoutes>()

const AuthStack=()=>{
  return(
    <AppStack.Navigator defaultScreenOptions={{headerShown:false}}
    initialRouteName='Authentication'
    screenOptions={stackScreenOptions}>
      <AppStack.Screen name="Home" component={HomeTab}/>
    <AppStack.Screen name='Profiletab' component={Profiletab}  />
    <AppStack.Screen name='MainProfiletab' component={MainProfiletab}  />
    <AppStack.Screen name='AssignmentSummary' component={AssignmentSummary} />
    <AppStack.Screen name='Create Assignment' component={CreateAssignment} />
    <AppStack.Screen name='Review assignment' component={ReviewAssignment}  />
    <AppStack.Screen name='Review Summary' component={ReviewSummary}  />
    <AppStack.Screen name='Grading Assignmnet' component={GradingAssignment} />
    <AppStack.Screen name='Grading Summary' component={GradingSummary}  />
    <AppStack.Screen name='MyCourse' component={MyCourse}/>
  </AppStack.Navigator>
 
  )
}
export default AuthStack