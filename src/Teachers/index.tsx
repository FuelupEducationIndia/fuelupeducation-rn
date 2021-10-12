import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { bottomTabBarScreenOptions } from '../types/navigation'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from '../theme'
import { TeacherRoutes } from '../types/navigation'
import { HomeTab, DemoTab } from './TeacherBottomTabs'
import theme from '../theme'

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
    screenOptions={{
      tabBarButton: (props) => (
        <TouchableOpacity activeOpacity={0.6} {...props} />
      ),
      ...bottomTabBarScreenOptions,
    }}>
    <TeachersTab.Screen
      name='Home'
      component={HomeTab}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <HomeIcon fill={color(focused)} />
            <Text variant='body' color={focused ? 'white' : 'darkSilver'}>
              Home
            </Text>
          </View>
        ),
      }}
    />
    <TeachersTab.Screen
      name='Search'
      component={DemoTab}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <SearchIcon fill={color(focused)} />
            <Text variant='body' color={focused ? 'white' : 'darkSilver'}>
              Search
            </Text>
          </View>
        ),
      }}
    />
    <TeachersTab.Screen
      name='MyCourse'
      component={DemoTab}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <MyCourseIcon fill={color(focused)} />
            <Text variant='body' color={focused ? 'white' : 'darkSilver'}>
              My Course
            </Text>
          </View>
        ),
      }}
    />
    <TeachersTab.Screen
      name='Profile'
      component={DemoTab}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <ProfileIcon fill={color(focused)} />
            <Text variant='body' color={focused ? 'white' : 'darkSilver'}>
              Profile
            </Text>
          </View>
        ),
      }}
    />
    <TeachersTab.Screen
      name='More'
      component={DemoTab}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <MoreIcon fill={color(focused)} />
            <Text variant='body' color={focused ? 'white' : 'darkSilver'}>
              More
            </Text>
          </View>
        ),
      }}
    />
  </TeachersTab.Navigator>
)

const color = (focused: boolean) => {
  return focused ? theme.colors.white : theme.colors.darkSilver
}
export default TeachersNavigator
