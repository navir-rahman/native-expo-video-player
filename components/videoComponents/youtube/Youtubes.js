import React, { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Layout, Card } from "@ui-kitten/components";

export default function Youtubes({ navigation }) {
  const [videoIDS, setvideoIDS] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://server-for-expo-video.onrender.com/allyoutube`
      );
      const newData = await response.json();
      setvideoIDS(newData);
    };

    fetchData();
  }, []);

  return (
    <Layout level="1">
      <View style={{ backgroundColor: "#ffffff00" }}>
        <ScrollView>
          {videoIDS.map((video) => {
            return (
              <Card status="basic" key={video._id}>
                <Button
                  style={styles.button}
                  onPress={() =>
                    navigation.navigate("youtubePlay", {
                      videoId: `${video.youtube_id}`,
                      videoName: `${video.name}`,
                    })
                  }
                >
                  {video.name}
                </Button>
              </Card>
            );
          })}
        </ScrollView>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    padding: 20,
    marginTop: 10,
  },
});
