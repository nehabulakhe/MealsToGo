import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const FavoritesContext =createContext();

export const FavoritesContextProvider = ({children}) => {
  
    const [favorites,setFavorites]=useState([]);
    const saveFav = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem("@favorites",jsonValue);
        } catch (e) {
          console.log(e);
        }
      };

      const loadFav = async () => {
        try {
          const value = await AsyncStorage.getItem('@favorites');
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
        loadFav();
    },[]);

    useEffect(()=>{
        saveFav(favorites);
    },[favorites]);

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
