import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import {Searchbar} from "react-native-paper"
import {LocationContext} from "../../../services/location/LocationContext"

const SearchContainer =styled.View`
    padding-left:${(props)=>props.theme.space[2]};
    padding-right:${(props)=>props.theme.space[2]};
`;

export const SearchComponent=({isFavoriteToggled,onFavoriteToggle})=>{

    const {keyword, search} = useContext(LocationContext)
    const [searchKeyword,setSearchKeyword]=useState(keyword);
    
    useEffect(()=>{
        setSearchKeyword(keyword);
    },[keyword]);

    return(
    <SearchContainer>
        <Searchbar 
        icon={isFavoriteToggled ? "heart" : "heart-outline"}
        onIconPress={onFavoriteToggle}
        elevation={2} 
        mode='bar'
        style={{ borderRadius:10}} 
        placeholder='Search'
        value={searchKeyword}
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
    
