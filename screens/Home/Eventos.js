import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  List,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  Icon,
  ActionSheet
} from 'native-base';

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 18
  },
  square: {
    borderColor: '#03a87c',
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    width: 70,
    height: 70,
    display: 'flex',
    alignItems: 'center'
  },
  day: {
    color: '#03a87c',
    fontSize: 22,
    fontWeight: 'bold'
  },
  moreIcon: {
    marginTop: 10
  }
});

const Evento = ({ evento, onInfoPress }) => (
  <ListItem style={{ alignItems: 'flex-start' }}>
    <Body>
      <Text style={styles.header}>{evento.title}</Text>
      <Text note style={{ fontSize: 16 }}>
        {evento.comment}
      </Text>
      <Text note style={{ marginTop: 32 }}>
        {evento.start} - {evento.end}
      </Text>
    </Body>
    <Right>
      <View style={styles.square}>
        <Text style={styles.day}>12</Text>
        <Text style={{ color: '#03a87c' }}>Días</Text>
      </View>
      <View style={styles.moreIcon}>
        <Icon name="more-horizontal" type="Feather" onPress={onInfoPress} />
      </View>
    </Right>
  </ListItem>
);

export class Eventos extends Component {
  onInfoPress = id =>
    ActionSheet.show(
      {
        options: ['Editar', 'Eliminar', 'Cerrar'],
        cancelButtonIndex: 2,
        destructiveButtonIndex: 1
      },
      btnIndex => this.onButtonPressed(btnIndex, id)
    );

  onButtonPressed = (btnIndex, id) => {
    console.log(`Pressed ${btnIndex}. Id: ${id}`);
    if (btnIndex === 1) {
      this.props.deleteEvento(id);
    }
  };

  render() {
    return (
      <List>
        {this.props.items.map((x, i) => (
          <Evento
            key={i}
            evento={x}
            onInfoPress={_ => this.onInfoPress(x.id)}
          />
        ))}
      </List>
    );
  }
}

export default Eventos;