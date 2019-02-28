import { createStackNavigator } from 'react-navigation';
import Home from '../src/screens/Home/Home'
import Basic from '../src/screens/Home/Basic'
import Gesture from '../src/screens/Home/Gesture'
import Animation from '../src/screens/Home/Animation'
import NativeiOS from '../src/screens/Home/NativeiOS'
import NativeAndroid from '../src/screens/Home/NativeAndroid'
import PlatformCode from '../src/screens/Home/PlatformCode'
import FlatListTest from '../src/screens/Home/FlatListTest'

import SearchBar from '../src/screens/Home/SearchBar'
export default HomeStack = createStackNavigator(
    {
        Home,
        Basic,
        Gesture,
        Animation,
        NativeiOS,
        NativeAndroid,
        PlatformCode,
        FlatListTest,
        SearchBar
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);