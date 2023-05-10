import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout/Layout';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    } else {
      return [];
    }
  });
  const [filter, setFilter] = useState('');

  // componentDidMount() {
  //   const savedContacts = localStorage.getItem('contacts');
  //   if (savedContacts !== null) {
  //     this.setState({ contacts: JSON.parse(savedContacts) });
  //   }
  // }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (contacts.find(({ name }) => name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`);
    }
    return setContacts(prevState => [newContact, ...prevState]);
  };
  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const deleteContact = contactId =>
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSave={addContact} />

      <h2>Contacts</h2>
      <Filter onChange={e => setFilter(e.target.value)} value={filter} />
      <ContactList contacts={filterContacts()} onDelete={deleteContact} />
    </Layout>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts !== null) {
//       this.setState({ contacts: JSON.parse(savedContacts) });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = newContact => {
//     if (this.state.contacts.find(({ name }) => name === newContact.name)) {
//       return alert(`${newContact.name} is already in contacts`);
//     }
//     return this.setState(prevState => ({
//       contacts: [newContact, ...prevState.contacts],
//     }));
//   };
//   filterContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };
//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     return (
//       <Layout>
//         <h1>Phonebook</h1>
//         <ContactForm onSave={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter
//           onChange={e =>
//             this.setState({
//               filter: e.target.value,
//             })
//           }
//           value={filter}
//         />
//         <ContactList
//           contacts={this.filterContacts()}
//           onDelete={this.deleteContact}
//         />
//       </Layout>
//     );
//   }
// }
