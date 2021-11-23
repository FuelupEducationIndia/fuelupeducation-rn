import React, { useState } from "react";
import { View, Picker, StyleSheet,Dimensions,Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import theme, { Box, Card,Text } from '../theme'
import DropDownPicker from 'react-native-dropdown-picker'
import MultiChoice from '../assets/svgs/MultiChoice.svg'
import { Item } from "react-native-paper/lib/typescript/components/List/List";

const DropDownMulti = () => {
  const [selectedValue, setSelectedValue] = useState("--Select--");
  const[opertor,setOpertor]=useState()
  return (
    <View style={styles.container}>
   <Picker
       mode='dropdown'
        selectedValue={selectedValue}
        style={{ height: 40, width: 200}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="MultiChoice" value="MultiChoice" />
        <Picker.Item label="DropDown" value="DropDown" />
        <Picker.Item label="Short Answer" value="Short Answer" />
        <Picker.Item label="Paragraph" value="Paragraph" />
        <Picker.Item label="MultiChoice Grid" value="MultiChoice Grid" />
        <Picker.Item label="File Upload" value="File Upload" />

        
      
       
      </Picker>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderStyle:'solid',
    height:40,
    width:200,
    borderRadius:5,
    borderWidth:.5,
    marginHorizontal:45,
    backgroundColor:'white',
    justifyContent:'center',
   alignContent:'center'
  }
});

export default DropDownMulti;