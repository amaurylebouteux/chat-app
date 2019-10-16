import React from 'react';
import './Contact.css';


class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {online:props.online};
    }
    render(){
        return (
         <div className="Contact">

                <img className="avatar" src={this.props.image} alt={this.props.name} />


                <div className="status" onClick = {event => {
                        let newStatus = !this.state.online;
                        this.setState  ({online : newStatus });
                    }}>
                    <p className="name">{this.props.name}</p>
                    
                    {this.state.online ? <span className="status-online"></span> : <span className="status-offline"></span>}
                    <span  className="status-text">{this.state.online ? "Online" : "Offline"}</span>
                    
                </div>




            </div>
        );

    }

}






export default Contact;