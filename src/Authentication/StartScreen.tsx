import React from 'react'
import { Box, Text, TouchBox } from '../theme'
import LinearGradient from 'react-native-linear-gradient'
import StartSvg from '../assets/svgs/start.svg'
import { StyleSheet } from 'react-native'
import IconSvg from '../assets/icons/icon.svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthNavigationProps } from '../types/navigation'

const StartScreen = ({ navigation }: AuthNavigationProps<'Start'>) => {
  return (
    <Box flex={1}>
      <LinearGradient
        colors={['#380885', '#554CB8']}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <StartSvg style={{ ...StyleSheet.absoluteFillObject, top: 30 }} />
        <Box
          flex={1}
          justifyContent='center'
          style={{ marginTop: 70 }}
          flexDirection='row'>
          <IconSvg height={90} width={80} />
          <Text marginLeft='s' variant='hero'>
            Fuelup{'\n'}Education
          </Text>
        </Box>
        <Box
          flex={0.5}
          marginVertical='xl'
          justifyContent='center'
          alignItems='center'>
          <Text
            fontFamily='Mulish-SemiBold'
            textAlign='center'
            fontSize={19}
            color='white'>
            An education product like{'\n'}no other
          </Text>
          <Text fontFamily='Mulish-Bold' color='offWhite' fontSize={11}>
            and thats what we call digital ecosystem
          </Text>
        </Box>
        <TouchBox
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SignIn')}
          backgroundColor='secondary'
          paddingVertical='m'
          paddingHorizontal='l'
          flexDirection='row'
          justifyContent='space-between'>
          <Text variant='button'>Sign In</Text>
          <Text variant='button'>Start Learning</Text>
        </TouchBox>
      </SafeAreaView>
    </Box>
  )
}

export default StartScreen
