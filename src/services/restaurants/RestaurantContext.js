import React,{useState, useEffect, useMemo,createContext, useContext} from "react";
import {RestaurantRequest,RestaurantTransform} from '././RestaurantService'
import { LocationContext } from "../location/LocationContext";

export const RestaurantContext= createContext();

export const RestaurantContextProvider=({children})=>{
   const [restaurant,setRestaurant]=useState([]);
   const [isLoading,setIsLoading]=useState(false);
   const [error,setError]=useState(null);
   const {location} =useContext(LocationContext);

   const retrieveRestaurant=(loc)=>{
    setIsLoading(true);
    setRestaurant([]);
    setTimeout(()=>{
        RestaurantRequest(loc).then(RestaurantTransform)
        .then((results)=>{
            setIsLoading(false);
            setRestaurant(results);
        })
        .catch((err)=>{
            setIsLoading(false);
            setError(err);
        });
    },2000);
   };

   useEffect(()=>{
    if(location){
        const locationString =`${location.lat},${location.lng}`;
        retrieveRestaurant(locationString);
    }
   },[location]);

    return(
    <RestaurantContext.Provider
        value={{
            restaurant,
            isLoading,
            error,
        }}
    >
    {children}
    </RestaurantContext.Provider >
   )
}