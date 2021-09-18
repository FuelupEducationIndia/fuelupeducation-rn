import React, { useState, useRef } from 'react'
import theme, { Box, Card, Text, TouchBox } from '../../theme'
import { Button, TextInput, RoundedIconButton } from '../../components'
import { CustomPicker } from 'react-native-custom-picker'
import Recaptcha, { RecaptchaHandles } from 'react-native-recaptcha-that-works'

import { AuthNavigationProps } from '../../types/navigation'
import { Keyboard, KeyboardAvoidingView, LogBox} from 'react-native'
import IconSvg from './../../assets/icons/icon.svg'
import RIconSvg from './../../assets/icons/recaptcha.svg'
import CheckBox from '@react-native-community/checkbox'
import DatePicker from 'react-native-datepicker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const countryOption = ['India','Indonesia','Pakistan','USA']
const cityOption = ['Jaipur','Jakarta']
const roleOption = ['Student','Teacher']
const studentStream = ['School Student', 'College Student']

const SignUpInfo = ({ navigation }: AuthNavigationProps<'SignUpInfo'>) => {
  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [country, setCountry] = useState('')
  const [city , setCity] = useState('')
  const [role, setRole] = useState('')
  const [stream, setStream] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const recaptcha = useRef<RecaptchaHandles>(null)
  const [reCap, setReCap] = useState(false)
  const [key, setKey] = useState('')
  
  const [date, setDate] = useState();

  LogBox.ignoreLogs(['componentWillReceiveProps'])

  const handleClosePress = () => {
    setReCap(false)
    recaptcha.current?.close()
  }
  const onSuccess = (e: any) => {
    console.log(e)
  }

  return (
    <TouchBox
      flex={1}
      backgroundColor='background'
      activeOpacity={1}
      onPress={() => Keyboard.dismiss()}>
      <Card variant='top'>
        <RoundedIconButton
          icon='x-circle'
          color='white'
          size={48}
          iconRatio={0.5}
          backgroundColor='primary'
          style={{ position: 'absolute', top: 50, right: 20 }}
          onPress={() => navigation.navigate('Start')}
        />
        <Box
          justifyContent='center'
          flexDirection='row'
          alignItems='center'
          style={{ height: 170 }}>
          <IconSvg height={50} width={30} />
          <Text textAlign='center' marginLeft={'s'} fontSize={28} variant='hero'>
            Welcome!
          </Text>
        </Box>
      </Card>
      <Card paddingHorizontal={'xl'} variant='form' top={-100} borderRadius={'round'} alignSelf='center'>
        <Text
          variant='body'
          style={{ color: theme.colors.primaryLight, textAlign: 'center' }}>
          Please help us fill your basic informations
        </Text>
        <KeyboardAvoidingView>
          <TextInput
            placeholder='First Name'
            keyboardType='default'
            value={firstName}
            onChangeText={(text) => setfirstName(text)}
          />
          <TextInput
            placeholder='Last Name'
            keyboardType='default'
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <DatePicker
              style={{width:'100%',marginTop:7,paddingRight:5}}
              date={date}
              mode="date"
              placeholder="Date Of Birth"
              format="DD-MM-YYYY"
              minDate="1970-01-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateInput: {
                  marginLeft: '3%',
                  borderWidth:0,
                  borderBottomWidth:1,
                  alignItems:'flex-start',
                  paddingLeft:4,
                }
              }}
              iconComponent={<MaterialCommunityIcons size={26} name='calendar-range'/>}
              onDateChange={(datStr:String,date:Date) => {setDate(date)}}
            />
          <CustomPicker
            placeholder='Select your country'
            options={countryOption}
            onValueChange={(value: any) => {
              setCountry(value)
            }}
          />
          <CustomPicker
            placeholder='Select your city'
            options={cityOption}
            onValueChange={(value: any) => {
              setCity(value)
            }}
          />
          <CustomPicker
            placeholder='Role'
            options={roleOption}
            onValueChange={(value: any) => {
              setRole(value)
            }}
          />
          <CustomPicker
            placeholder='Stream'
            options={studentStream}
            onValueChange={(value: any) => {
              setStream(value)
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
              I have read and agree the term and conditions,{'\n'} as well as
              the Privacy Policy of FuelUp Eduction,
            </Text>
        </Box>
        <TouchBox
            height={60}
            backgroundColor='silver'
            marginTop='m'
            alignItems='center'
            flexDirection='row'
            borderWidth={0.3}
            borderColor='text'
            onPress={() => {
              if (reCap === false) {
                recaptcha.current?.open()
              } else {
                setReCap(true)
              }
            }}>
            <CheckBox
              disabled={false}
              value={reCap}
              onValueChange={(vale) => {
                if (reCap === false) {
                  recaptcha.current?.open()
                  setReCap(vale)
                } else {
                  setReCap(true)
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
              ref={recaptcha}
              lang='en'
              baseUrl='http://127.0.0.1' // add your own base Yrl of website
              headerComponent={
                <Button label='Close' onPress={handleClosePress} />
              }
              siteKey='6LejsqwZAAAAAGsmSDWH5g09dOyNoGMcanBllKPF' //register yourself at google console to get siteKey
              theme='light'
              onClose={() => {
                if (key !== '') {
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
          </TouchBox>
        <Button
            label='Continue'
            variant='secondary'
            paddingHorizontal='s'
            marginTop='m'
            width={100}
            alignSelf='center'
            onPress={() => navigation.navigate('SignUpSuccess','id')}
        />
      </Card>
    </TouchBox>
  )
}

export default SignUpInfo
