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
    paddingTop: 4,
    paddingRight: 10,
    paddingLeft: 11,
    paddingBottom: 2
  },
  iconActive: {
    backgroundColor: '#03a87c',
    color: 'white',
    overflow: 'hidden',
    paddingLeft: 12
  }
});

export default class MateriasList extends Component {
  render() {
    return (
      <List listItemPadding={20}>
        {Materias.map(x => (
          <ListItem key={x.value}>
            <Body>
              <Text>{x.name}</Text>
            </Body>
            <Right>
              <Icon
                name={
                  this.props.selected.includes(x.value)
                    ? 'ios-checkmark'
                    : 'ios-add'
                }
                style={[
                  styles.icon,
                  this.props.selected.includes(x.value)
                    ? styles.iconActive
                    : null
                ]}
                onPress={_ => this.props.toggleSelected(x.value)}
              />
            </Right>
          </ListItem>
        ))}
      </List>
    );
  }
}
