
import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { ContactList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';



export const App = () => {

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
