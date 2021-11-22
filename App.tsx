import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { AppRoutes, stackScreenOptions } from './src/types/navigation'
import AuthNavigator from './src/Authentication'
import TeachersNavigator from './src/Teachers'
import Profiletab from './src/Teachers/TeacherBottomTabs/Profiletab'
import { MainProfiletab } from './src/Teachers/TeacherBottomTabs'
import { AssignmentSummary } from './src/components/Courses'
import { CreateAssignment } from './src/components/Courses'
import { ReviewSummary } from './src/components/Courses'
import { ReviewAssignment } from './src/components/Courses'
import { GradingSummary } from './src/components/Courses'
import { GradingAssignment } from './src/components/Courses'
import CreateQuiz from './src/components/CreateQuiz'
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


      

    </AppStack.Navigator>
  )
}

export default App
