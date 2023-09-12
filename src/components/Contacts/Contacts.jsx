import { useDispatch, useSelector } from 'react-redux';
import {List,ListItem,ListItemText,Btn} from './Contacts.styled'
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';


export const ContactListItem = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(selectFilter)

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase()));
  };

  const visibleContacts = filteredContacts();

  return (
    <>
      {visibleContacts.map(contact => (
        <ListItem id={contact.id} key={contact.id}>
      <ListItemText>
        <b>{contact.name}</b> : {contact.number}
      </ListItemText>
      <Btn
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </Btn>
    </ListItem>
      ))}
    </>
    
  );
};


export const ContactList = () => {
  return (
    <List >
      <ContactListItem/>
    </List>
  );
};