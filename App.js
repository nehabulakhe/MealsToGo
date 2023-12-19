import {StatusBar,Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from "./src/infrastructure/theme";
import { AppNavigator } from './src/infrastructure/navigation/AppNavigator';
import {RestaurantContextProvider} from './src/services/restaurants/RestaurantContext'
import {LocationContextProvider} from './src/services/location/LocationContext'


export default function App() {
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantContextProvider>
           <AppNavigator/> 
        </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
    <StatusBar style="auto"/>
    </>
  );
}


