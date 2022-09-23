


export const Filter = ({ value, onChange, onFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        value={value}
        onChange={onChange}

        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      {value && <ul>{onFilter()}</ul>}
      
    </div>
   )
}