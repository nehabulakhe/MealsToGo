import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth'; // Import the necessary Firebase services you plan to use

import { theme } from './src/infrastructure/theme';
import { AppNavigator } from './src/infrastructure/navigation/AppNavigator';
import { RestaurantContextProvider } from './src/services/restaurants/RestaurantContext';
import { LocationContextProvider } from './src/services/location/LocationContext';
import { FavoritesContextProvider } from './src/services/favourites/FavoritesContext';

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

  const [isAuthenticated,setIsAuthenticated]=useState(false);
  
  useEffect(()=>{
    setTimeout(()=>{
      firebase
      .auth()
      .signInWithEmailAndPassword("neha@gmail.com","neha123")
      .then((user)=>{
        console.log(user);
        setIsAuthenticated(true);
      }).catch((e)=>{
        console.log(e);
      });
    },2000);
  },[]);

    if(!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <AppNavigator />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
