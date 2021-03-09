import { RouteProp } from '@react-navigation/native'
import {
  CardStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack'

export interface AppNavigationProps<RouteName extends keyof AppRoutes> {
  navigation: StackNavigationProp<AppRoutes, RouteName>
  route: RouteProp<AppRoutes, RouteName>
}

export type AppRoutes = {
  Authentication: undefined
}

export interface AuthNavigationProps<RouteName extends keyof AuthRoutes> {
  navigation: StackNavigationProp<AuthRoutes, RouteName>
  route: RouteProp<AuthRoutes, RouteName>
}

export type AuthRoutes = {
  Start: undefined
  SignupOTP: undefined
}

export const stackScreenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}
