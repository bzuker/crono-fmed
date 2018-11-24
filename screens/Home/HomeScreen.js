import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '../../src/firebase';
import { Container, Header, Title, Content, Left, Right, Body, Icon, Fab } from 'native-base';
import Notificaciones from './Notificaciones';

export class HomeScreen extends Component {
  componentDidMount = () => {
    firebase
      .database()
      .ref('brian')
      .set({ apellido: 'Gomez' });
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
          <Notificaciones />
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
