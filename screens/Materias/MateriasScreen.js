import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  H1
} from 'native-base';
import MateriasList from './MateriasList';
import firebase from '../../src/firebase';

export default class MateriasScreen extends React.Component {
  componentDidMount = () => {
    const { user } = this.props.screenProps;
    this.ref = firebase.database().ref(`users/${user.uid}/materias`);
  };

  toggleSelected = id => {
    const { materias } = this.props.screenProps;
    if (materias.includes(id)) {
      this.ref.child(id).remove();
    } else {
      this.ref.child(id).set(true);
    }
  };

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Materias</Title>
          </Body>
          <Right>
            <Button hasText transparent>
              <Text>OK</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          {/* <H1
            style={{
              fontWeight: '600',
              marginTop: 10,
              marginLeft: 10
            }}>
            Mis materias
          </H1>
          <View
            style={{
              margin: 10,
              borderStyle: 'solid',
              borderBottomColor: 'rgba(0,0,0,.15)',
              borderBottomWidth: 0.5
            }}
          /> */}
          <MateriasList
            selected={this.props.screenProps.materias}
            toggleSelected={this.toggleSelected}
          />
        </Content>
      </Container>
    );
  }
}
