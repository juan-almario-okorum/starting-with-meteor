import React from 'react';
import { ContactForm } from './contactForm';
import { ContactList } from './contactList';

export const App = () => (
  <div>
    <h1>Meteor Wallet</h1>
    <ContactForm/>
    <ContactList/>
  </div>
);
