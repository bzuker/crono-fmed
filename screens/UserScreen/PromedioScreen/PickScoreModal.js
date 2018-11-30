import React, { Component } from 'react';
import { Text, View, Modal, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import {
  Button,
  Container,
  Header,
  Title,
  Content,
  Body,
  Left,
  Right,
  Footer,
  FooterTab
} from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  body: {
    flex: 1
  },
  inputContainer: {
    display: 'flex'
  },
  input: {
    marginTop: 50
  }
});

export class PickScoreModal extends Component {
  render() {
    const { materia } = this.props;
    return (
      <Modal animationType="fade" visible={this.props.visible}>
        <Container>
          <Header transparent>
            <Body>
              <Title>{materia && materia.name}</Title>
            </Body>
          </Header>
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.body}>
              <Text>Tu nota:</Text>
              <View styles={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="10"
                  keyboardType="number-pad"
                  returnKeyType="done"
                />
              </View>
            </View>
            <View style={styles.bottom}>
              <Button full>
                <Text>Chau</Text>
              </Button>
            </View>
          </KeyboardAvoidingView>
        </Container>
      </Modal>
    );
  }
}

export default PickScoreModal;
