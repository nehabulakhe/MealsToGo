import { createStackNavigator,TransitionPresets } from '@react-navigation/stack'
import React from 'react';
import {RestaurantScreen} from "../../features/restaurants/sreens/RestaurantScreen"
import { Text } from 'react-native';
import {RestaurantDetailScreen} from "../../features/restaurants/sreens/RestaurantDetailScreen"

const RestaurantStack =createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
     screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
     }}
    >
        <RestaurantStack.Screen
            name="RestaurantScreen"
            component={RestaurantScreen}
            options={{
              headerMode:'none',
            }}
        />
        <RestaurantStack.Screen
            name="RestaurantDetail"
            component={RestaurantDetailScreen}
        />
    </RestaurantStack.Navigator>
  )
}
