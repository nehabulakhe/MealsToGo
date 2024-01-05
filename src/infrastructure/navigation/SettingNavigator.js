import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack'
import { SettingScreen } from '../../features/settings/screens/SettingScreen';
import { Favorite } from '../../components/favorites/FavoriteComponent';

const SettingStack = createStackNavigator();

export const SettingNavigator=({route,navigation})=>{

    return(
        <SettingStack.Navigator
            headerMode="screen"
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
            component={()=>null}
        />
        </SettingStack.Navigator>
    )
}