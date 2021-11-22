import React from 'react'
import { View,  StyleSheet, TextInput ,TouchableOpacity ,Dimensions,Image} from 'react-native'
import theme, {  Text } from '../../theme'
import { Slider } from 'react-native-elements'
import CertificateStyleDrop from '../CertificateStyleDrop'
import Frm1 from '../../assets/svgs/Frame1.svg'
import Frm2 from '../../assets/svgs/Frame2.svg'
import Frm3 from '../../assets/svgs/Frame3.svg'
import Frm4 from '../../assets/svgs/Frame4.svg'

 //const courseOptions = ['University', 'IITs', 'Nits']

const CertificateStyle = (props)=>{
//const [college, setCollege] = React.useState()
// const [percentage , setPercentage] = React.useState();

const width = Dimensions.get('window').width - 40;
const width1 = Dimensions.get('window').width - 310 ;
const h1 = Dimensions.get('window').width - 380 ;
const [change ,setChange] = React.useState(0);


  return (
    
  <View style={styles.container}>
    <View>
    <Text style={styles.text}>Pick a Style of Certificate</Text>
    </View>
    <View style={{height:1,width:'100%',backgroundColor:'lightgrey',marginTop:10,marginBottom:15}}></View>
    <View>
     <Text style={{color:'#380885',marginVertical:0,}}>Board/University   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
        <CertificateStyleDrop/>     
    <Text style={{color:'#380885',}}>Language   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
            <CertificateStyleDrop/>
           <Text style={{color:'#380885',}}>Pick a background   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
<View style={{flexDirection:'row',marginVertical:11}}>
<TouchableOpacity style={[{borderColor: change == 0 ? 'rgba(56, 8, 133, 0.5)' : 'white'},{borderWidth:3,}]}
onPress ={()=>setChange(0)}>
 <Frm1/>
</TouchableOpacity>
<TouchableOpacity style={[{borderColor: change == 1 ? 'rgba(56, 8, 133, 0.5)' : 'white'},{borderWidth:3,marginHorizontal:15}]}
onPress ={()=>setChange(1)}>
 <Frm2/>
</TouchableOpacity>
<TouchableOpacity style={[{borderColor: change == 2 ? 'rgba(56, 8, 133, 0.5)' : 'white'},{borderWidth:3,}]}
onPress ={()=>setChange(2)}>
 <Frm3/>
</TouchableOpacity>
<TouchableOpacity style={[{borderColor: change == 3 ? 'rgba(56, 8, 133, 0.5)' : 'white'},{borderWidth:3,width:'auto',marginHorizontal:15}]}
onPress ={()=>setChange(3)}>
 <Frm4/>
</TouchableOpacity>
</View>
<TouchableOpacity
            style={{marginBottom:100,borderColor:theme.colors.secondary,borderWidth:1,width:90,height:26,borderRadius:20,}}
         onPress={props.onPress}>
         <Text style={{color:theme.colors.secondary,textAlign:'center',fontSize:15,top:2}}>Browse</Text>
          </TouchableOpacity>
</View>
   
<View style={{flexDirection:'row',position:'relative',left:130,marginTop:theme.spacing.xl}}>
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

export default CertificateStyle
