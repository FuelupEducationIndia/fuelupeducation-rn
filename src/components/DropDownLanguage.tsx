import React, { useState } from "react";
import { View, Picker, StyleSheet,} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DropDownLanguage = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 290}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="--Select--" value="--Select--" />
        <Picker.Item label="English" value="English" />
        <Picker.Item label="Gujarati" value="Gujarati" />
        <Picker.Item label="Hindi" value="Hindi" />
        <Picker.Item label="Russian" value="Russian" />
        <Picker.Item label="Marathi" value="Marathi" />
        <Picker.Item label="Banagali" value="Bangali" />
        <Picker.Item label="Chinese" value="Chinese" />
        <Picker.Item label="Arebian" value="Arebian" />
        <Picker.Item label="Urdu" value="Urdu" />
       
      </Picker>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    // paddingTop: 40,
    top:60,
    height:40,
    width:290,
    borderWidth:.5,
    borderRadius:10,
  
    justifyContent:'center',
   alignContent:'center'
  }
});

export default DropDownLanguage;