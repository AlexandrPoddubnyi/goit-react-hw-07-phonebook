import React, { Component } from "react";
import { Button, FormBox, Titles, Inputs } from './Form.styled'
import { nanoid } from 'nanoid';



export class Form extends Component {

  state = {
    name: '',
    number: ''
  };
  userId = nanoid(4);

  

  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };




  onSubmit = evt => {
    evt.preventDefault();
    const contact = {
       id: this.userId,
      name: this.state.name,
      number: this.state.number,
    }
    
    this.props.onSubmit(contact)
    this.reset()
  };
 


  reset = () => {
    this.setState({
      name: '',
      number: ''
    })
  }


  
render () {

  return (
    <FormBox onSubmit={this.onSubmit}>
      <Titles>Name</Titles>
      <Inputs
        value={this.state.name}
        onChange={this.onChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Titles>Number</Titles>
      <Inputs
        value={this.state.number}
        onChange={this.onChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="Submit">Add contact</Button>
    </FormBox>
 )}
}