import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { BrowseCourse, MyCourse, Lectures } from '../TeacherHomeTopTabs/index'
import { TeacherHomeTabRoutes } from '../../types/navigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme, { Card, Box } from '../../theme'

import DrawerIcon from '../../assets/svgs/drawer-icon.svg'
import TopHero from '../../assets/svgs/top-hero.svg'

const TeacherHomeTopTab = createMaterialTopTabNavigator<TeacherHomeTabRoutes>()

const HomeTab = () => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: theme.colors.primary }}>
        <DrawerIcon style={{ position: 'absolute', top: 70, left: 20 }} />
        <Card padding='s'>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TopHero />
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '50%',
              }}>
              <Text
                style={[
                  theme.textVariants.title,
                  { color: theme.colors.white },
                ]}
                numberOfLines={1}>
                Welcome Sheela!
              </Text>
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.white, paddingHorizontal: 10 },
                ]}>
                Check What's up with your Schedule...!
              </Text>
            </Box>
          </Box>
        </Card>
      </SafeAreaView>
      <TeacherHomeTopTab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarItemStyle: { width: 'auto' },
          tabBarStyle: {
            backgroundColor: theme.colors.primary,
          },
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.secondary,
            marginBottom: 8,
          },
          tabBarScrollEnabled: true,
          tabBarBounces: true,
        }}>
        <TeacherHomeTopTab.Screen
          name='BrowseCourse'
          component={BrowseCourse}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={styles(focused).tabBarLabel}>Browse Course</Text>
            ),
          }}
        />
        <TeacherHomeTopTab.Screen
          name='MyCourse'
          component={MyCourse}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
                My Course
              </Text>
            ),
          }}
        />
        <TeacherHomeTopTab.Screen
          name='Lectures'
          component={Lectures}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
                Lectures
              </Text>
            ),
          }}
        />
        <TeacherHomeTopTab.Screen
          name='Exams'
          component={BrowseCourse}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
                Exams
              </Text>
            ),
          }}
        />
        <TeacherHomeTopTab.Screen
          name='Assignments'
          component={BrowseCourse}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
                Assignments
              </Text>
            ),
          }}
        />
        <TeacherHomeTopTab.Screen
          name='Attendance'
          component={BrowseCourse}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
                Attendance
              </Text>
            ),
          }}
        />
        <TeacherHomeTopTab.Screen
          name='Certificate'
          component={BrowseCourse}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={[theme.textVariants.body, styles(focused).tabBarLabel]}>
                Certificate
              </Text>
            ),
          }}
        />
      </TeacherHomeTopTab.Navigator>
    </>
  )
}

const styles = (focused: Boolean) =>
  StyleSheet.create({
    tabBarLabel: {
      color: focused ? theme.colors.white : theme.colors.offBlue,
      textAlign: 'center',
    },
  })

export default HomeTab
