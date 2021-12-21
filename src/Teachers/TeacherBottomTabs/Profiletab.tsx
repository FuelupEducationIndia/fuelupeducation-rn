import React, { Component,useState,useRef ,useEffect} from 'react'
// import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme, { Card, Box } from '../../theme'
// import DrawerIcon from '../../assets/svgs/drawer-icon.svg'
import TopHero from '../../assets/svgs/top-hero.svg'
import DrawerIcon from '../../assets/svgs/drawer-icon.svg'
// import Multichoice from '../../assets/svgs/MultiChoices.svg'
// import DD from '../../assets/svgs/DropD.svg'
import Userbtn from '../../assets/svgs/User.svg'
import { Text } from '../../theme'
import {AppRegistry, View,TextInput,StyleSheet,Switch,Modal ,Platform, Alert,Image,ImageBackground} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FingerP from '../../assets/svgs/Print.svg'
import Faceid from '../../assets/svgs/FaceId.svg'
import Qrcode from '../../assets/svgs/Qrcode.svg'
import Dropdown from '../../components/Dropdown'
import { Menu, MenuItem, } from 'react-native-material-menu';
import SimpleModal from '../../components/SimpleModal'
import FingerPrintModal from '../../components/FingerPrintModal'
import QRcode from '../../components/QRCode'
import DatePicker from 'react-native-datepicker'
import CameraModal from '../../components/CameraModal'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import * as ImagePicker from "expo-image-picker";
import UploadFileModal from '../../components/UploadFileModal'
// import * as ImagePicker from 'react-native-image-picker';
// import  launchCamera  from 'react-native-image-picker'
import {ImageOrVideo} from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-crop-picker'
import { RNCamera } from 'react-native-camera'
import { useTheme } from 'react-native-paper';
import _default from 'react-native-bootsplash'


export const Profiletab=({navigation})=>{
  const onAvatarChange = (image: ImageOrVideo) => {
    console.log(image);
    // upload image to server here 
  };

  const [date, setDate] = useState(new Date())

  const [toggle, setToggle] = useState(false);
  
  const [selectedItem,setSelectedItem]=useState("");
  
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false); //Controls Modal Visibility
  const[isModalVisible4,setModalVisible4]=useState(false);

  const changeModalVisible=(Boolean: boolean | ((prevState: boolean) => boolean))=>{
    setModalVisible(Boolean);
  }
  const changeModalVisible1=(Boolean: boolean | ((prevState: boolean) => boolean))=>{
    setModalVisible1(Boolean);
  }
  const changeModalVisible2=(Boolean: boolean | ((prevState: boolean) => boolean))=>{
    setModalVisible2(Boolean);
  }
  const changeModalVisible3=(Boolean: boolean | ((prevState: boolean) => boolean))=>{
    setModalVisible3(Boolean);
  }
  const changeModalVisible4=(Boolean: boolean | ((prevState: boolean) => boolean))=>{
    setModalVisible4(Boolean);
  }


  const [FingerPrintisEnabled, setFingerPrintIsEnabled] = useState(false);
  const [FaceIDisEnabled, setFaceIDIsEnabled] = useState(false);
  const [QRCODEisEnabled, setQRCODEIsEnabled] = useState(false);
  
  
  const toggleSwitch = () => setFingerPrintIsEnabled(previousState => !previousState);
  const toggleSwitch1 = () => setFaceIDIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setQRCODEIsEnabled(previousState => !previousState);
 
  const[image,setImage]=useState("https://www.pinclipart.com/picdir/big/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png")
  const{colors}=useTheme()

  const Camera=()=>{
    ImagePicker.openCamera({
      width:300,
      height:400,
      cropping:true,
      compressImageQuality:0.7
    }).then(image=>{
      console.log(image)
      setImage(image.path);
      this.bs.current.snapTo(1)

      
    });
    
  }
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

  const RemoveImage=()=>{
    console.log("Your Image Successfully Removed")
    
  }
  
// renderInner=()=>(
  return (
    <>
      {/*For Hearder */}
      <SafeAreaView style={{ backgroundColor: theme.colors.primary }}>
        <DrawerIcon style={{ position: 'absolute', top: 70, left: 20 }} />
        <Card padding='s'>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TopHero />
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '50%',
              }}>
              <Text
                style={[
                  theme.textVariants.title,
                  { color: theme.colors.white },
                ]}
                numberOfLines={1}>
                Welcome Sheela!
              </Text>
              <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.white, paddingHorizontal: 10 },
                ]}>
                Check What's up with your Schedule...!
              </Text>
            </Box>
          </Box>
        </Card>
      
      </SafeAreaView>

     {/* For Main Content */}
      <ScrollView>

        <Card  
        //variant='elevated'
      backgroundColor='white'
      borderBottomLeftRadius='xl'
      borderBottomRightRadius='xl'
      padding='none'
      width={358}
      marginHorizontal='m'
      
        >
      
      <View style={{height:40}}>
        <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.primary, fontSize:20,padding:19 },
                ]}>
                Edit Profile
              </Text>
             

        </View>
        <View style={{height:30,padding:5}}>
        <Text
                style={[
                  theme.textVariants.body,
                  { color: theme.colors.darkSilver, fontSize:15,marginHorizontal:41},
                ]}>
                LastName FirstName
              </Text>

        </View>

        <View style={{height:70,padding:10}}>
               
          <Image source={{uri:image}} style={{height:63,width:63,position:'absolute',marginHorizontal:30,top:5,borderRadius:400/2}}/>
              <Text 
                  style={[
                    theme.textVariants.body,
                    { color: theme.colors.primary, fontSize:15,marginHorizontal:100},
                  ]}>
                Nick Name:
              </Text>
              <TextInput
     style={{  height:30,
width:200,backgroundColor:'#E5E5E5',marginHorizontal:100,borderRadius:10}}
    placeholder=""  
     />    
    {/* For Menu */}
      <Menu style={{width:150,justifyContent:'center',alignContent:'center',marginHorizontal:50}}
        visible={visible}
        anchor={<Text onPress={showMenu}   style={[
          theme.textVariants.body,
          { color: theme.colors.Orange, fontSize:18,marginHorizontal:24,top:3},]}>Change</Text>}
        onRequestClose={hideMenu}
      > 
        <MenuItem onPress={Camera}>Take Photo</MenuItem>
        <MenuItem onPress={ChooseFile}>Upload Photo</MenuItem>
        <MenuItem onPress={()=>alert("Your Image Remove Succesfully")}>Remove Photo</MenuItem>
      </Menu> 
        </View>

      
     
        {/*For Contact Design */}
        <View>
        <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.darkSilver, fontSize:20,top:40,marginHorizontal:20},
               ]}>
             Contact Information
           </Text>
        </View>

        <View>
        <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,top:50,marginHorizontal:20},
               ]}>
             Mailling Address
           </Text>
           <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.Orange, fontSize:18,top:24,marginHorizontal:160},
               ]}>
             *
           </Text>
           <TextInput
  style={{  height:40,
   width:300,backgroundColor:'#E5E5E5',borderRadius:10,top:30,marginHorizontal:20}}
 placeholder=""  
  />    
        </View>
        <View>
        <Text       
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,top:45,marginHorizontal:20},
               ]}>
             Email Address
           </Text>
           <Text   
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.Orange, fontSize:18,top:20,marginHorizontal:140},
               ]}>
             *
           </Text>
           <TextInput
  style={{  height:40,
   width:300,backgroundColor:'#E5E5E5',borderRadius:10,top:30,marginHorizontal:20}}
 placeholder=""  
  />    
        </View>

          {/*For Personal Design */}
       
        <View>
        <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,top:40,marginHorizontal:20},
               ]}>
             Mobile Phone
           </Text>
           <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.Orange, fontSize:18,top:15,left:135},
               ]}>
             *
           </Text>
           <TextInput
  style={{  height:40,
   width:300,backgroundColor:'#E5E5E5',borderRadius:10,top:25,marginHorizontal:20}}
 placeholder=""  
  />    
     </View>

    <View>
    <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.darkSilver, fontSize:20,top:40,marginHorizontal:20},
               ]}>
             Personal Information
           </Text>
    </View>
      
    <View>
  
    <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,top:65,marginHorizontal:20},
               ]}>
             BirthDate
           </Text>
           <Text 
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.Orange, fontSize:18,paddingVertical:26,top:10,marginHorizontal:99},
               ]}>
             *
           </Text>
     
          

           <DatePicker
            style={{ width: '50%', height:40,marginHorizontal:20,
              backgroundColor:'#E5E5E5',borderRadius:10 }}
            date={date}
            mode='date'
            placeholder='Date Of Birth'
            format='YYYY-MM-DD'
            minDate='1970-01-01'
            maxDate='2021-12-31'
            locale='ko'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            customStyles={{
              dateInput: {
                marginLeft: '3%',
                borderWidth: 0,
                borderBottomWidth: 1,
                alignItems: 'flex-start',
                paddingLeft: 4,
              },
            }}
            iconComponent={
              <MaterialCommunityIcons size={26} name='calendar-range' />
            }
            onDateChange={(datStr: String, date: Date) => {
              setDate(date)
            }}
          /> 
          </View>
         
 
    <View>
    <Text style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,top:25,marginHorizontal:20},
               ]}>
             Gender
           </Text>
           <Text style={[
                 theme.textVariants.body,
                 { color: theme.colors.Orange, fontSize:18,paddingVertical:1,marginHorizontal:85},
               ]}>
             *
           </Text>
<Dropdown/>

    </View>
    <View>
    <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.darkSilver, fontSize:20,top:20,marginHorizontal:20},
               ]}>
             Educational Information
           </Text>
     </View>
     <View>
     <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.Orange, fontSize:18,marginHorizontal:160,top:30},
               ]}>
             *
           </Text>
     <Text
   
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,marginHorizontal:20,top:10},
               ]}>
             Board/University
           </Text>
           <TextInput
  style={{  height:40,
   width:300,backgroundColor:'#E5E5E5',borderRadius:10,top:20,marginHorizontal:20}}
 placeholder=""  
  />    
         
       </View>
       <View>
     <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.Orange, fontSize:18,marginHorizontal:70,top:30},
               ]}>
             *
           </Text>
     <Text
   
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,marginHorizontal:20,top:10},
               ]}>
             Major
           </Text>
           <TextInput
  style={{  height:40,
   width:300,backgroundColor:'#E5E5E5',borderRadius:10,top:20,marginHorizontal:20}}
 placeholder=""  
  />    
         
       </View>
       <View>
     <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.Orange, fontSize:18,marginHorizontal:90,top:30},
               ]}>
             *
           </Text>
     <Text
   
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,marginHorizontal:20,top:10},
               ]}>
             Position
           </Text>
           <TextInput
  style={{  height:40,
   width:300,backgroundColor:'#E5E5E5',borderRadius:10,top:20,marginHorizontal:20}}
 placeholder=""  
  />    
         
       </View>
       <View>
    <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.darkSilver, fontSize:20,top:30,marginHorizontal:20},
               ]}>
             Social Networks
           </Text>
     </View>
     <View>
  
     <Text
   
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,marginHorizontal:20,top:40},
               ]}>
             LinkedIn
           </Text>
           <TextInput
  style={{  height:40,
   width:300,backgroundColor:'#E5E5E5',borderRadius:10,top:50,marginHorizontal:20}}
 placeholder=""  
  />    
  </View>
       <View>
        <Text

            style={[
              theme.textVariants.body,
              { color: theme.colors.primary, fontSize:18,marginHorizontal:20,top:60},
            ]}>
          Google
        </Text>
        <TextInput
style={{  height:40,
width:300,backgroundColor:'#E5E5E5',borderRadius:10,top:70,marginHorizontal:20}}
placeholder=""  
/>    

    </View>

    <View>
  
  <Text

            style={[
              theme.textVariants.body,
              { color: theme.colors.primary, fontSize:18,marginHorizontal:20,top:80},
            ]}>
          Facebook
        </Text>
        <TextInput
style={{  height:40,
width:300,backgroundColor:'#E5E5E5',borderRadius:10,top:90,marginHorizontal:20}}
placeholder=""  
/>    

    </View>
    <View>
  
  <Text

            style={[
              theme.textVariants.body,
              { color: theme.colors.primary, fontSize:18,marginHorizontal:20,top:100},
            ]}>
          Instagram
        </Text>
        <TextInput
style={{  height:40,
width:300,backgroundColor:'#E5E5E5',borderRadius:10,top:110,marginHorizontal:20}}
placeholder=""  
/>    

    </View>

    <View>
  
  <Text

            style={[
              theme.textVariants.body,
              { color: theme.colors.primary, fontSize:18,marginHorizontal:20,top:120},
            ]}>
          Twitter
        </Text>
        <TextInput
style={{  height:40,
width:300,backgroundColor:'#E5E5E5',borderRadius:10,top:130,marginHorizontal:20}}
placeholder=""  
/>    

    </View>

    <View style={{paddingVertical:130, borderBottomRightRadius:20}}>
    <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.darkSilver, fontSize:20,marginHorizontal:20,top:20},
               ]}>
             Signin Information
           </Text>
           <Text
               
               style={[
                 theme.textVariants.body,
                 {  color: theme.colors.primary, fontSize:18,top:30,marginHorizontal:20},
               ]}>
             FingerPrint
           </Text>
   
   
    <View style={styles.container}>
           
       <View style={{flexDirection:'row',backgroundColor:'#E5E5E5',height:40,width:150,borderRadius:5,top:40,marginHorizontal:20}}>
       <FingerP style={{marginHorizontal:10,marginVertical:8}}/>
       <Text
               
               style={[
                 theme.textVariants.body,
                 {  color: theme.colors.primary, fontSize:18,marginVertical:8},
               ]}>
             FingerPrint
           </Text>
             
    
         </View>        

    
         

        <Switch style={{width:70,height:80,marginHorizontal:50,top:4}}
        trackColor={{false: '#707070', true: '#3B0E8A'}}
        thumbColor="white"
        ios_backgroundColor="#3B0E8A"
        onValueChange={()=>changeModalVisible1(true)}
        value={FingerPrintisEnabled}
        
      />
       <Modal  transparent={true}
      animationType='fade'
      visible={isModalVisible1}
      onRequestClose={()=>changeModalVisible1(false)}>
       
       <FingerPrintModal onPress={()=>changeModalVisible1(false)}/>
       
      </Modal>
        </View>



      <View>
      <Text
               
               style={[
                 theme.textVariants.body,
                 {  color: theme.colors.primary, fontSize:18,top:20,marginHorizontal:20},
               ]}>
             FACEID
           </Text>
           </View>
          
           <View style={styles.container}>
           
       <View style={{flexDirection:'row',backgroundColor:'#E5E5E5',height:40,width:150,borderRadius:5,top:30,marginHorizontal:20}}>
       <Faceid style={{marginHorizontal:10,marginVertical:8}}/>
       <Text          
               style={[
                 theme.textVariants.body,
                 {  color: theme.colors.primary, fontSize:18,marginVertical:8},
               ]}>
             FACEID
           </Text>
             
    
         </View>        

        <Switch style={{width:70,height:80,marginHorizontal:50}}
        trackColor={{false: '#707070', true: '#3B0E8A'}}
        thumbColor="white"
        ios_backgroundColor="#3B0E8A"
        onValueChange={()=>changeModalVisible(true)}
        value={FaceIDisEnabled}
      />
        <View style={{flex:1,alignItems:'center',}}>
      
      <Modal  transparent={true}
      animationType='fade'
      visible={isModalVisible}
      onRequestClose={()=>changeModalVisible(false)}>
       
       <SimpleModal onPress={()=>changeModalVisible(false)}/>
       
      </Modal>
      
      </View>
        </View>
        <View>
      <Text
               
               style={[
                 theme.textVariants.body,
                 {  color: theme.colors.primary, fontSize:18,top:20,marginHorizontal:20},
               ]}>
             QRCode
           </Text>
           </View>
          
           <View style={styles.container}>
           
       <View style={{flexDirection:'row',backgroundColor:'#E5E5E5',height:40,width:150,borderRadius:5,top:30,marginHorizontal:20}}>
       <Qrcode style={{marginHorizontal:10,marginVertical:8}}/>
       <Text
               
               style={[
                 theme.textVariants.body,
                 {  color: theme.colors.primary, fontSize:18,marginVertical:8},
               ]}>
             QRCode
           </Text>
             
    
         </View>        

    
         

        <Switch style={{width:70,height:80,marginHorizontal:50}}
        trackColor={{false: '#707070', true: '#3B0E8A'}}
        thumbColor="white"
        ios_backgroundColor="#3B0E8A"
        onValueChange={()=>changeModalVisible2(true)}
        value={QRCODEisEnabled}
      />
        <View style={{flex:1,alignItems:'center',}}>
      
      <Modal  transparent={true}
      animationType='fade'
      visible={isModalVisible2}
      onRequestClose={()=>changeModalVisible2(false)}>
       
       <QRcode onPress={()=>changeModalVisible2(false)}/>
       
      </Modal>
      
      </View>
        </View>
        <View style={{top:40}}>
          <TouchableOpacity onPress={()=>navigation.navigate('MainProfiletab')} style={{height:35,width:140,backgroundColor:'#F16600',borderRadius:10,marginHorizontal:170}}>
          <Text
               
               style={[
                 theme.textVariants.body,
                 {  color: theme.colors.white, fontSize:18,textAlign:'center',justifyContent:'center',alignItems:'center',padding:5},
               ]}>
             Update
           </Text>
          </TouchableOpacity>
         
          </View>
          
    </View>
    
   </Card>
    </ScrollView>
    
    {/* </View>    */}
   </>
  )  

  
}
export default Profiletab
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    
  
  },
  modal:{
    height:50,
    width:50,
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  }},
});
 

