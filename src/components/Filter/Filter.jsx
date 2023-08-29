import { useDispatch} from "react-redux"
import { filterContacts } from "../../redux/filterSlice";



export const Filter = () => {

  const dispatch = useDispatch();

  const handleFilter = event => {
    const inputValue = event.target.value;
    dispatch(filterContacts(inputValue))
  };


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