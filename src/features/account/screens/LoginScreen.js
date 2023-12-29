import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
} from "../components/AccountStyles";
import { Spacer } from "../../restaurants/components/spacer/spacerComponent";
import {Text} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext";

export const LoginScreen = ({navigation}) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading,error } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large">
          {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
            buttonColor='#2182BD'
          style={{borderRadius:6}}
          >
            Login
          </AuthButton>
          ):(
            <ActivityIndicator animating={true} color={Colors.blue300}/>
        )}
        </Spacer>
      </AccountContainer>

      <Spacer size="large">
      <AuthButton
            mode="contained"
            onPress={() => navigation.goBack()}
            buttonColor='#2182BD'
          style={{borderRadius:6}}
          >
            Back
          </AuthButton>
        </Spacer>
    </AccountBackground>
  );
};
