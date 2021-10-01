import { RouteProp } from '@react-navigation/native'
import {
  CardStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

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
}

export const stackScreenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}
