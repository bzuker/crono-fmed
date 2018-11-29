import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeStack from '../screens/Home';
import MateriasScreen from '../screens/Materias/MateriasScreen';
import UserScreen from '../screens/UserScreen/UserScreen';

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
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} />
  )
};

const UserStack = createStackNavigator(
  {
    User: UserScreen
  },
  { headerMode: 'none' }
);

UserStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  )
};

export default createBottomTabNavigator({
  UserStack,
  HomeStack,
  MateriasStack
});
