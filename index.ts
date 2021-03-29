/**
 * @format
 */
import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import AppProvider from './AppProvider'
import { name as appName } from './app.json'
import { enableScreens } from 'react-native-screens'

enableScreens()

AppRegistry.registerComponent(appName, () => AppProvider)
