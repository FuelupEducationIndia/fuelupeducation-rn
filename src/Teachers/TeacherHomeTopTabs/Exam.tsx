import React, { createRef } from 'react'
import { View, ScrollView ,Text, TouchableOpacity,StyleSheet,FlatList,SafeAreaView} from 'react-native'
import theme, { Card } from '../../theme'
import { Completed,CreateExam, CreateSection, RadioGroup ,CreateDashboard,CreateQuestion} from '../../components'
// import ActionSheet from "react-native-actions-sheet";
import DropDownPicC from '../../components/PicCourseDropDown'
import Minus from '../../assets/svgs/Minus.svg'
import Add from '../../assets/svgs/AddR.svg'


//const courseOptions = ['University', 'IITs', 'Nits']


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

const topButtons = ['Dashboard', 'Create Lecture']

const Exam = () => {
  const [activeButton, setActiveButton] = React.useState(topButtons[0])
  const [selectedValue, setSelectedValue] = React.useState("MO 2021 - Micro Organism");
  const [change,setChange] = React.useState(0);
  const [data , setData] = React.useState(DATA)

  const onNext = (Value: number) =>
  {
    if(Value == 0){
      setChange(0);
  
      //alert("ok")
    }
    else if(Value == 1){
      setChange(1);
    }
    else if(Value == 2){
      setChange(2);
    }
    else if(Value == 3) {
      setChange(3);
    }
  
  };


  
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
        <View style={{flexDirection:'column',marginHorizontal:10}}>
        <Text style={{color:theme.colors.darkSilver,fontWeight:'200',marginHorizontal:5}}>ss2021-</Text>
        <Text style={{marginTop:-3,fontSize:11,color:theme.colors.darkSilver, marginHorizontal:5}}>The Solar System</Text>
       </View>
        <Text style={{marginHorizontal:20,marginVertical:10,color:theme.colors.darkSilver}}>Trigonometry</Text>
  <Text style={{color:theme.colors.darkSilver,marginVertical:10,marginHorizontal:40}}>English
  </Text>
      </View>
      <View style={{height:1,width:'100%',backgroundColor:'lightgrey',marginVertical:10,marginLeft:38}}></View>
  <View style={{marginHorizontal:40,marginVertical:5}}>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Board/Uni</Text>
    <Text style={{marginHorizontal:62,color:theme.colors.darkSilver}}>Rajsthan</Text>
    </View>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Questions</Text>
    <Text style={{marginHorizontal:65,color:theme.colors.darkSilver}}>40</Text>
    </View>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Instructor</Text>
    <Text style={{marginHorizontal:69,color:theme.colors.darkSilver}}>Instructor Name</Text>
    </View>
    <View style={{flexDirection:'row',marginVertical:5}}>
    <Text>Collabarators</Text>
    <View style={{flexDirection:'column',}}>
    <Text style={{marginHorizontal:46,color:theme.colors.darkSilver}}>Instructor1 Instructor2 </Text>
    <Text  style={{color:theme.colors.darkSilver,marginTop:-12,marginHorizontal:46,}}>_______________________</Text>
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
  <View style={{height:1,width:'87%',backgroundColor:'grey',marginVertical:10,marginLeft:38}}></View>

  </>
    );
  }
  else if (item.collect != 1 ) {
  return(
    <View style={{flexDirection:'column'}}>
    <View style={{flexDirection:'row',}}>
    <TouchableOpacity onPress={() => onSelect(index)} style={{height:20,width:20,justifyContent:'center',left:5}}>
        <Add/>
         </TouchableOpacity>   
        <View style={{flexDirection:'column',marginHorizontal:5}}>
        <Text style={{color:theme.colors.darkSilver,fontWeight:'200',}}>ss2021-</Text>
        <Text style={{marginTop:-3,fontSize:11,color:theme.colors.darkSilver}}>The Solar System</Text>
       </View>
        <Text style={{marginHorizontal:20,marginVertical:10,color:theme.colors.darkSilver}}>Trigonometry</Text>
  <Text style={{color:theme.colors.darkSilver,marginVertical:10,marginHorizontal:40}}>English
  </Text>
      </View>
      <View style={{height:1,width:'87%',backgroundColor:'grey',marginVertical:10,marginLeft:38}}></View>

      </View>
  );
  }
  else{
    null;
  }
}



  return (


    <ScrollView style={{flex:1, backgroundColor:'grey'}}>
      <Card
        variant='elevated'
        borderRadius='l'
        borderTopLeftRadius='none'
        borderTopRightRadius='none'
      //  marginBottom='l'
        padding='none'
        backgroundColor='white'>
        <RadioGroup
          options={topButtons}
          activeButton={activeButton}
          onChange={(button: string) => setActiveButton(button)}/>
        
         <View style={{
                  marginHorizontal:15,
                 marginBottom:20
                }}>
                <Text 
                style={{
                  color:'#380885',
                }}> Pic Course</Text>
                <DropDownPicC/>
      {/* <Picker
        selectedValue={selectedValue}
        style={{ height: 35,backgroundColor:'rgba(209, 214, 255, 0.5)',color:'#380885',fontSize:10,marginVertical:10,borderRadius:15}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
     mode={"dropdown"}
     >
        <Picker.Item label="MO 2021 - Micro Organism" value="MO 2021 - Micro Organism" />
        <Picker.Item label="MO 2021 - Micro Organism" value="MO 2021 - Micro Organism" />
      </Picker>
      <DownArrow style={{position:'absolute',marginLeft:350,top:43,}} /> */}

   </View>

      </Card>
      <View>
      {activeButton == topButtons[0] ? (
     <View style={{marginVertical:8 ,}}>

     </View>
           ) : (
            <View style={{marginHorizontal:20,marginVertical:20 ,flexDirection:'row'}}>
            <View   style={[styles.view,
            {backgroundColor: change > 0 ? '#380885' : 'white' },
            {borderColor : change == 0 ? '#380885' : 'white' },
            {borderWidth : change == 0 ? 4 : 0}
            ]}>

            </View>
            <View style={[styles.view1,
                       {backgroundColor: change >= 1 ? '#380885' : 'white'}
            ]}>
            </View>
            <View   style={[styles.view,
           {backgroundColor: change > 1 ? '#380885' : 'white'},
           {borderColor : change == 1 ? '#380885' : 'white' },
           {borderWidth : change == 1 ? 4 : 0}
          
            ]}
             >
            </View>
            <View style={[styles.view1,
                       {backgroundColor: change >= 2 ? '#380885' : 'white'}
            ]}>
            </View>
            <View   style={[styles.view,
                    {backgroundColor: change > 2 ? '#380885' : 'white'},
                    {borderColor : change == 2 ? '#380885' : 'white' },
                    {borderWidth : change == 2 ? 4 : 0}
            ]}>
            </View>
            <View style={[styles.view1,
                       {backgroundColor: change >= 3 ? '#380885' : 'white'}
            ]}>
            </View>
            {/* <View    style={[styles.view,
                            //  {backgroundColor: change >= 3 ? '#380885' : 'white'},
                             {borderColor : change == 3 ? '#380885' : 'white' },
                             {borderWidth : change == 3 ? 4 : 0}

            ]} >
            </View> */}
    
            </View>
            )}
      </View>
 
      <Card
      
        variant='elevated'
        borderRadius='l'
        marginBottom='l'
        padding='none'
        backgroundColor='white'>
        {/* <ScrollView horizontal> */}
          <View
            style={{
              flex:1,
              margin: theme.spacing.m,
              display: 'flex',
              flexDirection: 'row',
            }}>
            {activeButton == topButtons[0] ? (
          
               <CreateDashboard/>
            
         
            ) : (
              <>
              {change === 0 ? (
                <CreateExam
                onPress={()=>onNext(1)}               
                />
              ):null}
                 {change === 1 ? (
                <CreateSection
                onPress={()=>onNext(2)}
                />
              ):null}
               {change === 2 ? (
                <CreateQuestion
                onPress={()=>onNext(3)}/>
              ):null}
            {change === 3 ? (
                <Completed/>
              ):null}
                 
               {/* {createLecture.map((data) => { */}
                 {/* return ( 
                    
                  ) })
                }
                 */} 
              </>
            )}
          </View>
        {/* </ScrollView> */}

      </Card>
      <View>
      {activeButton == topButtons[0] ? (
     <View style={{marginTop:-10}}>
         <Card
      
      variant='elevated'
      borderRadius='l'
      marginBottom='l'
      padding='none'
      backgroundColor='white'>
     <View style={{padding :theme.spacing.m}}>
       <Text style={{color:theme.colors.primary,fontWeight:'bold',fontSize:15}}>Exam Summary</Text>
       <Card
      variant='elevated'
      backgroundColor='white'
      borderRadius='m'
      padding='none'
      // margin='s'
    >
    <View style={{height:2,width:'97%',marginHorizontal:5,backgroundColor:'lightgrey',marginVertical:10,}}></View>
    <View style={{flexDirection:'row',marginHorizontal:20,}}>
      <Text style={{color:theme.colors. darkSilver,fontSize:15}} >Exam Title</Text>
      <Text  style={{marginHorizontal:50,color:theme.colors. darkSilver,fontSize:15}}  >Date Submitted</Text>
      <Text  style={{color:theme.colors. darkSilver,fontSize:15}} >Status</Text>
      </View>

      <View style={{height:2,width:'97%',marginHorizontal:5,backgroundColor:'lightgrey',marginVertical:10,}}></View>
   
      <SafeAreaView >
      <FlatList
        data={data}
        keyExtractor={(item, index) => 'key'+index}
        renderItem={renderItem}
       // keyExtractor={item => item.id}
      />
    </SafeAreaView>

     
      
      <View style={{flexDirection:'row',marginVertical:30,marginLeft:200,marginTop:20}}>
       <TouchableOpacity>
       <Text style={{marginHorizontal:18,fontSize:15,color:theme.colors.darkSilver}}>Previous</Text></TouchableOpacity>
       <TouchableOpacity>
<Text style={{color:theme.colors.secondary,fontSize:15}}>Next</Text></TouchableOpacity>

     </View>

    </Card>
     </View>
    
      </Card>

     </View>
           ) : (
           <></>
            )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
 view: {
  height:28,
  width:28,
  backgroundColor:'white',
  borderRadius:28,
  // borderColor:'#380885',
 // borderWidth:4
  },
  view1 : {
    height:2,
    width:'10%',
    backgroundColor:'white',
    marginVertical:13,
    marginHorizontal:10
  }
})

export default Exam
