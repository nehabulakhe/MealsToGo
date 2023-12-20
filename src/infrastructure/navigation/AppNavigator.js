import { Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import { RestaurantNavigator } from './RestaurantNavigator';
import { MapScreen } from '../../features/map/screen/MapScreen';


const Tab = createBottomTabNavigator();

const Settings =()=> <Text>Settings</Text>

export const AppNavigator = () => {
  return (
    <NavigationContainer >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({color, size }) => {
              let iconName;
  
              if (route.name === 'RestaurantScreen') {
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
          <Tab.Screen name="RestaurantScreen" component={RestaurantNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

