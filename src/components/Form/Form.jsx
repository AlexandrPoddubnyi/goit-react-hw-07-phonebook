import { Button, FormBox, Titles, Inputs } from './Form.styled'
import { useDispatch, useSelector } from "react-redux";
import { addContact } from 'redux/operations';
import { selectContacts } from "redux/selectors";


export const Form = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const formSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    if (
      contacts.find(
        cont => cont.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact({ name, number }));
    form.reset()
  };



  return (
    <FormBox onSubmit={formSubmit}>
      <Titles>Name</Titles>
      <Inputs
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Titles>Number</Titles>
      <Inputs
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="Submit">Add contact</Button>
    </FormBox>
  )
};
