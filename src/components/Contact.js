import React from 'react';
import './Contact.css';


function Contact(props) {
    return (
        <div className="Contact">

            <img className="avatar" src={props.image} alt={props.name} />


            <div className="status">
                <p className="name">{props.name}</p>
                {props.online ? <span className="status-online"></span> : <span className="status-offline"></span>}
                <span className="status-text">{props.online ? "Online" : "Offline"}</span>
            </div>




        </div>

    );

}






export default Contact;