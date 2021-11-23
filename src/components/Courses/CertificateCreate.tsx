import React from 'react'
import { View,  StyleSheet, TextInput ,TouchableOpacity ,Dimensions,Image} from 'react-native'
import theme, {  Text } from '../theme'

import Frm1 from '../../assets/svgs/Framecplt.svg'
import Print from '../../assets/svgs/i32.svg'
import Cloud from '../../assets/svgs/cloud.svg'
import { SearchBar} from '.'


//const courseOptions = ['University', 'IITs', 'Nits']

const CertificateCreate = (props)=>{
//const [college, setCollege] = React.useState()
// const [percentage , setPercentage] = React.useState();

const width = Dimensions.get('window').width - 40;
const width1 = Dimensions.get('window').width - 310 ;
const h1 = Dimensions.get('window').width - 380 ;

const [search, setSearch] = React.useState('')

const onSearch = () => {
  console.log('searching')
  return
}
  return (
    
  <View style={styles.container}>
    <View>
    <Text style={styles.text}>Certificate Created</Text>
    </View>
    <View style={{height:1,width:'100%',backgroundColor:'lightgrey',marginTop:10}}></View>
 <View>
   <View style={{flexDirection:'row',marginVertical:15,marginHorizontal:20}}>
     <Frm1/>
     <View style={{flexDirection:'column',marginHorizontal:10,justifyContent:'center'}}>
     <TouchableOpacity
            style={{flexDirection:'row',borderColor:theme.colors.primary,marginBottom:10,borderWidth:1,paddingHorizontal:9,width:'auto',height:26,borderRadius:20,marginTop:10}}
        >
          <Cloud style={{marginVertical:4.5,marginHorizontal:4}}/>
         <Text style={{color:theme.colors.primary,textAlign:'center',fontSize:15,top:2}}>Download</Text>
          </TouchableOpacity>
          <Print/>
     </View>

   </View>
   <View style={{marginBottom:240}}>
   <SearchBar
          value={search}
          onChange={(text: string) => setSearch(text)}
          onSubmit={() => onSearch()}
        />
        </View>
 </View>
   
<View style={{flexDirection:'row-reverse'}} >
            <TouchableOpacity
            style={{marginVertical:theme.spacing.l,backgroundColor:'#380885',width:100,height:30,borderRadius:20,}}
         onPress={props.onPress}>
         <Text style={{color:'white',textAlign:'center',fontSize:15,top:4.5}}>Done</Text>
          </TouchableOpacity>
      
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

export default CertificateCreate
