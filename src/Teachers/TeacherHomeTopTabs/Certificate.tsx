import React from 'react'
import { View,Text, ScrollView,StyleSheet } from 'react-native'
import theme, { Card } from '../../theme'
// import {CertificateStudentInfo,
//   CertificateCreate,CertificateVerify,CertificateStyle} from '../../components/Courses'
// import { CertificateDashboard } from '../../components/Courses'
// import { CertificateInstitutioninfo } from '../../components/Courses'
import { Button,RadioGroup } from '../../components'
const topButtons = ['Dashboard', 'Create Lecture']

const Lectures = () => {
  const [activeButton, setActiveButton] = React.useState(topButtons[0])
  const [change,setChange] = React.useState(0);

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
    else if(Value == 4) {
      setChange(4);
    }
  
  };
  return (
   
    <ScrollView style={{flex:1, backgroundColor:theme.colors.lightGrey}}>
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
      </Card>
      <View>
      {activeButton == topButtons[0] ? (
     <View style={{marginVertical:10 ,}}>

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
            <View   style={[styles.view,
                    {backgroundColor: change > 3 ? '#380885' : 'white'},
                    {borderColor : change == 3 ? '#380885' : 'white' },
                    {borderWidth : change == 3 ? 4 : 0}
            ]}>
            </View>
            <View style={[styles.view1,
                       {backgroundColor: change >= 4 ? '#380885' : 'white'}
            ]}>
            </View>
            <View    style={[styles.view,
                            //  {backgroundColor: change >= 3 ? '#380885' : 'white'},
                             {borderColor : change == 4 ? '#380885' : 'white' },
                             {borderWidth : change == 4 ? 4 : 0}

            ]} >
            </View>
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
              </View>
             {/* {activeButton == topButtons[0] ? (
          
               <CertificateDashboard/>
         
            ) : (
            //   <>
            //   {change === 0 ? (
            //     <CertificateCreate
            //     onPress={()=>onNext(1)}               
            //     />
            //   ):null}
            //      {change === 1 ? (
            //     <CertificateStudentInfo
            //     onPress={()=>onNext(2)}
            //     />
            //   ):null}
            //    {change === 2 ? (
            //     <CertificateStyle
            //     onPress={()=>onNext(3)}/>
            //   ):null}
            // {change === 3 ? (
            //     <CertificateVerify
            //     onPress={()=>onNext(4)}/>
            //   ):null}
            //      {change === 4 ? (
            //     <CertificateCreate/>
            //   ):null}
              
            //   </>
            )}
            */}

      </Card>
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

export default Lectures
