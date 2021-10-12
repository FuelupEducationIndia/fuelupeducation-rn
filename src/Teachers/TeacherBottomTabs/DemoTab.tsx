import React from 'react'
import { View } from 'react-native'
import { Text } from '../../theme'

const DemoTab = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text variant='header'>DemoTab</Text>
    </View>
  )
}

export default DemoTab
