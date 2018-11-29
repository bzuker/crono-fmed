import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import UserScreen from './UserScreen';
import TabBarIcon from '../../components/TabBarIcon';
import PromedioStack from './PromedioScreen/index';

const UserStack = createStackNavigator(
  {
    User: UserScreen,
    Promedio: PromedioStack
  },
  { headerMode: 'none', mode: 'modal' }
);

UserStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person` : 'md-person'}
    />
  )
};

export default UserStack;
