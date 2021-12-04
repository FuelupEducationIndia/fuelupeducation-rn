import React from 'react'
import { View, ScrollView } from 'react-native'
import theme, { Card, Text } from '../../theme'
import { CountCard, CourseDetailCard, Button } from '../../components'
import TeacherImage from '../../assets/images/teacherImage.png'
import Thumbnail1 from '../../assets/images/thumbnail1.png'
import MyCourse1 from '../TeacherBottomTabs/MyCourse'
import MyCourseDetail from '../../components/Courses/MyCourseDetail'

const MyCourse = () => {
  const [change,setChange] = React.useState(0);
  const [prev,setPrev]=React.useState(1)

  const onNext = (Value: number) =>
    {
      if(Value == 0){
        setChange(1);
      }
      else if (Value == 1){
        setChange(1);
      }
    }
    const onPrev = (Value: number) =>
    {
      if(Value == 1){
        setChange(0);
      }
      else if (Value == 0){
        setChange(0);
      }
      
    
    };
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
          <View>
           {change === 0 ? (
              <MyCourseDetail onPress={()=>onNext(1)}/>
              ):null}
           {change === 1 ? (
            <MyCourse1 onPress1={()=>onPrev(0)}/>
           ):null} 
          </View>
        <View
          style={{
            marginVertical: theme.spacing.s,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Button
            onPress={()=>onPrev(0)}
            variant='default'
            style={{ backgroundColor: 'white' }}
            iconSize={18}
            label='Previous'
            icon='chevron-left'
          />
          <Button
            onPress={()=>onNext(1)}
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
    title: 'Solar System',
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
