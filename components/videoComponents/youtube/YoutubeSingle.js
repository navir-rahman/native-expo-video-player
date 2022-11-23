import { View, Text } from 'react-native'
import React from 'react'
import YoutubePlayer from "react-native-youtube-iframe";

export default function YoutubeSingle({videoId}) {
  return (
    <View>
              <YoutubePlayer
          height={300}
          videoId={videoId}
        />
    </View>
  )
}