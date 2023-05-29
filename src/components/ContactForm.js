import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = ({ history, match }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const contactId = match.params.id;

  useEffect(() => {
    if (contactId) {
      const contact = contacts.find((contact) => contact.id === contactId);
      if (contact) {
        setFullName(contact.fullName);
        setPhone(contact.phone);
        setEmail(contact.email);
      }
    }
  }, [contactId, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName.trim() === '' || phone.trim() === '' || email.trim() === '') {
      return;
    }

    const newContact = {
      id: contactId || new Date().getTime().toString(),
      fullName,
      phone,
      email,
    };

    if (contactId) {
      dispatch({ type: 'EDIT_CONTACT', payload: newContact });
    } else {
      dispatch({ type: 'ADD_CONTACT', payload: newContact });
    }

    setFullName('');
    setPhone('');
    setEmail('');

    if (!contactId) {
      history.push('/');
    }
  };

  return (
    <div>
      <h2>Adicionar Contato</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome Completo:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default ContactForm;

