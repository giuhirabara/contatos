import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from './ContactItem';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleRemoveContact = (id) => {
    dispatch({ type: 'REMOVE_CONTACT', payload: id });
  };

  return (
    <div>
      <h2>Lista de Contatos</h2>
      {contacts.length === 0 ? (
        <p>Nenhum contato cadastrado.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onRemove={handleRemoveContact}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
