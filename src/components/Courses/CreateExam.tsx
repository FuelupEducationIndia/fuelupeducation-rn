import React from 'react'
import { View,  StyleSheet, TextInput ,TouchableOpacity ,Dimensions,Image} from 'react-native'
import theme, {  Text } from '../../theme'
import { Slider } from 'react-native-elements'
import DownArrow from '../../assets/svgs/Darraow.svg'
import Drop from '../../components/DropdownBoardUni'
import DropDownBoard from '../../components/BoardUniDropDown'
import DropDownCour from '../../components/DropDownCourse1'
import DropDownLang from '../../components/DropDownLang'

//const courseOptions = ['University', 'IITs', 'Nits']

const CreateExam = (props)=>{
//const [college, setCollege] = React.useState()
// const [percentage , setPercentage] = React.useState();

const width = Dimensions.get('window').width - 40;
const width1 = Dimensions.get('window').width - 310 ;
const h1 = Dimensions.get('window').width - 380 ;



  return (
    
  <View style={styles.container}>
    <View>
    <Text style={styles.text}>Create Exam</Text>
    </View>
    <View style={{height:1,width:'100%',backgroundColor:'lightgrey',marginTop:10}}></View>
    <View>
     <Text style={{color:'#380885',marginVertical:10}}>Board/University   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
     
    <DropDownBoard />
        
         <View style={{marginVertical:10}}>
         <View style={{flexDirection:'row',}}>
            <Text style={{color:'#380885',}}>Course   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
            <Text style={{color:'#380885',paddingLeft:120,}}>Language   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
            
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <DropDownCour/>
           <DropDownLang/>
         {/* <TextInput 
            placeholder='-Select-'
            style={{
              padding:13,
              height:40,
              width:'48%',
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
            }}    
           
        />
             <DownArrow style={{position:'absolute',marginLeft:310,top:7,}} /> */}


         
             {/* <TextInput 
            placeholder='-Select-'
            style={{
              padding:13,
              height:40,
              width:'48%',
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
            }}    
         />
        <DownArrow style={{position:'absolute',marginLeft:120,top:7,}} /> */}
             
         </View>
         </View>
         <View>
        <Text style={{color:'#380885',marginVertical:10}}>Exam Title   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
         <TextInput 
           // placeholder='-Select-'
            style={{
              padding:13,
              height:40,
              width:width,
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
            }}    
         />
         </View>
    </View>
    <Text style={{color:'#380885',marginVertical:20}}>Pass Percentage   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>

      <Slider
      //value={percentage}
     // onValueChange={val => setPercentage({percentage:val})}
      style={{width: 220, height: 30}}
      minimumValue={0}
      maximumValue={100}
      minimumTrackTintColor='rgba(209, 214, 255, 0.5)'
      maximumTrackTintColor="rgba(209, 214, 255, 0.5)"
      thumbStyle={{height:20,width:20,backgroundColor:'#380885'}}></Slider>
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
    alignItems:'center',
    fontSize:17,
    fontWeight:'bold',
    marginHorizontal:100
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

export default CreateExam
