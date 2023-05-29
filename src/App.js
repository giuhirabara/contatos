import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import EditContactForm from './components/EditContactForm';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/adicionar" element={<ContactForm />} />
          <Route path="/editar/:id" element={<EditContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


