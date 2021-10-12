import React from 'react'
import { View, Image, StyleSheet, ImageProps } from 'react-native'
import theme, { Card, Text } from '../../theme'
import { Button } from '..'

interface CourseDetailCardProps {
  title: string
  thumbnail: ImageProps
  teacherPicture: ImageProps
  teacherName: string
  postDate: string
  description: string
  cretLec?: boolean
  thumbnailTitle?: string
}

const CourseDetailCard = ({
  title,
  thumbnail,
  teacherName,
  teacherPicture,
  postDate,
  description,
  cretLec,
  thumbnailTitle,
}: CourseDetailCardProps) => {
  return (
    <Card
      variant='elevated'
      backgroundColor='white'
      borderRadius='m'
      padding='none'
      width={250}
      margin='s'>
      {cretLec ? <View style={styles.eclips}></View> : null}
      <Image style={styles.thumbnail} source={thumbnail} />
      <View style={styles.thumbnailText}>
        <Text variant='button' textAlign='center' style={{ zIndex: 1 }}>
          {thumbnailTitle}
        </Text>
      </View>
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
        <Button
          alignSelf='flex-start'
          paddingHorizontal='m'
          variant='primary'
          marginVertical='s'
          label={cretLec ? 'Enter' : 'View'}
        />
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
  thumbnailText: {
    position: 'absolute',
    width: '100%',
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.m,
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
  eclips: {
    width: 20,
    height: 20,
    backgroundColor: '#F16600',
    borderRadius: 10,
    position: 'absolute',
    zIndex: 1,
    right: 20,
    marginTop: -5,
  },
})

export default CourseDetailCard
