import { createStackNavigator } from 'react-navigation';
import Me from '../src/screens/Me/Me'
export default MeStack = createStackNavigator(
    {
        Me: Me,
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