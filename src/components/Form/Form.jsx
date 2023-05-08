import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  getUserInfo = event =>{
    const {name, value, number} = event.currentTarget;
    console.log(name);
    this.setState({[name]: value})
  }
  handleSumbit = event => {
    event.preventDefault();
    this.props.getData(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <label htmlFor={this.userNameId}>
          Name
          <input name='name' type="text" id={this.userNameId} onChange={this.getUserInfo} />
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
    );
  }
}

export { Form };
