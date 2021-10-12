import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme, { Card, Text, Theme } from '../../theme'
import { Dimensions } from 'react-native'
import { ColorProps } from '@shopify/restyle'

interface CountCardProps {
  title: string
  count: number
  backgrounColor: ColorProps<Theme>
}
const CountCard = ({ title, count, backgrounColor }: CountCardProps) => {
  return (
    <Card
      backgroundColor={backgrounColor.color}
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
