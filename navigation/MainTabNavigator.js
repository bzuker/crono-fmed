import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeStack from '../screens/Home';
import MateriasScreen from '../screens/Materias/MateriasScreen';
import SettingsScreen from '../screens/SettingsScreen';

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

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  MateriasStack,
  SettingsStack
});
