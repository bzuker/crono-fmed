import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import firebase from './firebase';
import MainTabNavigator from '../navigation/MainTabNavigator';

export class MainApp extends Component {
  static router = MainTabNavigator.router;

  state = {
    user: {},
    materias: [],
    notificaciones: []
  };

  componentDidMount = async () => {
    const userInString = await AsyncStorage.getItem('user');
    const user = JSON.parse(userInString);
    this.setState({ user });
    this._setUpRefs(user.uid);
  };

  _setUpRefs = uid => {
    const materiasRef = firebase.database().ref(`users/${uid}/materias`);
    const notifRef = firebase.database().ref(`users/${uid}/notificaciones`);
    materiasRef.on('value', this._onMateriasChange);
    notifRef.on('value', this._onNotifChange);
  };

  _onMateriasChange = snapshot => {
    // console.log('materias changed:', { snapshot });
    let materias = [];
    snapshot.forEach(m => {
      materias.push(m.key);
    });
    this.setState({ materias });
  };

  _onNotifChange = snapshot => {
    console.log('notifs', snapshot);
  };

  render() {
    return (
      <MainTabNavigator
        screenProps={{ ...this.state }}
        navigation={this.props.navigation}
      />
    );
  }
}

export default MainApp;
