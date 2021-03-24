import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
export default function App() {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.herder}>
        <Text style={{ color: '#fff', fontSize: 20, }}>Skills.com</Text>
        <Text style={{ color: '#fff', fontSize: 16, }}>Level Up your Skill</Text>
      </View>

      <View style={styles.center}>
        {/*logo*/}
          <Image 
            style={{height:'60%', width:'60%', alignSelf: 'center', marginTop: 40,}}
            source={require('./imgs/books.png')}
          >
          </Image>
      </View>

      <View style={styles.herder}>
        <Text style={{ color: '#fff', fontSize: 20, }}>Develop your Skills</Text>
        <Text style={{ color: '#fff', fontSize: 16, }}>Learn  ipsum is the simple dummy text</Text>
      </View>

      <View style={styles.herder}>
        <Text style={{ color: '#fff', fontSize: 16, marginTop: -20, }}>By Mehran Ali</Text>
      </View>


    </View>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#006FFF',
  },
  herder: {
    alignItems: 'center',
    marginTop: '20%',
  },
  center: {
    marginTop: '20%',
    height: '30%',
    width: '50%',
    borderRadius: 100,
    borderColor: '#fff',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
  foter:{

  },
});