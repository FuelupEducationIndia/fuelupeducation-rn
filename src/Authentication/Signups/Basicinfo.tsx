import React from 'react'
import { View, Modal, Keyboard, StyleSheet } from 'react-native'
import { Box, Card, Text, TouchBox } from '../../theme'
import {
  Button,
  RoundedIconButton,
  TextInput,
  TextInputRef,
} from '../../components'
import IconSvg from '../../assets/icons/icon.svg'

export default function Basicinfo({ navigation }) {
  return (
    <TouchBox
      flex={1}
      backgroundColor='background'
      activeOpacity={1}
      onPress={() => Keyboard.dismiss()}>
      <Card variant='top' justifyContent='flex-end'>
        <RoundedIconButton
          icon='x-circle'
          color='white'
          size={48}
          iconRatio={0.5}
          backgroundColor='primary'
          style={{ position: 'absolute', top: 40, right: 20 }}
          onPress={() => navigation.navigate('Start')}
        />
        <Box flexDirection='row' justifyContent='center' style={{ top: -90 }}>
          <IconSvg height={40} width={30} />

          <Text
            textAlign='center'
            fontSize={28}
            style={{ left: 10 }}
            variant='hero'
            marginLeft='s'>
            Welcome!
          </Text>
        </Box>
      </Card>

      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          top: -90,
        }}>
        <Box style={styles.form}>
          <Text
            style={{
              textAlign: 'center',
              top: 20,
              fontFamily: 'Mulish-SemiBold',
              color: '#756b8c',
              fontSize: 12,
            }}>
            Please help us fill in your basic information
          </Text>
          <Box>
            <TextInput style={{ width: 100 }} placeholder='First Name' />
            <TextInput style={{ margin: 10 }} placeholder='Last Name' />
          </Box>
        </Box>
      </View>
    </TouchBox>
  )
}
const styles = StyleSheet.create({
  form: {
    height: 580,
    width: 300,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})
