import React from 'react'
import { Modal, ModalProps, View, StyleSheet ,ScrollView } from 'react-native'
import theme, { Card, Text } from '../../theme'
import Icon from 'react-native-vector-icons/Feather'
import { height, width } from '../../constants'
import SelectInput from '../Form/selectInput'
import { Button } from '..'
import FilterDropdown from '../../components/FilterDropdown'
const courseOptions = ['University', 'IITs', 'Nits']

const FilterModal1 = ({ visible, onRequestClose }: ModalProps) => {


  return (
    <ScrollView style={{flex:1, backgroundColor:'grey'}}>


    <Modal visible={visible} animationType='slide' transparent={true} >
      <Card
        width={width / 1.2}
        top={height / 5.8}
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
        <View style={{ marginBottom: theme.spacing.m }}>
        <Text style={{color:'#380885',marginVertical:8}}>Board/University   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
     
     <FilterDropdown />
         
     <Text style={{color:'#380885',marginVertical:8}}>Course   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
     
     <FilterDropdown />
     <Text style={{color:'#380885',marginVertical:8}}>Instructor  <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
     
     <FilterDropdown />
     <Text style={{color:'#380885',marginVertical:8}}>Student & ID   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
     
     <FilterDropdown />
     <Text style={{color:'#380885',marginVertical:8}}>Graduated year   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
     
     <FilterDropdown />
     <Text style={{color:'#380885',marginVertical:8}}>Date posted   <Text style={{color:theme.colors.secondary,marginLeft:15}}>*</Text> </Text>
     
     <FilterDropdown />
         
        

     
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
export default FilterModal1
