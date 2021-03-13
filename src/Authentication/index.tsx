import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AuthRoutes, stackScreenOptions } from '../types/navigation'
import StartScreen from './StartScreen'
import { SignupOTP } from './Signups'
import BasicInfo from './Signups/BasicInfo'
import { SignIn } from './SignIn'

const AuthStack = createStackNavigator<AuthRoutes>()

const AuthNavigator = () => (
  <AuthStack.Navigator headerMode='none' screenOptions={stackScreenOptions}>
    <AuthStack.Screen name='Start' component={StartScreen} />
    <AuthStack.Screen name='SignIn' component={SignIn} />
    <AuthStack.Screen name='SignupOTP' component={SignupOTP} />
    <AuthStack.Screen name='BasicInfo' component={BasicInfo} />
  </AuthStack.Navigator>
)

export default AuthNavigator
