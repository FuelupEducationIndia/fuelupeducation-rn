import React from "react";
import { View } from "react-native";
import { CourseDetailCard, Button, RadioGroup} from '../../components'
import theme, { Card,Text } from '../../theme'

import CreateQuiz from '../../components/CreateQuiz'
import CreateQuizSummary from "../CreateQuizSummary";
import Recommended_Post from "../../components/Recommended_Post";
import Recommended_Reading from '../../components/Recommended_Reading'
import Recommeneded_Summary from '../../components/Recommendation_Summary'
import Recommended_Post_Summary from '../Reccommended_Post_Summary'
import Create_Quiz_Summary from '../Create_Quiz_Summary'
const Prep_Meterial=()=>{
  const topButtons = ['Create Quiz', 'Recommended Reading','Recommended PodCast']

    const [activeButton, setActiveButton] = React.useState(topButtons[0])

    const [change,setChange] = React.useState(0);
  const [change1,setChange1] = React.useState(0);

  const [change2,setChange2] = React.useState(0);

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
  return(
    <View style={{height:'auto',backgroundColor:'white'}}>
      <View>
         <RadioGroup
          options={topButtons}
          activeButton={activeButton}
          buttonStyle={{right:10}}
          
          onChange={(button: string) => setActiveButton(button)}
        />
        </View>
        <View>
      {activeButton == topButtons[0] ? ( 
        <Card>
        {change === 0 ? (
           
          <CreateQuiz  onPress={()=>onNext(1)}/>
          ):null}
                 {change === 1 ? (
                   <Create_Quiz_Summary onPress={()=>onPrev(0)}/>
                   ):null}
            
          </Card>  
          
             ) : (
              <></>
               )}
               {activeButton == topButtons[1] ? (   
                 <Card height={1000}>
                           {change1 === 0 ? (
             <Recommended_Reading onPress={()=>onNext1(1)}/>
             ):null}
             {change1 === 1 ? (
               <Recommeneded_Summary onPress={()=>onPrev_1(0)}/>
               ):null}

             </Card>       
          ) : (
           <></>
            )}
             {activeButton == topButtons[2] ? (  
               <Card>
              {change2 === 0 ? (
             <Recommended_Post onPress={()=>onNext2(1)}/> 
             ):null}
             {change2 === 1 ? (
               <Recommended_Post_Summary onPress={()=>onPrev_2(0)}/>
               ):null}
                </Card>
          ) : (
           <></>
            )}
      </View>

    </View>
  )
}
export default Prep_Meterial