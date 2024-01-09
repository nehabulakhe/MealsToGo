import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack'
import { SettingScreen } from '../../features/settings/screens/SettingScreen';
import {FavoriteScreen} from '../../features/settings/screens/FavoriteScreen';
import { CameraScreen } from '../../features/settings/screens/CameraScreen';

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
         <SettingStack.Screen
            name="Camera"
            component={CameraScreen}
        />
        </SettingStack.Navigator>
    )
}