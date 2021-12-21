{/* <Picker
selectedValue={selectedValue}
style={{ height: 35,backgroundColor:'rgba(209, 214, 255, 0.5)',color:'#380885',fontSize:10,marginVertical:10,borderRadius:15}}
onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
mode={"dropdown"}
>
<Picker.Item label="MO 2021 - Micro Organism" value="MO 2021 - Micro Organism" />
<Picker.Item label="MO 2021 - Micro Organism" value="MO 2021 - Micro Organism" />
</Picker> */}
import React, { useState } from "react";
import { View, Picker, StyleSheet,Dimensions} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DropDownPicC = () => {
  const [selectedValue, setSelectedValue] = useState("--Select--");
  return (
    <View style={styles.container}>
      
      <Picker
       mode='dropdown'
        selectedValue={selectedValue}
        style={{ height: 50, width: width}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="--Select--" value="--Select--" />
        <Picker.Item label="MO 2021-Micro Organism" value="MO 2021-Micro Organism" />
        <Picker.Item label="MO 2021-Micro Organism" value="MO 2021-Micro Organism" />
        
       
      </Picker>
    
    </View>
  );
}

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40,
    height:40,
    width:width,
    backgroundColor:'rgba(209, 214, 255, 0.5)',
    borderRadius:10,
    marginHorizontal:5,
    marginVertical:8,
    justifyContent:'center',
   alignContent:'center'
  }
});

export default  DropDownPicC;