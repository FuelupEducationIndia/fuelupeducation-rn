import React,{useState,useRef} from 'react'
import { View, ScrollView, KeyboardAvoidingView,Linking,Modal,Image} from 'react-native'
import theme, { Box, Card,Text } from '../../theme'
import FingerPrint from '../../assets/svgs/fingerprintAt.svg'

// import TeacherImage from '../../assets/images/teacherImage.png'
import Right from '../../assets/svgs/RightMark.svg'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import DropDown from '../DropdownBoardUni'
import  DropDownSG  from '../DropDownStudentGroup'
import DropDownSG1 from '../dropDownSD1'
import { Menu, MenuItem, } from 'react-native-material-menu';
// import pen from '../../assets/images/pen.png'
import Bord_Uni from '../../components/AttendenceDropDown'
import Sch_clg from '../../components/AttendenceSchclg'
import Timer from '../../components/Timer'
import CreateQuiz1 from '../../components/Create_Quiz_Modal'
import Location from '../../components/Location_Modal'
import CheckIn from '../../components/Check_In_Modal'
import ImagePicker from 'react-native-image-crop-picker'

const Take_Assignment=(props)=>{
  const topButtons = ['Create Assignment', 'Review AssignMent','Grading']
  const topButton=['Need to Improve','Good']
  const [activeButton, setActiveButton] = React.useState(topButtons[1])
  const [isModalVisible, setModalVisible] = useState(false);

  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);
  const[showModal,setShowModal]=useState(false)
  const[showModal1,setShowModal1]=useState(false)

  const showMenu = () => setVisible(true);
  const changeModalVisible=(Boolean: boolean | ((prevState: boolean) => boolean))=>{
    setModalVisible(Boolean);
  }
  const[image,setImage]=useState();
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



  return(
    <Card
    variant='elevated'
    borderRadius='l'
    marginBottom='m'
    padding='none'
    backgroundColor='white'>
   
    <Card
    variant='elevated'
    borderRadius='l'
    marginBottom='m'
    padding='none'
    backgroundColor='white'>
       <View
      style={{
       marginVertical: theme.spacing.m,
       display: 'flex',
       justifyContent: 'center',
     }}>
    <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,top:10,marginHorizontal:20},
       ]}>
     Take Attendence Method
     <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.secondary, fontSize:18,top:10,marginHorizontal:20},
       ]}>
     *
     
   </Text>

   </Text>
</View>
<View>
  <Box style={{height:40,width:290,borderWidth:1,marginHorizontal:20}}>
<Menu style={{width:150,justifyContent:'center',alignContent:'center',marginHorizontal:90}}
        visible={visible}
        anchor={<TouchableOpacity onPress={showMenu} style={{height:35,flexDirection:'row'}}>
        <Text style={[
          theme.textVariants.body,
          { color: theme.colors.darkSilver, fontSize:18,top:7,marginHorizontal:5},]}>-Select-</Text>
          {/* <pen/> */}
          </TouchableOpacity>}
        onRequestClose={hideMenu}
      > 
        <MenuItem onPress={()=>alert("QR Code Open Succesfully")}>QR Code</MenuItem>
        <MenuItem onPress={()=>alert("Finger Print Open Succesfully")}>Finger Print</MenuItem>
        <MenuItem onPress={()=>alert("Face Id Open Succesfully")}>FaceId</MenuItem>
      </Menu> 
      </Box>
</View>
<View style={{marginVertical:10}}>
<Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:20},
       ]}>
     Student Name
     <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.secondary, fontSize:18,top:10,marginHorizontal:20},
       ]}>
     *
     
   </Text>

   </Text>

</View>
<View>
<TextInput placeholder='Type Your Name Here.....'
  style={{
  width:290,
  height:40,
  borderWidth:1,
  marginHorizontal:20,
  // backgroundColor:'rgba(209, 214, 255, 0.5)',
  borderRadius:5,}} multiline={true}/>

</View>
<View style={{marginVertical:10}}>
<Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:20},
       ]}>
     Student ID
     <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.secondary, fontSize:18,top:10,marginHorizontal:20},
       ]}>
     *  
   </Text>
   </Text>
</View>
<View style={{marginVertical:10}}>
<TextInput placeholder='AO123456789'
  style={{
  width:290,
  height:40,
  borderWidth:1,
  marginHorizontal:20,bottom:10,
  // backgroundColor:'rgba(209, 214, 255, 0.5)',
  borderRadius:5,}} multiline={true}/>

</View>
<View>

</View>

   </Card>
   <Card
    variant='elevated'
    borderRadius='l'
    marginBottom='m'
    padding='none'
    backgroundColor='white'>
      <View style={{flexDirection:'row',marginVertical:10}}>
      <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:20},
       ]}>
         Board/Uni
     <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.secondary, fontSize:18,top:10,marginHorizontal:10},
       ]}>
     *  
   </Text>
   </Text>
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:50},
       ]}>
     School/Clg Name
     <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.secondary, fontSize:18,top:10,marginHorizontal:0},
       ]}>
     *  
   </Text>
   </Text>
      </View>
      <View style={{flexDirection:'row'}}>
       <Bord_Uni/>
       <Sch_clg/>
      </View>
      <View style={{flexDirection:'row',marginVertical:10}}>
      <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:20},
       ]}>
     Location
     <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.secondary, fontSize:18,top:10,marginHorizontal:10},
       ]}>
     *  
   </Text>
   </Text>
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:65},
       ]}>
     Language
     <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.secondary, fontSize:18,top:10,marginHorizontal:0},
       ]}>
     *  
   </Text>
   </Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={() => {setShowModal(!showModal); }}
         style={{flexDirection:'row',marginHorizontal:20,height:40,width:135,borderWidth:1,borderRadius:5,
   alignContent:'center'}}>
      <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,top:5,marginHorizontal:10},
       ]}>
     Location
  </Text>
  <Image source={require("../../assets/images/location.png")}   style={{top:10,marginHorizontal:20,height:15,width:15}}></Image>

   </TouchableOpacity>
   <View>
  <Modal
          animationType={'fade'}
          transparent={true}
          visible={showModal}
          onRequestClose={()=>setShowModal(false)}>
            <Location onPress={()=>setShowModal(false)} />
   </Modal>
   </View>
       <Sch_clg/>
      </View>
      <View style={{marginVertical:10,flexDirection:'row'}}>
      <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:20},
       ]}>
         Class
     <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.secondary, fontSize:18,top:10,marginHorizontal:20},
       ]}>
     *  
   </Text>
   </Text>
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:85},
       ]}>
     Lacture
     <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.secondary, fontSize:18,top:10,marginHorizontal:0},
       ]}>
     *  
   </Text>
   </Text>   
      </View>
      <View style={{flexDirection:'row'}}>
       <Bord_Uni/>
       <Sch_clg/>
      </View>
      <View style={{marginVertical:10,flexDirection:'row'}}>
      <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:20},
       ]}>
         Start
     <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.secondary, fontSize:18,top:10,marginHorizontal:10},
       ]}>
     *  
   </Text>
   </Text>
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,marginHorizontal:95},
       ]}>
     End
     <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.secondary, fontSize:18,top:10,marginHorizontal:0},
       ]}>
     *  
   </Text>
   </Text>   
      </View> 
      <View style={{flexDirection:'row'}}>
        <Box style={{ marginHorizontal:20,flexDirection:'row',
    height:40,
    width:135,
    borderWidth:1,
    borderRadius:5,
    justifyContent:'center',
   alignContent:'center'}}>
      <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.darkSilver, fontSize:18,top:5},
       ]}>
     00:00
   </Text>
   <Image source={require("../../assets/images/history.png")}   style={{top:10,marginHorizontal:30,height:15,width:15,left:20}}></Image>

   </Box>
      
       <Box style={{ 
    height:40,
    width:135,
    borderWidth:1,
    borderRadius:5,
    justifyContent:'center',
   alignContent:'center',flexDirection:'row'}}>
      <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.darkSilver, fontSize:18,top:5},
       ]}>
     00:00
   </Text>
   <Image source={require("../../assets/images/history.png")}   style={{top:10,marginHorizontal:30,height:15,width:15,left:20}}></Image>

   </Box>

      </View>

      <View style={{marginVertical:10}}>
      <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,textAlign:'center'},
       ]}>
     Countdown to start live
   </Text>   
      </View>
      <View style={{marginVertical:10}}>
        <Timer/>
      </View>
   </Card>
   <View style={{marginVertical:30}}>
       <TouchableOpacity onPress={() => {setShowModal1(!showModal1); }}
        style={{bottom:20,backgroundColor:'#f16600',height:40,width:120,marginHorizontal:100,borderRadius:20,justifyContent:'center',alignContent:'center'}}>
       <Text

       style={[
         theme.textVariants.body,
         { color: theme.colors.white, fontSize:18,textAlign:'center'},
       ]}>
     Check In
   </Text> 
       </TouchableOpacity>
       <View>
  <Modal
          animationType={'fade'}
          transparent={true}
          visible={showModal1}
          onRequestClose={()=>setShowModal1(false)}>
            <CheckIn onPress={()=>setShowModal1(false)} />
   </Modal>
   </View>
       <TouchableOpacity  onPress={props.onPress}
       style={{height:40,width:210,marginHorizontal:60,borderRadius:20,justifyContent:'center',alignContent:'center'}}>
       <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:15,textAlign:'center',top:10},
       ]}>
     View Historic Attendence
   </Text> 
   <Text
       
       style={[
         theme.textVariants.body,
         { color: theme.colors.primary, fontSize:18,bottom:7,left:25},
       ]}>
     ___________________
   </Text>
       </TouchableOpacity>
   </View>
</Card>
  )}
  export default Take_Assignment