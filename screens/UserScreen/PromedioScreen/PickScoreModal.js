import React, { Component } from 'react';
import { Text, View, Modal, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import { Button, Container, Header, Title, Content, Body, Left, Right, Icon } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  body: {
    flex: 1,
    margin: 10,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    marginLeft: 10
  },
  inputContainer: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 3
  },
  input: {
    margin: '10%',
    width: '50%',
    height: '60%',
    fontSize: 200
  }
});

export class PickScoreModal extends Component {
  state = {
    score: ''
  };

  onScoreChange = newScore => {
    const newScoreInt = parseInt(newScore);
    if (newScoreInt > 10) {
      return;
    }

    this.setState({ score: newScore });
  };

  onSubmit = _ => {
    this.props.onSubmit(this.state.score);
    this.setState({ score: '' });
  };

  render() {
    const { materia, close } = this.props;
    return (
      <Modal animationType="fade" visible={this.props.visible}>
        <Container>
          <Header transparent>
            <Left>
              <Button icon transparent style={{ marginLeft: 5 }} onPress={close}>
                <Icon name="ios-close" style={{ color: '#999' }} />
              </Button>
            </Left>
            <Body>
              <Title>{materia && materia.name}</Title>
            </Body>
            <Right />
          </Header>
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={styles.text}>Tu nota:</Text>
            <View style={styles.body}>
              <View styles={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="10"
                  keyboardType="number-pad"
                  returnKeyType="done"
                  value={this.state.score}
                  onChangeText={this.onScoreChange}
                  autoFocus
                  caretHidden={this.state.score != ''}
                />
              </View>
            </View>
            <View style={styles.bottom}>
              <Button full onPress={this.onSubmit}>
                <Text style={{ color: 'white' }}>Guardar</Text>
              </Button>
            </View>
          </KeyboardAvoidingView>
        </Container>
      </Modal>
    );
  }
}

export default PickScoreModal;
