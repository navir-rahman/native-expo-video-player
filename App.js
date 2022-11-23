import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Videos from "./components/videoComponents/mp4AndOtherVideo/Videos";
import Youtubes from "./components/videoComponents/youtube/Youtubes";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ScrollView>
        <Videos></Videos>
        {/* <Youtubes></Youtubes> */}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
