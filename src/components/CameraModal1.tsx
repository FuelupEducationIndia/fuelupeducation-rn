import React, { Component } from "react";
import { View,StyleSheet,AppRegistry,Text } from "react-native";
import Camara from 'react-native-camera'

export default class CameraModal extends Component{
  takePicture(){
    const options={}
    this.camera.capture({MediaMetadata:options}).then((data)=>{
      console.log(data)

    }).catch((error)=>{
      console.log(error);
     
    });
  
  }
  render(){
    return(
      <View>
        <Camara ref={(cam)=>{
          this.Camera=cam
        }} aspect={Camara.constants.Aspect.fill}>
          <Text onPress={this.takePicture.bind(this)}/>
        </Camara>
      </View>
    )}
}