import React from 'react'
import { Box, Card, Text } from '../../theme'
import { Button, RoundedIconButton } from '../../components'
import { AuthNavigationProps } from '../../types/navigation'
import { TextInput } from 'react-native'

const SignupOTP = ({ navigation }: AuthNavigationProps<'SignupOTP'>) => {
  return (
    <Box flex={1} backgroundColor='background'>
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
      <Box flex={1} margin='s'>
        <Box flexDirection='row' justifyContent='center' alignItems='center'>
          <TextInput
            placeholder='Phone Number'
            placeholderTextColor='#ae7f75a5'
            focusable={true}
          />
        </Box>
        <Box flexDirection='row' justifyContent='center' alignItems='center'>
          <Button variant='secondary' paddingHorizontal='xl' label='Continue' />
        </Box>
      </Box>
    </Box>
  )
}

export default SignupOTP
