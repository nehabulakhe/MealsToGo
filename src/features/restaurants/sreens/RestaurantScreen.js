import { StyleSheet,SafeAreaView,View, FlatList,StatusBar, TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import { Searchbar,ActivityIndicator } from 'react-native-paper';
import RestaurantInfo from '../components/RestaurantInfoCard';
import {RestaurantContext} from '../../../services/restaurants/RestaurantContext'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Search } from '../components/SearchComponent';

export const RestaurantScreen = ({navigation}) => {
  
  const {isLoading,error,restaurant} = useContext(RestaurantContext);

  return (
    <SafeAreaView style={styles.container}>
      <Search  />
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
                <TouchableOpacity 
                onPress={()=> 
                  navigation.navigate("RestaurantDetail",{
                  restaurant: item,
                })
                }
                >
                <RestaurantInfo restaurant={item}/>
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