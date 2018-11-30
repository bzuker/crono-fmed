import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
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
import Materias from '../../../constants/Materias';
import PickScoreModal from './PickScoreModal';

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#f2f2f2',
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomColor: 'transparent'
  }
});

export class ChooseMateria extends Component {
  state = {
    searchValue: '',
    filteredSubjects: Materias,
    modalVisible: false,
    materiaSelected: null
  };

  onMateriaSelected = materia => {
    console.log(materia.name);
    this.setState({ modalVisible: true, materiaSelected: materia });
  };

  closeModal = _ => this.setState({ modalVisible: false });

  onSearchChange = text => {
    const filteredSubjects = Materias.filter(x =>
      x.name.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ searchValue: text, filteredSubjects });
  };

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
              <Icon name="ios-arrow-back" style={{ color: '#999' }} />
            </Button>
          </Left>
          <Body>
            <Title>Materias</Title>
          </Body>
          <Right />
        </Header>
        <Content keyboardShouldPersistTaps={'handled'}>
          <Item style={styles.searchInput}>
            <Icon style={{ color: '#afafaf' }} name="ios-search" />
            <Input
              style={{ height: 30 }}
              placeholder="Buscar"
              placeholderTextColor="#afafaf"
              autoCorrect={false}
              value={this.state.searchValue}
              onChangeText={this.onSearchChange}
            />
          </Item>
          <List
            keyboardShouldPersistTaps="always"
            dataArray={this.state.filteredSubjects}
            renderRow={x => (
              <ListItem key={x.id} button onPress={_ => this.onMateriaSelected(x)}>
                <Text>{x.name}</Text>
              </ListItem>
            )}
          />
          <PickScoreModal
            visible={this.state.modalVisible}
            close={this.closeModal}
            materia={this.state.materiaSelected}
          />
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
