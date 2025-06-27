import React from 'react';
import { ContactForm } from './contactForm';
import { ContactList } from './contactList';
import { Header } from './header';

export const App = () => (
  <div>
    <Header/>
    <div className='min-h-full'>
      <div className='max-w-4xl mx-auto p-2'>
        <ContactForm/>
        <ContactList/>
      </div>
    </div>
  </div>
);
