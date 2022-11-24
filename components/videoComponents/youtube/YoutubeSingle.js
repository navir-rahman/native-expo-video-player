import React, { useCallback, useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { Button, Card, Layout, Text } from "@ui-kitten/components";

export default function YoutubeSingle({ navigation, route }) {
  const { videoId, videoName } = route.params;

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <Layout level="1">
     <Card status='primary'>
        {/* <YoutubePlayer
          height={300}
          videoId={videoId}
        /> */}

        <YoutubePlayer
        
          height={200}
          play={playing}
          videoId={videoId}
          onChangeState={onStateChange}
        />
        <Button onPress={togglePlaying}>{playing ? "pause" : "play"}</Button>

        <Text>{videoName}</Text>
      </Card>
    </Layout>
  );
}

