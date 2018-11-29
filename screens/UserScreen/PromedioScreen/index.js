import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PromedioScreen from './PromedioScreen';
import ChooseMateria from './ChooseMateria';

const PromedioStack = createStackNavigator(
  {
    Promedio: PromedioScreen,
    Materias: ChooseMateria
  },
  { headerMode: 'none' }
);

export default PromedioStack;
