import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

const intitialValues = {
  name: '',
  number: '',
};

class UserForm extends Component {
  
  handleFormSubmit = (values, {resetForm}) => {
    const id = nanoid();
    const data = {...values, id}
    this.props.getData(data)
    resetForm();  
  };
  render() {
    return (
      <Formik onSubmit={this.handleFormSubmit} initialValues={intitialValues}>
        <Form>
          <label>
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}

export { UserForm };
