import React from "react";
import { View } from "react-native";
import theme, { Box, Card,Text } from '../theme'
import Board_Uni_Att from '../components/DropDownBoardUniAtt'
import Couse_att from '../components/DropDownCourAtt'
import DropDownWeekly from '../components/DropDownWeekly'
import Attendence_Summ from '../components/AttendSummary'
import { TouchableOpacity } from "react-native-gesture-handler";
const Historic_Attendence=(props)=>{
  return(
    <Card
    variant='elevated'
    borderRadius='l'
    marginBottom='m'
    padding='none'
    backgroundColor='white'>
   
    
       <View
      style={{
       marginVertical: theme.spacing.m,
       display: 'flex',
       justifyContent: 'center',
     }}>
    <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,top:10,marginHorizontal:20},
       ]}>
     Board/University
     <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.secondary, fontSize:18,top:10,marginHorizontal:20},
       ]}>
     *    
   </Text>
   </Text>
</View>
<View>
       <Board_Uni_Att/>
</View>
<View style={{marginVertical:10}}>
<Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,top:10,marginHorizontal:20},
       ]}>
     Course
     <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.secondary, fontSize:18,top:10,marginHorizontal:20},
       ]}>
     *    
   </Text>
   </Text>
</View>
<View style={{marginVertical:10}}>
  <Couse_att/>
</View>
<View>
<Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,top:10,marginHorizontal:20},
       ]}>
     Mode
     <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.secondary, fontSize:18,top:10,marginHorizontal:20},
       ]}>
     *    
   </Text>
   </Text>
</View>
<View style={{marginVertical:20}}>
<DropDownWeekly/>
</View>
<Card
    variant='elevated'
    borderRadius='l'
    marginBottom='m'
    padding='none'
    backgroundColor='white'>
      <View style={{marginVertical:10}}>
        <Attendence_Summ/>
      </View>
</Card>
<View style={{marginVertical:10}}>
       <TouchableOpacity onPress={props.onPress}
        style={{height:40,width:170,bottom:10,marginHorizontal:90,backgroundColor:'#380885',borderRadius:20,justifyContent:'center'}}>
       <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.white, fontSize:17,textAlign:'center'},
       ]}>
     Live Lacture
   </Text>
       </TouchableOpacity>
</View>

</Card>
  )
}
export default Historic_Attendence