import React from 'react'
import { View, Image, StyleSheet, ImageProps } from 'react-native'
import theme, { Card, Text } from '../../theme'
import BookMarkIcon from '../../assets/svgs/bookmark-icon.svg'
import { Dimensions } from 'react-native'

interface CourseCardProps {
  title: string
  thumbnail: ImageProps
  teacherName: string
}
const CourseCard = ({ title, thumbnail, teacherName }: CourseCardProps) => {
  return (
    <Card
      variant='elevated'
      backgroundColor='white'
      borderRadius='m'
      padding='none'
      width={(Dimensions.get('window').width - 6 * theme.spacing.s) / 2}
      margin='s'>
      <Image style={styles.thumbnail} source={thumbnail} />
      <View style={{ padding: theme.spacing.s }}>
        <View style={styles.title}>
          <Text
            numberOfLines={1}
            style={{ width: '85%' }}
            variant='courseTitle'>
            {title}
          </Text>
          <BookMarkIcon style={{ marginLeft: theme.spacing.s }} />
        </View>
        <Text numberOfLines={1} variant='body' color='darkSilver'>
          By {teacherName}
        </Text>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  thumbnail: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderTopLeftRadius: theme.borderRadii.m,
    borderTopRightRadius: theme.borderRadii.m,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default CourseCard
