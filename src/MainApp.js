import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import firebase from './firebase';
import MainTabNavigator from '../navigation/MainTabNavigator';

export class MainApp extends Component {
  static router = MainTabNavigator.router;

  state = {
    user: null,
    materias: [],
    notificaciones: []
  };

  componentDidMount = async () => {
    const userInString = await AsyncStorage.getItem('user');
    const user = JSON.parse(userInString);
    this.setState({ user });
    this._setUpRefs(user.uid);
  };

  componentWillUnmount = () => {
    this.materiasRef.off();
    this.notifRef.off();
  };

  _setUpRefs = uid => {
    this.materiasRef = firebase.database().ref(`users/${uid}/materias`);
    this.notifRef = firebase.database().ref(`users/${uid}/notificaciones`);
    this.materiasRef.on('value', this._onMateriasChange);
    this.notifRef.on('value', this._onNotifChange);
  };

  _onMateriasChange = snapshot => {
    console.log('materias changed:', { snapshot });
    let materias = [];
    snapshot.forEach(m => {
      materias.push(m.key);
    });
    this.setState({ materias });
  };

  _onNotifChange = snapshot => {
    console.log('notifs', snapshot);
    let notificaciones = [];
    snapshot.forEach(n => {
      console.log('val', n.val());
      notificaciones.push({ ...n.val(), id: n.key });
    });
    this.setState({ notificaciones });
  };

  render() {
    return <MainTabNavigator screenProps={{ ...this.state }} navigation={this.props.navigation} />;
  }
}

export default MainApp;
