import React, { useState } from "react";
import { View, Picker, StyleSheet,} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DropDownCourAtt = () => {
  const [selectedValue, setSelectedValue] = useState("--Select--");
  return (
    <View style={styles.container}>
      
      <Picker
       mode='dropdown'
        selectedValue={selectedValue}
        style={{ height: 50, width: 295}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="--Select--" value="--Select--" />
        <Picker.Item label="BCA" value="BCA" />
        <Picker.Item label="BBA" value="BBA" />
        <Picker.Item label="B Com." value="B Com." />
        <Picker.Item label="MCA" value="MCA" />
        <Picker.Item label="BSCIT" value="BSCIT" />
        <Picker.Item label="MSCIT" value="MSCIT" />
        <Picker.Item label="BA" value="BA" />
        <Picker.Item label="MA" value="MA" />
        <Picker.Item label="M Com." value="M Com." />
      
       
      </Picker>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:20,
    top:2,
    // paddingTop: 40,
    bottom:10,
    height:40,
    width:295,
    borderRadius:5,
    borderWidth:1,
    justifyContent:'center',
   alignContent:'center'
  }
});

export default DropDownCourAtt;