import { useContext } from 'react';
import styled from 'styled-components/native'
import { SafeArea } from '../../restaurants/components/utility/SafeArea';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext';
import {List, Avatar} from 'react-native-paper'; 
import { Spacer } from '../../restaurants/components/spacer/spacerComponent';
import { Text } from 'react-native';

const SettingsItem=styled(List.Item)`
    padding: ${props=>props.theme.space[3]};
`;

const AvatarContainer=styled.View`
   align-items:center
`;

 export const SettingScreen =({navigation})=>{
    const {onLogout,user}=useContext(AuthenticationContext);
    return(
        <SafeArea>
        <AvatarContainer>
             <Avatar.Icon icon="human" size={180} backgroundColor="#2182BD" />
             <Spacer position="top" size="large" >
                <Text>{user.email}</Text>
             </Spacer>
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