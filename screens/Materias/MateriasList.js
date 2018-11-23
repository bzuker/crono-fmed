import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { List, ListItem, Icon, Right, Body, Text } from 'native-base';
import Materias from '../../constants/Materias';

const styles = StyleSheet.create({
  icon: {
    color: '#03a87c',
    borderRadius: 4,
    borderColor: '#03a87c',
    borderWidth: 1,
    paddingTop: 3,
    paddingRight: 9,
    paddingLeft: 10,
    paddingBottom: 1
  },
  iconActive: {
    backgroundColor: '#03a87c',
    color: 'white',
    overflow: 'hidden',
    paddingLeft: 11
  }
});

export default class MateriasList extends Component {
  state = {
    materias: Materias.map(x => ({
      name: x.name,
      value: x.value,
      selected: false
    }))
  };

  toggleSelected = id => {
    this.setState(state => {
      let materia = state.materias.find(x => x.value == id);
      materia.selected = !materia.selected;
      return {
        materias: state.materias
      };
    });
  };

  render() {
    return (
      <List listItemPadding={20}>
        {this.state.materias.map(x => (
          <ListItem key={x.value}>
            <Body>
              <Text>{x.name}</Text>
            </Body>
            <Right>
              <Icon
                name={x.selected ? 'ios-checkmark' : 'ios-add'}
                style={[styles.icon, x.selected ? styles.iconActive : null]}
                onPress={_ => this.toggleSelected(x.value)}
              />
            </Right>
          </ListItem>
        ))}
      </List>
    );
  }
}
