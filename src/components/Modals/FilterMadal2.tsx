import React,{useState} from 'react'
import { Modal, ModalProps, View, StyleSheet ,ScrollView } from 'react-native'
import theme, { Box, Card, Text } from '../../theme'
import Icon from 'react-native-vector-icons/Feather'
import { height, width } from '../../constants'
import SelectInput from '../Form/selectInput'
import { Button } from '..'
import FilterDropdown from '../FilterDropdown'
import { TextInput } from 'react-native-gesture-handler'
import DateTime from '../DateTimePicker'
const courseOptions = ['University', 'IITs', 'Nits']
import DatePicker from 'react-native-datepicker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TimePicker from 'react-time-picker';
import Line from '../../assets/svgs/line.svg'
import DropdownSchedule from '../../components/Student_Group_ScheduleDrop'
const FilterModal2 = ({ visible, onRequestClose }: ModalProps) => {
  const [date, setDate] = useState(new Date())
  const [value, onChange] = useState('10:00');


  return (
    <ScrollView style={{flex:1, backgroundColor:'grey'}}>


    <Modal visible={visible} animationType='slide' transparent={true} >
      <Card
        width={width / 1.1}
        top={height / 5.6}
        variant='elevated'
        backgroundColor='white'
        borderRadius='l'>
        <View style={styles.header}>
          <Text variant='body' fontWeight='600'>
            Filter |{' '}
            <Text variant='body' color='primary'>
              Clear All
            </Text>
          </Text>
          <Icon onPress={onRequestClose} name='x' size={24} color='black' />
        </View>
        <View style={{ marginBottom: theme.spacing.m,flexDirection:'row'}}>
        <Text style={{color:'#3B0E8A',marginVertical:8,marginHorizontal:10,fontSize:17}}>Title</Text>
        <TextInput placeholder="Type here"
        style={{height:35,width:170,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#707070'}}/>
     
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            // marginTop:60
          }}>
          <Text style={{color:'#3B0E8A',marginVertical:8,marginHorizontal:10,fontSize:17}}>Time</Text>

            <DatePicker
            style={{ width: '40%', height:40,
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
           <DatePicker
            style={{ width: '40%', height:40,
              backgroundColor:'#E5E5E5',borderRadius:10,marginHorizontal:10 }}
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
            <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginVertical:10
            // marginTop:60
          }}>
            <View style={{width:90}}>
          <Text style={{color:'#3B0E8A',marginVertical:8,marginHorizontal:10,fontSize:17}}>Student/
Group</Text>
</View>
<DropdownSchedule/>

          </View>
          <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginVertical:10
            // marginTop:60
          }}>
            <View style={{width:90}}>
          <Text style={{color:'#3B0E8A',marginVertical:8,marginHorizontal:10,fontSize:17}}>Add Guest</Text>
            </View>
          <TextInput placeholder="Type email(s) to add guest(s)" style={{top:5,
    height:40,
    width:200,
    backgroundColor:'rgba(209, 214, 255, 0.5)',
    borderRadius:10,
    right:15,
    justifyContent:'center',
   alignContent:'center'}}/>
     <View style={{width:90}}>
          <Text style={{color:'#3B0E8A',marginVertical:8,marginHorizontal:10,fontSize:17}}>Add Guest</Text>
            </View>
          <TextInput placeholder='Type a short description...'
          style={{top:5,
    height:70,
    width:200,
    backgroundColor:'rgba(209, 214, 255, 0.5)',
    borderRadius:10,
    right:15,
    justifyContent:'center',
   alignContent:'center'}}/>
   <line/>
   </View>
   <View style={{width:90}}>
          <Text style={{color:'#3B0E8A',marginVertical:8,marginHorizontal:10,fontSize:17}}>Add Guest</Text>
            </View>
          <TextInput placeholder="" style={{top:5,
    height:40,
    width:200,
    backgroundColor:'rgba(209, 214, 255, 0.5)',
    borderRadius:10,
    right:15,
    justifyContent:'center',
   alignContent:'center'}}/>
   <View style={{flexDirection:'row',}}>
     <View>
       <Text style={{backgroundColor:'#3B0E8A',}}>Attachment</Text>
       </View>
     <Box style={{borderColor:'#707070',height:40,width:200,borderWidth:1,borderRadius:10}}>
     <Text style={{backgroundColor:'#3B0E8A',fontSize:15}}>Click to
     <Text style={{backgroundColor:'#f16600',fontSize:17}}>Browse</Text>

     </Text>
     </Box>
     </View>
     <View style={{flexDirection:'row'}}>
       <Text style={{color:'#3B0E8A',}}>Sync Calendar</Text>
       </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            // marginTop:60
          }}>
          <Button
            marginHorizontal='s'
            label='Apply'
            variant='primary'
            paddingHorizontal='m'
          />
          <Text
            onPress={onRequestClose}
            variant='button'
            color='primary'
            textDecorationLine='underline'>
            cancel and close
          </Text>
        </View>
      </Card>
   
   
    </Modal>
    </ScrollView>
   
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
  },
})
export default FilterModal2
