import React from 'react'
import { Box, Card, Text, TouchBox } from '../../theme'
import {
  Button,
  RoundedIconButton,
  TextInput,
  TextInputRef,
} from '../../components'
import { AuthNavigationProps } from '../../types/navigation'
import { Keyboard } from 'react-native'
import SignupOTPImage from '../../assets/svgs/signupOTP.svg'

const SignupOTP = ({ navigation }: AuthNavigationProps<'SignupOTP'>) => {
  const phone = React.useRef<TextInputRef>(null)
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
          onPress={() => navigation.goBack()}
        />
        <Text textAlign='center' fontSize={28} variant='hero'>
          Let’s get started
        </Text>
        <Text variant='body' color='white' textAlign='center' padding='m'>
          Enter your mobile number to Sign Up into your Lesson account
        </Text>
      </Card>
      <Box margin='s' marginTop='l'>
        <Box
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          paddingHorizontal='xl'>
          <TextInput
            placeholder='+91'
            textContentType='telephoneNumber'
            keyboardType='phone-pad'
            returnKeyType='next'
            returnKeyLabel='Next'
            maxLength={4}
            onSubmitEditing={() => phone.current?.focus()}
          />
          <TextInput
            ref={phone}
            containerStyle={{ flex: 1 }}
            placeholder='Phone Number'
            textContentType='telephoneNumber'
            keyboardType='phone-pad'
          />
        </Box>
        <Box
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          paddingTop='xl'>
          <Button
            variant='secondary'
            onPress={() => navigation.navigate('BasicInfo')}
            paddingHorizontal='xl'
            label='Continue'
          />
        </Box>
      </Box>
      <Box flex={1}>
        <SignupOTPImage height='90%' width='85%' />
      </Box>
    </TouchBox>
  )
}

export default SignupOTP
