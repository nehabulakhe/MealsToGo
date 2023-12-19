import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import {Searchbar} from "react-native-paper"
import {LocationContext} from "../../../services/location/LocationContext"

const SearchContainer =styled.View`
    padding:${(props)=>props.theme.space[2]}
`;

export const Search=()=>{

    const {keyword, search} = useContext(LocationContext)
    const [searchKeyword,setSearchKeyword]=useState(keyword);

    return(
    <SearchContainer>
        <Searchbar 
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
    
