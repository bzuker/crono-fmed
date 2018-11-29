import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import firebase from './firebase';
import MainTabNavigator from '../navigation/MainTabNavigator';

export class MainApp extends Component {
  static router = MainTabNavigator.router;

  state = {
    user: null,
    materias: [],
    eventos: []
  };

  componentDidMount = async () => {
    const userInString = await AsyncStorage.getItem('user');
    const user = JSON.parse(userInString);
    this.setState({ user });
    this._setUpRefs(user.uid);
  };

  componentWillUnmount = () => {
    this.materiasRef.off();
    this.eventosRef.off();
  };

  _setUpRefs = uid => {
    this.materiasRef = firebase.database().ref(`users/${uid}/materias`);
    this.eventosRef = firebase.database().ref(`eventos/${uid}`);
    this.materiasRef.on('value', this._onMateriasChange);
    this.eventosRef.on('value', this._onEventosChange);
  };

  _onMateriasChange = snapshot => {
    console.log('materias changed:', { snapshot });
    let materias = [];
    snapshot.forEach(m => {
      materias.push(m.key);
    });
    this.setState({ materias });
  };

  _onEventosChange = snapshot => {
    console.log('eventos', snapshot);
    let eventos = [];
    snapshot.forEach(n => {
      console.log('val', n.val());
      eventos.push({ ...n.val(), id: n.key });
    });
    this.setState({ eventos });
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
