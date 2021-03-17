import React, { useState } from 'react'
import theme, { Box, Card, Text, TouchBox } from '../../theme'
import { Button, TextInput, Divider, IconButton } from '../../components'

import { AuthNavigationProps } from '../../types/navigation'
import { Keyboard, KeyboardAvoidingView } from 'react-native'
import IconSvg from './../../assets/icons/icon.svg'
import GoogleSvg from './../../assets/icons/google.svg'
import FacebookSvg from './../../assets/icons/facebook.svg'
import Microsoft from './../../assets/icons/mirosoft.svg'
import Telegram from './../../assets/icons/telegram.svg'
import Whatsapp from './../../assets/icons/whatsapp.svg'

const SignUp = ({ navigation }: AuthNavigationProps<'SignIn'>) => {
  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [PasswordC, setPasswordC] = useState('')

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
            Sing Up
          </Text>
        </Box>
      </Card>
      <Card variant='form' top={-110} alignSelf='center'>
        <Text
          variant='body'
          style={{ color: theme.colors.primaryLight, textAlign: 'center' }}>
          Sign In to start your lesson
        </Text>
        <KeyboardAvoidingView>
          <TextInput
            placeholder='Email/Phone Number '
            keyboardType='email-address'
            value={email}
            onSubmitEditing={() => passwordInputForm.focus()}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            value={Password}
            onSubmitEditing={() => passwordInputFormC.focus()}
            ref={(input) => {
              passwordInputForm = input
            }}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            placeholder='Confirm Password'
            secureTextEntry={true}
            value={PasswordC}
            ref={(input) => {
              passwordInputFormC = input
            }}
            onChangeText={(text) => setPasswordC(text)}
          />

          <Button
            label='Sign Up'
            variant='secondary'
            paddingHorizontal='s'
            marginTop='m'
            width={100}
            alignSelf='center'
            onPress={() => navigation.navigate('SignUpSuccess', 'id')}
          />
        </KeyboardAvoidingView>
        <Divider text='or' width={150} widthText={20} left={70} />
        <Box justifyContent='center' top={8} flexDirection='row'>
          <IconButton Icon={GoogleSvg} />
          <IconButton Icon={FacebookSvg} />
          <IconButton Icon={Microsoft} />
          <IconButton Icon={Telegram} />
          <IconButton Icon={Whatsapp} />
        </Box>

        <TouchBox
          flexDirection='row'
          alignSelf='center'
          margin='l'
          onPress={() => navigation.navigate('SignIn')}>
          <Text color='primaryLight' variant='body'>
            Already have an account?
          </Text>
          <Text textDecorationLine='underline' color='primary' variant='header'>
            Sign In
          </Text>
        </TouchBox>
      </Card>
    </TouchBox>
  )
}

export default SignUp
