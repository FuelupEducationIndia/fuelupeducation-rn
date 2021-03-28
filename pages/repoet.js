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
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function report({ navigation }) {
  return (
    <View style={{flex: 1, backgroundColor: '#B1B1B1',}}>
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
            merginleft: 4,
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
            marginTop: 30,
            marginLeft: 15,
            fontSize: 14,
            lineHeight: 18,
            display: 'flex',
            fontStyle: 'normal',
            fontFamily: 'Mulish',
            fontWeight: 'bold'
          }}>Technical Problem Report</Text>

          <View style={styles.field}>
            <Text style={styles.titletxt}>Full Name</Text>
            <TextInput style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 5, width: '100%', }} />
          </View>

          <View style={styles.field}>
            <Text style={styles.titletxt}>Issue Title</Text>
            <TextInput style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 5, width: '100%', }} />
          </View>

          <Text style={{ color: '#380885', fontWeight: 'bold', marginTop: 39, marginLeft: 30, }}>Priority</Text>
          <View style={{ marginTop: 5, marginLeft: 30, flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{
              alignItems: 'center',
              marginTop: 5,
              borderRadius: 20,
              backgroundColor: '#FFC95F',
              width: "30%",
              height: 30,
            }}>
              <TouchableOpacity
                style={{}}>
                <Text style={{ color: '#FFFFFF', marginTop: 5, }}>Low</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              alignItems: 'center',
              marginTop: 5,
              borderRadius: 20,
              backgroundColor: '#64AAD9',
              width: "30%",
              height: 30,
            }}>
              <TouchableOpacity
                style={{}}>
                <Text style={{ color: '#FFFFFF', marginTop: 5, }}>Medium</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              alignItems: 'center',
              marginTop: 5,
              borderRadius: 20,
              backgroundColor: '#EF271B',
              width: "30%",
              height: 30,
            }}>
              <TouchableOpacity
                style={{}}>
                <Text style={{ color: '#FFFFFF', marginTop: 5, }}>High</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.titletxt}>Description</Text>
            <TextInput style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 5, height: 80, width: '100%', }} />
          </View>

          <View style={{
            marginTop: 95,
            marginLeft: 30,
            marginRight: 41,
            width: 256,
            height: 33.19,
            borderRadius: 5,
          }}>
            <Text style={{
              fontFamily: 'Mulish',
              fontWeight: '600',
              fontStyle: 'normal',
              fontSize: 13,
              lineHeight: 16,
              color: '#380885',
              display: 'flex',
              fontWeight: 'bold',
              marginBottom: 5,
            }}>Enter Captcha</Text>
            <TextInput style={{ backgroundColor: '#E8EBFF', borderRadius: 5, width: '100%', }} />
          </View>

          <View style={{ marginTop: 20, flexDirection: 'row', marginLeft: 130, }}>
            <Text style={{ color: '#380885', fontWeight: 'bold', marginTop: 43, }}>Captcha Code</Text>
            <TextInput
              style={{ backgroundColor: '#380885', marginTop: 39, marginLeft: 10, width: "30%", height: 30, borderRadius: 8, textAlign: 'center', color: '#fff', }}
            >
              <Text style={{}}>F23Gj6</Text>
            </TextInput>
          </View>

          <View style={{
            alignItems: 'center',
            marginTop: 39,
            borderRadius: 20,
            backgroundColor: '#F16600',
            width: "26%",
            height: 30,
            marginLeft: 205,
          }}>
            <TouchableOpacity style={{}}
              onPress={() => navigation.navigate('editprofile')}
            >
              <Text style={{ color: '#FFFFFF', marginTop: 5, }}>Submit</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <Text style={{ color: '#380885', textDecorationLine: 'underline', marginLeft: 15, }}>Report History</Text>
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
  body: {
    marginLeft: 20,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 50,
    borderRadius: 10,
  },
  Welcomesheela: {
    position: 'absolute',
    left: 56.94,
    right: 6.11,
    top: 26.85,
    bottom: 59.73,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  field: {
    marginTop: 45,
    marginLeft: 30,
    marginRight: 41,
    width: 256,
    height: 33.19,
    borderRadius: 5,
  },
  titletxt: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: '#380885',
    display: 'flex',
    fontWeight: 'bold',
  },
});
