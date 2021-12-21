import React from 'react'
import { View,StyleSheet,TextInput,SafeAreaView,ScrollView,FlatList} from 'react-native'
import theme, {  Card, Text } from '../../theme'

import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import { SearchBar, CourseCard, Button, FilterModal1 } from '../../components'
import { FilterModal} from '../Modals'
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



const CertificateDashboard =()=>{
  const [search, setSearch] = React.useState('')
  const [showFilter, setShowFilter] = React.useState(false)
const [data , setData] = React.useState(DATA)
  const onSearch = () => {
    console.log('searching')
    return
  }
  const onPrev = () => {
    return
  }
  const onNext = () => {
    return
  }


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
  const renderItem = ({ item, index }) => {
    if(item.collect == 1){
      return(
        <>
      <View style={{backgroundColor:theme.colors.lightBlue}}>
      <View style={{flexDirection:'row',height:'auto'}}>
    <TouchableOpacity style={{backgroundColor:theme.colors.secondary,height:20,width:20,borderRadius:20,marginVertical:10,marginEnd:10}}>
  <Text style={{fontSize:15,color:theme.colors.white,fontWeight:'bold',textAlign:'center',}}>-</Text>
</TouchableOpacity>
        <View style={{flexDirection:'column',}}>
        <Text style={{color:theme.colors.darkSilver,fontWeight:'200',}}>ss2021-</Text>
        <Text style={{marginTop:-3,fontSize:11,color:theme.colors.darkSilver}}>The Solar System</Text>
       </View>
       <View style={{flexDirection:'column',marginHorizontal:23}}>
        <Text style={{color:theme.colors.darkSilver,fontWeight:'200',}}>A012345-</Text>
        <Text style={{marginTop:-3,fontSize:11,color:theme.colors.darkSilver}}>LastName FirstName</Text>
       </View>
         <Text style={{color:theme.colors.darkSilver,marginVertical:10,marginStart:10}}>1 day ago
  </Text>
      </View>
      <View style={{height:1,width:'87%',backgroundColor:'grey',marginVertical:10,marginLeft:38}}></View>
  <View style={{marginHorizontal:35,marginVertical:5}}>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Board/Uni</Text>
    <Text style={{marginHorizontal:51,color:theme.colors.darkSilver}}>Rajsthan</Text>
    </View>
    
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Instructor</Text>
    <Text style={{marginHorizontal:54,color:theme.colors.darkSilver}}>Instructor Name</Text>
    </View>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Graduated Year</Text>
    <View style={{flexDirection:'column',}}>
    <Text style={{marginHorizontal:20,color:theme.colors.darkSilver}}>2020-2021 </Text>
    </View>
    </View>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Preview</Text>
    <View style={{flexDirection:'column',}}>
    <Text style={{marginHorizontal:69,color:theme.colors.darkSilver}}>Open</Text>
    <Text  style={{color:theme.colors.grey,marginTop:-9,marginHorizontal:65}}>_______</Text>
    </View>
    </View>
    <View style={{flexDirection:'column',}}>
    <Text style={{color:'red'}}>Delete</Text>
    <Text  style={{color:'red',marginTop:-14}}>_______</Text>
    </View>
  </View> 
  </View>
  <View style={{height:1,width:'87%',backgroundColor:'grey',marginVertical:10,marginLeft:38}}></View>

  </>
        );
     }
     else if (item.collect != 1 ) {
      return (
        <View>
          <View style={{ flexDirection: 'row',height:'auto' }}>
            <TouchableOpacity
              onPress={() => onSelect(index)}
              style={{ backgroundColor: theme.colors.primary, height: 20, width: 20, borderRadius: 20, marginVertical: 10, marginHorizontal: 6 }}>
              <Text style={{ fontSize: 15, color: theme.colors.white, textAlign: 'center' }}>+</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'column', marginHorizontal: 5 }}>
              <Text style={{ color: theme.colors.darkSilver, fontWeight: '200', }}>ss2021-</Text>
              <Text style={{ marginTop: -3, fontSize: 11, color: theme.colors.darkSilver }}>The Solar System</Text>
            </View>
            <View style={{ flexDirection: 'column', marginHorizontal: 23 }}>
              <Text style={{ color: theme.colors.darkSilver, fontWeight: '200', }}>A012345-</Text>
              <Text style={{ marginTop: -3, fontSize: 11, color: theme.colors.darkSilver }}>LastName FirstName</Text>
            </View>
            <Text style={{ color: theme.colors.darkSilver, marginVertical: 10, marginStart: 10 }}>1 day ago
            </Text>
          </View>
          <View style={{ height: 1, width: '87%', backgroundColor: 'grey', marginVertical: 10, marginLeft: 38 }}></View>
        </View>

      )
    }
    else{
      null;
    }
  }

  return (
    <ScrollView>
      
        <SearchBar
          value={search}
          onChange={(text: string) => setSearch(text)}
          onSubmit={() => onSearch()}
        />
        <View style={{ alignItems: 'flex-start' }}>
          <TouchableOpacity
            onPress={() => setShowFilter(true)}
            activeOpacity={0.9}
            style={styles.filterButton}>
            <Text variant='body' marginRight='s' color='primary'>
              Filter
            </Text>
            <Icon name={'filter'} color={theme.colors.primary} size={15} />
          </TouchableOpacity>
        </View>
        <ScrollView>
        <FilterModal
          visible={showFilter}
          onRequestClose={() => setShowFilter(false)}
        /></ScrollView>
        {/* <View
          style={{
            marginVertical: theme.spacing.s,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          
        </View> */}
        <View style={{height:2,width:'92%',marginLeft:25,backgroundColor:'lightgrey',marginVertical:10,}}></View>
    <View style={{flexDirection:'row',marginHorizontal:28,justifyContent:'space-between'}}>
      <Text style={{color:theme.colors. darkSilver,fontSize:15}} >Course</Text>
      <Text  style={{color:theme.colors. darkSilver,fontSize:15,}}>Student & ID</Text>
      <Text  style={{color:theme.colors. darkSilver,fontSize:15 ,}} >Posted Date</Text>
      </View>

      <View style={{height:2,width:'92%',marginLeft:28,backgroundColor:'lightgrey',marginVertical:10,}}></View>

<SafeAreaView>
<FlatList
     
          data={DATA}
          keyExtractor={(item, index) => 'key'+index}
          renderItem={renderItem}
       


        />
    </SafeAreaView>     
      <View style={{flexDirection:'row',marginVertical:30,marginLeft:200,marginTop:20}}>
       <TouchableOpacity>
       <Text style={{marginHorizontal:18,fontSize:15,color:theme.colors.darkSilver}}>Previous</Text></TouchableOpacity>
       <TouchableOpacity>
<Text style={{color:theme.colors.secondary,fontSize:15}}>Next</Text></TouchableOpacity>

     </View>

    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  filterButton: {
    backgroundColor: theme.colors.lightBlue,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: theme.spacing.s,
  },
})


export default CertificateDashboard