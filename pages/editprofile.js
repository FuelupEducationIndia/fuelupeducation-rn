import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { color } from 'react-native-reanimated';
export default function editprofile({ navigation }) {
  return (
    <View  style={{flex: 1, backgroundColor: '#B1B1B1',}}>
    <View style={styles.main}>

      <View style={styles.header}>
        <View style={{}}>
          <Ionicons name='menu' size={28} style={{ marginTop: 31, marginLeft: 17, height: 28, width: 28, color: '#FFFFFF' }} />
          <Image
            style=
            {{
              width: 159,
              // height: 110,
              marginLeft: 42,
              marginTop: -40,
              // marginRight: 199,
            }}
            source={require('./images/MaskGroup.png')}
          />
        </View>
        <View style={{}}>
          <Text style={{
            color: '#FFFFFF',
            merginleft: 6,
            marginRight: 6.11,
            marginTop: 40,
            marginBottom: 59.73,
            fontFamily: 'Mulish',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: 20,
          }}>Wellcome Sheela!</Text>

          <Text style={{
            position: 'absolute',
            color: '#FFFFFF',
            merginleft: 10,
            marginRight: 5.83,
            marginTop: 73,
            marginBottom: 30.87,
            fontFamily: 'Mulish',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            lineHeight: 15,
          }}>Check What,s up with your shedule.....</Text>
        </View>
      </View>

      <ScrollView style={{ marginHorizontal: 10, }}>
        <View style={styles.body}>
          <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            fontStyle: 'normal',
            fontFamily: 'Mulish',
            color: '#380885',
            lineHeight: 20,
            marginLeft: 21,
          }}
          >Edit Profile</Text>
          <View>
            <Text style={{
              fontSize: 14,
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              fontStyle: 'normal',
              fontFamily: 'Mulish',
              color: '#707070',
              lineHeight: 18,
              marginLeft: 42,
            }}
            >LastName FirstName</Text>
          </View>

          <View style={{ flexDirection: 'row', }}>
            <EvilIcons name='user' size={64} style={{
              position: 'absolute',
              marginTop: 32,
              marginBottom: 14.68,
              marginLeft: 64,
              marginRight: 232,
            }} />
            <View style={{
              position: 'absolute',
              marginTop: 32,
              marginBottom: 48.62,
              marginLeft: 147,
              marginRight: 25.59,
            }}>
              <Text style={{
                fontSize: 13,
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                fontStyle: 'normal',
                fontFamily: 'Mulish',
                color: '#380885',
                lineHeight: 20,
                marginLeft: 19,
              }}>Nick Name</Text>
              <TextInput
                style={{ width: 150, height: 33.19, backgroundColor: '#E8EBFF', marginLeft: 19, }}
              />
            </View>
          </View>
          <Text style={{
            color: '#F16600',
            marginLeft: 76,
            marginTop: 80,
            fontSize: 12,
            lineHeight: 15,
            fontWeight: 'normal',
            display: 'flex',
            alignItems: 'center',
            fontStyle: 'normal',
            fontFamily: 'Mulish',
          }}>Change</Text>

          <Text style={{
            color: '#707070',
            marginTop: 37,
            marginLeft: 42,
            fontSize: 14,
            lineHeight: 18,
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            fontStyle: 'normal',
            fontFamily: 'Mulish',
          }}>Contect Information</Text>
          <View style={styles.field}>
            <Text style={styles.titletext}>Mailling Address</Text>
            <TextInput style={styles.TextInput} />
          </View>

          <View style={styles.field}>
            <Text style={styles.titletext}>Email Address</Text>
            <TextInput style={styles.TextInput} />
          </View>

          <View style={styles.field}>
            <Text style={styles.titletext}>Mobile Phone</Text>
            <TextInput style={styles.TextInput} />
          </View>

          <Text style={{ marginLeft: 42, marginTop: 30, color: '#707070', }}>Personal Information</Text>
          <View style={styles.field}>
            <Text style={styles.titletext}>Birth Date</Text>
            <View style={{ flexDirection: 'row' }}>
              <TextInput style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 5, width: 125, height: 33, }}
              />
              <TextInput style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 5, width: 125, height: 33, marginLeft: 5, }} />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.titletext}>Gender</Text>
            <TextInput style={styles.TextInput} />
          </View>

          <Text style={{ marginLeft: 42, marginTop: 30, color: '#707070', }}>Educational Information</Text>
          <View style={styles.field}>
            <Text style={styles.titletext}>Board/University</Text>
            <TextInput style={styles.TextInput} />
          </View>

          <View style={styles.field}>
            <Text style={styles.titletext}>Majar</Text>
            <TextInput style={styles.TextInput} />
          </View>

          <View style={styles.field}>
            <Text style={styles.titletext}>Position</Text>
            <TextInput style={styles.TextInput} />
          </View>

          <Text style={{ marginLeft: 42, marginTop: 30, color: '#707070', }}>Social Networks</Text>
          <View style={styles.field}>
            <Text style={styles.titletext}>Linkedin</Text>
            <TextInput style={styles.TextInput} />
          </View>
          <View style={styles.field}>
            <Text style={styles.titletext}>Google</Text>
            <TextInput style={styles.TextInput} />
          </View>
          <View style={styles.field}>
            <Text style={styles.titletext}>Facebook</Text>
            <TextInput style={styles.TextInput} />
          </View>
          <View style={styles.field}>
            <Text style={styles.titletext}>Instagram</Text>
            <TextInput style={styles.TextInput} />
          </View>
          <View style={styles.field}>
            <Text style={styles.titletext}>Twitter</Text>
            <TextInput style={styles.TextInput} />
          </View>

          <Text style={{ marginLeft: 42, marginTop: 30, color: '#707070', }}>Sign In Information</Text>
          <View style={styles.field}>
            <Text style={{ marginTop: 15, color: '#380885', fontSize: 13, lineHeight: 16, fontWeight: 'bold', }}>Fingerprint</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6, }}>
              <TextInput
                style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 6, width: 99, height: 40, textAlign: 'center', }}
              >
                <Entypo name='fingerprint' size={18} style={{ color: '#380885', }} />
                <Text style={{}}>Fingerprint</Text>
              </TextInput>
              <View>
                <Entypo name='switch' size={35} style={{ marginTop: 10, color: '#3B0E8A', }} />
              </View>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={{ marginTop: 15, color: '#380885', fontSize: 13, lineHeight: 16, fontWeight: 'bold', }}>Face ID</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextInput
                style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 6, width: 99, height: 40, textAlign: 'center', }}
              >
                <MaterialCommunityIcons name='face-recognition' size={18} style={{ color: '#380885', }} />
                <Text style={{}}>Face ID</Text>
              </TextInput>
              <View>
                <Entypo name='switch' size={35} style={{ marginTop: 5, color: '#3B0E8A', }} />
              </View>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={{marginTop: 15, color: '#380885', fontSize: 13, lineHeight: 16, fontWeight: 'bold',}}>QR Code</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextInput
                style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 6, width: 99, height: 40, textAlign: 'center', }}
              >
                <Ionicons name='md-qr-code-outline' size={18} style={{ color: '#380885', }} />
                <Text style={{}}>QR Code</Text>
              </TextInput>
              <View>
                <Entypo name='switch' size={35} style={{ marginTop: 5, color: '#3B0E8A',}} />
              </View>
            </View>
          </View>

          <View style={{
            alignItems: 'center',
            marginTop: 40,
            borderRadius: 20,
            backgroundColor: '#F16600',
            width: 86,
            height: 28,
            marginLeft: 233,
            marginRight: 41,
          }}>
            <TouchableOpacity style={{}}
              onPress={() => navigation.navigate('report')}
            >
              <Text style={{ color: '#FFFFFF', marginTop: 5, }}>Updade</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 15,
  },
  header: {
    backgroundColor: '#3B0E8A',
    height: 149,
    flexDirection: 'row',
    marginLeft: 0,
    marginTop: 0,
  },
  text: {
    alignItems: 'center',
    marginTop: 15,
    marginRight: 50,
  },
  body: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 7.82,
    marginBottom: 16,
    borderRadius: 10,
  },
  field: {
    marginTop: 39,
    marginLeft: 63,
    marginRight: 41,
    width: 256,
    height: 33.19,
    borderRadius: 5,
  },
  titletext: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: '#380885',
    display: 'flex',
    fontWeight: 'bold',
  },
  TextInput: {
    backgroundColor: '#E8EBFF',
    borderRadius: 5,
    marginTop: 5,
    width: '100%',
  },
});
