import { createStackNavigator } from 'react-navigation';
import MeScreen from '../src/screens/MeScreen'
export default MeStack = createStackNavigator(
    {
        Me: MeScreen,
    },
    {
        initialRouteName: 'Me',
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