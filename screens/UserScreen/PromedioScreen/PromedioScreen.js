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
  Text,
  List,
  ListItem
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
              onPress={_ => this.props.navigation.navigate('User')}>
              <Icon name="ios-close" style={{ color: '#999' }} />
            </Button>
          </Left>
          <Body>{/* <Title>Promedio</Title> */}</Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem itemDivider style={{ flex: 1, justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 13 }}>Promedio: 9.12</Text>
              <Text style={{ fontSize: 13 }}>Materias: 10</Text>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Bioquímica I</Text>
              </Left>
              <Right>
                <Text note>5</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Bioquímica I</Text>
              </Left>
              <Right>
                <Text note>10</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
        <Footer>
          <FooterTab>
            <Button primary full onPress={_ => this.props.navigation.navigate('Materias')}>
              <Text style={{ color: 'white' }}>Agregar Materia</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default PromedioScreen;
