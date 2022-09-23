import { Component } from "react";
import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { ContactList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { ListItemApp ,ListItemText,Btn} from "./Contacts/Contacts.styled";


export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
  }

  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };


  onFilter = () => {
    if (this.state.filter === '') {
      return;
    }
    return this.state.contacts.map(contact => {
      if (contact.name.toLowerCase().includes(this.state.filter.toLowerCase())) {
        return (
          <ListItemApp key={contact.id}>
            <ListItemText >
              <b>{contact.name}</b> : {contact.number}
            </ListItemText>
            <Btn
              type="button"
              onClick={() => {
                this.onDelete(contact.id);
              }}
            >
              Delete
            </Btn>
          </ListItemApp>
        );
      }
        return null;
    });
  };
  

   onDelete = id => {
    const newArray = this.state.contacts.filter(c => c.id !== id);
    this.setState(prevState => ({
      contacts: [...newArray],
    }));
  };

  
  onSubmit = contact => {
    if (
      this.state.contacts.find(
        cont => cont.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))
  
  }

  render() {
    
  return (
    <div
      style={{
        width: '768px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title='Phone book'>
        <Form onSubmit={this.onSubmit}></Form>
      </Section>
      <Section title='Contacts'>
        <Filter onChange={this.onChange} value={this.state.filter} onFilter={this.onFilter}></Filter>
        <ContactList contacts={this.state.contacts} onDelete={this.onDelete} filter={this.state.filter}></ContactList>
      </Section >
    </div>
  )};
};
