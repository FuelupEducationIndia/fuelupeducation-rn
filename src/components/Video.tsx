import React, { Component,useState,useRef ,useEffect} from 'react'
import { View } from 'react-native'

import VideoPlayer from 'react-native-video-player'

const Video=()=>{

    return(
      <View>
      <VideoPlayer 
    video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
    videoWidth={1600}
    videoHeight={1000}
    resizeMode="contain"
    thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
/>
      </View>
    )
 }
export default Video