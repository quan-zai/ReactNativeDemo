import React from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './router/HomeStack';
import MeStack from './router/MeStack';
import OfferStack from './router/OfferStack';
import CustomerStack from './router/CustomerStack';
import HomeIconWithBadge from './components/IconWithBadge'

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Offer: OfferStack,
    Customer: CustomerStack,
    Me: MeStack,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          IconComponent = HomeIconWithBadge; 
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(AppTabNavigator);
