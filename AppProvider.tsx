import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from '@shopify/restyle'
import App from './App'
import theme from './src/theme'

const AppProvider = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} barStyle='light-content' />
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default AppProvider
