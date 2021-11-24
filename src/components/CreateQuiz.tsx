import React,{useState} from "react";
import { View, ScrollView, KeyboardAvoidingView,Linking,Modal, TouchableOpacity} from 'react-native'
import theme, { Box, Card,Text } from '../theme'
import DropDown from '../../src/components/DropdownBoardUniQuiz'
import DropDownLact from '../components/DropDownLacture'
import DropDownLanguage from '../components/DropDownLanguage'
import { TextInput } from "react-native-gesture-handler";
import AddImage from '../assets/svgs/AddImage.svg'
import DropDownMulti from '../components/DropdownMulti'
import DownArrow from '../assets/svgs/DropArrow.svg'
import Cross from '../assets/svgs/Cross.svg'
import RoundCheckbox from 'react-native-round-checkbox';
import QuestionBankM from '../components/QuestionBank_Modal'
import ImagePicker from 'react-native-image-crop-picker'

const CreateQuiz=(props)=>{
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [visible, setVisible] = useState(false);
  const [QuestionBankEnabled, setQuestionBankEnabled] = useState(false);

  const CheckRound = () => setQuestionBankEnabled(previousState => !previousState);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  const ChooseFile=()=>{
    ImagePicker.openPicker({
      width:300,
      height:300,
      cropping:true,
      compressImageQuality:0.7

    }).then(image=>{
      console.log(image.path);
      setImage(image.path);
      this.bs.current.snapTo(1)
    });
  }

  const [QuestionBank,setQuestionBank]=useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [isChecked1, setIsChecked1] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)

  const changeModalVisible1=(Boolean: boolean | ((prevState: boolean) => boolean))=>{
    setModalVisible1(Boolean);
  }

  return(
    <>
    <View style={{height:1000}}>
    <View>
     <View>
    
    <Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:10,top:10},
       ]}>
   Board/University
   
   </Text>
   <DropDown/>
</View>
<View>
    
    <Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:10,top:30},
       ]}>
   Lecture
   
   </Text>
   <DropDownLact/>
</View>
    </View>
    <View>
    <View>
    
    <Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:10,top:50},
       ]}>
   Language
   
   </Text>
   <DropDownLanguage/>
</View>
    </View>
    <View>
    <View>
    
    <Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,top:70},
       ]}>
   Quiz Title
   
   </Text>
   <TextInput style={{height:40,width:290,borderRadius:10,borderWidth:.5,borderStyle:'solid',top:80}}/>
    </View>
    </View>
    <Box style={{height:370,width:350,backgroundColor:'#F5F4F4',top:110}}>
    <View style={{flexDirection:'row'}}>
    <Text

style={[
  theme.textVariants.body,
  { color: theme.colors.text, fontSize:20,marginHorizontal:10,top:20,fontWeight:'bold'},
]}>
Q1
</Text>
<TextInput placeholder="Type your question" style={{height:35,width:230,borderRadius:10,borderWidth:.5,borderStyle:'solid',backgroundColor:'white',top:10}}/>
<AddImage onPress={ChooseFile} style={{top:14}}/>
</View>

  <View style={{height:40,top:20}}>
  <DropDownMulti/>
  </View>
  <View style={{top:5}}>
  <Text

    style={[
    theme.textVariants.body,
    { color: theme.colors.secondary, fontSize:18,marginHorizontal:60,top:30},
]}>
Suggested questions
</Text>
<DownArrow style={{left:230,top:18}} />
  </View>
<View>
  <View style={{height:1,width:310,borderColor:'#C1C1C1',borderWidth:.5,top:30,marginHorizontal:10}}/>
</View>
<View style={{flexDirection:'row',top:3}}>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.darkSilver, fontSize:18,top:30,marginHorizontal:10},
]}>
Correct Answer(s)
</Text>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.darkSilver, fontSize:18,top:30,marginHorizontal:50},
]}>
Points
</Text>
</View>
<View style={{top:40,height:50,flexDirection:'row'}}>
  {/* <RightMark style={{marginHorizontal:10,top:20}}/> */}
  <View style={{height:20,width:20,top:15,marginHorizontal:10}}>
  <RoundCheckbox 
            size={20}
            borderColor={'#A6A5A5'}
            backgroundColor={"green"}
            iconColor={'white'}
            checked={isChecked}
            onValueChange={checked => setIsChecked(checked)}
            value={QuestionBankEnabled}

        />
        </View>
  <TextInput placeholder="Enter Answer Choice" style={{height:35,width:150,borderRadius:10,borderWidth:.5,borderStyle:'solid',backgroundColor:'white',top:10,textAlign:'center',bottom:5}}/>
  <Cross style={{top:20,left:10}}/>
  <View style={{height:30,width:80,borderStyle:'solid',borderWidth:.5,left:20,top:10}}>
  <Text
style={[
theme.textVariants.body,
{ color: theme.colors.darkSilver, fontSize:18,textAlign:'center'},
]}>
-   1  +
</Text>
    </View>
</View>
<View style={{top:40,height:50,flexDirection:'row'}}>
{/* <CheckRound style={{marginHorizontal:10,top:20}}/> */}
<View style={{height:20,width:20,top:15,marginHorizontal:10}}>
  <RoundCheckbox 
            size={20}
            borderColor={'#A6A5A5'}
            backgroundColor={"green"}
            iconColor={'white'}
            checked={isChecked1}
            onValueChange={checked => setIsChecked1(checked)}
            
        />
        </View>
  <TextInput placeholder="Enter Answer Choice" style={{height:35,width:150,borderRadius:10,borderWidth:.5,borderStyle:'solid',backgroundColor:'white',top:10,textAlign:'center',bottom:5}}/>
  <Cross style={{top:20,left:10}}/>
  <View style={{height:30,width:80,borderStyle:'solid',borderWidth:.5,left:20,top:10}}>
  <Text
style={[
theme.textVariants.body,
{ color: theme.colors.darkSilver, fontSize:18,textAlign:'center',left:5},
]}>
  0  +
</Text>
</View>
</View>
<View style={{top:40}}>
  {/* <CheckRound style={{top:10,marginHorizontal:10,}}/> */}
  <View  style={{height:20,width:20,top:15,marginHorizontal:10}}>
  <RoundCheckbox 
            size={20}
            borderColor={'#A6A5A5'}
            backgroundColor={"green"}
            iconColor={'white'}
            checked={isChecked2}
            onValueChange={checked => setIsChecked2(checked)}

        />
       <Modal  transparent={true}
      animationType='fade'
      visible={isModalVisible1}
      onRequestClose={()=>changeModalVisible1(false)}>
       
       <QuestionBankM onPress={()=>changeModalVisible1(false)}/>
      </Modal>
       
        </View>
<Text 
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:16,marginHorizontal:50,bottom:10},
]}>
+Add Option
</Text>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:16,marginHorizontal:50,bottom:20},
]}>
--------------
</Text>
</View>
<View style={{height:50,top:20,flexDirection:'row'}}>
  <TouchableOpacity onPress={()=>alert("Your Data Is Successfullfully Save")} style={{height:35,width:100,backgroundColor:'#3B0E8A',borderRadius:20,top:7,left:100}}>
  <Text
style={[
theme.textVariants.body,
{ color: theme.colors.white, fontSize:16,textAlign:'center',top:7},
]}>
Save
</Text>
    </TouchableOpacity>
    <Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:16,textAlign:'center',top:15,left:140},
]}>
Cancel
</Text>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:16,textAlign:'center',top:15,left:95},
]}>
______
</Text>

</View>
    </Box>
    <View style={{height:50,top:110}}>
    <TouchableOpacity  onPress={props.onPress} style={{height:40,width:180,borderRadius:20,top:5}}>
    <Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:16,top:20,marginHorizontal:20},
]}>
Quizzez Summary
</Text>
<Text
style={[
theme.textVariants.body,
{ color: theme.colors.primary, fontSize:16,marginHorizontal:20,top:5},
]}>
_________________
</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>alert("Your data is Uploaded")} style={{height:35,width:120,backgroundColor:'#F16600',borderRadius:20,bottom:20,marginHorizontal:170}}>
  <Text
style={[
theme.textVariants.body,
{ color: theme.colors.white, fontSize:16,textAlign:'center',top:7},
]}>
Upload
</Text>
    </TouchableOpacity>
    </View>
    </View>
    </>
  )
}
export default CreateQuiz