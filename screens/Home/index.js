import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import AddNotificationScreen from './AddNotification/AddNotificationScreen';
import TabBarIcon from '../../components/TabBarIcon';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Add: AddNotificationScreen
  },
  { headerMode: 'none', mode: 'modal' }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-home` : 'md-information-circle'}
    />
  )
};

export default HomeStack;
