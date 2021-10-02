import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { BrowseCourse } from '../TeacherHomeTopTabs/index'
import { TeacherHomeTabRoutes } from '../../types/navigation'

const TeacherHomeTopTab = createMaterialTopTabNavigator<TeacherHomeTabRoutes>()

const HomeTab = () => {
  return (
    <TeacherHomeTopTab.Navigator>
      <TeacherHomeTopTab.Screen name='BrowseCourse' component={BrowseCourse} />
      <TeacherHomeTopTab.Screen name='MyCourse' component={BrowseCourse} />
      <TeacherHomeTopTab.Screen name='Lectures' component={BrowseCourse} />
      <TeacherHomeTopTab.Screen name='Exams' component={BrowseCourse} />
      <TeacherHomeTopTab.Screen name='Assignments' component={BrowseCourse} />
      <TeacherHomeTopTab.Screen name='Attendance' component={BrowseCourse} />
    </TeacherHomeTopTab.Navigator>
  )
}

export default HomeTab
