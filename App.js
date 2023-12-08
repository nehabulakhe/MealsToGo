import {StatusBar} from 'react-native';
import RestaurantScreen from './src/features/restaurants/sreens/RestaurantScreen';
import {ThemeProvider} from 'styled-components/native'
import {theme} from "./src/infrastructure/theme"

export default function App() {
  
  return (
    <>
    <ThemeProvider theme={theme}>
    <RestaurantScreen />
    </ThemeProvider>
    <StatusBar style="auto"/>
    </>
  );
}


