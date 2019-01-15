import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../src/screens/Home/HomeScreen'
import SearchBarScreen from '../src/screens/Home/SearchBarScreen'
export default HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        SearchBar: SearchBarScreen
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