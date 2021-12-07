import React,{useState,useRef} from 'react'
import { View, ScrollView, KeyboardAvoidingView,Linking, TouchableOpacity,FlatList} from 'react-native'
import theme, { Card,Text } from '../../theme'
import Prev from '../../assets/svgs/Prev.svg'
import Add from '../../assets/svgs/AddR.svg'
import Prevb from '../../assets/svgs/Prevbtn.svg'
import Next from '../../assets/svgs/Next.svg'
import { useNavigation } from '@react-navigation/native';
import Assignment from '../../assets/svgs/Ass.svg'
import Minus from '../../assets/svgs/Minus.svg'
const DATA = [
  {
   
  },
  {
    
  },
  {
   
  },
  {
    
   },
   {
  
   },
   {
    
   },
];
const ReportHistory=(props)=>{

  const navigation = useNavigation();
  // const history= useHistory();

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
      <View style={{backgroundColor:theme.colors.lightBlue}}>
<View style={{flexDirection:'row',height:'auto'}}>
    <TouchableOpacity onPress={() => onSelect1(index)} style={{height:20,width:20,justifyContent:'center',marginHorizontal:8,top:5}}>
      <Minus/>
</TouchableOpacity>
        <View style={{flexDirection:'column',marginHorizontal:5}}>
        <Text style={{color:theme.colors.darkSilver,fontWeight:'200',top:5}}>#1980</Text>
       </View>
       <View style={{width:120}}>
        <Text style={{marginHorizontal:20,marginVertical:10,color:theme.colors.darkSilver}}>Odio facilisis mauris sit</Text>
        </View>
        <View style={{width:150}}>
  <Text style={{color:theme.colors.darkSilver,marginVertical:10,marginHorizontal:20}}>Lorem ipsum dolor sit amet, tempor incididunt ut labore  
… See more
  </Text>
  </View>
      </View>
      <View style={{height:1,width:'100%',backgroundColor:'lightgrey',marginVertical:10,marginLeft:38}}></View>
  <View style={{marginHorizontal:40,marginVertical:5}}>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Status</Text>
    <Text style={{marginHorizontal:62,color:theme.colors.danger}}>Pending</Text>
    </View>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text style={{top:10}}>Priority</Text>
    <TouchableOpacity style={{marginHorizontal:62,height:40,width:100,backgroundColor:'#FFC95F',borderRadius:20,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
    <Text style={{color:theme.colors.white,textAlign:'center'}}>Low</Text>
    </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Reporter</Text>
    <Text style={{marginHorizontal:62,color:theme.colors.darkSilver}}>LastName FirstName</Text>
    </View>

  </View>
  </View>
  <View style={{height:1,width:'95%',backgroundColor:'grey',marginVertical:10,marginHorizontal:10}}></View>

  </>
    );
  }
  else if (item.collect != 1 ) {
  return(
    <View style={{flexDirection:'row',height:95,borderTopWidth:1,borderBottomWidth:1}}>
       <TouchableOpacity onPress={() => onSelect(index)} 
       style={{height:20,width:20,justifyContent:'center',top:15,marginHorizontal:7}}>
        <Add/>
         </TouchableOpacity>
       <View style={{height:'auto',width:85,marginHorizontal:10}}>
        <Text
         
         style={[
           theme.textVariants.body,
           { color: theme.colors.text, fontSize:15,top:10},
         ]}>
      #1980
     </Text>
     </View>
     <View style={{width:100,right:15}}>
     <Text
         
         style={[
           theme.textVariants.body,
           { color: theme.colors.text, fontSize:15,top:10,},
         ]}>
      Odio facilisis mauris sit
     </Text>
     </View>
     <View style={{width:145,right:15}}>
     <Text
         
         style={[
           theme.textVariants.body,
           { color: theme.colors.text, fontSize:15,top:10,},
         ]}>
Lorem ipsum dolor sit amet, tempor incididunt ut labore  
  <Text
         
         style={[
           theme.textVariants.body,
           { color: theme.colors.text, fontSize:15,top:10,marginHorizontal:10,fontWeight:'bold'},
         ]}>
… See more  
   </Text>  
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
    <ScrollView>
    <Card
    // variant='elevated'
    borderRadius='l'
    marginBottom='m'
    padding='none'
    backgroundColor='white'
    height={1000}>
    {/* // height={1600} */}
<View
  style={{
    marginVertical: theme.spacing.m,
    display: 'flex',
    flexDirection:'row',
    height:50,
  }}>
    <TouchableOpacity onPress={props.onPress} style={{height:30,width:20,backgroundColor:'white',top:5,marginHorizontal:10,left:10}}>
      <Prev  style={{top:7}}/>
    </TouchableOpacity>
    <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,top:8},
       ]}>
     Report Summary
   </Text>
      </View>
      <View>
        <View style={{borderTopWidth:1,borderBottomWidth:1,height:50,flexDirection:'row'}}>
        <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,top:10,marginHorizontal:25},
       ]}>
     Issue No.
   </Text>
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,top:10,marginHorizontal:10},
       ]}>
     Issue Title
   </Text>
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.text, fontSize:18,top:10,marginHorizontal:17},
       ]}>
     Description
   </Text>
    
        </View>
      </View>
      <View style={{height:'auto'}}>
      
          
          <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item, index) => 'key'+index}
              // keyExtractor={item => item.id}

          />
          </View>
          <View>
          <View style={{flexDirection:'row',bottom:5,height:40,justifyContent:'flex-end',alignContent:'center'}}>
             <TouchableOpacity onPress={props.onPress} style={{flexDirection:'row',marginHorizontal:5,justifyContent:'center'}}>
              <Prevb style={{top:15}}/>
              <Text        
       style={[
         theme.textVariants.body,
         { color: theme.colors.darkSilver, fontSize:14,top:13,marginHorizontal:5},
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
  </ScrollView>
  )}
  export default ReportHistory
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