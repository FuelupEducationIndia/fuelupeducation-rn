import React,{useState,useRef} from 'react'
import { View, ScrollView, KeyboardAvoidingView,Linking} from 'react-native'
import theme, { Card,Text } from '../../theme'
import { CourseDetailCard, Button, RadioGroup} from '../../components'
// import TeacherImage from '../../assets/images/teacherImage.png'
// import Thumbnail1 from '../../assets/images/thumbnail1.png'
import TeacherImage from '../../assets/images/teacherImage.png'
import Thumbnail1 from '../../assets/images/thumbnail1.png'

import CreateLacture from '../../components/Courses/CreateLacture'
import LactureSummary from '../../components/Lacture_Summary'
const topButtons = ['Archieved Lacture', 'Create Lacture',]
const topButton=['Need to Improve','Good']

const Lectures = (props) => {
  const [activeButton, setActiveButton] = React.useState(topButtons[0])

 
 
  const [change,setChange] = React.useState(0);
  const [change1,setChange1] = React.useState(0);

  const [change2,setChange2] = React.useState(0);
  const [prev,setPrev]=React.useState(1)
  
const onNext = (Value: number) =>
  {
    if(Value == 0){
      setChange(1);
    }
    else if (Value == 1){
      setChange(1);
    }
  
  
  };
  const onNext1 = (Value: number) =>
  {
    if(Value == 0){
      setChange1(1);
    }
    else if (Value == 1){
      setChange1(1);
    }
  
  
  };
  const onNext2 = (Value: number) =>
  {
    if(Value == 0){
      setChange2(1);
    }
    else if (Value == 1){
      setChange2(1);
    }
    
  
  };
  const onPrev = (Value: number) =>
    {
      if(Value == 1){
        setChange(0);
      }
      else if (Value == 0){
        setChange(0);
      }
      
    
    };
    const onPrev_1 = (Value: number) =>
    {
      if(Value == 1){
        setChange1(0);
      }
      else if (Value == 0){
        setChange1(0);
      }
      
    
    };
    const onPrev_2 = (Value: number) =>
    {
      if(Value == 1){
        setChange2(0);
      }
      else if (Value == 0){
        setChange2(0);
      }
      
    
    };
  
  return (
    <ScrollView>
      <Card
        variant='elevated'
        borderRadius='l'
        borderTopLeftRadius='none'
        borderTopRightRadius='none'
        marginBottom='s'
        padding='none'
        backgroundColor='white'>
        <RadioGroup
          options={topButtons}
          activeButton={activeButton}
          buttonStyle={{marginHorizontal:30}}
          onChange={(button: string) => setActiveButton(button)}
        />
      </Card>
      <Card>
        <ScrollView horizontal>
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
              <></>
               )}
               </ScrollView>
      </Card>

      {/* Second radioButton */}

      <View>
      {activeButton == topButtons[1] ? ( 
         <Card>
         
      
         {change1 === 0 ? (
          <CreateLacture onPress={()=>onNext1(1)}/>
           ):null}
                 {change1 === 1 ? (
                   <LactureSummary onPress={()=>onPrev_1(0)}/>
                   ):null} 
          </Card>
             ) : (
              <></>
             )}
        </View>

       
        
            </ScrollView> 
           
  )}
 
     export default Lectures
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
    