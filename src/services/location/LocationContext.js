import React,{createContext, useEffect, useState } from "react";
import  {locationRequest,locationTransform} from './LocationService';

export const LocationContext =React.createContext();

export const LocationContextProvider =({children})=>{

    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
    const [location,setLocation]=useState(null);
    const [keyword,setKeyword]=useState("San Francisco");

    const onSearch=(searchKeyword)=>{
        setIsLoading(true);
        setKeyword(searchKeyword);
    };

    useEffect(()=>{
        if(!keyword.length){
            return;
        }
        locationRequest(keyword.toLowerCase())
        .then(locationTransform)
            .then((result)=>{
                setIsLoading(false)
                setLocation(result)
            }) 
            .catch((err)=>{
                setIsLoading(false)
                setError(err)
            });
    },[keyword])
    
    return(
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                search:onSearch,
                keyword,
                location
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}