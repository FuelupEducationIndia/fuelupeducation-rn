import React, { useState, useRef } from 'react'
import theme, { Box, Card, Text, TouchBox } from '../../theme'
import {
  Button,
  // RoundedIconButton,
  TextInput,
  Divider,
  // TextInputRef,
} from '../../components'
import { CustomPicker } from 'react-native-custom-picker'

import { AuthNavigationProps } from '../../types/navigation'
import { Keyboard, KeyboardAvoidingView, LogBox } from 'react-native'
import IconSvg from './../../assets/icons/icon.svg'
import RIconSvg from './../../assets/icons/recaptcha.svg'
import GoogleSvg from './../../assets/icons/google.svg'
import FacebookSvg from './../../assets/icons/facebook.svg'
import Microsoft from './../../assets/icons/mirosoft.svg'
import Telegram from './../../assets/icons/telegram.svg'
import Whatsapp from './../../assets/icons/whatsapp.svg'

import CheckBox from '@react-native-community/checkbox'

import Recaptcha from 'react-native-recaptcha-that-works'

const Astric = () => <Text style={{ color: 'red' }}>*</Text>

const SignIn = ({ navigation }: AuthNavigationProps<'SignIn'>) => {
  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Role, setRole] = useState('')

  const [SignInMethod, setSignInMethod] = useState('')

  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [reCap, setReCap] = useState(false)
  const [key, setKey] = useState('')
  const $recaptcha: any = useRef()
  const options = ['Teacher', 'Student', 'Parent', 'admin']
  const options1 = ['Biometric', 'Face ID', 'QR Code']
  LogBox.ignoreAllLogs()
  const handleClosePress = () => {
    setReCap(false)
    $recaptcha.current.close()
  }
  console.log(Astric())
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
            ref={(input) => {
              passwordInputForm = input
            }}
            value={Password}
            onChangeText={(text) => setPassword(text)}
          />
          <CustomPicker
            placeholder={'Role'}
            options={options}
            onValueChange={(value: any) => {
              setRole(value)
            }}
          />
        </KeyboardAvoidingView>

        <Box flexDirection='row' marginTop='m'>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(vale) => {
              setToggleCheckBox(vale)
            }}
          />
          <Text variant='slogan'>
            I have read and agree the term and conditions,{'\n'} as well as the
            Privacy Policy of FuelUp Eduction,
          </Text>
        </Box>
        <Box
          height={60}
          backgroundColor='silver'
          marginTop='m'
          alignItems='center'
          flexDirection='row'
          borderWidth={0.3}
          borderColor='text'>
          <CheckBox
            disabled={false}
            value={reCap}
            onValueChange={(vale) => {
              if (reCap == false) {
                $recaptcha.current.open()
                setReCap(vale)
              }
            }}
            onCheckColor={theme.colors.primary}
            tintColors={{
              true: theme.colors.primary,
              false: theme.colors.text,
            }}
          />

          <Text variant='body' color='grey'>
            I'm not a robot
          </Text>
          <Box right={-100}>
            <RIconSvg height={30} width={30} />
          </Box>

          <Recaptcha
            ref={$recaptcha}
            lang='en'
            baseUrl='http://127.0.0.1' // add your own base Yrl of website
            headerComponent={
              <Button label='Close' onPress={handleClosePress} />
            }
            siteKey='6LejsqwZAAAAAGsmSDWH5g09dOyNoGMcanBllKPF' //register yourself at google console to get siteKey
            theme='light'
            onClose={() => {
              if (key != '') {
                setReCap(true)
              } else {
                setReCap(false)
              }
            }}
            onError={() => {
              setReCap(false)
              alert('onError event')
            }}
            onExpire={() => {
              alert('onExpire event')
              setReCap(false)
            }}
            onVerify={(token) => {
              setReCap(true)

              setKey(token)
            }}
          />
        </Box>
        <Button
          label='Sign In'
          variant='secondary'
          paddingHorizontal='s'
          marginTop='m'
          width={100}
          alignSelf='center'
        />
        <Divider text='or' width={150} widthText={20} left={70} />
        <Box justifyContent='center' top={8} flexDirection='row'>
          <TouchBox height={40} width={40} margin='s'>
            <GoogleSvg height={40} width={40} />
          </TouchBox>
          <TouchBox height={40} width={40} margin='s'>
            <FacebookSvg height={40} width={40} />
          </TouchBox>
          <TouchBox height={40} width={40} margin='s'>
            <Microsoft height={40} width={40} />
          </TouchBox>
          <TouchBox height={40} width={40} margin='s'>
            <Telegram height={40} width={40} />
          </TouchBox>
          <TouchBox height={40} width={40} margin='s'>
            <Whatsapp height={40} width={40} />
          </TouchBox>
        </Box>
        <Divider
          text='Use Biometric Sign In'
          width={250}
          widthText={150}
          left={50}
        />
        <CustomPicker
          placeholder='Select a Method'
          options={options1}
          onValueChange={(value: any) => {
            setSignInMethod(value)
          }}
        />
        <TouchBox
          flexDirection='row'
          alignSelf='center'
          onPress={() => navigation.navigate('SignUp')}
          margin='s'>
          <Text color='primaryLight' variant='body'>
            Don't have any account?
          </Text>
          <Text textDecorationLine='underline' color='primary' variant='header'>
            Sign Up
          </Text>
        </TouchBox>
      </Card>
    </TouchBox>
  )
}

export default SignIn
