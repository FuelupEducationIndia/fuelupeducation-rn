import React, { Component,useState } from 'react'
// import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme, { Card, Box } from '../../theme'
// import DrawerIcon from '../../assets/svgs/drawer-icon.svg'
import TopHero from '../../assets/svgs/top-hero.svg'
import DrawerIcon from '../../assets/svgs/drawer-icon.svg'
import Editbtn from '../../assets/svgs/Edit.svg'
import Userbtn from '../../assets/svgs/User.svg'
import { Text } from '../../theme'
import { View,TextInput,StyleSheet,Switch,Modal,Linking,Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FingerP from '../../assets/svgs/Print.svg'
import Faceid from '../../assets/svgs/FaceScanner.svg'
import Qrcode from '../../assets/svgs/Qrcode.svg'
import Linkedin from '../../assets/svgs/Linkedin.svg'
import GooglPlus from '../../assets/svgs/googlepl.svg'
import FaceBook from '../../assets/svgs/Facebook.svg'
import Instagram from '../../assets/svgs/Instagram.svg'
import Twitter from '../../assets/svgs/Twitter.svg'
import { backgroundColor } from '@shopify/restyle'


const MainProfiletab=({navigation})=>{
  const [toggle, setToggle] = useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const [FingerPrintisEnabled, setFingerPrintIsEnabled] = useState(false);
  const [FaceIDisEnabled, setFaceIDIsEnabled] = useState(false);
  const [QRCODEisEnabled, setQRCODEIsEnabled] = useState(false);
  
  const toggleSwitch = () => setFingerPrintIsEnabled(previousState => !previousState);
  const toggleSwitch1 = () => setFaceIDIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setQRCODEIsEnabled(previousState => !previousState);
 
 
  let data = [{
    value: 'Male',
  }, {
    value: 'Female',
  },
  ];
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
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
      {/*For Main Page */}
                
        {/* <View style={{backgroundColor:'red'}}>      */}

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
              <Editbtn onPress={()=>navigation.navigate('Profiletab')}
               style={{ position: 'absolute',top:19,marginHorizontal:300,height:22,width:22 }} />
             

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
              
          <Userbtn onPress={handleModal} style={{position:'absolute',marginHorizontal:30,top:5}} />
          {/* <Image source={{uri:props.image}} style={{height:63,width:63,position:'absolute',marginHorizontal:30,top:5,borderRadius:400/2}}/> */}

        <View style={{flexDirection:'row',marginHorizontal:100,top:15,}}>

        <Text
               
                  style={[
                    theme.textVariants.body,
                    { color: theme.colors.primary, fontSize:18},
                  ]}>
                Nick Name:
              </Text>
      <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,marginHorizontal:20},
               ]}>
                   Sarah
           </Text>
           </View>
               
        </View>

        {/*For Contact Design */}
        <View style={{height:250}}>
        <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.darkSilver, fontSize:20,top:20,marginHorizontal:20},
               ]}>
             Contact Information
           </Text>
       
        <View>
        <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,top:40,marginHorizontal:20},
               ]}>
             Mailling Address
           </Text>

     <Text
              
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.darkSilver,  fontSize:18,top:40,marginHorizontal:45},
               ]}>
             1234 NoName St
           </Text>
        </View>

        <View>
        <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,top:60,marginHorizontal:20},
               ]}>
             Email Address :
           </Text>
         
           <Text
              
              style={[
                theme.textVariants.body,
                { color: theme.colors.darkSilver,  fontSize:18,top:60,marginHorizontal:45},
              ]}>
            sarahwilliam@email.com
          </Text>
        </View>
          {/*For Personal Design */}
        <View>
        <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,top:80,marginHorizontal:20},
               ]}>
             Mobile Phone :
           </Text>
           
           <Text
              
              style={[
                theme.textVariants.body,
                { color: theme.colors.darkSilver,  fontSize:18,top:80,marginHorizontal:45},
              ]}>
            123-456-7890
          </Text>
     </View>
     </View>


    <View style={{height:200}}>
    <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.darkSilver, fontSize:20,top:20,marginHorizontal:20},
               ]}>
             Personal Information
           </Text>
   
      
    <View>
    
    <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,top:40,marginHorizontal:20},
               ]}>
             BirthDate :
           </Text>
          
           <View style={{flexDirection:'row',marginHorizontal:10}}>
           <Text
              
              style={[
                theme.textVariants.body,
                { color: theme.colors.darkSilver,  fontSize:18,marginHorizontal:45,top:40},
              ]}>
            January,20
          </Text>
  </View>
 </View>

    <View>
    <Text style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,top:60,marginHorizontal:20},
               ]}>
             Gender :
           </Text>
         
           <Text
              
              style={[
                theme.textVariants.body,
                { color: theme.colors.darkSilver,  fontSize:18,marginHorizontal:50,top:60},
              ]}>
            Female
          </Text>

    </View>
    </View>
   
    <View style={{height:250}}>
    <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.darkSilver, fontSize:20,top:20,marginHorizontal:20},
               ]}>
             Educational Information
     </Text>
     

     <View>
     
     <Text
   
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,marginHorizontal:20,top:40},
               ]}>
             Board/University :
           </Text>
           <Text
              
              style={[
                theme.textVariants.body,
                { color: theme.colors.darkSilver,  fontSize:18,marginHorizontal:50,top:40},
              ]}>
            1234 NoName St
          </Text>
         
       </View>

       <View>
    
     <Text
   
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.primary, fontSize:18,marginHorizontal:20,top:60},
               ]}>
             Major :
           </Text>
           <Text
              
              style={[
                theme.textVariants.body,
                { color: theme.colors.darkSilver,  fontSize:18,marginHorizontal:50,top:60},
              ]}>
           Computer Science
          </Text>
         
       </View>
       <View>
    
    <Text
  
              style={[
                theme.textVariants.body,
                { color: theme.colors.primary, fontSize:18,marginHorizontal:20,top:80},
              ]}>
            Role :
          </Text>
          <Text
             
             style={[
               theme.textVariants.body,
               { color: theme.colors.darkSilver,  fontSize:18,marginHorizontal:50,top:80},
             ]}>
         Teacher
         </Text>
        
      </View>
      </View>
      <View style={{height:350}}>
      
    <Text 
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.darkSilver, fontSize:20,top:20,marginHorizontal:20},
               ]}>
             Social Networks
           </Text>
      
        <View style={{height:80,justifyContent:'center',alignContent:'center',alignItems:'center',top:10}}>
    <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/')}
    style={{width:200,height:45,borderRadius:5,backgroundColor:'#0E76A8',marginHorizontal:70}}>
     <View style={{flexDirection:'row',height:45}}>
     <Linkedin style={{height:50,width:50}}/>
     <Text 
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.white, fontSize:22,marginHorizontal:20,top:10,fontWeight:'bold'},
               ]}>
             LinkedIn
           </Text>
           </View>
    </TouchableOpacity>    
    </View>
    <View style={{height:80,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={() => Linking.openURL('http://google.com/')}
     style={{width:200,height:45,borderRadius:5,backgroundColor:'#DD4B39',marginHorizontal:70}}>
   
   <View style={{flexDirection:'row',height:45}}> 
       < GooglPlus/>
     <Text 
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.white, fontSize:22,marginHorizontal:20,top:10,fontWeight:'bold'},
               ]}>
             Google +
           </Text>
           </View>
    </TouchableOpacity>
    </View>
     <View style={{height:80,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/')}
     style={{width:200,height:45,borderRadius:5,backgroundColor:'#475993',marginHorizontal:70}}>
     
     <View style={{flexDirection:'row',height:45}}>
       < FaceBook/>
     <Text 
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.white, fontSize:22,marginHorizontal:20,top:10,fontWeight:'bold'},
               ]}>
             Facebook
           </Text>
           </View>
    </TouchableOpacity>
    </View>

    {/* For Instagram Button */}
    <View style={{height:80,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/')}
    style={{width:200,height:45,borderRadius:5,backgroundColor:'#F16600',marginHorizontal:70}}>
     
  <View style={{flexDirection:'row',height:45}}>
     < Instagram style={{height:50,width:50,top:2}}/>
     <Text 
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.white, fontSize:22,marginHorizontal:20,top:10,fontWeight:'bold'},
               ]}>
             Instagram
           </Text>
           </View>
    </TouchableOpacity>
    </View>

    <View style={{height:80,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/')}
     style={{width:200,height:45,borderRadius:5,backgroundColor:'#50ABF1',marginHorizontal:70}}>
    
    <View style={{flexDirection:'row',height:45}}>
     <Twitter style={{top:15,left:5}}/>
     <Text 
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.white, fontSize:22,marginHorizontal:30,top:10,fontWeight:'bold'},
               ]}>
             Twitter
           </Text>
           </View>
    </TouchableOpacity>
    </View>
    </View>
    
    
    <View style={{height:400}}>
    <View style={{height:30,marginTop:80}}>
    <Text
               
               style={[
                 theme.textVariants.body,
                 { color: theme.colors.darkSilver, fontSize:20,marginHorizontal:20},
               ]}>
             Signin Information
           </Text>
         </View>
         <View style={{ height:90,}}>
           <Text
               
               style={[
                 theme.textVariants.body,
                 {  color: theme.colors.primary, fontSize:18,top:10,marginHorizontal:20},
               ]}>
             FingerPrint
           </Text>
            <View style={{flexDirection:'row',backgroundColor:'#E5E5E5',height:40,width:150,borderRadius:5,top:15,marginHorizontal:20}}>
                  <FingerP style={{marginHorizontal:10,marginVertical:8}}/>
                  <Text
               
               style={[
                 theme.textVariants.body,
                 {  color: theme.colors.primary, fontSize:18,marginVertical:8},
               ]}>
             FingerPrint
           </Text>
         </View>        
        <Switch style={{width:70,height:80,marginHorizontal:250,bottom:50}}
        trackColor={{false: '#707070', true: '#3B0E8A'}}
        
        thumbColor="white"
        ios_backgroundColor="#3B0E8A"
        onValueChange={toggleSwitch}
        value={FingerPrintisEnabled}
      />
        </View>
     
     <View style={{height:90,}}>
     <Text
               
               style={[
                 theme.textVariants.body,
                 {  color: theme.colors.primary, fontSize:18,marginHorizontal:20},
               ]}>
             FaceId
           </Text>
            <View style={{flexDirection:'row',backgroundColor:'#E5E5E5',height:40,width:150,borderRadius:5,marginHorizontal:20,top:5}}>
                  <Faceid style={{marginHorizontal:10,marginVertical:8}}/>
                  <Text
               
               style={[
                 theme.textVariants.body,
                 {  color: theme.colors.primary, fontSize:18,marginVertical:8},
               ]}>
             FaceId
           </Text>
         </View>        
        <Switch style={{width:70,height:80,marginHorizontal:250,bottom:60}}
        trackColor={{false: '#707070', true: '#3B0E8A'}}
        
        thumbColor="white"
        ios_backgroundColor="#3B0E8A"
        onValueChange={toggleSwitch1}
        value={FaceIDisEnabled}
      />
        
        </View>
        <View style={{height:85}}>
     <Text          
               style={[
                 theme.textVariants.body,
                 {  color: theme.colors.primary, fontSize:18,marginHorizontal:20},
               ]}>
             QRCode
           </Text>
            <View style={{flexDirection:'row',backgroundColor:'#E5E5E5',height:40,width:150,borderRadius:5,marginHorizontal:20,top:5}}>
                  <Qrcode style={{marginHorizontal:10,marginVertical:8}}/>
                  <Text
               
               style={[
                 theme.textVariants.body,
                 {  color: theme.colors.primary, fontSize:18,marginVertical:8},
               ]}>
             QRCode
           </Text>
         </View>        
        <Switch style={{width:70,height:80,marginHorizontal:250,bottom:60}}
        trackColor={{false: '#707070', true: '#3B0E8A'}}
        
        thumbColor="white"
        ios_backgroundColor="#3B0E8A"
        onValueChange={toggleSwitch2}
        value={QRCODEisEnabled}
      />
        </View>
      
         
         
        </View>
        
   
    
   </Card>
    </ScrollView>
    
   
   </>
  )  

  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    height:40,
    width:150,
    borderRadius:5,
    top:30,
    marginHorizontal:20
    
  
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
 

export default MainProfiletab
