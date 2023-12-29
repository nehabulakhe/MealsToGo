import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth'; // Import the necessary Firebase services you plan to use

import { theme } from './src/infrastructure/theme';
import { AuthenticationContextProvider } from './src/services/authentication/AuthenticationContext';
import { Navigation } from './src/infrastructure/navigation';

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCkr54FcxnQ3paF7wVqVL9yLwX2kBpXYWg",
  authDomain: "meals-to-go-b1538.firebaseapp.com",
  projectId: "meals-to-go-b1538",
  storageBucket: "meals-to-go-b1538.appspot.com",
  messagingSenderId: "902938657267",
  appId: "1:902938657267:web:70a24e5bda841aa3dc9286"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
              <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
