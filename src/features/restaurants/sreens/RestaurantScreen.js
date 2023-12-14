import { StyleSheet,SafeAreaView,View, FlatList,StatusBar } from 'react-native'
import React,{useContext} from 'react'
import { Searchbar,ActivityIndicator } from 'react-native-paper';
import RestaurantInfo from '../components/RestaurantInfoCard';
import {RestaurantContext} from '../../../services/restaurants/RestaurantContext'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const RestaurantScreen = () => {
  
  const {isLoading,error,restaurant} = useContext(RestaurantContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar elevation={2} mode='bar'style={{ borderRadius:10}} placeholder='Search' />
      </View>
      <View style={styles.list}>
      {isLoading && (
        <View style={{position:"absolute",top:"50%",left:"50%"}}>
          <ActivityIndicator animating={true} style={styles.indicator} size={50} color={Colors.blue300} />
        </View>
      )}
      <FlatList
            data={restaurant}
            renderItem={({item})=>{
              return(
                <RestaurantInfo restaurant={item}/>
              )
            } }
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
    },
    indicator:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
  });