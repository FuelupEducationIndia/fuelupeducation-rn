import React from 'react'
import { Modal, ModalProps, View, StyleSheet } from 'react-native'
import theme, { Card, Text } from '../../theme'
import Icon from 'react-native-vector-icons/Feather'
import { height, width } from '../../constants'
import SelectInput from '../Form/selectInput'
import { Button } from '..'

const courseOptions = ['Jatt', 'Latt', 'cutt']

const FilterModal = ({ visible, onRequestClose }: ModalProps) => {
  const [course, setCourse] = React.useState('')

  return (
    <Modal visible={visible} animationType='slide' transparent={true}>
      <Card
        top={height / 4}
        width={width / 1.2}
        variant='elevated'
        backgroundColor='white'
        borderRadius='l'>
        <View style={styles.header}>
          <Text variant='body'>
            Filter |{' '}
            <Text variant='body' color='blue'>
              Clear All
            </Text>
          </Text>
          <Icon onPress={onRequestClose} name='x' size={24} color='black' />
        </View>
        <View style={{ marginBottom: theme.spacing.m }}>
          <SelectInput
            placeholder='-Select-'
            containerStyle={{
              backgroundColor: theme.colors.danger,
              borderRadius: 10,
            }}
            options={courseOptions}
            onValueChange={(value: any) => {
              setCourse(value)
            }}
            title='Board/ University'
          />
          <SelectInput
            placeholder='-Select-'
            containerStyle={{
              backgroundColor: theme.colors.danger,
              borderRadius: 10,
            }}
            options={courseOptions}
            onValueChange={(value: any) => {
              setCourse(value)
            }}
            title='Course'
          />
          <SelectInput
            placeholder='-Select-'
            containerStyle={{
              backgroundColor: theme.colors.danger,
              borderRadius: 10,
            }}
            options={courseOptions}
            onValueChange={(value: any) => {
              setCourse(value)
            }}
            title='Lecture'
          />
          <SelectInput
            placeholder='-Select-'
            containerStyle={{
              backgroundColor: theme.colors.danger,
              borderRadius: 10,
            }}
            options={courseOptions}
            onValueChange={(value: any) => {
              setCourse(value)
            }}
            title='Languages'
          />
          <SelectInput
            placeholder='-Select-'
            containerStyle={{
              backgroundColor: theme.colors.danger,
              borderRadius: 10,
            }}
            options={courseOptions}
            onValueChange={(value: any) => {
              setCourse(value)
            }}
            title='Date Posted'
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
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
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.l,
  },
})
export default FilterModal
