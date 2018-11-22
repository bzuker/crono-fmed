import React from 'react';
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

export default class MateriasScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Materias'
  // };

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'white' }}>
          <Left />
          <Body>
            <Title style={{ fontWeight: '600' }}>Materias</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>This is Content Section</Text>
        </Content>
      </Container>
    );
  }
}
