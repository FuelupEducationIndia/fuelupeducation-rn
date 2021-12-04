import React from "react";
import { View } from "react-native";
import DrawerIcon from '../../assets/svgs/drawer-icon.svg'
const MainTabScreen=()=>{
  return(
    <View style={{backgroundColor:'black'}}>
      <DrawerIcon onPress ={ ( ) => this.props.navigation.openDrawer()} />
    </View>
  )
}
export default MainTabScreen