import React from 'react'

import { Box, Text } from '../../theme'

const Divider = ({ text, widthText, width, left }: any) => {
  return (
    <Box
      width={width}
      borderBottomWidth={1}
      marginTop='m'
      alignSelf='center'
      borderColor='grey'>
      <Text
        color='grey'
        textAlign='center'
        style={{
          bottom: -8,
          marginLeft: left,
          width: widthText,
          backgroundColor: '#fff',
        }}>
        {text}
      </Text>
    </Box>
  )
}
export default Divider
