import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName.trim() === '' || phone.trim() === '' || email.trim() === '') {
      return;
    }

    const newContact = {
      id: new Date().getTime().toString(),
      fullName,
      phone,
      email,
    };

    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    setFullName('');
    setPhone('');
    setEmail('');
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
