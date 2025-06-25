import React from 'react';
import { ContactForm } from './contactForm';
import { ContactList } from './contactList';

export const App = () => (
  <div>
    <h1>Meteor Wallet</h1>
    <h1 className="bg-red-500 text-white text-4xl p-4 rounded-xl">
  ¡Tailwind finalmente funcionando!
</h1>

    <ContactForm/>
    <ContactList/>
  </div>
);
