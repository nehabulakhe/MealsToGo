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
import { ActivityIndicator } from "react-native-paper";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext";
import { Text } from "react-native";

export const RegisterScreen = ({navigation}) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister,isLoading, error } = useContext(AuthenticationContext);
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
        <Spacer size="large">
          <AuthInput
            label="Repeated Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
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
            icon="email"
            mode="contained"
            onPress={() => onRegister(email, password,repeatedPassword)}
            buttonColor='#2182BD'
            style={{borderRadius:6}}
          >
           Register
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
