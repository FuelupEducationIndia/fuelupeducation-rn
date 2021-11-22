import React, { useState } from "react";
import { View, Picker, StyleSheet,} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DropDownLang = () => {
  const [selectedValue, setSelectedValue] = useState("--Select--");
  return (
    <View style={styles.container}>
      
      <Picker
       mode='dropdown'
        selectedValue={selectedValue}
        style={{ height: 50, width: 130}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="--Select--" value="--Select--" />
        <Picker.Item label="Gujarati" value="Gujarati" />
        <Picker.Item label="English" value="English" />
        <Picker.Item label="Hindi" value="Hindi" />
        <Picker.Item label="Spanish" value="Spanish" />
        <Picker.Item label="French" value="French" />
        <Picker.Item label="ARABIC" value="Arabic" />
        <Picker.Item label="Bangali" value="Bangai" />
        <Picker.Item label="Russian" value="russian" />
      
       
      </Picker>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  marginHorizontal:30,
    flex: 1,
    // paddingTop: 40,
    bottom:10,
    height:40,
    width:130,
    backgroundColor:'rgba(209, 214, 255, 0.5)',
    borderRadius:10,
  
   
  
    justifyContent:'center',
   alignContent:'center'
  }
});

export default DropDownLang;