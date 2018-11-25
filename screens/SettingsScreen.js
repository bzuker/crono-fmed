import React from 'react';
import { View, Button, AsyncStorage } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Configuración'
  };

  signOut = async _ => {
    await AsyncStorage.removeItem('userToken');
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View>
        <Button onPress={this.signOut} title="Sign out" />
      </View>
    );
  }
}
