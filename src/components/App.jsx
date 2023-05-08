import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  userNameId = nanoid();
  userNumberId = nanoid();

  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor={this.userNameId}>
            Name
            <input type="text" id={this.userNameId} />
          </label>

          <label htmlFor={this.userNumberId}>
            Number
            <input
              type="tel"
              name="number"
              id={this.userNameId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <span>Contacts</span>
        <ul>

        </ul>
      </div>
    );
  }
}

export { App };
