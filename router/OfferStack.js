import { createStackNavigator } from 'react-navigation';
import OfferScreen from '../src/screens/OfferScreen'
export default OfferStack = createStackNavigator(
    {
        Offer: OfferScreen,
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