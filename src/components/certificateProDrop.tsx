import React, { useState } from "react";
import { View, Picker, StyleSheet,Dimensions} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const certificateProDrop = () => {
  const [selectedValue, setSelectedValue] = useState("-Select-");
  return (
    <View style={styles.container}>
      
      <Picker
       mode='dropdown'
        selectedValue={selectedValue}
        style={{ height: 50, width:width}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="-Select-" value="-Select-" />
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
const width = Dimensions.get('window').width -235;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 40,
    
    height:40,
    width:width,
    backgroundColor:'rgba(209, 214, 255, 0.5)',
    borderRadius:10,
    top:4,
    justifyContent:'center',
   alignContent:'center'
  }
});

export default certificateProDrop;