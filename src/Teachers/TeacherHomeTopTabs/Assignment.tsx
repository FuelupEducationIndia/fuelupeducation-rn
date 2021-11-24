import React,{useState,useRef} from 'react'
import { View, ScrollView, KeyboardAvoidingView,Linking} from 'react-native'
import theme, { Card,Text } from '../../theme'
import { CourseDetailCard, Button, RadioGroup} from '../../components'

import CreateAssignment from '../../components/Courses/CreateAssignment'
import AssignmentSummary from '../../components/Courses/AssignmentSummary'
import ReviewAssignment from '../../components/Courses/ReviewAssignment'
import ReviewSummary from '../../components/Courses/ReviewSummary'
import GradingAssignment from '../../components/Courses/GradingAssignment'
import GradingSummary from '../../components/Courses/GradingSummary'
const topButtons = ['Create Assignment', 'Review AssignMent','Grading']
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
        marginBottom='l'
        padding='none'
        backgroundColor='white'>
        <RadioGroup
          options={topButtons}
          activeButton={activeButton}
          buttonStyle={{right:10}}
          onChange={(button: string) => setActiveButton(button)}
        />
      </Card>
      <View>
      {activeButton == topButtons[0] ? (   
       <Card>
            {change === 0 ? (
          <CreateAssignment onPress={()=>onNext(1)}/>
           ):null}
                 {change === 1 ? (
                   <AssignmentSummary onPress={()=>onPrev(0)}/>
                   ):null} 
          </Card>
             ) : (
              <></>
               )}
      </View>

      {/* Second radioButton */}

      <View>
      {activeButton == topButtons[1] ? ( 
         <Card>
         
      
         {change1 === 0 ? (
          <ReviewAssignment onPress={()=>onNext1(1)}/>
           ):null}
                 {change1 === 1 ? (
                   <ReviewSummary onPress={()=>onPrev_1(0)}/>
                   ):null} 
          </Card>
             ) : (
              <></>
             )}
        </View>

        <View>
      {activeButton == topButtons[2] ? ( 
         <Card>
         
      
         {change2 === 0 ? (
          <GradingAssignment onPress={()=>onNext2(1)}/>
           ):null}
                 {change2 === 1 ? (
                   <GradingSummary onPress={()=>onPrev_2(0)}/>
                   ):null} 
          </Card>
             ) : (
              <></>
             )}
        </View>
       
        
            </ScrollView> 
           
  )}
 
     export default Lectures
