import { StyleSheet,SafeAreaView,View, Text,StatusBar } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/RestaurantInfoCard';

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar elevation={2} mode='bar'style={{ borderRadius:10}} placeholder='Search' />
      </View>
      <View style={styles.list}>
          <RestaurantInfo/>
      </View>
      
    </SafeAreaView>
  )
}

export default RestaurantScreen

const styles = StyleSheet.create({
    container: {
     flex:1,
      marginTop:StatusBar.currentHeight,
    },
    search: {
      padding: 16,
    },
    list:{
    
      flexGrow:1,
      padding:16
    }
  });