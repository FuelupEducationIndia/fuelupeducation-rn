import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {
  BrowseCourse,
  MyCourse,
  Lectures,
  Blank,
  Exam,
  Assignment,
  Certificate,
  Attendence,
} from '../TeacherHomeTopTabs/index'
import { TeacherHomeTabRoutes } from '../../types/navigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme, { Card, Box } from '../../theme'
import DrawerIcon from '../../assets/svgs/drawer-icon.svg'
import TopHero from '../../assets/svgs/top-hero.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'
const TeacherHomeTopTab = createMaterialTopTabNavigator<TeacherHomeTabRoutes>()

const HomeTab = ({navigation}) => {
  
  return (
    <>
      <SafeAreaView style={{ backgroundColor: theme.colors.primary }}>

        <Card padding='s'>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
         <TouchableOpacity 
        style={{height:45,width:45,left:30,
        justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <DrawerIcon/>
        </TouchableOpacity>
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
          component={Exam}
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
          component={Assignment}
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
          component={Attendence}
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
          component={Certificate}
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






