import React,{useState,useRef} from 'react'
import { View, ScrollView, KeyboardAvoidingView,Linking, TouchableOpacity,FlatList} from 'react-native'
import theme, { Card,Text } from '../theme'
import Prev from '../assets/svgs/Prev.svg'
import Add from '../assets/svgs/AddR.svg'
// import TeacherImage from '../../assets/images/teacherImage.png'
import Prevb from '../assets/svgs/Prevbtn.svg'
import Next from '../assets/svgs/Next.svg'
import { useNavigation } from '@react-navigation/native';
import Video from '../assets/svgs/Video.svg'
import Minus from '../assets/svgs/Minus.svg'

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
    

  
]
const Create_Quiz_Summary=(props)=>{
  const [data , setData] = React.useState(DATA)

  const navigation = useNavigation();
  // const history= useHistory();

  const onSelect4 = (index) => {

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
   const onSelect5 = (index) => {

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
         temp[index].collect = 0;
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
<TouchableOpacity onPress={() => onSelect5(index)} style={{height:20,width:20,justifyContent:'center',marginHorizontal:2,top:5}}>
      <Minus/>
</TouchableOpacity>
        <View style={{flexDirection:'column',marginHorizontal:5}}>
        <Text style={{color:theme.colors.darkSilver,fontWeight:'200',}}>ss2021-</Text>
        <Text style={{marginTop:-3,fontSize:11,color:theme.colors.darkSilver}}>The Solar System</Text>
       </View>
        <Text style={{marginHorizontal:10,marginVertical:10,color:theme.colors.darkSilver}}>Tortor Posuere</Text>
      <View style={{height:50,width:120,right:25}}>
  <Text style={{color:theme.colors.darkSilver,marginVertical:10,marginHorizontal:20}}>purus in massa tempor nec
  </Text>
  </View>
      </View>
      <View style={{height:1,width:'100%',backgroundColor:'lightgrey',marginVertical:10,marginLeft:38}}></View>
  <View style={{marginHorizontal:40,marginVertical:5}}>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Board/Uni</Text>
    <Text style={{marginHorizontal:62,color:theme.colors.darkSilver}}>Rajsthan</Text>
    </View>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Lacture</Text>
    <Text style={{marginHorizontal:72,color:theme.colors.darkSilver}}>Lec1:The Moon</Text>
    </View>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Author</Text>
    <Text style={{marginHorizontal:62,left:10,color:theme.colors.darkSilver}}>Author Name</Text>
    </View>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>URL</Text>
    <View style={{flexDirection:'row',}}>
    <Text style={{marginHorizontal:35,left:50,color:theme.colors.darkSilver}}>http://posuere ac ut consequat semper  </Text>
    </View>
    </View>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Status</Text>
    <Text style={{marginHorizontal:70,color:theme.colors.secondary}}>Pending</Text>
    </View>
    <View style={{flexDirection:'column'}}>
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
    <View style={{flexDirection:'row',height:72,borderTopWidth:1,borderBottomWidth:1,right:5.5}}>
      <TouchableOpacity onPress={() => onSelect4(index)} style={{height:20,width:20,justifyContent:'center',top:15,marginHorizontal:5}}>
        <Add/>
         </TouchableOpacity>
      <View style={{height:'auto',width:85,marginHorizontal:5}}>
      <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:15,top:8},
       ]}>
     SS2021- 
The Solar System
   </Text>
   </View>
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:15,top:8,right:3},
       ]}>
    Tortor Posuere
   </Text>
   <View style={{height:50,width:110}}>
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.darkSilver, fontSize:14,top:8,marginHorizontal:2},
       ]}>
    purus in massa tempor nec
   </Text>
   </View>
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
    <TouchableOpacity onPress={props.onPress} style={{height:30,width:20,backgroundColor:'white',top:5,marginHorizontal:5,left:10}}>
      <Prev  style={{top:7}}/>
    </TouchableOpacity>
    <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,top:8,marginHorizontal:5,}
       ]}>
      Podcast Recommendation
   </Text>
      </View>
      <View>
        <View style={{borderTopWidth:1,borderBottomWidth:1,height:50,flexDirection:'row'}}>
        <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,top:10,marginHorizontal:10},
       ]}>
     Course
   </Text>
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,top:10,marginHorizontal:10},
       ]}>
     Reading Title
   </Text>
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,top:10,marginHorizontal:10},
       ]}>
     Discription
   </Text>
    
        </View>
      </View>
      <View>
      
          
          <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item, index) => 'key'+index}
          />
          </View>
          <View>
          <View style={{flexDirection:'row',top:40,height:40,justifyContent:'flex-end',alignContent:'center'}}>
             <TouchableOpacity onPress={props.onPress} style={{flexDirection:'row',marginHorizontal:10,justifyContent:'center'}}>
              <Prevb  style={{top:15}}/>
              <Text        
       style={[
         theme.textVariants.body,
         { color: theme.colors.darkSilver, fontSize:14,top:13,marginHorizontal:10},
       ]}>
     Previous
   </Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>alert("Previous Page")} style={{flexDirection:'row',justifyContent:'center'}}>
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
  export default Create_Quiz_Summary
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