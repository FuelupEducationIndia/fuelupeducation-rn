import React, { Component,useState } from 'react'
// import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme, { Card, Box } from '../../theme'
// import DrawerIcon from '../../assets/svgs/drawer-icon.svg'
import TopHero from '../../assets/svgs/top-hero.svg'
import DrawerIcon from '../../assets/svgs/drawer-icon.svg'
import { Text } from '../../theme'
import { View,TextInput,StyleSheet,Switch,Modal,Linking,Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Create_Schedule from '../../components/schedule/CreateSchedule'
const Schedule=({navigation})=>{
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
 <TouchableOpacity onPress={()=>navigation.openDrawer()}
        style={{height:45,width:55, marginHorizontal:40,bottom:20,
        justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <DrawerIcon style={{right:10}}/>
        </TouchableOpacity>
        <TopHero style={{right:40}} />
<Box
  style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',right:20
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
<View>
    <Create_Schedule/>
</View>
</>
  )
}
export default Schedule