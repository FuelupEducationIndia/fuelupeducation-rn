import React from 'react'
import { View, ScrollView } from 'react-native'
import theme, { Card } from '../../theme'
import { CourseDetailCard, Button, RadioGroup } from '../../components'

import TeacherImage from '../../assets/images/teacherImage.png'
import Thumbnail1 from '../../assets/images/thumbnail1.png'

const topButtons = ['Archived Lectures', 'Create Lecture']

const Lectures = () => {
  const [activeButton, setActiveButton] = React.useState(topButtons[0])

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
        <RadioGroup
          options={topButtons}
          activeButton={activeButton}
          onChange={(button: string) => setActiveButton(button)}
        />
      </Card>
      <Card
        variant='elevated'
        borderRadius='l'
        marginBottom='l'
        padding='none'
        backgroundColor='white'>
        <ScrollView horizontal>
          <View
            style={{
              margin: theme.spacing.s,
              display: 'flex',
              flexDirection: 'row',
            }}>
            {activeButton == topButtons[0] ? (
              <>
                {archivedLectures.map((data) => {
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
              </>
            ) : (
              <>
                {createLecture.map((data) => {
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
              </>
            )}
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

const archivedLectures = [
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

const createLecture = [
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
export default Lectures
