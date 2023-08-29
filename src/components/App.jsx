// import { useEffect, useState } from "react";
import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { ContactList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
// import { ListItemApp ,ListItemText,Btn} from "./Contacts/Contacts.styled";


// const contactList = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];


export const App = () => {

  // const [contacts, setContacts] = useState(() => {
  //   const saveData = localStorage.getItem('lsData');
  //   const parsedData = JSON.parse(saveData);
  //   return saveData ? parsedData : [...contactList];
  // });
  // const [filter, setFilter] = useState('');

// useEffect(() => {
//     localStorage.setItem('lsData', JSON.stringify(contacts));
//   },[contacts]);

  // const onChange = e => {
  //   setFilter(e.currentTarget.value);
  //   // const { name, value } = e.currentTarget;
  //   // this.setState({ [name]: value });
  // };


  


  // const onFilter = () => {
  //   if (filter === '') {
  //     return;
  //   }
  //   return contacts.map(contact => {
  //     if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
  //       return (
  //         <ListItemApp key={contact.id}>
  //           <ListItemText >
  //             <b>{contact.name}</b> : {contact.number}
  //           </ListItemText>
  //           <Btn
  //             type="button"
  //             onClick={() => {
  //               onDelete(contact.id);
  //             }}
  //           >
  //             Delete
  //           </Btn>
  //         </ListItemApp>
  //       );
  //     }
  //       return null;
  //   });
  // };
  

//  const onDelete = id => {
//    const newArray = contacts.filter(c => c.id !== id);
//    setContacts(newArray);
//     // this.setState(prevState => ({
//     //   contacts: [...newArray],
//     // }));
//   };

  
  // const onSubmit = contact => {
  //   if (
  //     contacts.find(
  //       cont => cont.name.toLowerCase() === contact.name.toLowerCase()
  //     )
  //   ) {
  //     return alert(`${contact.name} is already in contacts`);
  //   }
  //   setContacts(state => [...state, contact]);
  
  // };






    
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
        <Form ></Form>
      </Section>
      <Section title='Contacts'>
        <Filter></Filter>
        <ContactList ></ContactList>
      </Section >
    </div>
  )};
