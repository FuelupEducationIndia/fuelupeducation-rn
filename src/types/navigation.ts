import { RouteProp } from '@react-navigation/native'
import {
  CardStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'
import theme from '../theme'

export interface AppNavigationProps<RouteName extends keyof AppRoutes> {
  navigation: StackNavigationProp<AppRoutes, RouteName>
  route: RouteProp<AppRoutes, RouteName>
}

export type AppRoutes = {
  Authentication: undefined
  Teacher: undefined
}

export interface AuthNavigationProps<RouteName extends keyof AuthRoutes> {
  navigation: StackNavigationProp<AuthRoutes, RouteName>
  route: RouteProp<AuthRoutes, RouteName>
}

export interface TeacherNavigationProps<RouteName extends keyof TeacherRoutes> {
  navigation: BottomTabNavigationProp<TeacherRoutes, RouteName>
  route: RouteProp<TeacherRoutes, RouteName>
}

export interface TeacherHomeTabProps<
  RouteName extends keyof TeacherHomeTabRoutes
> {
  navigation: MaterialTopTabScreenProps<TeacherHomeTabRoutes, RouteName>
  route: RouteProp<TeacherHomeTabRoutes, RouteName>
}

export type AuthRoutes = {
  Start: undefined
  SignupOTP: undefined
  SignIn: undefined
  BasicInfo: undefined
  SignUp: undefined
  SignUpInfo: undefined
  SignUpSuccess: String
}

export type TeacherRoutes = {
  Home: undefined
  Search: undefined
  MyCourse: undefined
  Profile: undefined
  More: undefined
}

export type TeacherHomeTabRoutes = {
  BrowseCourse: undefined
  MyCourse: undefined
  Lectures: undefined
  Exams: undefined
  Assignments: undefined
  Attendance: undefined
  Certificate: undefined
}

export const stackScreenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
}

export const bottomTabBarScreenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: { backgroundColor: theme.colors.primary, height: 65 },
}
