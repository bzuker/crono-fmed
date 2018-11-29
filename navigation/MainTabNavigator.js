import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeStack from '../screens/Home';
import UserStack from '../screens/UserScreen';
import MateriasScreen from '../screens/Materias/MateriasScreen';

const MateriasStack = createStackNavigator(
  {
    Materias: MateriasScreen
  },
  {
    headerMode: 'none'
  }
);

MateriasStack.navigationOptions = {
  tabBarLabel: 'Materias',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
    />
  )
};

export default createBottomTabNavigator({
  UserStack,
  HomeStack,
  MateriasStack
});
