import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { TeacherRoutes } from '../types/navigation'
import { HomeTab } from './TeacherBottomTabs'
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
    defaultScreenOptions={{}}
    screenOptions={{
      tabBarButton: (props) => (
        <TouchableOpacity activeOpacity={0.6} {...props} />
      ),
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: { backgroundColor: theme.colors.primary, height: 65 },
    }}>
    <TeachersTab.Screen
      name='Home'
      component={HomeTab}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <HomeIcon
              fill={focused ? theme.colors.white : theme.colors.darkSilver}
            />
            <Text
              style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
              Home
            </Text>
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
            <SearchIcon
              fill={focused ? theme.colors.white : theme.colors.darkSilver}
            />
            <Text
              style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
              Search
            </Text>
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
            <MyCourseIcon
              fill={focused ? theme.colors.white : theme.colors.darkSilver}
            />
            <Text
              style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
              My Course
            </Text>
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
            <ProfileIcon
              fill={focused ? theme.colors.white : theme.colors.darkSilver}
            />
            <Text
              style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
              Profile
            </Text>
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
            <MoreIcon
              fill={focused ? theme.colors.white : theme.colors.darkSilver}
            />
            <Text
              style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
              More
            </Text>
          </View>
        ),
      }}
    />
  </TeachersTab.Navigator>
)

const styles = (focused: Boolean) =>
  StyleSheet.create({
    tabBarLabel: {
      color: focused ? theme.colors.white : theme.colors.darkSilver,
    },
  })

export default TeachersNavigator
