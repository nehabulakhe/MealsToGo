import React, { useContext, useState, useEffect } from "react";
import MapView,{MapMarker,Callout} from "react-native-maps";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/LocationContext";
import { RestaurantContext } from '../../../services/restaurants/RestaurantContext'

import { Search } from "../components/Search";
import { MapCallout } from "../components/MapCallout";


export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({navigation}) => {
  
  const { location } = useContext(LocationContext);
  const { restaurant = [] } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);

  const {lng,lat,viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurant.map((restaurant)=>{
          return( <MapMarker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude:restaurant.geometry.location.lat,
              longitude:restaurant.geometry.location.lng,
            }}
          >
            <Callout onPress={()=>navigation.navigate("RestaurantDetail",{restaurant})}>
              <MapCallout restaurant={restaurant}/>
            </Callout>
          </MapMarker>
          );
        })}
      </Map>
    </>
  );
};
