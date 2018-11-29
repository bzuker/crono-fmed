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
import { differenceInDays, parse, compareAsc } from 'date-fns';

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

const Evento = ({ evento, onInfoPress }) => {
  const parsedStartDate = parse(evento.start, 'dd/MM/yyyy', new Date());
  // Sumamos 1 porque differenceInDays toma días completos
  const difference =
    differenceInDays(
      parsedStartDate > new Date()
        ? parsedStartDate
        : parse(evento.end, 'dd/MM/yyyy', new Date()),
      new Date()
    ) + 1;
  const differenceText =
    difference === 0 ? '' : difference === 1 ? 'Día' : 'Días';
  return (
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
          <Text style={styles.day}>{difference}</Text>
          <Text style={{ color: '#03a87c' }}>{differenceText}</Text>
        </View>
        <View style={styles.moreIcon}>
          <Icon name="more-horizontal" type="Feather" onPress={onInfoPress} />
        </View>
      </Right>
    </ListItem>
  );
};

export class Eventos extends Component {
  onInfoPress = evento =>
    ActionSheet.show(
      {
        options: ['Editar', 'Eliminar', 'Cerrar'],
        cancelButtonIndex: 2,
        destructiveButtonIndex: 1
      },
      btnIndex => this.onButtonPressed(btnIndex, evento)
    );

  onButtonPressed = (btnIndex, evento) => {
    console.log(`Pressed ${btnIndex}. Id: ${evento.id}`);
    if (btnIndex === 0) {
      this.props.editEvento(evento);
    }

    if (btnIndex === 1) {
      this.props.deleteEvento(evento.id);
    }
  };

  render() {
    return (
      <List>
        {this.props.items
          .sort((a, b) =>
            compareAsc(
              parse(a.start, 'dd/MM/yyyy', new Date()),
              parse(b.start, 'dd/MM/yyyy', new Date())
            )
          )
          .map((x, i) => (
            <Evento key={i} evento={x} onInfoPress={_ => this.onInfoPress(x)} />
          ))}
      </List>
    );
  }
}

export default Eventos;
