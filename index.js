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

//Here is index changes to directly run my js file from src_muddaser folder

// /**
//  * @format
//  */

// import { AppRegistry } from 'react-native'
// import App from './src_muddaser/App'
// import { name as appName } from './app.json'

// AppRegistry.registerComponent(appName, () => App)
