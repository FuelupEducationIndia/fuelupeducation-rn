import React, { useState } from "react";
import { View, Picker, StyleSheet,} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DropDownCourse2 = () => {
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
        <Picker.Item label="Computer Methods" value="comp_methods" />
        <Picker.Item label="Learning By Lacture" value="Learning by lacture" />
        <Picker.Item label="Design Thinking" value="design_thinking" />
        <Picker.Item label="Systems & Signals" value="System & Signals" />
        <Picker.Item label="Problem Solving" value="Problem Solving" />
        <Picker.Item label="Presentation" value="Presentation" />
        <Picker.Item label="Lab Techniques" value="Lab Techniques" />
       
       
      </Picker>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 40,
    bottom:25,
    height:40,
    width:300,
    backgroundColor:'rgba(209, 214, 255, 0.5)',
    borderRadius:10,
    marginHorizontal:30,
  
    justifyContent:'center',
   alignContent:'center'
  }
});

export default DropDownCourse2;