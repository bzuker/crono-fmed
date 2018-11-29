import React, { Component } from 'react';
import { Form, Item, Input, Label, DatePicker, Picker } from 'native-base';

export class NotificationForm extends Component {
  state = this.props.event
    ? {
        title: this.props.event.title,
        comment: this.props.event.comment || '',
        start: new Date(
          this.props.event.start
            .split('/')
            .reverse()
            .join('-')
        ),
        firstAlert: this.props.event.firstAlert || '1',
        secondAlert: this.props.event.secondAlert || '-1'
      }
    : {
        title: '',
        comment: '',
        start: new Date(),
        firstAlert: '1',
        secondAlert: '-1'
      };

  setDate = newDate => this.setState({ date: newDate });

  render() {
    return (
      <Form>
        <Item inlineLabel>
          <Label>Título</Label>
          <Input value={this.state.title} />
        </Item>
        <Item inlineLabel>
          <Label>Comentario</Label>
          <Input value={this.state.comment} />
        </Item>
        <Item fixedLabel>
          <Label>Fecha</Label>
          <DatePicker
            locale={'es'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType="fade"
            androidMode={'default'}
            placeHolderText={this.state.start
              .toISOString()
              .slice(0, 10)
              .split('-')
              .reverse()
              .join('/')}
            onDateChange={this.setDate}
          />
        </Item>
        <Item fixedLabel>
          <Label>Notificación</Label>
          <Picker
            mode="dropdown"
            selectedValue={this.state.firstAlert}
            onValueChange={newValue => this.setState({ firstAlert: newValue })}
            style={{ width: undefined }}
            placeholderStyle={{ color: '#2874F0' }}
          >
            <Picker.Item label="No" value="-1" />
            <Picker.Item label="1 día antes" value="1" />
            <Picker.Item label="2 días antes" value="2" />
            <Picker.Item label="3 días antes" value="3" />
            <Picker.Item label="1 semana antes" value="7" />
          </Picker>
        </Item>
        <Item fixedLabel>
          <Label>Segunda Notificación</Label>
          <Picker
            mode="dropdown"
            selectedValue={this.state.secondAlert}
            onValueChange={newValue => this.setState({ secondAlert: newValue })}
            style={{ width: undefined }}
            placeholderStyle={{ color: '#2874F0' }}
          >
            <Picker.Item label="No" value="-1" />
            <Picker.Item label="1 día antes" value="1" />
            <Picker.Item label="2 días antes" value="2" />
            <Picker.Item label="3 días antes" value="3" />
            <Picker.Item label="1 semana antes" value="7" />
          </Picker>
        </Item>
      </Form>
    );
  }
}

export default NotificationForm;
