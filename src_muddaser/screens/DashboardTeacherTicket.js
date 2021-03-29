import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window')

const DashboardTeacherTicket = () => {
  return (
    <View style={styles.ScreenDimensions}>
      <View style={styles.topSection} />
      <Image
        style={styles.topSectionImage}
        source={require('../images/MaskGroup69(1)2.png')}
      />
      <MaterialIcons
        name='microsoft-xbox-controller-menu'
        size={25}
        style={styles.topSideMenuIcon}
        onPress={() => {
          alert('Drawer will be open')
        }}
      />
      <Text
        style={{
          marginTop: 0.047 * height,
          marginLeft: 0.56 * width,
          fontWeight: '700',
          fontSize: 16,
          lineHeight: 20.08,
          color: '#000000',
          fontFamily: 'Mulish-Regular',
          position: 'absolute',
        }}>
        Welcome Sheela!
      </Text>
      <Text
        style={{
          marginTop: 0.086 * height,
          marginLeft: 0.58 * width,
          fontWeight: '400',
          fontSize: 12,
          lineHeight: 15.08,
          color: '#FFFFFF',
          fontFamily: 'Mulish-Regular',
          position: 'absolute',
        }}>
        Check what's up with your Schedule....
      </Text>
      <View style={styles.problemReportSection} />

      <Text
        style={{
          marginTop: 0.19 * height,
          marginLeft: 0.058 * width,
          fontWeight: '700',
          fontSize: 13,
          color: '#000000',
          fontFamily: 'Mulish-Regular',
          position: 'absolute',
        }}>
        Technical Problem Report
      </Text>
      <Text
        style={{
          marginTop: 0.24 * height,
          marginLeft: 0.11 * width,
          color: '#380885',
          fontFamily: 'Mulish-Regular',
          fontWeight: '600',
          position: 'absolute',
        }}>
        Full Name
      </Text>
      <TextInput
        style={{
          backgroundColor: '#D1D6FF',
          marginTop: 0.27 * height,
          marginLeft: 0.11 * width,
          borderRadius: 2,
          position: 'absolute',
          fontFamily: 'Mulish',
          fontSize: 9,
          height: 0.045 * height,
          width: 0.766 * width,
        }}
      />
      <Text
        style={{
          marginTop: 0.33 * height,
          marginLeft: 0.11 * width,
          color: '#380885',
          fontFamily: 'Mulish-Regular',
          fontWeight: '600',
          position: 'absolute',
        }}>
        Issue Title
      </Text>
      <TextInput
        style={{
          backgroundColor: '#D1D6FF',
          marginTop: 0.36 * height,
          marginLeft: 0.11 * width,
          borderRadius: 2,
          position: 'absolute',
          fontFamily: 'Mulish',
          fontSize: 9,
          height: 0.045 * height,

          width: 0.766 * width,
        }}
      />
      <Text
        style={{
          marginTop: 0.42 * height,
          marginLeft: 0.11 * width,
          color: '#380885',
          fontFamily: 'Mulish-Regular',
          fontWeight: '600',
          position: 'absolute',
        }}>
        Periority
      </Text>

      <TouchableOpacity
        onPress={() => alert('Low function call')}
        style={{
          marginTop: 0.46 * height,
          marginLeft: 0.11 * width,
          width: 0.23 * width,
          height: 0.031 * height,
          backgroundColor: '#FFC95F',
          position: 'absolute',
          borderRadius: 15,
        }}
      />
      <Text
        onPress={() => alert('Low function call')}
        style={{
          marginTop: 0.46 * height,
          marginLeft: 0.19 * width,
          fontFamily: 'Mulish-Black',
          fontWeight: '600',
          fontSize: 13,
          color: '#FFFFFF',
          position: 'absolute',
        }}>
        Low
      </Text>

      <TouchableOpacity
        onPress={() => alert('Medium function call')}
        style={{
          marginTop: 0.46 * height,
          marginLeft: 0.41 * width,
          width: 0.23 * width,
          height: 0.031 * height,
          backgroundColor: '#64AAD9',
          position: 'absolute',

          borderRadius: 15,
        }}
      />
      <Text
        onPress={() => alert('Medium function call')}
        style={{
          marginTop: 0.46 * height,
          marginLeft: 0.46 * width,
          fontFamily: 'Mulish-Black',
          fontWeight: '600',
          fontSize: 13,
          color: '#FFFFFF',
          position: 'absolute',
        }}>
        Medium
      </Text>

      <TouchableOpacity
        onPress={() => alert('High function call')}
        style={{
          marginTop: 0.46 * height,
          marginLeft: 0.7 * width,
          width: 0.23 * width,
          height: 0.031 * height,
          backgroundColor: '#EF271B',
          position: 'absolute',

          borderRadius: 15,
        }}
      />
      <Text
        onPress={() => alert('High function call')}
        style={{
          marginTop: 0.46 * height,
          marginLeft: 0.78 * width,
          fontFamily: 'Mulish-Black',
          fontWeight: '600',
          fontSize: 13,
          color: '#FFFFFF',
          position: 'absolute',
        }}>
        High
      </Text>
      <Text
        style={{
          marginTop: 0.51 * height,
          marginLeft: 0.11 * width,
          color: '#380885',
          fontFamily: 'Mulish-Regular',
          fontWeight: '600',
          position: 'absolute',
        }}>
        Description
      </Text>

      <TextInput
        multiline={true}
        style={{
          backgroundColor: '#D1D6FF',
          marginTop: 0.54 * height,
          marginLeft: 0.11 * width,
          borderRadius: 2,
          position: 'absolute',
          fontFamily: 'Mulish',
          height: 0.076 * height,
          width: 0.766 * width,
        }}
      />
      <Text
        style={{
          marginTop: 0.63 * height,
          marginLeft: 0.11 * width,
          color: '#380885',
          fontFamily: 'Mulish-Regular',
          fontWeight: '600',
          position: 'absolute',
        }}>
        Enter Captcha
      </Text>

      <TextInput
        style={{
          backgroundColor: '#D1D6FF',
          marginTop: 0.66 * height,
          marginLeft: 0.11 * width,

          position: 'absolute',
          fontFamily: 'Mulish',
          borderRadius: 2,
          fontSize: 9,
          height: 0.045 * height,
          width: 0.766 * width,
        }}
      />

      <Text
        style={{
          marginTop: 0.74 * height,
          marginLeft: 0.4 * width,
          color: '#380885',
          fontFamily: 'Mulish-Regular',
          fontWeight: '600',

          position: 'absolute',
        }}>
        Captcha Code
      </Text>

      <View
        style={{
          marginTop: 0.74 * height,
          marginLeft: 0.67 * width,
          width: 0.21 * width,
          height: 0.029 * height,
          backgroundColor: '#380885',
          position: 'absolute',

          borderRadius: 5,
        }}
      />
      <Text
        style={{
          marginTop: 0.74 * height,
          marginLeft: 0.72 * width,
          fontFamily: 'Mulish-Black',
          fontWeight: '600',
          fontSize: 13,
          color: '#FFFFFF',
          position: 'absolute',
        }}>
        11f32g
      </Text>

      <TouchableOpacity
        onPress={() => alert('submit function call')}
        style={{
          marginTop: 0.81 * height,
          marginLeft: 0.64 * width,
          width: 0.23 * width,
          height: 0.033 * height,
          backgroundColor: '#F16600',
          position: 'absolute',
          zIndex: 0,
          borderRadius: 15,
        }}
      />
      <Text
        onPress={() => alert('submit function call')}
        style={{
          marginTop: 0.81 * height,
          marginLeft: 0.7 * width,
          fontFamily: 'Mulish-Black',
          fontWeight: '600',
          fontSize: 13,
          color: '#FFFFFF',
          position: 'absolute',
        }}>
        Submit
      </Text>

      <Text
        style={{
          marginTop: 0.83 * height,
          marginLeft: 0.11 * width,
          textDecorationLine: 'underline',
          color: '#380885',
          fontFamily: 'Mulish-Regular',
          fontWeight: '600',
          position: 'absolute',
        }}>
        Report History
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  ScreenDimensions: {
    backgroundColor: '#B1B1B1',
    flex: 1,
  },
  topSection: {
    backgroundColor: '#380885',
    width: '100%',
    height: height * 0.17,

    position: 'absolute',
  },
  topSectionImage: {
    width: width * 0.1874,
    height: height * 0.1022,
    marginLeft: width * 0.11,
    marginTop: height * 0.0327,
    position: 'absolute',
  },
  topSideMenuIcon: {
    color: '#FFFFFF',
    width: width * 0.077,
    height: height * 0.033,
    marginLeft: width * 0.047,
    marginTop: height * 0.037,
    position: 'absolute',
  },
  problemReportSection: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 0.7 * height,
    marginTop: 0.167 * height,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    position: 'absolute',
  },
  TabBar: {
    backgroundColor: '#380885',
    height: 0.089 * height,
    marginTop: 0.91 * height,
    position: 'absolute',
  },
})
export default DashboardTeacherTicket
