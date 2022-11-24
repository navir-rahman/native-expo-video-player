import { View, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import image from '../../../assets/background.jpg'
import { Button, Layout } from '@ui-kitten/components';


export default function Home({navigation}) {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Layout level='1'>
          <View style={{backgroundColor: "#fbfbfb",}}>
            <Button style={styles.button} onPress={()=>navigation.navigate("youtube")} >
             Youtube
            </Button>
            <Button style={styles.button} onPress={()=>navigation.navigate("Videos")}>
             Other Videos
            </Button>
          </View>
        </Layout>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    button: {
        padding:20,
        margin:10
    }
  });