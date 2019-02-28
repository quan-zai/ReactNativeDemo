import { createStackNavigator } from 'react-navigation';
import Customer from '../src/screens/Customer/Customer'
export default CustomerStack = createStackNavigator(
    {
        Customer: Customer,
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