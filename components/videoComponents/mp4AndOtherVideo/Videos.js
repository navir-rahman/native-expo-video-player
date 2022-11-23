
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Videosingle from './Videosingle';



export default function Videos() {

    const secondVideo = React.useRef(null)
 
    const [statusSecondVideo, setStatusVideo] = React.useState({});


    const urls =[
      {id:1, uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"},
      {id:2, uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}
    ]
  return (
    <View>
        <ScrollView>
      <Text>Videos</Text>
      {
        urls.map(url=> <Videosingle
          key={url.id}
          url={url.uri}
        />)
      }

      {/* <Video 
        ref={secondVideo}
        style={styles.video}
        source={{uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatusVideo}
      />
      <View style={styles.buttons}>
        <Button title='play from 5s' onPress={()=>secondVideo.current.playFromPositionAsync(50000)} />
        <Button title={statusSecondVideo.isLooping ? "set to not loop" : "set to loop "} onPress={()=>secondVideo.current.setIsLoopingAsync(!status.isLooping)} />
      </View> */}
      </ScrollView>
    </View>
  )
}


  