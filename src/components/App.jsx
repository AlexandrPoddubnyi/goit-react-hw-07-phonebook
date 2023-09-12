
import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { ContactList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';



export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

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
        {isLoading && !error &&  <p>Request in progress...</p>}
        <ContactList ></ContactList>
      </Section >
    </div>
  )};
