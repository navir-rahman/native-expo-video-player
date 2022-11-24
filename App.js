import { StatusBar } from "expo-status-bar";
import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Videos from "./components/videoComponents/mp4AndOtherVideo/Videos";
import Videosingle from "./components/videoComponents/mp4AndOtherVideo/Videosingle"; 
import Youtubes from "./components/videoComponents/youtube/Youtubes";
import YoutubeSingle from "./components/videoComponents/youtube/YoutubeSingle"; 
import Home from "./components/pages/HomeScreen/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import image from './assets/background.jpg'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="youtube" component={Youtubes} />
        <Stack.Screen name="youtubePlay" component={YoutubeSingle} />
        <Stack.Screen name="Videos" component={Videos} />
        <Stack.Screen name="Videosingle" component={Videosingle} />

      </Stack.Navigator>
    </NavigationContainer>
    </ImageBackground>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  }
});


{/* <View style={styles.container}>
<Text>Open up App.js to start working on your app!</Text>
<ScrollView>
  <Videos></Videos>
  {/* <Youtubes></Youtubes> */}
// </ScrollView>
// <StatusBar style="auto" />
// </View> */}