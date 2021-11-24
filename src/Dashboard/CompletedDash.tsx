import React, { createRef } from 'react'
import { View, ScrollView ,Text, TouchableOpacity,ProgressBarAndroid} from 'react-native'
import theme, { Card } from '../theme'



const CompletedDash =()=>{
  return(
   
    <Card
      
    variant='elevated'
    borderRadius='l'
    marginBottom='l'
    padding='none'
    backgroundColor='white'
    >
      <View style={{marginBottom:40,}}>
    <View style={{flexDirection:'row',}}>
      <Text style={{marginVertical:15,color:theme.colors. darkSilver,fontSize:15}} >Exam Title</Text>
      <Text  style={{marginHorizontal:55,marginVertical:15,color:theme.colors. darkSilver,fontSize:15}}  >Date Submitted</Text>
      <Text  style={{marginVertical:15,color:theme.colors. darkSilver,fontSize:15}} >Status</Text>
    </View>
    <View style={{height:1.2,width:'95%',backgroundColor:'grey',}}></View>
    <ScrollView>
      <View style={{marginVertical:10}}>
      <View style={{flexDirection:'row',marginHorizontal:6,}}>
        <View style={{flexDirection:'column',}}>
        <Text style={{fontSize:17,color:theme.colors.primary,fontWeight:'200'}}>Viruses</Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={1}
          color='#f16600'
         style={{marginVertical:10,width:100}}
        />
        <Text style={{marginTop:-10,fontSize:11,color:theme.colors.darkSilver}}>Final Assessment</Text>
       </View>
        <Text style={{marginHorizontal:40,marginVertical:15,color:theme.colors.darkSilver}}>Jan 20, 2021</Text>
<TouchableOpacity style={{backgroundColor:theme.colors.primary,paddingHorizontal:20,marginVertical:20,paddingVertical:5,borderRadius:15,marginHorizontal:10}}>
  <Text style={{color:theme.colors.white}}>View</Text>
</TouchableOpacity>
      </View>

      <View style={{flexDirection:'row',marginHorizontal:6,}}>
        <View style={{flexDirection:'column',}}>
        <Text style={{fontSize:17,color:theme.colors.primary,fontWeight:'200'}}>Viruses</Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={1}
          color='#f16600'
         style={{marginVertical:10,width:100}}
        />
        <Text style={{marginTop:-10,fontSize:11,color:theme.colors.darkSilver}}>Final Assessment</Text>
       </View>
        <Text style={{marginHorizontal:40,marginVertical:15,color:theme.colors.darkSilver}}>Jan 20, 2021</Text>
<TouchableOpacity style={{backgroundColor:theme.colors.primary,paddingHorizontal:20,marginVertical:20,paddingVertical:5,borderRadius:15,marginHorizontal:10}}>
  <Text style={{color:theme.colors.white}}>View</Text>
</TouchableOpacity>
      </View>

      <View style={{flexDirection:'row',marginHorizontal:6,marginVertical:8}}>
        <View style={{flexDirection:'column',}}>
        <Text style={{fontSize:17,color:theme.colors.primary,fontWeight:'200'}}>Viruses</Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={1}
          color='#f16600'
         style={{marginVertical:10,width:100}}
        />
        <Text style={{marginTop:-10,fontSize:11,color:theme.colors.darkSilver}}>Final Assessment</Text>
       </View>
        <Text style={{marginHorizontal:40,marginVertical:15,color:theme.colors.darkSilver}}>Jan 20, 2021</Text>
<TouchableOpacity style={{backgroundColor:theme.colors.primary,paddingHorizontal:20,marginVertical:20,paddingVertical:5,borderRadius:15,marginHorizontal:10}}>
  <Text style={{color:theme.colors.white}}>View</Text>
</TouchableOpacity>
      </View>

    
      </View> 
    </ScrollView>
  
    </View>
    </Card>
  );
}
 export default CompletedDash;