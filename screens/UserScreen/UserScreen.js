import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage, Modal } from 'react-native';
import firebase from '../../src/firebase';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Body,
  Card,
  CardItem,
  Icon,
  Text,
  Separator,
  List,
  ListItem
} from 'native-base';

const styles = StyleSheet.create({
  icon: {
    fontSize: 37,
    color: '#03a87c',
    borderRadius: 4,
    borderColor: '#03a87c',
    borderWidth: 1,
    paddingTop: 4,
    paddingRight: 10,
    paddingLeft: 11,
    paddingBottom: 2,
    marginBottom: 5
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export class UserScreen extends Component {
  state = {
    modalVisible: false
  };

  signOut = async _ => {
    await AsyncStorage.removeItem('userToken');
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Perfil</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card transparent>
            <CardItem button>
              <Body style={styles.card}>
                <Icon name="ios-person" style={styles.icon} />
                <Text>brianzuker@gmail.com</Text>
              </Body>
            </CardItem>
          </Card>
          <Separator>{/* <Text></Text> */}</Separator>
          <List>
            <ListItem button onPress={_ => this.props.navigation.navigate('Promedio')}>
              <Left>
                <Text>Promedio</Text>
              </Left>
              <Right>
                <Text note>Calcular</Text>
              </Right>
            </ListItem>
            <ListItem button onPress={this.signOut}>
              <Text>Cerrar Sesión</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default UserScreen;
