import { createStackNavigator } from 'react-navigation';
import Offer from '../src/screens/Offer/Offer'
export default OfferStack = createStackNavigator(
    {
        Offer: Offer,
    },
    {
        initialRouteName: 'Offer',
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