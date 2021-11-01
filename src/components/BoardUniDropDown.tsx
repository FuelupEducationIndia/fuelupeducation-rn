import React, { useState } from "react";
import { View, Picker, StyleSheet,Dimensions} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("--Select--");
  return (
    <View style={styles.container}>
      
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: width}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="--Select--" value="--Select--" />
        <Picker.Item label="Rajasthan" value="Rajasthan" />
        <Picker.Item label="Rajkot" value="Rajkot" />
        <Picker.Item label="Mumbai" value="Mumbai" />
        <Picker.Item label="Delhi" value="Delhi" />
        <Picker.Item label="Ahamdabad" value="Ahamdabad" />
        <Picker.Item label="Surat" value="Surat" />
        <Picker.Item label="Baroda" value="Baroda" />
        <Picker.Item label="Rajasthan" value="Rajasthan" />
        <Picker.Item label="Rajkot" value="Rajkot" />
        <Picker.Item label="Mumbai" value="Mumbai" />
       
      </Picker>
    
    </View>
  );
}
const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  container: {
marginVertical:5,
    // paddingTop: 40,
    height:40,
    width:width,
    backgroundColor:'rgba(209, 214, 255, 0.5)',
    borderRadius:10,
    justifyContent:'center',
   alignContent:'center'
  }
});

export default App;