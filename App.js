import {StatusBar,Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from "./src/infrastructure/theme";
import { AppNavigator } from './src/infrastructure/navigation/AppNavigator';
import {RestaurantContextProvider} from './src/services/restaurants/RestaurantContext'
import {LocationContextProvider} from './src/services/location/LocationContext'
import {FavoritesContextProvider} from './src/services/favourites/FavoritesContext'

export default function App() {
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
           <AppNavigator/> 
        </RestaurantContextProvider>
      </LocationContextProvider>
      </FavoritesContextProvider>
    </ThemeProvider>
    <StatusBar style="auto"/>
    </>
  );
}


