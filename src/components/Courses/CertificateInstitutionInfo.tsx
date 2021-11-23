import React from 'react'
import { View,  StyleSheet, TextInput ,TouchableOpacity ,Dimensions,Image} from 'react-native'
import theme, {  Text } from '../../theme'
import { Slider } from 'react-native-elements'
import DropDownCour from '../../components/DropDownCourse1'
import CertificateProDrop from '../../components/certificateProDrop'
import certificateProDrop from '../../components/certificateProDrop'
//const courseOptions = ['University', 'IITs', 'Nits']

const CertificateInstitutionInfo = (props)=>{
//const [college, setCollege] = React.useState()
// const [percentage , setPercentage] = React.useState();

const width = Dimensions.get('window').width - 40;
const width1 = Dimensions.get('window').width - 310 ;
const h1 = Dimensions.get('window').width - 380 ;



  return (
    
  <View style={styles.container}>
    <View>
    <Text style={styles.text}>Enter Institution Information</Text>
    </View>
    <View style={{height:1,width:'100%',backgroundColor:'lightgrey',marginTop:10}}></View>
    <View>
      <View style={{marginVertical:10}}>
      <Text style={{color:'#380885',marginVertical:4}}>Institution Name   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
     <TextInput 
           placeholder='Type institution name here...'
            style={{
              padding:13,
              height:40,
              width:width,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
            }}    
         />
         </View>
         <View style={{marginVertical:10}}>

         <Text style={{color:'#380885',marginVertical:4}}>Address   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
     <TextInput 
           placeholder='Type institution address here...'
            style={{
              padding:13,
              height:40,
              width:width,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
            }}    
         />
         </View>

         <View style={{marginVertical:10}}>
         <View style={{flexDirection:'row',}}>
            <Text style={{color:'#380885',}}>City  <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
            <Text style={{color:'#380885',paddingLeft:150,}}>Province   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
            
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <TextInput 
          // placeholder='Type institution address here...'
            style={{
              padding:13,
              height:40,
              width:180,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
              top:4,

            }}    
         />
         <CertificateProDrop/>
         
     
         </View>
         </View>
         <View style={{marginVertical:10}}>
         <View style={{flexDirection:'row',}}>
            <Text style={{color:'#380885',}}>Postal Code  <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
            <Text style={{color:'#380885',paddingLeft:100,}}>Country   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
            
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <TextInput 
          // placeholder='Type institution address here...'
            style={{
              padding:13,
              height:40,
              width:180,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
              top:4,

            }}    
         />
           <CertificateProDrop/>
     
         </View>
         </View>
    </View>
    <View style={{marginVertical:10}}>
    <Text style={{color:'#380885',marginVertical:4}}>Email   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
     <TextInput 
           placeholder='Type institution email here...'
            style={{
              padding:13,
              height:40,
              width:width,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
            }}    
         />
         </View>
         <View style={{marginVertical:10}}>
         <View style={{flexDirection:'row',}}>
            <Text style={{color:'#380885',}}>Phone  <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
            <Text style={{color:'#380885',paddingLeft:150,}}>Tax   </Text>
            
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <TextInput 
          // placeholder='Type institution address here...'
            style={{
              padding:13,
              height:40,
              width:180,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
              top:4,

            }}    
         />
         <CertificateProDrop/>
     
         </View>
         </View>
         <View style={{paddingTop:20}}>
<View style={{flexDirection:'row',position:'relative',left:130,}}>
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

export default CertificateInstitutionInfo
