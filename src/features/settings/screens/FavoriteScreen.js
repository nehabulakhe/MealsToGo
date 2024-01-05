import { View, Text, FlatList,TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { FavoritesContext } from '../../../services/favourites/FavoritesContext'
import { SafeArea } from '../../restaurants/components/utility/SafeArea'
import styled from 'styled-components/native';
import RestaurantInfoCard from '../../restaurants/components/RestaurantInfoCard';

const NoFavoriteArea =styled(SafeArea)`
    align-items:center;
    justify-content:center;
`;

export const FavoriteScreen = ({navigation}) => {
    const {favorites} =useContext(FavoritesContext);

  return favorites.length ? (
    <SafeArea>
        <FlatList
            style={{padding:15}}
            data={favorites}
            renderItem={({item})=>{
              return(
                <TouchableOpacity 
                onPress={()=> 
                  navigation.navigate("RestaurantDetail",{
                  restaurant: item,
                })
                }
                >
                <RestaurantInfoCard restaurant={item}/>
                </TouchableOpacity>
              )
            } }
            keyExtractor={(item)=>item.name}
            contentContainerStyle={{padding:10}}
          />
    </SafeArea>
  ): (
    <NoFavoriteArea>
        <Text>No Favourites yet !!</Text>
    </NoFavoriteArea>
  );
}
