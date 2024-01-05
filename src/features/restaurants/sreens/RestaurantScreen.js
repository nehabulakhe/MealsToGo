import { StyleSheet,SafeAreaView,View, FlatList,StatusBar, TouchableOpacity } from 'react-native'
import React,{useContext, useState} from 'react'
import {ActivityIndicator } from 'react-native-paper';
import RestaurantInfo from '../components/RestaurantInfoCard';
import {RestaurantContext} from '../../../services/restaurants/RestaurantContext'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SearchComponent } from '../components/SearchComponent';
import {FavoritesBar} from '../../../components/favorites/FavoritesBar';
import {FavoritesContext} from '../../../services/favourites/FavoritesContext'
import {FadeInView} from '../../../components/animations/FadeAnimation'

export const RestaurantScreen = ({navigation}) => {
  
  const {isLoading,error,restaurant} = useContext(RestaurantContext);
  const {favorites} = useContext(FavoritesContext);
  const [isToggled,setIsToggled]=useState(false);
  
  return (
   
    <SafeAreaView style={styles.container}>
      <SearchComponent 
      isFavoriteToggled={isToggled}
      onFavoriteToggle={()=>setIsToggled(!isToggled)} 
      />
      <View style={styles.list}>
      {isLoading && (
        <View style={{position:"absolute",top:"50%",left:"50%"}}>
          <ActivityIndicator animating={true} style={styles.indicator} size={50} color={Colors.blue300} />
        </View>
      )}
      {isToggled && (
      <FavoritesBar favorites={favorites} 
        onNavigate={navigation.navigate}
      />
      )}
      
      <FlatList
            data={restaurant}
            renderItem={({item})=>{
              return(
                <TouchableOpacity 
                onPress={()=> 
                  navigation.navigate("RestaurantDetail",{
                  restaurant: item,
                })
                }
                >
                <FadeInView>
                <RestaurantInfo restaurant={item}/>
                </FadeInView>
                </TouchableOpacity>
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
      marginBottom:10
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