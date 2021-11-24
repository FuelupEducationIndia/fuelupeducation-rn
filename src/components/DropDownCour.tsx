import React, { useState } from "react";
import { View, Picker, StyleSheet,} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DropDownCour = () => {
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
    left:12,
    marginHorizontal:10,
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

export default DropDownCour;