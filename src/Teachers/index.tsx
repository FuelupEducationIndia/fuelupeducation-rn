import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { TeacherRoutes } from '../types/navigation'
import { HomeTab } from './TeacherScreens'

// Tab Icons import
import HomeIcon from '../assets/svgs/home-icon.svg'
import SearchIcon from '../assets/svgs/search-icon.svg'
import MyCourseIcon from '../assets/svgs/my-course-icon.svg'
import ProfileIcon from '../assets/svgs/profile-icon.svg'
import MoreIcon from '../assets/svgs/more-icon.svg'

const TeachersTab = createBottomTabNavigator<TeacherRoutes>()

const TeachersNavigator = () => (
  <TeachersTab.Navigator
    initialRouteName='Home'
    tabBarOptions={{
      showLabel: false,
      style: {
        backgroundColor: '#380885',
        height: 76,
      },
    }}
    screenOptions={{
      tabBarButton: (props) => (
        <TouchableOpacity activeOpacity={0.6} {...props} />
      ),
    }}>
    <TeachersTab.Screen
      name='Home'
      component={HomeTab}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <HomeIcon fill={focused ? 'white' : '#707070'} />
            <Text style={styles(focused).tabBarLabel}>Home</Text>
          </View>
        ),
      }}
    />
    <TeachersTab.Screen
      name='Search'
      component={HomeTab}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <SearchIcon fill={focused ? 'white' : '#707070'} />
            <Text style={styles(focused).tabBarLabel}>Search</Text>
          </View>
        ),
      }}
    />
    <TeachersTab.Screen
      name='MyCourse'
      component={HomeTab}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <MyCourseIcon fill={focused ? 'white' : '#707070'} />
            <Text style={styles(focused).tabBarLabel}>My Course</Text>
          </View>
        ),
      }}
    />
    <TeachersTab.Screen
      name='Profile'
      component={HomeTab}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <ProfileIcon fill={focused ? 'white' : '#707070'} />
            <Text style={styles(focused).tabBarLabel}>Profile</Text>
          </View>
        ),
      }}
    />
    <TeachersTab.Screen
      name='More'
      component={HomeTab}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <MoreIcon fill={focused ? 'white' : '#707070'} />
            <Text style={styles(focused).tabBarLabel}>More</Text>
          </View>
        ),
      }}
    />
  </TeachersTab.Navigator>
)

const styles = (focused: Boolean) =>
  StyleSheet.create({
    tabBarLabel: {
      fontSize: 12,
      color: focused ? 'white' : '#707070',
    },
  })

export default TeachersNavigator
