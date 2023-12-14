import React,{useState, useEffect, useMemo,createContext} from "react";
import {RestaurantRequest,RestaurantTransform} from '././RestaurantService'

export const RestaurantContext= createContext();

export const RestaurantContextProvider=({children})=>{
   const [restaurant,setRestaurant]=useState([]);
   const [isLoading,setIsLoading]=useState(false);
   const [error,setError]=useState(null);

   const retrieveRestaurant=()=>{
    setIsLoading(true);
    setTimeout(()=>{
        RestaurantRequest().then(RestaurantTransform)
        .then((result)=>{
            setIsLoading(false);
            setRestaurant(result);
        })
        .catch((err)=>{
            setIsLoading(false);
            setError(err);
        });
    },2000);
   };

   useEffect(()=>{
        retrieveRestaurant();
   },[]);

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