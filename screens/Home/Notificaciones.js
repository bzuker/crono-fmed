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

const Notificacion = props => (
  <ListItem style={{ alignItems: 'flex-start' }}>
    <Body>
      <Text style={styles.header}>Inscripción a Final de anatomía</Text>
      <Text note style={{ fontSize: 16 }}>
        Cátedra 01
      </Text>
      <Text note style={{ marginTop: 32 }}>
        27/11/2018 - 30/11/2018
      </Text>
    </Body>
    <Right>
      <View style={styles.square}>
        <Text style={styles.day}>12</Text>
        <Text style={{ color: '#03a87c' }}>Días</Text>
      </View>
      <View style={styles.moreIcon}>
        <Icon name="more-horizontal" type="Feather" onPress={props.onInfoPress} />
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
        <Notificacion
          onInfoPress={_ =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX
                // title: 'Testing ActionSheet'
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )
          }
        />
        <Notificacion />
        <Notificacion />
      </List>
    );
  }
}

export default Notificaciones;
