import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import theme, { Card, Text } from '../../theme'
import { Button } from '..'

const CourseDetailCard = ({
  title,
  thumbnail,
  teacherName,
  teacherPicture,
  postDate,
  description,
}: any) => {
  return (
    <Card
      variant='elevated'
      backgroundColor='white'
      borderRadius='m'
      padding='none'
      width={250}
      margin='s'>
      <Image style={styles.thumbnail} source={thumbnail} />
      <View style={{ padding: theme.spacing.s }}>
        <Text variant='courseTitle' marginBottom='s'>
          {title}
        </Text>
        <Text variant='body'>{description}</Text>
        <View
          style={{
            marginVertical: theme.spacing.m,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Image style={styles.teacherPicture} source={teacherPicture} />
          <View>
            <Text numberOfLines={1} variant='body'>
              Created by {teacherName}
            </Text>
            <Text variant='slogan' color='darkSilver'>
              Posted on {postDate}
            </Text>
          </View>
        </View>
        <Button variant='primary' marginVertical='s' label='View' />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  thumbnail: {
    width: '100%',
    height: 160,
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
  teacherPicture: {
    height: 35,
    width: 35,
    resizeMode: 'cover',
    marginRight: theme.spacing.s,
  },
})

export default CourseDetailCard
