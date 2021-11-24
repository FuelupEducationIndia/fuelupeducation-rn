import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { AppRoutes, stackScreenOptions } from './src/types/navigation'
import AuthNavigator from './src/Authentication'
import TeachersNavigator from './src/Teachers'
const AppStack = createStackNavigator<AppRoutes>()

const App = () => {
  React.useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, [])

  return (
    <AppStack.Navigator
      initialRouteName='Teacher'
      screenOptions={stackScreenOptions}>
      <AppStack.Screen name='Authentication' component={AuthNavigator} />
      <AppStack.Screen name='Teacher' component={TeachersNavigator} />
    </AppStack.Navigator>
  )
}

export default App
