import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { TeacherRoutes } from '../types/navigation'
import { HomeTab } from './TeacherScreens'

const TeachersTab = createBottomTabNavigator<TeacherRoutes>()

const TeachersNavigator = () => (
  <TeachersTab.Navigator initialRouteName='Home'>
    <TeachersTab.Screen name='Home' component={HomeTab} />
  </TeachersTab.Navigator>
)

export default TeachersNavigator
