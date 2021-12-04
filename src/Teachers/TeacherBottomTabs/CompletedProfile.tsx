import React, { Component,useState } from 'react'
// import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme, { Card, Box } from '../../theme'
// import DrawerIcon from '../../assets/svgs/drawer-icon.svg'
import TopHero from '../../assets/svgs/top-hero.svg'
import DrawerIcon from '../../assets/svgs/drawer-icon.svg'
import Editbtn from '../../assets/svgs/Edit.svg'
import Userbtn from '../../assets/svgs/User.svg'
import { Text } from '../../theme'
import { View,TextInput,StyleSheet,Switch,Modal,Linking,Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { MainProfile,Profile } from '../../components/Courses'
const CompletedProfile=()=>{
    const [change,setChange] = React.useState(0);
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
    <>
    <SafeAreaView style={{ backgroundColor: theme.colors.primary }}>
    <Card padding='s'>
<Box
style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
}}>
  <TouchableOpacity 
style={{height:35,width:35,left:30,
justifyContent:'center',alignContent:'center',alignItems:'center'}}>
<DrawerIcon/>
</TouchableOpacity>
<TopHero />
<Box
  style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',
  }}>
  <Text
    style={[
      theme.textVariants.title,
      { color: theme.colors.white },
    ]}
    numberOfLines={1}>
    Welcome Sheela!
  </Text>
  <Text
    style={[
      theme.textVariants.body,
      { color: theme.colors.white, paddingHorizontal: 10 },
    ]}>
    Check What's up with your Schedule...!
  </Text>
</Box>
</Box>
</Card>

</SafeAreaView>
<View style={{height:550}}>
{change === 0 ? (
<MainProfile onPress={()=>onNext(1)}/>
 ):null}
  {change === 1 ? (
<Profile onPress={()=>onPrev(0)}/>
 ):null} 

</View>
</>
  )
}
export default CompletedProfile