import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { AppRoutes, stackScreenOptions } from './src/types/navigation'
import AuthNavigator from './src/Authentication'
import TeachersNavigator from './src/Teachers'
import Profiletab from './src/Teachers/TeacherBottomTabs/Profiletab'
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

    </AppStack.Navigator>
  )
}

export default App
