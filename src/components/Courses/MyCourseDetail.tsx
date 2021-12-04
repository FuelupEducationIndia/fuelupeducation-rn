import React from "react";
import { View, ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native'
import theme, { Card, Text } from '../../theme'
import { CountCard, CourseDetailCard, Button } from '../../components'

const MyCourseDetail=(props)=>{
  return(
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
            </View>
            <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
         
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

    <ScrollView>
  <View style={{flexDirection:'row'}}>
 <Card
      variant='elevated'
      backgroundColor='white'
      borderRadius='m'
      padding='none'
      width={250}
      height={450}
      margin='s'>
        <View>
          <Image source={require("../../assets/images/thumbnail1.png")}   style={styles.thumbnail}>
    </Image>
    </View>
    <View style={{marginVertical:10}}>
        <Text style={styles.title}>Micro-organisms</Text>
    </View>
    <View style={{marginVertical:10}}>
        <Text style={styles.thumbnailText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</Text>
    </View>
    <View style={{flexDirection:'row',marginVertical:90,marginHorizontal:20}}>
    <Image source={require("../../assets/images/teacherImage.png")}   style={{height:40,width:40}}/>
      <View style={{flexDirection:'column'}}>
        <Text style={{marginHorizontal:10,top:10}}>Created by Sarah William</Text>
        <Text style={{marginHorizontal:10,top:10,fontSize:10,color:'#707070'}}>Posted on Jan 10th, 2021</Text>
      </View>
    </View>
    <View style={{bottom:50}}>
      <TouchableOpacity onPress={props.onPress}
      style={{marginHorizontal:10,backgroundColor:'#380885',height:40,width:120,justifyContent:'center',alignContent:'center',borderRadius:20}}>
      <Text
style={[
  theme.textVariants.body,
  { color: theme.colors.white, fontSize:18,textAlign:'center'},
]}>
View
</Text>    
  </TouchableOpacity>
    </View>
        </Card>
        <Card
      variant='elevated'
      backgroundColor='white'
      borderRadius='m'
      padding='none'
      width={250}
      height={450}
      margin='s'>
        <View>
          <Image source={require("../../assets/images/thumbnail1.png")}   style={styles.thumbnail}>
    </Image>
    </View>
    <View style={{marginVertical:10}}>
        <Text style={styles.title}>Micro-organisms</Text>
    </View>
    <View style={{marginVertical:10}}>
        <Text style={styles.thumbnailText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</Text>
    </View>
    <View style={{flexDirection:'row',marginVertical:90,marginHorizontal:20}}>
    <Image source={require("../../assets/images/teacherImage.png")}   style={{height:40,width:40}}/>
      <View style={{flexDirection:'column'}}>
        <Text style={{marginHorizontal:10,top:10}}>Created by Sarah William</Text>
        <Text style={{marginHorizontal:10,top:10,fontSize:10,color:'#707070'}}>Posted on Jan 10th, 2021</Text>
      </View>
    </View>
    <View style={{bottom:50}}>
      <TouchableOpacity onPress={props.onPress}
      style={{marginHorizontal:10,backgroundColor:'#380885',height:40,width:120,justifyContent:'center',alignContent:'center',borderRadius:20}}>
      <Text
style={[
  theme.textVariants.body,
  { color: theme.colors.white, fontSize:18,textAlign:'center'},
]}>
View
</Text>    
  </TouchableOpacity>
    </View>
        </Card> 
     </View>
     </ScrollView>
     </ScrollView>
     </Card>
     </ScrollView>
  )
}
export default MyCourseDetail
const styles = StyleSheet.create({
  thumbnail: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    borderTopLeftRadius: theme.borderRadii.m,
    borderTopRightRadius: theme.borderRadii.m,
  },
  thumbnailText: {
    position: 'absolute',
    width: '100%',
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.m,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize:17,
    marginHorizontal:20
  },
  teacherPicture: {
    height: 35,
    width: 35,
    resizeMode: 'cover',
    marginRight: theme.spacing.s,
  },
  eclips: {
    width: 20,
    height: 20,
    backgroundColor: '#F16600',
    borderRadius: 10,
    position: 'absolute',
    zIndex: 1,
    right: 20,
    marginTop: -5,
  },
})
