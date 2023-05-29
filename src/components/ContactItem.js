import React from 'react';

const ContactItem = ({ contact, onRemove }) => {
  const { id, fullName, phone, email } = contact;

  return (
    <li>
      <p>
        <strong>Nome:</strong> {fullName}
      </p>
      <p>
        <strong>Telefone:</strong> {phone}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <button onClick={() => onRemove(id)}>Remover</button>
    </li>
  );
};

export default ContactItem;