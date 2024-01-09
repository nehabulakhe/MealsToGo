import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { View,Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage" 
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex:1;
`;

const InnerSnap =styled.View`
width: 100%;
height: 100%;
z-index:999;
`;

export const CameraScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const {user}=useContext(AuthenticationContext);

  const snap=async()=>{
    if(cameraRef){
      const photo =await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`,photo.uri);
      navigation.goBack();
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
    >
      <TouchableOpacity onPress={snap}>
        <InnerSnap/>
      </TouchableOpacity>
    </ProfileCamera>
    
  );
};