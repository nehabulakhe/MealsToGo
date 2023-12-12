import { StyleSheet,SafeAreaView,View, FlatList,StatusBar } from 'react-native'
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
      <FlatList
            data={[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]}
            renderItem={()=> <RestaurantInfo/>}
            keyExtractor={(item)=>item.name}
            contentContainerStyle={{padding:10}}
          />
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