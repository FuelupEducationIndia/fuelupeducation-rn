import React from 'react'
import { View,  StyleSheet, TextInput ,TouchableOpacity ,Dimensions,Image} from 'react-native'
import theme, {  Text } from '../../theme'
import { Slider } from 'react-native-elements'
import CertificateProDrop from '../certificateProDrop'
import DatePicker from 'react-native-datepicker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CertiStuIDrop from '../../components/CertiStuIDrop'
import CertiStuCourDrop from '../../components/CertiStuCouDrop'
const CertificateStudentInfo = (props)=>{

const width = Dimensions.get('window').width - 40;
const width1 = Dimensions.get('window').width - 310 ;
const h1 = Dimensions.get('window').width - 380 ;
const [date, setDate] = React.useState()



  return (
    
  <View style={styles.container}>
    <View>
    <Text style={styles.text}>Enter Student Information</Text>
    </View>
    <View style={{height:1,width:'100%',backgroundColor:'lightgrey',marginTop:10}}></View>
 <View>
 <View style={{marginVertical:10}}>
         <View style={{flexDirection:'row',marginHorizontal:10}}>
            <Text style={{color:'#380885',}}>Student Name
              <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
            <Text style={{color:'#380885',paddingLeft:75,}}>Student ID 
              <Text style={{color:theme.colors.secondary,marginLeft:13}}>*</Text> </Text>
            
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <TextInput 
          // placeholder='Type institution address here...'
            style={{
              padding:13,
              height:40,
              width:145,
              marginHorizontal:10,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
              top:5,

            }}    
         />
         <TextInput 
           placeholder='A01012345'
            style={{
              padding:10,
              height:40,
              width:145,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
              top:5,

            }}    
         />
         
     
         </View>
         </View>
         <View style={{marginVertical:10}}>
         <View style={{flexDirection:'row',}}>
            <Text style={{color:'#380885',marginHorizontal:10}}>Father Name 
             <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
            <Text style={{color:'#380885',paddingLeft:75,}}>Mother Name
               <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
            
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <TextInput 
          // placeholder='Type institution address here...'
            style={{
              padding:13,
              height:40,
              width:145,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
              top:4,
              marginHorizontal:10

            }}    
         />
         <TextInput 
          // placeholder='Type institution address here...'
            style={{
              padding:13,
              height:40,
              width:145,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
              top:4,

            }}    
         />
         
     
         </View>
         </View>
         <View style={{marginVertical:10}}>
         <View style={{flexDirection:'row',marginHorizontal:10}}>
            <Text style={{color:'#380885',}}>Semester 
             <Text style={{color:theme.colors.secondary,marginLeft:13}}>*</Text> </Text>
            <Text style={{color:'#380885',paddingLeft:105,}}>Course 
              <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
            
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <CertiStuIDrop/>
         <CertiStuCourDrop/>
         
     
         </View>
         </View>
         <View style={{marginVertical:10}}>
         <View style={{flexDirection:'row',}}>
            <Text style={{color:'#380885',marginHorizontal:10}}>Start  <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
            <Text style={{color:'#380885',paddingLeft:120,}}>End  
             <Text style={{color:theme.colors.secondary,marginLeft:13}}>*</Text> </Text>
            
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between',top:5}}>
         <DatePicker
            style={{ height:40,left:10,
            width:135,
            backgroundColor:'rgba(209, 214, 255, 0.5)',
            borderRadius: 10}}
            date={date}
            mode='date'
            placeholder='DD-MM-YYYY'
            format='DD-MM-YYYY'
            minDate='1970-01-01'
            maxDate='2016-06-01'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            customStyles={{
              dateInput: {
                marginLeft: '3%',
                borderWidth: 0,
                borderBottomWidth: 0,
                alignItems: 'flex-start',
                paddingLeft: 4,
                marginHorizontal:10
              },
            }}
            iconComponent={
              <MaterialCommunityIcons size={26} name='calendar-range' style={{paddingRight:10,color:theme.colors.darkSilver}} />
            }
            onDateChange={(datStr: String, date: Date) => {
              setDate(date)
            }}
          />
         {/* <CertificateProDrop/>      */}
         <DatePicker
            style={{ height:40,
            width:135,
            backgroundColor:'rgba(209, 214, 255, 0.5)',
            borderRadius: 10,right:5}}
            date={date}
            mode='date'
            placeholder='DD-MM-YYYY'
            format='DD-MM-YYYY'
            minDate='1970-01-01'
            maxDate='2016-06-01'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            customStyles={{
              dateInput: {
                marginLeft: '3%',
                borderWidth: 0,
                borderBottomWidth: 0,
                alignItems: 'flex-start',
                paddingLeft: 4,
              },
            }}
            iconComponent={
              <MaterialCommunityIcons size={26} name='calendar-range' style={{paddingRight:10,color:theme.colors.darkSilver}} />
            }
            onDateChange={(datStr: String, date: Date) => {
              setDate(date)
            }}
          />
         </View>
         </View>
         <View style={{marginVertical:10}}>
         <View style={{flexDirection:'row',}}>
            <Text style={{color:'#380885',marginHorizontal:10}}>Total Credit  <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
            <Text style={{color:'#380885',paddingLeft:80,}}>Grade   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
            
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <TextInput 
          // placeholder='Type institution address here...'
            style={{
              padding:13,
              height:40,
              width:135,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
              top:5,
              marginHorizontal:10

            }}    
         />
         <TextInput 
          placeholder='-/100%'
            style={{
              padding:13,
              height:40,
              width:135,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
              top:4,
              marginRight:5

            }}    
         />
     
         </View>
         </View>
 </View>
   
<View style={{flexDirection:'row',position:'relative',left:100,paddingTop:40}}>
            <TouchableOpacity
            style={{marginVertical:theme.spacing.xl,backgroundColor:'#380885',width:100,height:30,borderRadius:20,}}
         onPress={props.onPress}>
         <Text style={{color:'white',textAlign:'center',fontSize:15,top:4.5}}>Next</Text>
          </TouchableOpacity>
          <View style={{marginVertical:theme.spacing.xl,}}>
          <TouchableOpacity
            style={{backgroundColor:'white',width:90,height:30,borderRadius:20,marginHorizontal:20}}>
         <Text style={{color:'#380885',}}>Save for Later</Text>
         <Text
          style={[
          theme.textVariants.body,
          { color: theme.colors.primary, fontSize:15,bottom:12}]}>
___________</Text>
          </TouchableOpacity>
        </View>
          </View>
        
  </View>

  )
}

const styles = StyleSheet.create({
  container : {
marginHorizontal:5,
    flex:1
  },
  text : {
    justifyContent:'center',
textAlign:'center',
    fontSize:17,
    fontWeight:'bold',
  },
  view2 : {
flex:0.3,
backgroundColor:'grey',
width:380
  },
  text2:{
    fontSize:15,
    color:'#3F148D',
    marginHorizontal:10,
    marginVertical:10

  }
})

export default CertificateStudentInfo
