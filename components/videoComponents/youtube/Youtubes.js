import React, { useState, useCallback } from "react";
import { Button, View, Alert } from "react-native";

import YoutubeSingle from "./YoutubeSingle";

export default function Youtubes() {
    const videoIDS =[
        {id:1, uri: "iee2TATGMyI"},
        {id:2, uri: "iee2TATGMyI"}
      ]
  
    return (
      <View>

        {
            videoIDS.map(video=><YoutubeSingle
                key={video.id}
                videoId={video.uri}
                />)
        }
       
      </View>
    );
}


