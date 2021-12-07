import { createStackNavigator } from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { AppRoutes, stackScreenOptions } from '../../types/navigation'
import AuthNavigator from '../../Authentication'
import TeachersNavigator from '../../Teachers'
import CompletedProfile from '../../Teachers/TeacherBottomTabs/CompletedProfile'
import { AssignmentSummary } from '../../components/Courses'
import { CreateAssignment } from '../../components/Courses'
import { ReviewSummary } from '../../components/Courses'
import { ReviewAssignment } from '../../components/Courses'
import { GradingSummary } from '../../components/Courses'
import { GradingAssignment } from '../../components/Courses'
import Attendence_Summary from '../AttendSummary'
import { MyCourse,BrowseCourse, Assignment, Attendence, Certificate, Exam, } from '../../Teachers/TeacherHomeTopTabs'
import Lactures from '../../Teachers/TeacherHomeTopTabs/Lectures'
import { CourseDetailCard } from '../../components'
import CustomDrawer from '../../components/CustomDrawer'
import ReportHistory from '../Ticket/ReportHistory'
import Create_Quiz_Summary from '../Recommendation_Summary'
import RecommendationSummary from '../Recommendation_Summary'
import Recommended_Post_Summary from '../Reccommended_Post_Summary'
import { Schedule, Ticket } from '../../Teachers/TeacherBottomTabs'
const AppStack = createStackNavigator<AppRoutes>()
const Drawer=createDrawerNavigator()
const App = () => {
  React.useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, [])

  return (
    <Drawer.Navigator 
    drawerContent={props=><CustomDrawer {...props}/>}
      initialRouteName='Authentication'
      screenOptions={{headerShown:false,drawerActiveBackgroundColor:'transperent',
      drawerActiveTintColor:'#F16600'}}>
     <Drawer.Screen name='Authentication' component={AuthNavigator} />
      <Drawer.Screen name='Teacher' component={TeachersNavigator} />
      <Drawer.Screen name='MyCourse' component={MyCourse} />
      <Drawer.Screen name='CourseDetailCard' component={CourseDetailCard} />
      <Drawer.Screen name='CompletedProfile' component={CompletedProfile}/>
      <Drawer.Screen name='BrowseCourse' component={BrowseCourse}/>
      <Drawer.Screen name='Lactures' component={Lactures}/>
      <Drawer.Screen name='Exam' component={Exam}/>
      <Drawer.Screen name='Assignment' component={Assignment}/>
      <Drawer.Screen name='Attendence' component={Attendence}/>
      <Drawer.Screen name='Certificate' component={Certificate}/>
      <Drawer.Screen name='AssignmentSummary' component={AssignmentSummary}/>
      <Drawer.Screen name='ReviewSummary' component={ReviewSummary}/>
      <Drawer.Screen name='GradingSummary' component={GradingSummary}/>
      <Drawer.Screen name='HistoricSummmary' component={Attendence_Summary}/>
      <Drawer.Screen name='ReportSummary' component={ReportHistory}/>
      <Drawer.Screen name='QuizzezSummary' component={Create_Quiz_Summary}/>
      <Drawer.Screen name='RecommendationSummary' component={RecommendationSummary}/>
      <Drawer.Screen name='RecommnedationPostSummary' component={Recommended_Post_Summary}/>
      <Drawer.Screen name="Ticket" component={Ticket}/>
      <Drawer.Screen name="Schedule" component={Schedule}/>





    </Drawer.Navigator>
    
  )
}

export default App
