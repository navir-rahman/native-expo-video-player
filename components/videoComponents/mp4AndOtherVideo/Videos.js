import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Button, Layout, Card } from '@ui-kitten/components';
export default function Videos({ navigation }) {
  const secondVideo = React.useRef(null);

  const [urls, setUrls] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://server-for-expo-video.onrender.com/allvideofile`
      );
      const newData = await response.json();
      setUrls(newData);
    };

    fetchData();
  }, []);

  return (
    <Layout level="1">
      <View style={{ backgroundColor: "#ffffff00" }}>
        <ScrollView>
          {urls.map((url) => {
            return (
              <Card status='basic'  key={url._id}>
                          <Button   onPress={()=>navigation.navigate("Videosingle", { videoId: `${url.uri}`,urlName: `${url.name}` })} > {url.name} </Button>
              </Card>
            );
          })}
        </ScrollView>
      </View>
    </Layout>
  );
}