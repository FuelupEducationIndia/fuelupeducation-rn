import React, { useState } from "react";
import { View, Picker, StyleSheet,} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DropdownClg = () => {
  const [selectedValue, setSelectedValue] = useState("--Select--");
  return (
    <View style={styles.container}>
      
      <Picker
        mode='dropdown'
        selectedValue={selectedValue}
        style={{ height: 50, width: 300}}
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

const styles = StyleSheet.create({
  container: {
    bottom:10,
    // paddingTop: 40,
    
    height:40,
    width:290,
    backgroundColor:'rgba(209, 214, 255, 0.5)',
    borderRadius:10,
    marginHorizontal:20,
  
    justifyContent:'center',
   alignContent:'center'
  }
});


export default DropdownClg;