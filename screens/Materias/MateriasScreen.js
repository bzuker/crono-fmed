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

export default class MateriasScreen extends React.Component {
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
          <H1
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
          />
          <MateriasList />
        </Content>
      </Container>
    );
  }
}
