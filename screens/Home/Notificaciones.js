import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, ListItem, Text, Left, Right, Body, Icon, ActionSheet } from 'native-base';

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

const Notificacion = ({ notificacion, onInfoPress }) => (
  <ListItem style={{ alignItems: 'flex-start' }}>
    <Body>
      <Text style={styles.header}>{notificacion.title}</Text>
      <Text note style={{ fontSize: 16 }}>
        {notificacion.comment}
      </Text>
      <Text note style={{ marginTop: 32 }}>
        {notificacion.start} - {notificacion.end}
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

var BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export class Notificaciones extends Component {
  render() {
    return (
      <List>
        {this.props.data.map((x, i) => (
          <Notificacion key={i} notificacion={x} />
        ))}
      </List>
    );
  }
}

export default Notificaciones;
