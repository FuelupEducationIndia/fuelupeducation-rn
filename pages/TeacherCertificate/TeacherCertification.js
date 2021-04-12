import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import { Picker } from '@react-native-community/picker'

export default function App() {

  const [typeIndex, setTypeIndex] = useState(0)
  const [optionsIndex, setOptionsIndex] = useState(0)
  const [bottomNavigation, setBottomNavigation] = useState(0)

  const [institutionName, setInstitutionName] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [province, setProvince] = useState("")
  const [postalCode, setPpostalCode] = useState("")
  const [country, setCountry] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [tax, setTax] = useState("")

  const TYPES_CERTIFICATES = [
    { value: 'Assignment' },
    { value: 'Attendance' },
    { value: 'Certificate' },
  ]
  const OPTIONS_CERTIFICATE = [
    { label: 'Dashboard' },
    { label: 'Create Certificate' }
  ]

  const BOTTOM_NAVIGATION = [
    { icon: require('./images/Home.png'), label: "Home" },
    { icon: require('./images/search1.png'), label: "Search" },
    { icon: require('./images/myCourses.png'), label: "My Courses" },
    { icon: require('./images/profile.png'), label: "Profile" },
    { icon: require('./images/more.png'), label: "More" },
  ]

  const InformationComponent = ({ half, label, placeholder, setValue, value, picker }) => {
    return (
      <View style={{ width: half ? '45%' : '100%', flexDirection: 'column', justifyContent: 'space-between', height: 58, marginTop: 20 }}>
        <Text style={{ color: '#380885', fontWeight: '500' }}>{label}</Text>
        {picker ?
          <Picker
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
            style={{
              backgroundColor: '#D1D6FF',
              paddingLeft: 4,
              borderRadius: 10,
              height: 35,
              color: '#707070'
            }}
          >
            <Picker.Item label="Select" color="black" value="none" />
            <Picker.Item label="Example 1" color="black" value="ex1" />
            <Picker.Item label="Example 2" color="black" value="ex2" />
            <Picker.Item label="Example 3" color="black" value="ex3" />
          </Picker>
          :
          <TextInput
            placeholder={placeholder}
            style={styles.textInputStyle}
            placeholderTextColor="#707070"
            value={value}
            onChangeText={(txt) => setValue(txt)}
          />
        }

      </View>
    )
  }

  return (
    <View behavior="padding" style={styles.container}>
      <StatusBar backgroundColor="transparent" style="light" />

      <View style={styles.topHeader}>
        <View style={styles.topHeaderTop}>
          <TouchableOpacity onPress={() => alert("DRAWER OPENED")}>
            <Image source={require('./assets/Vector.png')} resizeMode="contain" />
          </TouchableOpacity>
          <Image source={require('./assets/WomanTel.png')} resizeMode="contain" />
          <View style={styles.topHeaderTexts}>
            <Text style={styles.topHeaderTitle} >Welcoma Sheela!</Text>
            <Text style={styles.TopHeaderSubtitle} >Check what's up with your schedule...</Text>
          </View>
        </View>
        <View style={styles.topHeaderBot}>
          {TYPES_CERTIFICATES.map((item, index) => {
            const certifiedPressed = typeIndex === index ? { color: '#FFFFFF', borderBottomWidth: 2, borderColor: '#F16600', paddingBottom: 5, paddingHorizontal: 3 } : { color: '#FFFFFF', opacity: 0.6 }
            return (
              <TouchableOpacity key={index} onPress={() => setTypeIndex(index)}>
                <Text style={certifiedPressed}>{item.value}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>

      <View style={styles.certificateOptions}>
        {OPTIONS_CERTIFICATE.map((item, index) => {
          const pressedOption = optionsIndex === index ? { backgroundColor: 'black', width: '100%', height: '100%', borderRadius: 100 } : { backgroundColor: 'transparent' }
          return (
            <TouchableOpacity key={index} style={{ marginLeft: 40 }} onPress={() => setOptionsIndex(index)}>
              <View style={styles.circleCertificate}>
                <View style={pressedOption} />
              </View>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )
        })}
      </View>

      <View style={{ height: 60, marginVertical: 4, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
        <View style={{ height: 30, width: 30, borderRadius: 100, backgroundColor: 'white', borderWidth: 4, borderColor: '#380885' }} />
        <View style={{ width: 40, height: 2, backgroundColor: '#380885' }} />
        <View style={{ height: 30, width: 30, borderRadius: 100, backgroundColor: 'white' }} />
        <View style={{ width: 40, height: 2, backgroundColor: 'white' }} />
        <View style={{ height: 30, width: 30, borderRadius: 100, backgroundColor: 'white' }} />
        <View style={{ width: 40, height: 2, backgroundColor: 'white' }} />
        <View style={{ height: 30, width: 30, borderRadius: 100, backgroundColor: 'white' }} />
        <View style={{ width: 40, height: 2, backgroundColor: 'white' }} />
        <View style={{ height: 30, width: 30, borderRadius: 100, backgroundColor: 'white' }} />
      </View>

      <ScrollView contentContainerStyle={styles.contentScrollView} style={styles.mainScrollView}>

        <View style={{ width: '100%', borderBottomWidth: 1, borderColor: 'lightgray', paddingBottom: 10 }}>
          <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: 'bold' }}>Enter Institution Information</Text>
        </View>

        <View>

          <InformationComponent label="Institution Name" placeholder="Type institution name here..." value={institutionName} setValue={setInstitutionName} />
          <InformationComponent label="Address" placeholder="Type institution address here..." value={address} setValue={setAddress} />

          <View style={styles.rowBetween}>
            <InformationComponent label="City" half value={city} setValue={setCity} />
            <InformationComponent label="Province" half picker value={province} setValue={setProvince} />
          </View>

          <View style={styles.rowBetween}>
            <InformationComponent label="Postal Code" half value={postalCode} setValue={setPpostalCode} />
            <InformationComponent label="Country" half picker value={country} setValue={setCountry} />
          </View>

          <InformationComponent label="Email" placeholder="Type institution email here..." value={email} setValue={setEmail} />

          <View style={styles.rowBetween}>
            <InformationComponent label="Phone" half value={phone} setValue={setPhone} />
            <InformationComponent label="Tax" half picker value={tax} setValue={setTax} />
          </View>
        </View>

        <View style={styles.buttonFinalStep}>
          <TouchableOpacity onPress={() => alert("Go to next step")} style={styles.buttonNext}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Next</Text>
          </TouchableOpacity>
          <Text style={styles.saveForLater} onPress={() => alert("Saved for later")}>Save for later</Text>
        </View>
      </ScrollView>
      <View style={styles.navigationOtions}>
        {BOTTOM_NAVIGATION.map((item, index) => {
          const bottomPressed = index === bottomNavigation ? 'white' : 'gray';
          return (
            <TouchableOpacity style={{ alignItems: 'center', paddingVertical: 3 }} onPress={() => setBottomNavigation(index)}>
              <Image source={item.icon} style={{ tintColor: bottomPressed }} resizeMode="contain" width={20} height={20} />
              <Text style={{ color: bottomPressed, fontSize: 12, opacity: bottomPressed ? 1 : 0.7 }}>{item.label}</Text>
            </TouchableOpacity>
          )
        })}


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  },
  topHeader: {
    height: 200,
    backgroundColor: '#380885',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
  },
  topHeaderTop: {
    marginTop: 40,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: '50%',
  },
  topHeaderTexts: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '70%',
    paddingVertical: 10,
    width: '45%',
    paddingLeft: 8
  },
  topHeaderTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  TopHeaderSubtitle: {
    color: 'white',
    flexWrap: 'wrap',
    fontSize: 14
  },
  topHeaderBot: {
    flexDirection: 'row',
    height: 25,
    width: '75%',
    justifyContent: 'space-between',
  },
  certificateOptions: {
    width: '100%',
    height: 100,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  circleCertificate: {
    borderWidth: 1,
    width: 30,
    alignSelf: 'center',
    borderRadius: 100,
    height: 30,
    padding: 5
  },
  textInputStyle: {
    backgroundColor: '#D1D6FF',
    paddingLeft: 4,
    borderRadius: 5,
    height: 35
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonFinalStep: {
    width: '100%',
    marginTop: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  buttonNext: {
    height: '80%',
    marginRight: 20,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#380885',
    borderRadius: 6
  },
  saveForLater: {
    borderBottomWidth: 1,
    color: '#380885',
    borderColor: '#380885'
  },
  contentScrollView: { minHeight: 650 },
  mainScrollView: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  navigationOtions: {
    width: '100%',
    backgroundColor: '#380885',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 4
  }


});
