import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '../../src/firebase';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Body,
  Icon,
  Fab
} from 'native-base';
import Eventos from './Eventos';

export class HomeScreen extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { user } = this.props.screenProps;
    if (!prevProps.screenProps.user && user) {
      this.ref = firebase.database().ref(`eventos/${user.uid}`);
    }
  };

  editEvento = evento => {
    this.props.navigation.navigate('Add', { evento });
  };

  deleteEvento = id => {
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
            <Title>Eventos</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Eventos
            items={this.props.screenProps.eventos}
            editEvento={this.editEvento}
            deleteEvento={this.deleteEvento}
          />
        </Content>
        <Fab
          style={{ backgroundColor: '#03a87c' }}
          position="bottomRight"
          onPress={_ => this.props.navigation.navigate('Add')}
        >
          <Icon name="ios-add" />
        </Fab>
      </Container>
    );
  }
}

export default HomeScreen;
