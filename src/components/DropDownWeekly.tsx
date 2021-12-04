import React, { useState } from "react";
import { View, Picker, StyleSheet,} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DropDownWeekly = () => {
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
        <Picker.Item label="Weekly" value="Weekly" />
        <Picker.Item label="Monthly" value="Monthly" />
       
       
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

export default DropDownWeekly;