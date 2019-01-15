import { createStackNavigator } from 'react-navigation';
import CustomerScreen from '../src/screens/Customer/CustomerScreen'
export default CustomerStack = createStackNavigator(
    {
        Customer: CustomerScreen,
    },
    {
        initialRouteName: 'Customer',
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