import React from 'react';
import { isTemplateElement } from '@babel/types';
import Contact from './Contact';

const contacts = [
    {
      name: 'Darlene Franklin',
      email: 'darlene.franklin@examplr.com',
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      phone:'(157)-616-1609'
    },
    {
        name: 'Willard Rogers',
        email: 'willard.rogers@example.com',
        image: "https://randomuser.me/api/portraits/men/82.jpg",
        phone:'(505)-671-4865'
      },
      {
        name: 'Johnni Hale',
        email: 'johnni.hale@example.com',
        image: "https://randomuser.me/api/portraits/men/46.jpg",
        phone:'(322)-544-4191'
      },
      {
        name: 'Willie Vasquez',
        email: 'willie.vasquez@example.com',
        image: "https://randomuser.me/api/portraits/men/60.jpg",
        phone:'(834)-773-4427'
      },
      {
        name: 'Philip Oliver',
        email: 'philip.oliver@example.com',
        image: "https://randomuser.me/api/portraits/men/93.jpg",
        phone:'(185)-710-5408'
      }
];

const ContactList = () => (
  
    contacts.map(item => (
    <Contact image={item.image} name={item.name} email={item.email} phone={item.phone}/>
      ))
        
  
);   



export default ContactList;