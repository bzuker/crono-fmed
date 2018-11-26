import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '../../src/firebase';
import { Container, Header, Title, Content, Left, Right, Body, Icon, Fab } from 'native-base';
import Notificaciones from './Notificaciones';

export class HomeScreen extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { user } = this.props.screenProps;
    if (!prevProps.screenProps.user && user) {
      this.ref = firebase.database().ref(`users/${user.uid}/notificaciones`);
    }
  };

  deleteNotification = id => {
    console.log(`Deleting ${id}`);
    console.log(this.ref.toString());
    this.ref.child(id).remove();
  };

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Notificaciones</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Notificaciones
            data={this.props.screenProps.notificaciones}
            deleteNotification={this.deleteNotification}
          />
        </Content>
        <Fab
          style={{ backgroundColor: '#03a87c' }}
          position="bottomRight"
          onPress={_ => this.props.navigation.navigate('Add')}>
          <Icon name="ios-add" />
        </Fab>
      </Container>
    );
  }
}

export default HomeScreen;
