import React from 'react'
import { View } from 'react-native'
import { Text } from '../../theme'

const Blank = () => {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text variant='header'>Blank</Text>
    </View>
  )
}

export default Blank
