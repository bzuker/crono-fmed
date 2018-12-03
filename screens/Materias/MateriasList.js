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
          <React.Fragment key={x.id}>
            <ListItem itemDivider>
              <Text>{x.name}</Text>
            </ListItem>
            {x.catedras.map((c, i) => (
              <ListItem key={c} first={i === 0} last={i === x.catedras.length - 1}>
                <Body>
                  <Text>{`Cátedra ${c}`}</Text>
                </Body>
                <Right>
                  <Icon
                    name={this.props.selected.includes(x.id) ? 'ios-checkmark' : 'ios-add'}
                    style={[
                      styles.icon,
                      this.props.selected.includes(x.id) ? styles.iconActive : null
                    ]}
                    onPress={_ => this.props.toggleSelected(x.id)}
                  />
                </Right>
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>
    );
  }
}
