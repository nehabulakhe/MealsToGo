import { Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import {CompactRestaurantInfo} from '../restaurant/CompactRestaurantInfo'
import {Spacer} from '../../features/restaurants/components/spacer/spacerComponent'
//import {Text} from '../../features/restaurants/components/typography/text'

const FavoritesWrapper =styled.View`
    padding:10px;
`;

export const FavoritesBar = ({favorites,onNavigate}) => {
  return (
    <FavoritesWrapper>
        <Spacer variant="left.large">
            <Text variant="caption">Favorites</Text>
        </Spacer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {favorites.map((restaurant)=>{
                const key =restaurant.name;
                return(
                    <Spacer key={key} position="left" size="medium">
                        <TouchableOpacity
                        onPress={() =>
                        onNavigate("RestaurantDetail", {
                            restaurant,
                        })
                        }
                    >
                       <CompactRestaurantInfo restaurant={restaurant}/>
                       </TouchableOpacity>
                    </Spacer>
                );
            })}
        </ScrollView>
    </FavoritesWrapper>
  )
}
