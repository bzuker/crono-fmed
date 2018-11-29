import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';

export class PromedioScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              icon
              transparent
              style={{ marginLeft: 5 }}
              onPress={_ => this.props.navigation.navigate('User')}
            >
              <Icon name="ios-close" style={{ color: '#999' }} />
            </Button>
          </Left>
          <Body>
            <Title>Promedio</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button
            full
            onPress={_ => this.props.navigation.navigate('Materias')}
          >
            <Text>Click!</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default PromedioScreen;
