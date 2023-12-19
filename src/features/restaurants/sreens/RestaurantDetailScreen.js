import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {SafeArea} from '../../../features/restaurants/components/utility/SafeArea';
import RestaurantInfoCard from '../components/RestaurantInfoCard';
import {List} from 'react-native-paper';

export const RestaurantDetailScreen = ({route}) => {
  
  const[breakfastExpanded,setBreakfastExpanded]=useState(false);
  const[lunchExpanded,setLunchExpanded]=useState(false);
  const[dinnerExpanded,setDinnerExpanded]=useState(false);
  const[drinkExpanded,setDrinkExpanded]=useState(false);
  const {restaurant}=route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
      <List.Accordion
        title='BreakFast'
        left={(props) => <List.Icon {...props} icon="bread-slice" />}
        expanded={breakfastExpanded}
        onPress={()=> setBreakfastExpanded(!breakfastExpanded)}
      >
        <List.Item title="Pohe" />
        <List.Item title="Fruit-Salad" />
      </List.Accordion>

      <List.Accordion
        title='Lunch'
        left={(props) => <List.Icon {...props} icon="hamburger" />}
        expanded={lunchExpanded}
        onPress={()=> setLunchExpanded(!lunchExpanded)}
      >
        <List.Item title="Panner" />
        <List.Item title="Mix Veg" />
        <List.Item title="Rajma Chawal" />
        <List.Item title="Biryani" />
      </List.Accordion>

      <List.Accordion
        title='Dinner'
        left={(props) => <List.Icon {...props} icon="food-variant" />}
        expanded={dinnerExpanded}
        onPress={()=> setDinnerExpanded(!dinnerExpanded)}
      >
         <List.Item title="Panner Tikka" />
        <List.Item title="Chicken" />
      </List.Accordion>

      <List.Accordion
        title='Drinks'
        left={(props) => <List.Icon {...props} icon="cup" />}
        expanded={drinkExpanded}
        onPress={()=> setDrinkExpanded(!drinkExpanded)}
      >
         <List.Item title="Mix-Fruit" />
        <List.Item title="Watermelon" />
        <List.Item title="Mango" />
        <List.Item title="Cold Coffee" />
        <List.Item title="Tea" />
        <List.Item title="Hot Coffee" />
      </List.Accordion>
      </ScrollView>
    </SafeArea>
  )
}

