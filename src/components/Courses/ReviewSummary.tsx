import React,{useState,useRef} from 'react'
import { View, ScrollView, KeyboardAvoidingView,Linking, TouchableOpacity,FlatList} from 'react-native'
import theme, { Card,Text } from '../../theme'
import Prev from '../../assets/svgs/Prev.svg'
import { PROPERTY_TYPES } from '@babel/types'
import { height } from '../../constants'
import Add from '../../assets/svgs/AddR.svg'
// import TeacherImage from '../../assets/images/teacherImage.png'
import Prevb from '../../assets/svgs/Prevbtn.svg'
import Next from '../../assets/svgs/Next.svg'
import Assignment from '../../assets/svgs/Ass.svg'
import Minus from '../../assets/svgs/Minus.svg'

const DATA=[
  {
    Id:1  
  } ,
  {  
     Id:2
   },
    {
      Id:3  
    },
    {
      Id:4  
    },
    {
      Id:5 
    },
    {
      Id:6  
    },
    {
      Id:7 
    },
    {
      Id:8  
    },
    {
      Id:9
    },
 

  
]


const ReviewSummary=(props)=>{
  const [data , setData] = React.useState(DATA)

  const onSelect = (index) => {

    //  console.log("index:", index);
       var temp = data;
       console.log('temp:', temp);
      temp.map((v, i, arr) => {
         //return undefined.apply(v, i, arr)
         // console.log('v:',v);
         console.log('i:',i);
         // // console.log('arr:',arr);
         if (index == i) {
           console.log("id condition run", index, " == ", i);
         temp[index].collect = 1;
         }
       
      });
       setData([...temp]);
     
 
   }
  
const renderItem = ({ item, index }) =>{
  if(item.collect == 1){
    return(
      <>
      <View style={{backgroundColor:theme.colors.lightBlue}}>
<View style={{flexDirection:'row',height:'auto'}}>
<TouchableOpacity onPress={() => onSelect(item)} style={{height:20,width:20,justifyContent:'center',marginHorizontal:2,top:5}}>
      <Minus/>
</TouchableOpacity>
        <View style={{flexDirection:'column',marginHorizontal:5,top:5}}>
        <Text style={{color:theme.colors.darkSilver,fontWeight:'200'}}>ss2021-</Text>
        <Text style={{marginTop:-3,fontSize:11,color:theme.colors.darkSilver,top:3}}>The Solar System</Text>
       </View>
       <View style={{flexDirection:'column',width:150}}>

        <Text style={{marginHorizontal:20,marginVertical:10,color:theme.colors.darkSilver}}>
          Lorem ipsum dolor sit amet, tempor incididunt ut labore
          <Text
     
     style={[
       theme.textVariants.body,
       { color: theme.colors.text, fontSize:15,top:8,fontWeight:'bold'},
     ]}>
      See more...
 </Text>
</Text>
</View>
<View style={{width:100,height:50,right:20}}>
  <Text style={{color:theme.colors.danger,marginVertical:10,marginHorizontal:20}}>Need to Improve
  </Text>
  </View>
      </View>
      <View style={{height:1,width:'100%',backgroundColor:'lightgrey',marginVertical:10,marginLeft:38}}></View>
  <View style={{marginHorizontal:40,marginVertical:5}}>
    
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Instructor</Text>
    <Text style={{marginHorizontal:62,color:theme.colors.darkSilver}}>Instructor Name</Text>
    </View>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Student/Group</Text>
    <View style={{flexDirection:'column',}}>
    <Text style={{marginHorizontal:35,color:theme.colors.darkSilver}}>Student Name </Text>
    </View>
    </View>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Document(s)</Text>
    <View style={{flexDirection:'row',}}>
      <Assignment style={{left:30,marginHorizontal:10}}/>
    <Text style={{marginHorizontal:60,right:40,color:theme.colors.darkSilver,top:2}}>Assignment1.pdf </Text>
    <Text  style={{color:'darkSilver',right:200,top:2}}>_________________</Text>

    </View>
    </View>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Status</Text>
    <Text style={{marginHorizontal:90,color:theme.colors.secondary}}>Pending</Text>
    </View>
    <View style={{flexDirection:'column',}}>
    <Text style={{color:'red'}}>Delete</Text>
    <Text  style={{color:'red',marginTop:-14}}>_______</Text>
    </View>
  </View>
  </View>
  <View style={{height:1,width:'95%',backgroundColor:'grey',marginVertical:10,marginHorizontal:10}}></View>

  </>
    );
  }
  else if (item.collect != 1 ) {
  return(
    <View style={{flexDirection:'row',height:75,borderTopWidth:1,borderBottomWidth:1}}>
       <TouchableOpacity onPress={() => onSelect(index)} style={{height:20,width:20,justifyContent:'center',top:15,left:5}}>
        <Add/>
         </TouchableOpacity>
    <View style={{height:40,width:85,marginHorizontal:10}}>
    <Text
     
     style={[
       theme.textVariants.body,
       { color: theme.colors.text, fontSize:14,top:8},
     ]}>
   SS2021- 
The Solar System
 </Text>
 </View>
 <View style={{width:110,height:70}}>
 <Text
     
     style={[
       theme.textVariants.body,
       { color: theme.colors.darkSilver, fontSize:13,top:8,},
     ]}>
      Lorem ipsum dolor sit amet, tempor incididunt ut labore
 </Text>
 <Text
     
     style={[
       theme.textVariants.body,
       { color: theme.colors.text, fontSize:15,top:8,fontWeight:'bold'},
     ]}>
      See more...
 </Text>
 
 </View>
 <Text
     
     style={[
       theme.textVariants.body,
       { color: theme.colors.danger, fontSize:14,top:8,marginHorizontal:10},
     ]}>
  Need Improve
 </Text>
  </View>
  );
  }
  else{
    null;
  }
}

  return(
    
    <Card
    // variant='elevated'
    borderRadius='l'
    marginBottom='m'
    padding='none'
    backgroundColor='white'>
<View
  style={{
    marginVertical: theme.spacing.m,
    display: 'flex',
    flexDirection:'row',
    height:50,
  }}>
    <TouchableOpacity onPress={props.onPress} style={{height:30,width:20,backgroundColor:'white',top:5,marginHorizontal:10,left:10}}>
      <Prev style={{top:7}}/>
    </TouchableOpacity>
    <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,top:8},
       ]}>
     Review Summary
   </Text>
      </View>
      <View>
        <View style={{borderTopWidth:1,borderBottomWidth:1,height:50,flexDirection:'row'}}>
        <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,top:10,marginHorizontal:25},
       ]}>
     Course
   </Text>
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,top:10,marginHorizontal:25},
       ]}>
     Feedback
   </Text>
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,top:10,marginHorizontal:25},
       ]}>
     Flag
   </Text>
    
        </View>
      </View>
      <View>
      
          
          <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}

          />
          </View>
          <View>
          <View style={{flexDirection:'row',height:40,justifyContent:'flex-end',alignContent:'center'}}>
             <TouchableOpacity onPress={props.onPress} style={{flexDirection:'row',marginHorizontal:10,justifyContent:'center'}}>
              <Prevb style={{top:15}}/>
              <Text        
       style={[
         theme.textVariants.body,
         { color: theme.colors.darkSilver, fontSize:14,top:13,marginHorizontal:10},
       ]}>
     Previous
   </Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={props.onPress} style={{flexDirection:'row',justifyContent:'center'}}>
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.secondary, fontSize:14,top:13,marginHorizontal:5},
       ]}>
     Next
   </Text>
   <Next style={{top:16,marginHorizontal:5}}/>
   </TouchableOpacity>
          </View>
     
       </View>
      
     
       
      
  </Card>
  )}
  export default ReviewSummary
  const styles = {
    iconStyle: {
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 23,
        width: 25
    },
    containerStyle: {
      flexDirection: 'row',
      flex: 1
    },
    inputStyle: {
      paddingLeft: 10,
      fontSize: 30,
      height: 30,
      width: 350
    },
    headerContentStyle: {
      flexDirection: 'column',
      paddingTop: 20
    },
    headerTextStyle: {
      fontSize: 25
    },
    thumbnailStyle: {
      borderRadius: 15,
      height: 100,
      width: 100
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      height: 400,
      flex: 1,
      width: null
    }
  };