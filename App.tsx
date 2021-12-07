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
import AppStack1 from './src/components/Navigation/AppStack'
import Authstack from './src/components/Navigation/AuthStack'
import { NavigationContainer } from '@react-navigation/native'
const AppStack = createStackNavigator<AppRoutes>()

const App = () => {
  React.useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, [])

  return (
    
    <NavigationContainer independent={true} >
        <AppStack1/>
        {/* <Authstack/> */}
    </NavigationContainer>
  )
}

export default App
