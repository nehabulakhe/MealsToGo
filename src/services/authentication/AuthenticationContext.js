import * as firebase from "firebase";
import { createContext,useState } from "react";
import {loginRequest} from './AuthenticationService'

export const AuthenticationContext =createContext();

export const AuthenticationContextProvider =({children})=>{
    
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
    const [user,setUser]=useState(null);

    firebase.auth().onAuthStateChanged((usr) => {
        if (usr) {
          setUser(usr);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      });

    const onLogin=(email,password)=>{
        setIsLoading(true);
        loginRequest(email,password).then((u)=>{
            setUser(u);
            setIsLoading(false);
        }).catch((e)=>{
            setIsLoading(false);
            setError(e.toString());
        }) ;
    };

    const onRegister =(email,password,repeatedPassword)=>{
        setIsLoading(true);
        if(password!== repeatedPassword)
        {
            setError("Error: Password do not match !!")
            return;
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then((u)=>{
                setUser(u);
                setIsLoading(false);
            }).catch((e)=>{
                setIsLoading(false);
                setError(e.toString());
            }) ;
    }

    const onLogout = () => {
        setUser(null);
        firebase.auth().signOut();
      };
    

    return (<AuthenticationContext.Provider
        value={{
            isAuthenticated:!!user,
            user,
            isLoading,
            error,
            onLogin,
            onRegister,
            onLogout
        }}
    >
        {children}
    </AuthenticationContext.Provider>)
}