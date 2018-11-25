import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '../screens/Auth/AuthLoadingScreen';
import AuthScreen from '../screens/Auth/AuthScreen';
import MainTabNavigator from './MainTabNavigator';

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthScreen,
  App: MainTabNavigator
});
