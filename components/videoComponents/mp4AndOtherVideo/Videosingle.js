import { Button, StyleSheet, View } from 'react-native';
import React from 'react'
import { Video } from 'expo-av';
export default function Videosingle( {uri}) {
    const [status, setStatus ]= React.useState({});
    const video = React.useRef(null);
  return (
    <View>
      <Video 
        ref={video}
        style={styles.video}
        source={{uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        <Button title='play from 5s' onPress={()=>video.current.playFromPositionAsync(50000)} />
        <Button title={status.isLooping ? "set to not loop" : "set to loop "} onPress={()=>video.current.setIsLoopingAsync(!status.isLooping)} />
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
    video :{
      flex:1,
      height:200,
      alignSelf: 'stretch'
    },
    buttons:{
      margin: 16
    }
  });