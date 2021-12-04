import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { AppRoutes, stackScreenOptions } from './src/types/navigation'
import AuthNavigator from './src/Authentication'
import TeachersNavigator from './src/Teachers'
import { CompletedProfile,} from './src/Teachers/TeacherBottomTabs'
import { AssignmentSummary } from './src/components/Courses'
import { CreateAssignment } from './src/components/Courses'
import { ReviewSummary } from './src/components/Courses'
import { ReviewAssignment } from './src/components/Courses'
import { GradingSummary } from './src/components/Courses'
import { GradingAssignment } from './src/components/Courses'
import { MyCourse } from './src/Teachers/TeacherHomeTopTabs'
import { CourseDetailCard } from './src/components'
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
      <AppStack.Screen name='AssignmentSummary' component={AssignmentSummary} />
      <AppStack.Screen name='Create Assignment' component={CreateAssignment} />
      <AppStack.Screen name='Review assignment' component={ReviewAssignment} />
      <AppStack.Screen name='Review Summary' component={ReviewSummary} />
      <AppStack.Screen name='Grading Assignmnet' component={GradingAssignment} />
      <AppStack.Screen name='Grading Summary' component={GradingSummary} />
      <AppStack.Screen name='MyCourse' component={MyCourse} />
      <AppStack.Screen name='CourseDetailCard' component={CourseDetailCard} />
      <AppStack.Screen name='CompletedProfile' component={CompletedProfile} />





      

    </AppStack.Navigator>
  )
}

export default App
