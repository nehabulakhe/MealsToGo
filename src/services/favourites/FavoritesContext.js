import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthenticationContext} from "../../services/authentication/AuthenticationContext"

export const FavoritesContext =createContext();

export const FavoritesContextProvider = ({children}) => {
  
    const {user}=useContext(AuthenticationContext);
    const [favorites,setFavorites]=useState([]);
    const saveFav = async (value,uid) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(`@favorites-${uid}`,jsonValue);
        } catch (e) {
          console.log(e);
        }
      };

      const loadFav = async (uid) => {
        try {
          const value = await AsyncStorage.getItem(`@favorites-${uid}`);
          if (value !== null) {
            setFavorites(JSON.parse(value));
          }
        } catch (error) {
          console.log("error loading",e);
        }
      };

    const add=(restaurant)=>{
        setFavorites([...favorites,restaurant]);
    }

    const remove=(restaurant)=>{
        const newFavorites=favorites.filter(
            (x) => x.placeId !== restaurant.placeId
        );
        setFavorites(newFavorites);
    };

    useEffect(()=>{
      if(user){
        loadFav(user.uid);
      }
    },[user]);

    useEffect(()=>{
      if(user){
        saveFav(favorites,user.uid);
      }
    },[favorites,user]);

    return (
    <FavoritesContext.Provider
        value={{
        favorites,
        addToFavorites:add,
        removeFromFavorites:remove,
        }}
    >
        {children}
    </FavoritesContext.Provider>
  )
}
