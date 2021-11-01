import React from 'react'
import { View,  StyleSheet, TextInput ,Dimensions,TouchableOpacity, ScrollView ,Picker} from 'react-native'
import theme, { Card, Text } from '../../theme'
import Right from '../../assets/svgs/right.svg'
import DownArrow from '../../assets/svgs/Darraow.svg'
import { backgroundColor } from '@shopify/restyle'
import DiffLevel from '../../components/DiffLevel'
// import { Menu, MenuItem, } from 'react-native-material-menu';


const Createquestion2 =()=>{

  
// const [action,setAction] = React.useState();
  const [color,setColor]=React.useState('white');
  const press =() =>{
    setColor('green')
  }

  
// const [down,setDown] = React.useState(" ");
  const [selectedValue, setSelectedValue] = React.useState("Multiple choice");
  const [File, setFile] = React.useState("1 MB");

  return(

  <View>
   
    <Text style={{fontWeight:'bold',color:'black',fontSize:15}}>Create a question </Text>
    <Text style={{color:theme.colors.darkSilver,marginVertical:10}}>Select topic </Text>
    <View style={{flexDirection:'row',marginVertical:10}}>
      <TextInput 
      placeholder='Types of Fungi'
      placeholderTextColor={theme.colors.darkSilver}
      style={{backgroundColor:"rgba(209, 214, 255, 0.5)",borderRadius:10,height:'auto',width:'auto',paddingVertical:5,paddingHorizontal:17}}
      >
      </TextInput>
      <TextInput 
      placeholder='Growth of Bacteria'
      placeholderTextColor={theme.colors.darkSilver}
      style={{backgroundColor:'rgba(209, 214, 255, 0.5)',marginHorizontal:15,borderRadius:10,height:'auto',width:'auto',paddingVertical:5,paddingHorizontal:17}}
      >
      </TextInput>
    </View>
    <TouchableOpacity style={{marginVertical:15}}>
      <Text style={{color:'#380385',fontSize:15}}>+ Create new topic</Text>
    </TouchableOpacity>
    <Text style={{color:'#380385',marginTop:-29}}>_____________________</Text>
    <View style={{marginTop:10}}>
    <Text style={{fontWeight:'bold',color:'black',fontSize:15,marginVertical:10,}}>Enter details </Text>
    </View>
  
    <View style={{flexDirection:'row',marginVertical:10,justifyContent:'space-between'}}>
    <Text style={{color:theme.colors.darkSilver,fontSize:13}}>Question type </Text>
    <Text style={{color:theme.colors.darkSilver,fontSize:13,marginRight:35}}>Question difficulty level </Text>
</View>
    <View style={{flexDirection:'row',}}>

  <View style={styles.container1}>
      
    
      <Picker
        selectedValue={selectedValue}
        style={{color:theme.colors.darkSilver,height:40,width:width,}}
        onValueChange={(itemValue,) => setSelectedValue(itemValue)}
        mode={'dropdown'}
      >
      <Picker.Item label="Multiple choice" value="Multiple choice" />
        <Picker.Item label="Dropdown" value="Dropdown" />
        <Picker.Item label="Short answer" value="Short answer" />
        <Picker.Item label="Paragraph" value="Paragraph" />
        <Picker.Item label="Multiple choice grid" value="Multiple choice grid" />
        <Picker.Item label="File upload" value="File upload" />
      </Picker>
    
    </View>
      <DiffLevel/>
  </View>
{/*     
      <TextInput 
      
      placeholder='Multiple Choices'
      placeholderTextColor={theme.colors.darkSilver}
      style={{backgroundColor:'rgba(209, 214, 255, 0.5)',borderRadius:10,height:40,width:165,paddingTop:10}}
      >
      </TextInput> */}
    
      {/* <DownArrow style={{position:'absolute',marginLeft:320,top:7,}} /> */}
{/* 
      <TextInput 
      placeholder='Medium'
      placeholderTextColor={theme.colors.darkSilver}
      style={{backgroundColor:'rgba(209, 214, 255, 0.5)',borderRadius:10,height:40,width:145,paddingTop:10}}
      >
      </TextInput> */}
      {/* <DownArrow 
      style={{position:'absolute',marginLeft:120,top:7,}} /> */}

    <View style= {{marginVertical:15}}>
    <Text style={{color:'#380885',}}>Question </Text>
      <TextInput 
      
            placeholder='Enter Question here ...'
            placeholderTextColor={theme.colors.darkSilver}
            style={{
              padding:13,
              height:40,
              width:'100%',
              backgroundColor:'rgba(209, 214, 255, 0.5)',
              borderRadius: 10,
              marginVertical:10
            }}
         /> 
         </View>
         <Text style={{fontWeight:'bold',color:'black',fontSize:15,}}>Enter answer(s) and mark(s)</Text>
        <View style={{flexDirection:'row',marginVertical:10,justifyContent:'space-between'}}>
         <Text style={{color:theme.colors.darkSilver,fontSize:15}}>Correct Answer(s)</Text>
         {/* <View style={{flexDirection:'row-reverse',paddingHorizontal:100}}> */}
         <Text style={{color:theme.colors.darkSilver,fontSize:15,marginRight:60}}>Points</Text>
         {/* </View>   */}
         </View>
         
         {selectedValue === 'Multiple choice' ?(
          <>
         <View style={{flexDirection:'row',marginVertical:10,}}>
           <TouchableOpacity onPress={()=>press()}
           style={{backgroundColor:color,height:20,width:20,borderRadius:20,borderColor:theme.colors.darkSilver,borderWidth:1.5,marginTop:8}}>
<Right style={{marginTop:4,marginLeft:3}}/>
           </TouchableOpacity>
           <TextInput  placeholder='Enter answer Choice ..'
      placeholderTextColor={theme.colors.darkSilver}
      style={{backgroundColor:'rgba(209, 214, 255, 0.5)',borderRadius:10,height:35,width:180,paddingTop:10,marginHorizontal:6}}
      >
      </TextInput>
      <TouchableOpacity style={{marginTop:2}}>
        <Text style={{fontSize:20,color:theme.colors.darkSilver}}>X</Text>
      </TouchableOpacity>
            <View style={{borderWidth:1,borderColor:theme.colors.darkSilver,width:'auto',height:30,borderRadius:5,flexDirection:'row',alignContent:'space-between',marginHorizontal:25,paddingHorizontal:10}}>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>-</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20,paddingHorizontal:10}}>1</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>+</Text>
            </View>
         </View>   
         <View style={{flexDirection:'row',marginVertical:10,}}>
           <TouchableOpacity onPress={()=>press()}
           style={{backgroundColor:color,height:20,width:20,borderRadius:20,borderColor:theme.colors.darkSilver,borderWidth:1.5,marginTop:8}}>
           <Right style={{marginTop:4,marginLeft:3}}/>
           </TouchableOpacity>
           <TextInput  placeholder='Enter answer Choice ..'
      placeholderTextColor={theme.colors.darkSilver}
      style={{backgroundColor:'rgba(209, 214, 255, 0.5)',borderRadius:10,height:35,width:180,paddingTop:10,marginHorizontal:6}}
      >
      </TextInput>
      <TouchableOpacity style={{marginTop:2}}>
        <Text style={{fontSize:20,color:theme.colors.darkSilver}}>X</Text>
      </TouchableOpacity>
            <View style={{borderWidth:1,borderColor:theme.colors.darkSilver,width:'auto',height:30,borderRadius:5,flexDirection:'row',justifyContent:'space-evenly',marginHorizontal:25,paddingHorizontal:10}}>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>-</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20,paddingHorizontal:10}}>1</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>+</Text>

            </View>
         </View>
         <View style={{flexDirection:'row',marginVertical:10,}}>
           <TouchableOpacity onPress={()=>press()}
           style={{backgroundColor:color,height:20,width:20,borderRadius:20,borderColor:theme.colors.darkSilver,borderWidth:1.5,marginTop:8}}>
           <Right style={{marginTop:4,marginLeft:3}}/>
           </TouchableOpacity>
           <View style={{flexDirection:'column',marginHorizontal:13}}>
           <TouchableOpacity style={{marginVertical:10}}>
      <Text style={{color:'#380385',fontSize:15}}>+Add options</Text>
    </TouchableOpacity>
    <Text style={{color:'#380385',marginTop:-25}}>_______________</Text>
    </View>
         </View>
         </>
    ):null}
         {selectedValue === 'Short answer' ?(
    <View style={{}}>
     <View style={{flexDirection:'row',marginVertical:10,}}>
       <View style={{flexDirection:'column',marginTop:7}}>
   <Text style={{color:theme.colors.darkSilver}}>Luctus accumsan tortor posuere ac ut</Text>
   <Text style={{color:theme.colors.darkSilver,marginTop:-15}}>_____________________________________</Text>
   </View>
      <TouchableOpacity style={{marginTop:0,marginHorizontal:5}}>
        <Text style={{fontSize:20,color:theme.colors.darkSilver,}}>X</Text>
      </TouchableOpacity>
      <View style={{borderWidth:1,borderColor:theme.colors.darkSilver,width:'auto',height:30,borderRadius:5,flexDirection:'row',justifyContent:'space-evenly',paddingHorizontal:10}}>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>-</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20,paddingHorizontal:10}}>1</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>+</Text>

            </View>
         </View>   
         <View style={{flexDirection:'row',marginVertical:10,}}>
       <View style={{flexDirection:'column',marginTop:7}}>
   <Text style={{color:theme.colors.darkSilver}}>Luctus accumsan tortor posuere ac ut</Text>
   <Text style={{color:theme.colors.darkSilver,marginTop:-15}}>_____________________________________</Text>
   </View>
      <TouchableOpacity style={{marginTop:0,marginHorizontal:5}}>
        <Text style={{fontSize:20,color:theme.colors.darkSilver,}}>X</Text>
      </TouchableOpacity>
      <View style={{borderWidth:1,borderColor:theme.colors.darkSilver,width:'auto',height:30,borderRadius:5,flexDirection:'row',justifyContent:'space-evenly',paddingHorizontal:10}}>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>-</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20,paddingHorizontal:10}}>1</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>+</Text>

            </View>
         </View>   
         <View style={{flexDirection:'row',marginVertical:5,}}>
      
           <View style={{flexDirection:'column',marginHorizontal:0}}>
           <TouchableOpacity style={{marginVertical:10}}>
      <Text style={{color:'#380385',fontSize:15}}>+Add a Correct answer</Text>
    </TouchableOpacity>
    <Text style={{color:'#380385',marginTop:-25}}>_________________________</Text>
    </View>
         </View>
    </View>
      ):null}
         {selectedValue === 'Paragraph' ?(
    <View style={{}}>
    <View style={{flexDirection:'row',marginVertical:10,}}>
        
           <TextInput 
           multiline={true}
            //placeholder='Enter answer Choice ..'
      placeholderTextColor={theme.colors.darkSilver}
      style={{backgroundColor:'rgba(209, 214, 255, 0.5)',borderRadius:10,height:100,width:'66%',paddingTop:10}}
      >
      </TextInput>
      <TouchableOpacity style={{marginTop:2}}>
        <Text style={{fontSize:20,color:theme.colors.darkSilver,marginHorizontal:12}}>X</Text>
      </TouchableOpacity>
      <View style={{borderWidth:1,borderColor:theme.colors.darkSilver,width:'auto',height:30,borderRadius:5,flexDirection:'row',justifyContent:'space-evenly',paddingHorizontal:10}}>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>-</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20,paddingHorizontal:10}}>1</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>+</Text>

            </View>
         </View>
         <View style={{flexDirection:'column',marginHorizontal:13}}>
           <TouchableOpacity style={{marginVertical:10}}>
           <Text style={{color:'#380385',fontSize:15}}>+Add a Correct answer</Text>
    </TouchableOpacity>
    <Text style={{color:'#380385',marginTop:-25}}>_________________________</Text>
    </View>
         </View>
           ):null}
             {selectedValue === 'Dropdown' ?(
          <>
         <View style={{flexDirection:'row',marginVertical:10,}}>
           <TouchableOpacity onPress={()=>press()}
           style={{backgroundColor:color,height:20,width:20,borderRadius:20,borderColor:theme.colors.darkSilver,borderWidth:1.5,marginTop:8}}>
<Right style={{marginTop:4,marginLeft:3}}/>
           </TouchableOpacity>
           <TextInput  placeholder='Enter answer Choice ..'
      placeholderTextColor={theme.colors.darkSilver}
      style={{backgroundColor:'rgba(209, 214, 255, 0.5)',borderRadius:10,height:35,width:180,paddingTop:10,marginHorizontal:6}}
      >
      </TextInput>
      <TouchableOpacity style={{marginTop:2}}>
        <Text style={{fontSize:20,color:theme.colors.darkSilver}}>X</Text>
      </TouchableOpacity>
            <View style={{borderWidth:1,borderColor:theme.colors.darkSilver,width:'auto',height:30,borderRadius:5,flexDirection:'row',alignContent:'space-between',marginHorizontal:25,paddingHorizontal:10}}>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>-</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20,paddingHorizontal:10}}>1</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>+</Text>
            </View>
         </View>   
         <View style={{flexDirection:'row',marginVertical:10,}}>
           <TouchableOpacity onPress={()=>press()}
           style={{backgroundColor:color,height:20,width:20,borderRadius:20,borderColor:theme.colors.darkSilver,borderWidth:1.5,marginTop:8}}>
           <Right style={{marginTop:4,marginLeft:3}}/>
           </TouchableOpacity>
           <TextInput  placeholder='Enter answer Choice ..'
      placeholderTextColor={theme.colors.darkSilver}
      style={{backgroundColor:'rgba(209, 214, 255, 0.5)',borderRadius:10,height:35,width:180,paddingTop:10,marginHorizontal:6}}
      >
      </TextInput>
      <TouchableOpacity style={{marginTop:2}}>
        <Text style={{fontSize:20,color:theme.colors.darkSilver}}>X</Text>
      </TouchableOpacity>
            <View style={{borderWidth:1,borderColor:theme.colors.darkSilver,width:'auto',height:30,borderRadius:5,flexDirection:'row',justifyContent:'space-evenly',marginHorizontal:25,paddingHorizontal:10}}>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>-</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20,paddingHorizontal:10}}>1</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>+</Text>

            </View>
         </View>
         <View style={{flexDirection:'row',marginVertical:10,}}>
           <TouchableOpacity onPress={()=>press()}
           style={{backgroundColor:color,height:20,width:20,borderRadius:20,borderColor:theme.colors.darkSilver,borderWidth:1.5,marginTop:8}}>
           <Right style={{marginTop:4,marginLeft:3}}/>
           </TouchableOpacity>
           <View style={{flexDirection:'column',marginHorizontal:13}}>
           <TouchableOpacity style={{marginVertical:10}}>
      <Text style={{color:'#380385',fontSize:15}}>+Add options</Text>
    </TouchableOpacity>
    <Text style={{color:'#380385',marginTop:-25}}>_______________</Text>
    </View>
         </View>
         </>
    ):null}
            {selectedValue === 'Multiple choice grid' ?(
          <>
          <ScrollView horizontal>
          <View style={{}}>
           
            <Text style={{color:theme.colors.darkSilver,marginLeft:210}}>column</Text>
     <View style={{flexDirection:'row',marginVertical:10,backgroundColor:'rgba(209, 214, 255, 0.5)',paddingVertical:10,paddingHorizontal:10}}>
       <View style={{flexDirection:'column',}}>
   <Text style={{color:theme.colors.darkSilver}}>1.Row 1 (Type an option here...)</Text>
   <Text style={{color:theme.colors.darkSilver,marginTop:-15}}>_________________________________</Text>
   </View>
   <TouchableOpacity 
           style={{backgroundColor:'white',height:24,width:24,marginHorizontal:10,borderRadius:24,borderColor:theme.colors.darkSilver,borderWidth:1.5,}}>
         
           </TouchableOpacity>
            <View style={{borderWidth:1,borderColor:theme.colors.darkSilver,width:80,height:30,borderRadius:5,flexDirection:'row',justifyContent:'space-evenly',marginHorizontal:10}}>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>-</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>1</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>+</Text>

            </View>
         </View>   
       
     <View style={{flexDirection:'row',marginVertical:10,backgroundColor:'rgba(209, 214, 255, 0.5)',paddingVertical:10,paddingHorizontal:10}}>
       <View style={{flexDirection:'column',}}>
   <Text style={{color:theme.colors.darkSilver}}>2.Row 2 (Type an option here...)</Text>
   <Text style={{color:theme.colors.darkSilver,marginTop:-15}}>_________________________________</Text>
   </View>
   <TouchableOpacity 
           style={{backgroundColor:'white',height:24,width:24,marginHorizontal:10,borderRadius:24,borderColor:theme.colors.darkSilver,borderWidth:1.5,}}>
         
           </TouchableOpacity>
            <View style={{borderWidth:1,borderColor:theme.colors.darkSilver,width:80,height:30,borderRadius:5,flexDirection:'row',justifyContent:'space-evenly',marginHorizontal:10}}>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>-</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>1</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>+</Text>

            </View>
         </View>   
         </View>
    </ScrollView>
         <View style={{flexDirection:'row',marginVertical:5,}}>
      
           <View style={{flexDirection:'column',marginHorizontal:0}}>
           <TouchableOpacity style={{marginVertical:10}}>
   <Text style={{color:theme.colors.darkSilver}}>  3. <Text style={{color:'#380385',fontSize:15}}>+ Add row</Text></Text>
    </TouchableOpacity>
    <Text style={{color:'#380385',marginTop:-25,marginHorizontal:25}}>___________</Text>
    </View>
         </View>
     
 
         </>
     ):null} 
      {selectedValue === 'File upload' ?(
        <>
             <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:10}}>
             <TouchableOpacity onPress={()=>press()}
             style={{backgroundColor:color,height:24,width:24,borderColor:theme.colors.darkSilver,borderWidth:1.5,marginTop:8}}>
  <Right style={{marginTop:4,marginLeft:3}}/>
             </TouchableOpacity>
            <Text style={{color:theme.colors.darkSilver,fontSize:13,marginVertical:10,marginHorizontal:8}}>PDF</Text>
            <TouchableOpacity onPress={()=>press()}
             style={{backgroundColor:color,height:24,width:24,marginHorizontal:10,borderColor:theme.colors.darkSilver,borderWidth:1.5,marginTop:8}}>
  <Right style={{marginTop:4,marginLeft:3}}/>
             </TouchableOpacity>
             <Text style={{color:theme.colors.darkSilver,fontSize:13,marginVertical:10}}>DOC,DOCX</Text>
             <View style={{borderWidth:1,borderColor:theme.colors.darkSilver,width:'auto',height:30,borderRadius:5,flexDirection:'row',justifyContent:'space-evenly',marginHorizontal:70,paddingHorizontal:10}}>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>-</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20,paddingHorizontal:10}}>1</Text>
              <Text style={{color:theme.colors.darkSilver,fontSize:20}}>+</Text>

            </View>
           </View>   
           <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:10}}>
             <TouchableOpacity onPress={()=>press()}
             style={{backgroundColor:color,height:24,width:24,borderColor:theme.colors.darkSilver,borderWidth:1.5,marginTop:8}}>
  <Right style={{marginTop:4,marginLeft:3}}/>
             </TouchableOpacity>
            <Text style={{color:theme.colors.darkSilver,fontSize:13,marginVertical:10,marginHorizontal:8}}>PNG</Text>
            <TouchableOpacity onPress={()=>press()}
             style={{backgroundColor:color,height:24,width:24,marginHorizontal:10,borderColor:theme.colors.darkSilver,borderWidth:1.5,marginTop:8}}>
  <Right style={{marginTop:4,marginLeft:3}}/>
             </TouchableOpacity>
             <Text style={{color:theme.colors.darkSilver,fontSize:13,marginVertical:10}}>JPG,JPEG</Text>
             <TouchableOpacity 
             style={{backgroundColor:'white',height:24,width:24,marginHorizontal:10,borderColor:theme.colors.darkSilver,borderWidth:1.5,marginTop:8}}>
  <Right style={{marginTop:4,marginLeft:3}}/>
             </TouchableOpacity>
             <Text style={{color:theme.colors.darkSilver,fontSize:13,marginVertical:10}}>GIF</Text>
             </View>   
      <View>
       <Text style={{fontSize:16,color:theme.colors.darkSilver,marginVertical:8}}>Maximum file size</Text>
           <View style={styles.container1}>
             <Picker
        selectedValue={File}
        style={{backgroundColor:'rgba(209, 214, 255, 0.5)',color:theme.colors.darkSilver,borderRadius:15,height:40,width:width,paddingTop:10}}
        onValueChange={(itemValue, itemIndex) => setFile(itemValue)}
        mode={'dropdown'}
      >    
      <Picker.Item label="1 MB" value="1 MB" />
        <Picker.Item label="10 MB" value="10 MB" />
        <Picker.Item label="25 MB" value="25 MB" />
        <Picker.Item label="50 MB" value="50 MB" />

     
      </Picker>
      </View>
      </View>
           
     
           </>
             ):null}  
   </View>
       
  );

}
const width = Dimensions.get('window').width -220;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
  textArea: {
    borderRadius:5,
    height: '50%',
    width:'67%',
    backgroundColor:'rgba(209, 214, 255, 0.5)'
  },
  container1: {
    // paddingTop: 40,
    // top:10,
    height:40,
    width:140,
    backgroundColor:'rgba(209, 214, 255, 0.5)',
    borderRadius:10,
  //  bottom:20,
  
    justifyContent:'center',
   alignContent:'center'
  },
})

export default Createquestion2