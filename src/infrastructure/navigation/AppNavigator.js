import { Button, Text } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import { RestaurantNavigator } from './RestaurantNavigator';
import { MapScreen } from '../../features/map/screen/MapScreen';
import { RestaurantContextProvider } from '../../services/restaurants/RestaurantContext';
import { LocationContextProvider } from '../../services/location/LocationContext';
import { FavoritesContextProvider } from '../../services/favourites/FavoritesContext';
import { SettingScreen } from '../../features/settings/screens/SettingScreen';
import { SettingNavigator } from './SettingNavigator';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  
  return (
    <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantContextProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({color, size }) => {
              let iconName;
  
              if (route.name === 'Restaurants') {
                iconName = "md-restaurant"
              } else if (route.name === 'Settings') {
                iconName = "md-settings"
              }
              else if( route.name === 'Map')
              {
                iconName = "md-map"
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
          })}
        >
          <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingNavigator} />
        </Tab.Navigator>
        </RestaurantContextProvider>
        </LocationContextProvider>
        </FavoritesContextProvider>     
  )
}

