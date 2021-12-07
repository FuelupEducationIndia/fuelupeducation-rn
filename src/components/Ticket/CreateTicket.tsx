import React from "react";
import { View,TextInput,StyleSheet,Switch,Modal,Linking,Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '../../theme'
import theme, { Card, Box } from '../../theme'


const CreateTicket=(props)=>{
  return(
    <ScrollView>
<View style={{height:'auto'}}>
  <ScrollView>
  <Card
        variant='elevated'
        // borderRadius='l'
        borderTopLeftRadius='none'
        borderTopRightRadius='none'
        marginBottom='s'
        padding='none'
        backgroundColor='white'>
          <View style={{marginVertical:10}}>
            <View>
              <Text style={{fontSize:17,marginHorizontal:20,fontFamily:'Mulish',fontWeight:'700'}}>Technical Problem Report</Text>
            </View>
            <View style={{marginVertical:20}}>
            <Text

style={[
  theme.textVariants.body,
  { color: theme.colors.primary, fontSize:18,marginHorizontal:30},
]}>
Full Name
</Text>
<TextInput style={{height:40,width:290,backgroundColor:'#D1D6FF80',marginHorizontal:30,marginVertical:5,borderRadius:5}}/>
   </View>
 <View>
   <Text

style={[
  theme.textVariants.body,
  { color: theme.colors.primary, fontSize:18,marginHorizontal:30},
]}>
Issue Title
</Text>
<TextInput style={{height:40,width:290,backgroundColor:'#D1D6FF80',marginHorizontal:30,marginVertical:5,borderRadius:5}}/>
</View>
<View style={{marginVertical:10}}>
<Text

style={[
  theme.textVariants.body,
  { color: theme.colors.primary, fontSize:18,marginHorizontal:30},
]}>
Priority
</Text>
  <View style={{flexDirection:'row',marginVertical:10}}>
    <TouchableOpacity onPress={()=>alert('low button')}
     style={{marginHorizontal:30,height:40,width:100,backgroundColor:'#FFC95F',justifyContent:'center',alignContent:'center',borderRadius:20}}>
      <Text style={{textAlign:'center',color:'white'}}>Low</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>alert('Medium button')}
     style={{right:20,height:40,width:100,backgroundColor:'#64AAD9',justifyContent:'center',alignContent:'center',borderRadius:20}}>
      <Text style={{textAlign:'center',color:'white'}}>Medium</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>alert('High button')}
     style={{right:10,height:40,width:100,backgroundColor:'#EF271B',justifyContent:'center',alignContent:'center',borderRadius:20}}>
      <Text style={{textAlign:'center',color:'white'}}>High</Text>
    </TouchableOpacity>
  </View>
 </View>
<View>
<Text

style={[
  theme.textVariants.body,
  { color: theme.colors.primary, fontSize:18,marginHorizontal:30},
]}>
Discription
</Text>
<TextInput 
style={{height:60,width:290,backgroundColor:'#D1D6FF80',marginHorizontal:30,marginVertical:5,borderRadius:5}} multiline={true}/> 

</View>
<View style={{marginVertical:10}}>
<Text

style={[
  theme.textVariants.body,
  { color: theme.colors.primary, fontSize:18,marginHorizontal:30},
]}>
Enter Captcha
</Text>
<TextInput 
style={{height:40,width:290,backgroundColor:'#D1D6FF80',marginHorizontal:30,marginVertical:5,borderRadius:5}} multiline={true}/> 

</View>
<View style={{flexDirection:'row'}}>
<Text

style={[
  theme.textVariants.body,
  { color: theme.colors.primary, fontSize:18,marginHorizontal:55,top:10},
]}>
Captcha Code
</Text>
<View style={{height:40,width:100,backgroundColor:'#380885',borderRadius:10,justifyContent:'center',alignContent:'center'}}>
  <Text style={{color:'white',textAlign:'center'}}>11f32g</Text>
</View>
</View>
<View style={{marginVertical:40}}>
    <TouchableOpacity style={{height:40,width:120,marginHorizontal:190,backgroundColor:'#380885',borderRadius:20,justifyContent:'center',alignContent:'center',}}>
    <Text

style={[
  theme.textVariants.body,
  { color: theme.colors.white, fontSize:18,textAlign:'center'},
]}>
Submit
</Text>
    </TouchableOpacity>
    </View>
<View>
<TouchableOpacity onPress={props.onPress}
 style={{height:50,width:140,marginHorizontal:30,borderRadius:20,justifyContent:'center',alignContent:'center',bottom:20}}>
    <Text

style={[
  theme.textVariants.body,
  { color: theme.colors.primary, fontSize:18,textAlign:'center'},
]}>
Report History
</Text>
<Text

style={[
  theme.textVariants.body,
  { color: theme.colors.primary, fontSize:18,textAlign:'center',bottom:15},
]}>
_____________
</Text>
    </TouchableOpacity>
  </View>
 </View>
 <View style={{marginVertical:60}}>

 </View>
  </Card>
  </ScrollView>
  
</View>
</ScrollView>
  )
}
export default CreateTicket;