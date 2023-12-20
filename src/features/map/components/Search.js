import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import {Searchbar} from "react-native-paper"
import {LocationContext} from "../../../services/location/LocationContext"

const SearchContainer =styled.View`
    padding:${(props)=>props.theme.space[2]};
    position:absolute;
    z-index:999;
    top:40px;
    width:100%;
`;

export const Search=()=>{

    const {keyword, search} = useContext(LocationContext)
    const [searchKeyword,setSearchKeyword]=useState(keyword);
        
    useEffect(()=>{
            setSearchKeyword(keyword);
        },[keyword]);

    return(
    <SearchContainer>
        <Searchbar 
        elevation={2} 
        mode='bar'
        style={{ borderRadius:10}} 
        placeholder='Search for a Location'
        value={searchKeyword}
        icon="map"
        onSubmitEditing={()=>{
            search(searchKeyword);
        }}
        onChangeText={(text)=>{
            setSearchKeyword(text)
        }}
        />
    </SearchContainer>
    );
};
    
