import React from 'react'
import { Image } from 'react-native'
import theme, { Box, Card, Text } from '../../theme'
import { Button, RoundedIconButton } from '../../components'
import { AuthNavigationProps } from '../../types/navigation'
import { height, width } from '../../constants'

const SignUnUpSuccess = ({ navigation }: AuthNavigationProps<'BasicInfo'>) => {
  return (
    <Box flex={1} backgroundColor='background'>
      <Card
        variant='form'
        flex={1}
        height={height + 70}
        width={width}
        justifyContent='center'>
        <RoundedIconButton
          icon='x-circle'
          color='text'
          size={48}
          iconRatio={0.5}
          backgroundColor='background'
          style={{ position: 'absolute', top: 60, right: 15 }}
          onPress={() => navigation.navigate('Start')}
        />
        <Image
          source={require('./../../assets/icons/Success1.png')}
          style={{
            height: height - 400,
            width: width - 30,
            top: -40,
            backgroundColor: theme.colors.background,
          }}
        />
        <Text
          textAlign='center'
          variant='title'
          fontWeight='bold'
          color='primary'
          style={{ top: -30 }}
          fontSize={30}>
          Sign Up {'\n'} Successful
        </Text>
        <Text
          textAlign='center'
          style={{ top: -10 }}
          variant='slogan'
          fontSize={15}>
          Enjoy Learning Uninterruptedly
        </Text>
        <Button
          label='Go to Dashboard'
          variant='secondary'
          width={200}
          top={10}
          alignSelf='center'
        />
      </Card>
    </Box>
  )
}

export default SignUnUpSuccess
