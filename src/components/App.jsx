import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';

class App extends Component {
  userNameId = nanoid();
  userNumberId = nanoid();

  state = {
    contacts: [],
    name: '',
    number: '',
  };
  handleFormData = data =>{
    console.log(data);
  }

  render() {
    return (
      <div>
        <Form getData={this.handleFormData}/>
        <span>Contacts</span>
        <ul>

        </ul>
      </div>
    );
  }
}

export { App };
