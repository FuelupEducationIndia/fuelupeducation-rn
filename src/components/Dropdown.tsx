import React, { useState } from "react";
import { View, Picker, StyleSheet,} from "react-native";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Picker
       mode='dropdown'
        selectedValue={selectedValue}
        style={{ height: 50, width: 150,textAlign:'center'}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top:10,
    flex: 1,
    // paddingTop: 40,
    alignItems: "center",
    height:40,
    width:150,
    backgroundColor:'#E5E5E5',
    borderRadius:10,
    marginHorizontal:20,
    justifyContent:'center',
    textAlign:'center',
   alignContent:'center'
  }
});

export default App;