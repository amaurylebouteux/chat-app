import React from 'react';

import Contact from './Contact';

const contacts = [
    {
      name: 'Darlene Franklin',
      email: 'darlene.franklin@examplr.com',
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      phone:'(157)-616-1609',
      online: false
    },
    {
        name: 'Willard Rogers',
        email: 'willard.rogers@example.com',
        image: "https://randomuser.me/api/portraits/men/82.jpg",
        phone:'(505)-671-4865',
        online: false

      },
      {
        name: 'Johnni Hale',
        email: 'johnni.hale@example.com',
        image: "https://randomuser.me/api/portraits/men/46.jpg",
        phone:'(322)-544-4191',
        online: false
      },
      {
        name: 'Willie Vasquez',
        email: 'willie.vasquez@example.com',
        image: "https://randomuser.me/api/portraits/men/60.jpg",
        phone:'(834)-773-4427',
        online: false
      },
      {
        name: 'Philip Oliver',
        email: 'philip.oliver@example.com',
        image: "https://randomuser.me/api/portraits/men/93.jpg",
        phone:'(185)-710-5408',
        online: false
      }
];

const ContactList = () => (

    <div>
      {contacts.map(props => (
      <Contact image={props.image} name={props.name} email={props.email} phone={props.phone} online={props.online}/>
      ))}
    </div>    
  
);   



export default ContactList;