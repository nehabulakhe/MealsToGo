import { mocks} from './mock';
import {camelize} from 'camelize';

export const RestaurantRequest =(location)=>{
    return new Promise((resolve,reject)=>{
        const mock =mocks[location];
        if(!mock){
            reject("Not fount")
        }
        resolve(mock);
    });
};
export const restaurantTransform =({result =[]})=>{
    const mappedResult = result.map((restaurant)=>{
        return{
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily : restaurant.business_status === "CLOSED_TEMPORARILY"
        };
    });
    return camelize(mappedResult);
}
