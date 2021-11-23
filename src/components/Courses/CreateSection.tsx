import React from 'react'
import { View,  StyleSheet,TextInput, TouchableOpacity,SafeAreaView,FlatList, KeyboardAvoidingView,Dimensions} from 'react-native'
import theme, {  Text } from '../../theme'
import { Slider } from 'react-native-elements'
import DownArrow from '../../assets/svgs/Darraow.svg'



const DATA = [
  {
   id:'01'
   
  },
  {
    id:'02'
  },
  {
   id:'03'
  },
  
];




const CreateSection =(props)=>{

  const h1 = Dimensions.get('window').width - 380 ;

  const renderItem = ({item}) => {
    return(
      <View>    
      <View style={{flexDirection:'row'}}>   
       <Text style={{color:'#380885',marginVertical:5}}>Section Name</Text>
       <Text style={{color:'#380885',marginLeft:260}}>{item.id}</Text>
       </View> 
       <>
       <KeyboardAvoidingView behavior='padding'>
        <TextInput 
              // placeholder='-Select-'
              style={{
                padding:13,
                height:40,
                width:'100%',
                backgroundColor:'rgba(209, 214, 255, 0.5)',
                borderRadius: 10,
              }}
           /> 
     
            <Text style={{color:'#380885',marginTop:15,marginVertical:5}}>Duration</Text>
            <TextInput 
              placeholder='hrs/mins'
              placeholderTextColor='#380885'
              style={{
                padding:13,
                height:40,
                width:'100%',
                backgroundColor:'rgba(209, 214, 255, 0.5)',
                borderRadius: 10,
              }}
           />
             <Text style={{color:'#380885',marginTop:15,marginVertical:5}}>Section Description</Text>
            <TextInput 
              // placeholder='-Select-'
              style={{
                padding:13,
                height:80,
                width:'100%',
                backgroundColor:'rgba(209, 214, 255, 0.5)',
                borderRadius: 10,
              }}
           /> 
           </KeyboardAvoidingView>
           </>
           <View style={{height:1,width:'100%',backgroundColor:'lightgrey',marginVertical:15}}></View>

          </View>
    );
  
  }




  return(
      
  <View style={styles.container}>
   
  <View>
  <Text style={styles.text}>Create Section</Text>
  </View>
 
      <View style={{height:1,width:'100%',backgroundColor:'lightgrey',marginVertical:25,}}></View>
      <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        // keyExtractor={item => item.id}
      />
    </SafeAreaView>

    
      <View style={{flexDirection:'row',marginTop:theme.spacing.xl,}}>
        <View style={{}}>
        <TouchableOpacity style={{height:30,width:30,backgroundColor:theme.colors.primary,borderRadius:30,
        marginTop:theme.spacing.xl}}>
          <Text style={{fontSize:22,color:theme.colors.white,textAlign:'center'}}>+</Text>
        </TouchableOpacity>
        </View>
 
        <View style={{flexDirection:'row',position:'relative',left:100}}>
            <TouchableOpacity
            style={{marginVertical:theme.spacing.xl,backgroundColor:'#380885',width:100,height:30,borderRadius:20,}}
         onPress={props.onPress}>
         <Text style={{color:'white',textAlign:'center',fontSize:15,top:3}}>Next</Text>
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

export default CreateSection;