import React from 'react'
import { AccountBackground, AccountContainer, AccountCover, AuthButton, Title } from '../components/AccountStyles';
import { Spacer } from '../../restaurants/components/spacer/spacerComponent';
export const AccountScreen = ({navigation}) => {
  return (
    <AccountBackground>
      <AccountCover/>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={()=>navigation.navigate("Login")}
          buttonColor='#2182BD'
          style={{borderRadius:6}}
        >
          Login
        </AuthButton>
        <Spacer size="large">
        <AuthButton
          icon="email"
          mode="contained"
          onPress={()=>navigation.navigate("Register")}
          buttonColor='#2182BD'
          style={{borderRadius:6}}
        >
          Register
        </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
}
