import {StatusBar,Text} from 'react-native';
import RestaurantScreen from './src/features/restaurants/sreens/RestaurantScreen';
import {ThemeProvider} from 'styled-components/native'
import {theme} from "./src/infrastructure/theme"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'
import {RestaurantContextProvider} from './src/services/restaurants/RestaurantContext'

const Tab = createBottomTabNavigator();

const Map =()=> <Text>Map</Text>
const Settings =()=> <Text>Settings</Text>

export default function App() {
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <RestaurantContextProvider>
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
          <Tab.Screen headerShown={false} name="RestaurantScreen" component={RestaurantScreen} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    </NavigationContainer>
    </RestaurantContextProvider>
    </ThemeProvider>
    <StatusBar style="auto"/>
    </>
  );
}


