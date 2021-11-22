import React, { useState } from "react";
import { View, Picker, StyleSheet,} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DropDownAssType = () => {
  const [selectedValue, setSelectedValue] = useState("--Select--");
  return (
    <View style={styles.container}>
      
      <Picker
       mode='dropdown'
        selectedValue={selectedValue}
        style={{ height: 30, width: 290}}
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
    top:5,
    // flex: 1,
    
    height:40,
    width:290,
    backgroundColor:'rgba(209, 214, 255, 0.5)',
    borderRadius:10,
    marginHorizontal:30,
  
    justifyContent:'center',
   alignContent:'center'
  }
});

export default DropDownAssType;