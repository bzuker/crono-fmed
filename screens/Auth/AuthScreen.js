import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text
} from 'native-base';
import firebase from '../../src/firebase';
import registerUserToken from '../../notifications/registerUserToken';

export class AuthScreen extends Component {
  static navigationOptions = {
    title: 'Please sign in'
  };

  state = {
    mail: '',
    pwd: ''
  };

  _createUserAsync = async _ => {
    const { mail, pwd } = this.state;
    try {
      const creds = await firebase
        .auth()
        .createUserWithEmailAndPassword(mail, pwd);
      this._onSignInSuccess(creds);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        this._signInAsync(mail, pwd);
      }
    }
  };

  _signInAsync = async () => {
    const { mail, pwd } = this.state;
    try {
      const creds = await firebase.auth().signInWithEmailAndPassword(mail, pwd);
      this._onSignInSuccess(creds);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  _onSignInSuccess = async creds => {
    await AsyncStorage.setItem('user', JSON.stringify(creds.user));
    registerUserToken(creds.user);
    this.props.navigation.navigate('App');
  };

  _signInAnonymousAsync = async _ => {
    firebase
      .auth()
      .signInAnonymously()
      .then(async creds => {
        console.log(creds);
        this._onSignInSuccess(creds);
      })
      .catch(error => {
        alert(JSON.stringify(error));
      });
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Crono-Fmed</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Mail</Label>
              <Input
                value={this.state.mail}
                onChangeText={mail => this.setState({ mail })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Contraseña</Label>
              <Input
                value={this.state.pwd}
                secureTextEntry={true}
                onChangeText={pwd => this.setState({ pwd })}
              />
            </Item>

            <Button
              full
              primary
              style={{ paddingBottom: 4 }}
              onPress={this._createUserAsync}
            >
              <Text> Crear </Text>
            </Button>

            <Button
              full
              warning
              style={{ paddingBottom: 4 }}
              onPress={this._signInAnonymousAsync}
            >
              <Text> Ingreso Anónimo </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default AuthScreen;
