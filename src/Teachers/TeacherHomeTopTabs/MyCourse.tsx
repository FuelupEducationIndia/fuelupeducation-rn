import React from 'react'
import { View, ScrollView } from 'react-native'
import theme, { Card, Text } from '../../theme'
import { CountCard, CourseDetailCard, Button } from '../../components'

import TeacherImage from '../../assets/images/teacherImage.png'
import Thumbnail1 from '../../assets/images/thumbnail1.png'

const MyCourse = () => {
  const onPrev = () => {
    return
  }
  const onNext = () => {
    return
  }
  return (
    <ScrollView>
      <Card
        variant='elevated'
        borderRadius='l'
        borderTopLeftRadius='none'
        borderTopRightRadius='none'
        marginBottom='l'
        padding='none'
        backgroundColor='white'>
        <Card
          padding='s'
          backgroundColor='silver'
          borderRadius='l'
          marginBottom='s'>
          <Text variant='body' marginVertical='s'>
            This week you have
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <CountCard
              title='Completed course'
              backgrounColor={{ color: 'lightOrange' }}
              count={18}
            />
            <CountCard
              title='Certificate earned'
              backgrounColor={{ color: 'skyBlue' }}
              count={18}
            />
            <CountCard
              title='Course in progress'
              backgrounColor={{ color: 'lightGreen' }}
              count={18}
            />
            <CountCard
              title='Form discussions'
              backgrounColor={{ color: 'skyBlue' }}
              count={18}
            />
          </View>
        </Card>
        <ScrollView horizontal>
          <View
            style={{
              margin: theme.spacing.s,
              display: 'flex',
              flexDirection: 'row',
            }}>
            {data.map((data) => {
              return (
                <CourseDetailCard
                  key={data.id}
                  title={data.title}
                  thumbnail={data.thumbnail}
                  description={data.description}
                  teacherName={data.teacherName}
                  teacherPicture={data.teacherPicture}
                  postDate={data.postDate}
                />
              )
            })}
          </View>
        </ScrollView>
        <View
          style={{
            marginVertical: theme.spacing.s,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Button
            onPress={onPrev}
            variant='default'
            style={{ backgroundColor: 'white' }}
            iconSize={18}
            label='Previous'
            icon='chevron-left'
          />
          <Button
            onPress={onNext}
            variant='default'
            style={{ backgroundColor: 'white' }}
            iconSize={18}
            label='Next'
            icon='chevron-right'
            iconRight={true}
          />
        </View>
      </Card>
    </ScrollView>
  )
}

const data = [
  {
    id: '0',
    title: 'Micro-organisms',
    thumbnail: Thumbnail1,
    teacherName: 'Sarah William',
    teacherPicture: TeacherImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
    postDate: 'Jan 10th, 2021',
  },
  {
    id: '1',
    title: 'Micro-organisms',
    thumbnail: Thumbnail1,
    teacherName: 'Sarah William',
    teacherPicture: TeacherImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
    postDate: 'Jan 10th, 2021',
  },
]
export default MyCourse
