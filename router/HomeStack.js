import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../src/screens/HomeScreen'
export default HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
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