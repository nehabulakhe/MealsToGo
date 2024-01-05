import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack'
import { SettingScreen } from '../../features/settings/screens/SettingScreen';
import {FavoriteScreen} from '../../features/settings/screens/FavoriteScreen';

const SettingStack = createStackNavigator();

export const SettingNavigator=({route,navigation})=>{

    return(
        <SettingStack.Navigator
            
            screenOptions={{
                cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
            }}
        >
        <SettingStack.Screen
            options={{
                header:()=>null,
            }}
            name="Setting"
            component={SettingScreen}
        />
        <SettingStack.Screen
            name="Favorite"
            component={FavoriteScreen}
        />
        </SettingStack.Navigator>
    )
}