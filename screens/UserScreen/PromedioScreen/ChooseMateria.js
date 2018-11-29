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
  Input,
  Item,
  List,
  ListItem
} from 'native-base';
import variables from '../../../native-base-theme/variables/platform';

export class ChooseMateria extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              icon
              transparent
              style={{ marginLeft: 5 }}
              onPress={_ => this.props.navigation.goBack()}
            >
              <Icon name="ios-arrow-back" style={{ color: '#999' }} />
            </Button>
          </Left>
          <Body>
            <Title>Materias</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Item
            style={{
              backgroundColor: '#f2f2f2',
              paddingLeft: 8,
              paddingRight: 8,
              borderRadius: 5,
              marginTop: 10,
              marginBottom: 10,
              marginLeft: 3,
              marginRight: 3,
              borderBottomColor: 'transparent'
            }}
          >
            <Icon style={{ color: '#afafaf' }} name="ios-search" />
            <Input
              style={{ height: 30 }}
              placeholder="Buscar"
              placeholderTextColor="#afafaf"
            />
          </Item>
          <List>
            <ListItem>
              <Text>Hola</Text>
            </ListItem>
            <ListItem>
              <Text>Hola</Text>
            </ListItem>
            <ListItem>
              <Text>Hola</Text>
            </ListItem>
          </List>
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

export default ChooseMateria;
