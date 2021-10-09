import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme, { Card, Text } from '../../theme'
import { Dimensions } from 'react-native'
import { Theme } from '@react-navigation/native'

const CountCard = ({ title, count, backgroundColor }: Theme & any) => {
  return (
    <Card
      backgroundColor={backgroundColor}
      borderRadius='m'
      padding='s'
      width={(Dimensions.get('window').width - 6 * theme.spacing.s) / 2}
      margin='s'>
      <View style={styles.container}>
        <Text variant='courseTitle' color='primary'>
          {title}
        </Text>
        <Text variant='courseTitle' color='primary'>
          {count}
        </Text>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CountCard
