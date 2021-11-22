import React from 'react'
import { View,  StyleSheet, TextInput ,TouchableOpacity ,Dimensions,Image} from 'react-native'
import theme, {  Text } from '../../theme'

import DatePicker from 'react-native-datepicker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//const courseOptions = ['University', 'IITs', 'Nits']

const CertificateVerify = (props)=>{
//const [college, setCollege] = React.useState()
// const [percentage , setPercentage] = React.useState();

const width = Dimensions.get('window').width - 40;
const width1 = Dimensions.get('window').width - 310 ;
const h1 = Dimensions.get('window').width - 380 ;
const [date, setDate] = React.useState()



  return (
    
  <View style={styles.container}>
    <View>
    <Text style={styles.text}>Verify the certificate</Text>
    </View>
    <View style={{height:1,width:'100%',backgroundColor:'lightgrey',marginTop:10,marginBottom:15}}></View>
    <View>
     <Text style={{color:'#380885',marginVertical:0,}}>Instructor Name   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
     <TextInput 
         //  placeholder='Type institution address here...'
            style={{
              padding:13,
              height:40,
              width:width,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
              marginBottom:15,
            }}    
         />
      

    <Text style={{color:'#380885',}}>Instructor Signature   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
    <View style={{flexDirection:'row'}}>
    <TextInput 
          // placeholder='Type institution address here...'
            style={{
              padding:13,
              height:40,
              width:260,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
              marginBottom:15,

            }}    
         />
         <TouchableOpacity
            style={{borderColor:theme.colors.secondary,borderWidth:1,width:90,height:26,borderRadius:20,marginStart:20,marginTop:10}}
        >
         <Text style={{color:theme.colors.secondary,textAlign:'center',fontSize:15,top:2}}>Upload</Text>
          </TouchableOpacity>
         </View>
         <Text style={{color:'#380885',}}>Date   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>

         <DatePicker
            style={{ height:40,
            width:178,
            backgroundColor:'rgba(209, 214, 255, 0.5)',
            borderRadius: 10,marginBottom:15}}
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

<Text style={{color:'#380885',marginVertical:0,}}>Enter Captcha  <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
     <TextInput 
         //  placeholder='Type institution address here...'
            style={{
              padding:13,
              height:40,
              width:width,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
              marginBottom:15,
            }}    
         />
     
<View style={{flexDirection:'row-reverse',marginVertical:10,marginBottom:90}}>
<View style={{flexDirection:'row'}}>
<Text style={{color:'#380885',marginVertical:3,marginHorizontal:15,fontSize:15}}>Captcha code </Text>
<TouchableOpacity
            style={{backgroundColor:'#380885',width:80,height:30,borderRadius:5,}}>
         <Text style={{color:'white',textAlign:'center',fontSize:15,top:4.5}}>11f32g</Text>
          </TouchableOpacity>
</View>
</View>
</View>
<View style={{flexDirection:'row',position:'relative',left:130}}>
            <TouchableOpacity
            style={{marginVertical:theme.spacing.xl,backgroundColor:'#380885',width:100,height:30,borderRadius:20,}}
         onPress={props.onPress}>
         <Text style={{color:'white',textAlign:'center',fontSize:15,top:4.5}}>Next</Text>
          </TouchableOpacity>
          <View style={{marginVertical:theme.spacing.xl,}}>
          <TouchableOpacity
            style={{backgroundColor:'white',width:90,height:30,borderRadius:20,marginHorizontal:20}}>
         <Text style={{color:'#380885',}}>Save for Later</Text>
         <Text style={{height:1,width:'100%',backgroundColor:'#380885',}}>__________</Text>
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

export default CertificateVerify
