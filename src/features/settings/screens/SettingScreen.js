import { useContext,useState,useCallback } from 'react';
import styled from 'styled-components/native'
import { SafeArea } from '../../restaurants/components/utility/SafeArea';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext';
import {List, Avatar} from 'react-native-paper'; 
import { Spacer } from '../../restaurants/components/spacer/spacerComponent';
import { Text, TouchableOpacity } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage" 

const SettingsItem=styled(List.Item)`
    padding: ${props=>props.theme.space[3]};
`;

const AvatarContainer=styled.View`
   align-items:center
`;

 export const SettingScreen =({navigation})=>{
    const {onLogout,user}=useContext(AuthenticationContext);
    
    const [photo, setPhoto] = useState(null);

    const getProfilePicture = async (currentUser) => {
      const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
      setPhoto(photoUri);
    };

    useFocusEffect(
      useCallback(() => {
        getProfilePicture(user);
      }, [user])
    );

    return(
        <SafeArea>
        <AvatarContainer>
          <TouchableOpacity onPress={()=>navigation.navigate("Camera")}>
             {!photo && (<Avatar.Icon icon="human" size={180} backgroundColor="#2182BD" />)}
             {photo && (<Avatar.Image source={{uri:photo}} size={180} backgroundColor="#2182BD" />)}
             
             <Spacer position="top" size="large" >
                <Text>{user.email}</Text>
             </Spacer>
             </TouchableOpacity>
        </AvatarContainer>
        
        <List.Section>
        <SettingsItem
          
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorite")}
        />
        <SettingsItem
          
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
        </SafeArea>
    );
  };