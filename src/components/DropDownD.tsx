import React, { useState } from "react";
import { View, Picker, StyleSheet,} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("--Select--");
  return (
    <View style={styles.container}>
      
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="--Select--" value="--Select--" />
        <Picker.Item label="Student Name" value="Student Name" />
       
       
      </Picker>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top:60,
    flex: 1,
    // paddingTop: 40,
    alignItems: "center",
    height:40,
    width:300,
    backgroundColor:'#E5E5E5',
    borderRadius:10,
    marginHorizontal:10,
  
    justifyContent:'center',
    textAlign:'center',
   alignContent:'center'
  }
});

export default App;