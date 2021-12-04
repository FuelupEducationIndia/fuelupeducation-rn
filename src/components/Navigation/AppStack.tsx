import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { AppRoutes, stackScreenOptions } from '../../types/navigation'
import AuthNavigator from '../../Authentication'
import TeachersNavigator from '../../Teachers'
import Profiletab from '../../Teachers/TeacherBottomTabs/Profiletab'
import { MainProfiletab } from '../../Teachers/TeacherBottomTabs'
import { AssignmentSummary } from '../../components/Courses'
import { CreateAssignment } from '../../components/Courses'
import { ReviewSummary } from '../../components/Courses'
import { ReviewAssignment } from '../../components/Courses'
import { GradingSummary } from '../../components/Courses'
import { GradingAssignment } from '../../components/Courses'
import { MyCourse } from '../../Teachers/TeacherHomeTopTabs'
import { CourseDetailCard } from '../../components'
const AppStack = createStackNavigator<AppRoutes>()

const App = () => {
  React.useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, [])

  return (
    <AppStack.Navigator
      initialRouteName='Authentication'
      screenOptions={stackScreenOptions}>
      <AppStack.Screen name='Authentication' component={AuthNavigator} />
      <AppStack.Screen name='Teacher' component={TeachersNavigator} />
      <AppStack.Screen name='Profiletab' component={Profiletab} />
      <AppStack.Screen name='MainProfiletab' component={MainProfiletab} />
      <AppStack.Screen name='AssignmentSummary' component={AssignmentSummary} />
      <AppStack.Screen name='Create Assignment' component={CreateAssignment} />
      <AppStack.Screen name='Review assignment' component={ReviewAssignment} />
      <AppStack.Screen name='Review Summary' component={ReviewSummary} />
      <AppStack.Screen name='Grading Assignmnet' component={GradingAssignment} />
      <AppStack.Screen name='Grading Summary' component={GradingSummary} />
      <AppStack.Screen name='MyCourse' component={MyCourse} />
      <AppStack.Screen name='CourseDetailCard' component={CourseDetailCard} />



      

    </AppStack.Navigator>
  )
}

export default App
