import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Title, Content, Text, Left, Right, Icon, Button } from 'native-base';
import NotificationForm from './NotificationForm';

export class AddNotificationScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              icon
              transparent
              style={{ marginLeft: 5 }}
              onPress={_ => this.props.navigation.goBack()}>
              <Icon name="ios-close" style={{ color: '#999' }} />
            </Button>
          </Left>
          <Right>
            <Button small transparent>
              <Text style={{ color: '#03a87c' }}>Crear</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <NotificationForm />
        </Content>
      </Container>
    );
  }
}

export default AddNotificationScreen;
