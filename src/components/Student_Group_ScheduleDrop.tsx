import React, { useState } from "react";
import { View, Picker, StyleSheet,} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Student_Group_Drop = () => {
  const [selectedValue, setSelectedValue] = useState("--Select--");
  return (
    <View style={styles.container}>
      
      <Picker
       mode='dropdown'
        selectedValue={selectedValue}
        style={{ height: 30, width: 200}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
          <Picker.Item label="--Select--" value="--Select--" />
        <Picker.Item label="Group A" value="Group A" />
        <Picker.Item label="Group B" value="Group B" />
        <Picker.Item label="Group C" value="Group C" />
        <Picker.Item label="Group D" value="Group D" />
        <Picker.Item label="Group E" value="Group E" />
        <Picker.Item label="Group F" value="Group F" />
        <Picker.Item label="Group G" value="Group G" />
       
       
      </Picker>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top:5,
    height:40,
    width:200,
    backgroundColor:'rgba(209, 214, 255, 0.5)',
    borderRadius:10,
    right:15,
    justifyContent:'center',
   alignContent:'center'
  }
});

export default Student_Group_Drop;