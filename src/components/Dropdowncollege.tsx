import React, { useState } from "react";
import { View, Picker, StyleSheet,} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DropDowncollege = () => {
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
        <Picker.Item label="Semester 1" value="Semester 1" />
        <Picker.Item label="Semester 2" value="Semester 2" />
        <Picker.Item label="Semester 3" value="Semester 3" />
        <Picker.Item label="Semester 4" value="Semester 4" />
        <Picker.Item label="Semester 5" value="Semester 5" />
        <Picker.Item label="Semester 6" value="Semester 6" />
      
       
      </Picker>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    // paddingTop: 40,
    bottom:20,
    height:40,
    width:300,
    backgroundColor:'rgba(209, 214, 255, 0.5)',
    borderRadius:10,
    marginHorizontal:15,
  
    justifyContent:'center',
  }
});

export default DropDowncollege;