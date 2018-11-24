import React, { Component } from 'react';
import { Form, Item, Input, Label, DatePicker } from 'native-base';

export class NotificationForm extends Component {
  state = {
    date: new Date()
  };

  setDate = newDate => this.setState({ date: newDate });

  render() {
    return (
      <Form>
        <Item stackedLabel>
          <Label>Título</Label>
          <Input />
        </Item>
        <Item stackedLabel>
          <Label>Comentario</Label>
          <Input />
        </Item>
        <Item stackedLabel last>
          <Label>Fecha</Label>
          <DatePicker
            locale={'es'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType="fade"
            androidMode={'default'}
            placeHolderText="Elegir fecha"
            placeHolderTextStyle={{ color: '#d3d3d3' }}
            onDateChange={this.setDate}
          />
        </Item>
      </Form>
    );
  }
}

export default NotificationForm;
