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
// import Minus from '../assets/svgs/Minus.svg'
import Minus from '../assets/svgs/Minus.svg'
import Next1 from '../assets/svgs/Next_Att.svg'


const DATA1=[
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
const Attendence_Summary=(props)=>{
  const [data , setData] = React.useState(DATA1)

  const navigation = useNavigation();
  // const history= useHistory();
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
   const onSelect1 = (index) => {

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
      <ScrollView>
      <View style={{backgroundColor:theme.colors.lightBlue}}>
<View style={{flexDirection:'row',height:'auto'}}>
<TouchableOpacity onPress={() => onSelect1(index)} style={{height:20,width:20,justifyContent:'center',marginHorizontal:10,top:5,left:5}}>
      <Minus/>
</TouchableOpacity>
        <View style={{flexDirection:'column',marginHorizontal:10}}>
        <Text style={{color:theme.colors.darkSilver,fontWeight:'200',}}>ss2021-</Text>
        <Text style={{marginTop:-3,fontSize:11,color:theme.colors.darkSilver}}>The Solar System</Text>
       </View>
        <Text style={{marginHorizontal:20,marginVertical:10,color:theme.colors.darkSilver}}>Tortor Posuere</Text>
  <Text style={{color:theme.colors.darkSilver,marginVertical:10,marginHorizontal:10}}>5
  </Text>
      </View>
      <View style={{height:1,width:'100%',backgroundColor:'lightgrey',marginVertical:10,marginLeft:38}}></View>
  <View style={{marginHorizontal:60,marginVertical:5}}>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Board/Uni</Text>
    <Text style={{marginHorizontal:62,color:theme.colors.darkSilver}}>Rajsthan</Text>
    </View>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Online Time</Text>
    <Text style={{marginHorizontal:58,color:theme.colors.darkSilver}}>3h.15:00</Text>
    </View>
    
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Status</Text>
    <Text style={{marginHorizontal:80,color:theme.colors.Green}}>Present</Text>
    </View>
    <View style={{flexDirection:'column'}}>
    <Text style={{color:'red'}}>Delete</Text>
    <Text  style={{color:'red',marginTop:-14}}>_______</Text>
    </View>
  </View>
  </View>
  <View style={{height:1,width:'95%',backgroundColor:'grey',marginVertical:10,marginHorizontal:10}}></View>
  </ScrollView>
  </>
    );
  }
  else if (item.collect != 1 ) {
  return(
    <ScrollView>
    <View style={{flexDirection:'row',height:70,borderTopWidth:1,borderBottomWidth:1}}>
    <TouchableOpacity onPress={() => onSelect(index)} style={{height:20,width:20,justifyContent:'center',top:15,marginHorizontal:10,left:10}}>
    <Add/>
    </TouchableOpacity>
    <View style={{height:40,width:85,marginHorizontal:10}}>
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
       { color: theme.colors.text, fontSize:15,top:8,marginHorizontal:10},
     ]}>
  20/1/2021 9:12am

 </Text>
 <Text
     
     style={[
       theme.textVariants.body,
       { color: theme.colors.text, fontSize:15,top:25,right:130},
     ]}>
  20/1/2021 9:12am

 </Text>
 
 {/* <Text
     
     style={[
       theme.textVariants.body,
       { color: theme.colors.text, fontSize:15,top:8,marginHorizontal:10},
     ]}>
  5
 </Text> */}
  </View>
  </ScrollView>
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
    backgroundColor='white'
    height={500}>
   <ScrollView>
 
 <View style={{height:'auto'}}>

<View
  style={{
    marginVertical: theme.spacing.m,
    display: 'flex',
    flexDirection:'row',
    height:'auto',
  }}>
    <TouchableOpacity onPress={props.onPress} style={{height:30,width:20,backgroundColor:'white',top:5,marginHorizontal:5,left:10}}>
      <Prev  style={{top:7}}/>
    </TouchableOpacity>
    <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,top:8,marginHorizontal:5,}
       ]}>
      January 2021
   </Text>
      </View>
      <View>
        <View style={{borderTopWidth:1,borderBottomWidth:1,height:50,flexDirection:'row'}}>
        <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,top:10,marginHorizontal:45},
       ]}>
     Course
   </Text>
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,top:10,marginHorizontal:20},
       ]}>
     Log On/Log In
   </Text>
   {/* <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,top:10,marginHorizontal:10},
       ]}>
     Discription
   </Text> */}
    
        </View>
      </View>
      <View>
      
          
          <FlatList
              data={DATA1}
              renderItem={renderItem}
              keyExtractor={item => item.id}

          />
          </View>
          <View>
          <View style={{flexDirection:'row',height:40,justifyContent:'flex-end',alignContent:'center',marginVertical:10}}>
          <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,right:20},
       ]}>
     Total:
   </Text>
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.darkSilver, fontSize:16,right:18,top:3},
       ]}>
     98/100
   </Text>
   
          </View>
     
       </View>
       </View> 
       </ScrollView>

  </Card>
  )}
  export default Attendence_Summary
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