import React, { useState } from 'react'
import theme, { Box, Card, Text, TouchBox } from '../../theme'
import {
  Button,
  RoundedIconButton,
  TextInput,
  TextInputRef,
} from '../../components'
import { AuthNavigationProps } from '../../types/navigation'
import { Keyboard } from 'react-native'
import IconSvg from './../../assets/icons/icon.svg'
import CheckBox from '@react-native-community/checkbox'

const SignIn = ({ navigation }: AuthNavigationProps<'SignIn'>) => {
  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <TouchBox
      flex={1}
      backgroundColor='background'
      activeOpacity={1}
      onPress={() => Keyboard.dismiss()}>
      <Card variant='top'>
        <Box
          justifyContent='center'
          flexDirection='row'
          alignItems='center'
          style={{ height: 130 }}>
          <IconSvg height={50} width={40} />
          <Text textAlign='center' variant='hero'>
            Sing In
          </Text>
        </Box>
      </Card>
      <Card variant='form' top={-110} alignSelf='center'>
        <Text
          variant='body'
          style={{ color: theme.colors.primaryLight, textAlign: 'center' }}>
          Sign In to start your lesson
        </Text>
        <TextInput
          placeholder='Email/Phone Number '
          keyboardType='email-address'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder='Password'
          secureTextEntry={true}
          value={Password}
          onChangeText={(text) => setPassword(text)}
        />

        <Box flexDirection='row' flex={1} marginTop='l'>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text variant='slogan'>
            I have read and agree the term and conditions,{'\n'} as well as the
            Privacy Policy of FuelUp Eduction,
          </Text>
        </Box>
      </Card>
    </TouchBox>
  )
}

export default SignIn
