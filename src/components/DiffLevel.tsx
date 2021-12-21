import React, { useState } from "react";
import { View, Picker, StyleSheet,Dimensions} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import theme, { Card, Text } from '../theme'
const DiffLevel = () => {
  const [selectedValue, setSelectedValue] = useState("--Select--");



  return (
    <View style={styles.container}>
      
    
    <Picker
      selectedValue={selectedValue}
      style={{color:theme.colors.darkSilver,height:40,width:width1,}}
      onValueChange={(itemValue,) => setSelectedValue(itemValue)}
      mode={'dropdown'}
    >
    <Picker.Item label="Medium" value="Medium" />
    <Picker.Item label="Medium" value="Medium" />
    <Picker.Item label="Medium" value="Medium" />
    <Picker.Item label="Medium" value="Medium" />

    
    </Picker>
  
  </View>
);
}

const width1 = Dimensions.get('window').width -220 ;

const styles = StyleSheet.create({
  container: {
    left:15,
    // flex: 1,
    // paddingTop: 40,
    height:40,
    width:145,
    backgroundColor:'rgba(209, 214, 255, 0.5)',
    borderRadius:10,  
    justifyContent:'center',
   alignContent:'center'
  }
});

export default DiffLevel;