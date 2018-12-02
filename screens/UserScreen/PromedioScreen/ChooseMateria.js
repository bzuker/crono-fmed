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
    materiaSelected: null,
    allScores: []
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

  onScoreUpdated = score => {
    console.log(this.state);
    const newScore = { materia: this.state.materiaSelected, score };
    this.setState(state => ({ ...state, allScores: [...state.allScores, newScore] }));
    this.closeModal();
  };

  getPromedio = _ => {
    const { allScores } = this.state;
    if (allScores.length === 0) return 0;
    const sum = allScores.reduce((a, b) => a + parseInt(b.score), 0);
    const average = sum / allScores.length;
    return Math.round(average * 100) / 100;
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
            onSubmit={this.onScoreUpdated}
          />
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Promedio: {this.getPromedio()}</Text>
              <Text>Materias: {this.state.allScores.length}</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default ChooseMateria;
