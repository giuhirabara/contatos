import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editContact } from '../actions';

const EditContactForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector((state) => state.contacts);
  const contact = contacts.find((contact) => contact.id === id);

  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [email, setEmail] = useState(contact.email);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crie um objeto com os campos atualizados do contato
    const updatedContact = {
      id: contact.id,
      name,
      phone,
      email,
    };

    // Dispatch da ação para atualizar o contato
    dispatch(editContact(updatedContact));

    // Navegue de volta para a página de lista de contatos
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Contato</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
      <button type="submit">Atualizar</button>
    </form>
  );
};

export default EditContactForm;

