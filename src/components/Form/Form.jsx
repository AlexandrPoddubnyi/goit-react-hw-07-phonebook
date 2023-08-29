// import {useState } from "react";
import { Button, FormBox, Titles, Inputs } from './Form.styled'
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { getContacts } from "redux/selectors";



export const Form = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const formSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const formName = form.name.value;
    const formNumber = form.number.value;
    if (
      contacts.find(
        cont => cont.name.toLowerCase() === formName.toLowerCase()
      )
    ) {
      return alert(`${formName} is already in contacts`);
    }
    dispatch(addContact(formName, formNumber));
    form.reset()
  };

  
  // state = {
  //   name: '',
  //   number: ''
  // };
  // id = nanoid(4);


  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  //  const onChange = e => {
  //    const { name, value } = e.currentTarget;
  //   // this.setState({ [name]: value });
  //    switch (name) {
  //      case 'name':
  //        setName(value);
  //        break;
  //      case 'number':
  //        setNumber(value);
  //        break;
  //      default:
  //        break;
  //    }
  // };


  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   const id = nanoid(4)
  //   // const contact = {
  //     // id: this.userId,
  //     // name: this.state.name,
  //     // number: this.state.number,
  //   // }
  //   onSubmit({id,name,number});
  //   reset();
  //   // this.props.onSubmit(contact)
  //   // this.reset()
  // };
 

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  //   // this.setState({
  //   //   name: '',
  //   //   number: ''
  //   // })
  // }


  return (
    <FormBox onSubmit={formSubmit}>
      <Titles>Name</Titles>
      <Inputs
        // value={name}
        // onChange={onChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Titles>Number</Titles>
      <Inputs
        // value={number}
        // onChange={onChange}
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
