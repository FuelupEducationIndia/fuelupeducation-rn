import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AuthRoutes, stackScreenOptions } from '../types/navigation'
import StartScreen from './StartScreen'
import { SignupOTP } from './Signups'

const AuthStack = createStackNavigator<AuthRoutes>()

const AuthNavigator = () => (
  <AuthStack.Navigator headerMode='none' screenOptions={stackScreenOptions}>
    <AuthStack.Screen name='Start' component={StartScreen} />
    <AuthStack.Screen name='SignupOTP' component={SignupOTP} />
  </AuthStack.Navigator>
)

export default AuthNavigator
