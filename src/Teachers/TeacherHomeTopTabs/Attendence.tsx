import React from "react";
import { View,ScrollView} from "react-native";
import theme, { Card,Text } from '../../theme'

import { CourseDetailCard, Button, RadioGroup} from '../../components'
import Take_Attendence from '../../components/Courses/TakeAttendence'
import Historic_Attendence from '../../components/Historic_Attendence'
import Attendence_Summary from "../../components/AttendSummary";
const Attendence1=()=>{
  const topButtons = ['Take Attendence', 'Historic Attendence']

  const [activeButton, setActiveButton] = React.useState(topButtons[0])
  const [change,setChange] = React.useState(0);
  const [change1,setChange1] = React.useState(0);
  const onNext = (Value: number) =>
  {
    if(Value == 0){
      setChange(1);
    }
    else if (Value == 1){
      setChange(1);
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

  return(
    <View>
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
          buttonStyle={{left:10}}
          onChange={(button: string) => setActiveButton(button)}
        />
      </Card>
      <View>
      {activeButton == topButtons[0] ? (   
       <Card>
         {/* <Take_Attendence/> */}
            {change === 0 ? (
          <Take_Attendence onPress={()=>onNext(1)}/>
           ):null}
                 {change === 1 ? (
                   <Historic_Attendence onPress={()=>onPrev(0)}/>
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
         {/* <Historic_Attendence/> */}
      
         {change1 === 0 ? (
          <Historic_Attendence/>
           ):null}
                 {change1 === 1 ? (
                   <Attendence_Summary onPress={()=>onPrev(0)}/>
                   ):null} 
          </Card>
             ) : (
              <></>
             )}
        </View>
        </ScrollView>
    </View>
  
  )
}
export default Attendence1