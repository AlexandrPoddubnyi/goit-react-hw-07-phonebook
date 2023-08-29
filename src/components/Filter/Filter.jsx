import { useDispatch} from "react-redux"
import { filterContacts } from "../../redux/filterSlice";
// import { getContacts, getFilter } from "redux/selectors"
// import { ListItemText, ListItemApp,Btn } from "components/Contacts/Contacts.styled";
// import { deleteContact } from "redux/actions";


export const Filter = () => {
  // const filter = useSelector(getFilter);
  // const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleFilter = event => {
    const inputValue = event.target.value;
    dispatch(filterContacts(inputValue))
  };


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
  //             onClick={dispatch(deleteContact(contact.id))}
  //           >
  //             Delete
  //           </Btn>
  //         </ListItemApp>
  //       );
  //     }
  //       return null;
  //   });
  // };


  return (
    <div>
      <p>Find contacts by name</p>
      <input
        onChange={handleFilter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
   )
}