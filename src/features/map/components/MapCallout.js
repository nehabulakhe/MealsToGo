import { View, Text, Pressable } from 'react-native'
import React from 'react'

import {CompactRestaurantInfo} from '../../../components/restaurant/CompactRestaurantInfo'



export const MapCallout = ({restaurant}) => {
  return (
    
    <CompactRestaurantInfo
        restaurant={restaurant} isMap
    />   
  )
}

