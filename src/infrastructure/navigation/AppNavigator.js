import { Button, Text } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import { RestaurantNavigator } from './RestaurantNavigator';
import { MapScreen } from '../../features/map/screen/MapScreen';
import { SafeArea } from '../../features/restaurants/components/utility/SafeArea';
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';
import { RestaurantContextProvider } from '../../services/restaurants/RestaurantContext';
import { LocationContextProvider } from '../../services/location/LocationContext';
import { FavoritesContextProvider } from '../../services/favourites/FavoritesContext';

const Tab = createBottomTabNavigator();



const Settings =()=>{
  const {onLogout}=useContext(AuthenticationContext);
  return(<SafeArea>
  <Text>Settings</Text>
    <Button title="Logout" onPress={()=>onLogout()}/>
    </SafeArea>
  );
};

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
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
        </RestaurantContextProvider>
        </LocationContextProvider>
        </FavoritesContextProvider>     
  )
}

