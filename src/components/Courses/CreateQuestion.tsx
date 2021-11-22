import React from 'react'
import { View,  StyleSheet, TextInput ,TouchableOpacity ,Dimensions} from 'react-native'
import theme, { Card, Text } from '../../theme'
import DownArrow from '../../assets/svgs/Darraow.svg'
import { Slider } from 'react-native-elements'
import Img from '../../assets/svgs/Frame.svg'
import { Createquestion1,Createquestion2} from '../../components'
import DropDownBoard from '../../components/DropDownBoardUni1'

const CreateQuestion = (props)=>{

  const h1 = Dimensions.get('window').width - 380 ;
  
  

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
 

  return (
    
  <View style={styles.container}>
  <Text style={styles.text}>Create Question</Text>
  <View style={{height:1,width:'100%',backgroundColor:'lightgrey',marginVertical:15}}></View>

  <Card
      variant='elevated'
      backgroundColor='white'
      borderRadius='m'
      padding='none'
      // margin='s'
    >
      {/* {cretLec ? <View style={styles.eclips}></View> : null} */}
  
      <View style={{padding:10,paddingVertical:20}}>
      <Text style={{color:'#380885',marginVertical:10}}>Select Section</Text>
      <DropDownBoard/>
      {/* <TextInput 
           placeholder='-Select-'
            style={{
              padding:13,
              height:40,
              width:'100%',
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
            }}
         />  */}
       <View >
           <Text style={{color:'#380885',marginTop:20}}>Add a new question</Text>
          {/* <Text style={{fontSize:25,width:'100%',color:'rgba(209, 214, 255, 0.5)',}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - </Text> */}
          <View style={{flex:1}}>
          <View style={{flexDirection:'row', borderColor:'rgba(209, 214, 255, 0.5)',padding:8,borderRadius:5,borderWidth:2,borderStyle:'dashed'}}>
          <TouchableOpacity style={{marginTop:50,marginLeft:5,height:30,width:30,backgroundColor:theme.colors.primary,borderRadius:30,}}
           onPress={()=>onNext(1)}
       >
          <Text style={{fontSize:22,color:theme.colors.white,textAlign:'center'}}>+</Text>
        </TouchableOpacity>
        
        <View style={{flexDirection:'row-reverse',paddingRight:150}}>
            <Img  style={{}}/>
          </View> 
          </View>
     </View>
     </View>
     <View style={{flexDirection:'row-reverse'}}><Text style={{color:'#380885',position:'relative',marginTop:40}}>
     or Choose from a Question Bank</Text></View>
     </View>
    </Card>
    <Card
      variant='elevated'
      backgroundColor='white'
      borderRadius='m'
      padding='none'
      marginVertical='s'
    >
      {/* {cretLec ? <View style={styles.eclips}></View> : null} */}
      <View style={{padding:10,paddingVertical:30}}>
   
      {change === 0 ? (
                <Createquestion1/>
               
              ):null}
                 {change === 1 ? (
                  <Createquestion2/>
              ):null}
        

        
        </View>
    </Card>


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
    
    flex:1
  },
  text : {
    marginHorizontal:100,
    fontSize:17,
    fontWeight:'bold'
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

export default CreateQuestion
