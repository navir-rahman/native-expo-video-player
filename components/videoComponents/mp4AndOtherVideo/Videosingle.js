import { StyleSheet, View } from "react-native";
import React from "react";
import { Video } from "expo-av";
import { Button, Card, Layout, Text } from "@ui-kitten/components";

export default function Videosingle({ navigation, route }) {
  const { videoId, urlName } = route.params;
  const [status, setStatus] = React.useState({});
  const video = React.useRef(null);
  return (
    <Layout level="1">
      <Card status="primary">
        <Video
          ref={video}
          style={styles.video}
          source={{ uri: `${videoId}` }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={setStatus}
        />
        <Text>{urlName}</Text>
        <View style={styles.buttons}>
          <Button
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          >
            {status.isPlaying ? "Pause" : "Play"}{" "}
          </Button>
        </View>
      </Card>
    </Layout>
  );
}

const styles = StyleSheet.create({
  video: {
    height: 200,
    alignSelf: "stretch",
  },
  buttons: {
    margin: 16,
  },
});
