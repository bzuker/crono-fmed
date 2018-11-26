import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '../screens/Auth/AuthLoadingScreen';
import AuthScreen from '../screens/Auth/AuthScreen';
import MainTabNavigator from './MainTabNavigator';
import MainApp from '../src/MainApp';

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthScreen,
  App: MainApp
});
