import React, { Component } from 'react';

import './ContactInfo.css'
export class ContactInfo extends Component {

  render(){
    const { name, tel } = this.props
    return(
      <div className="contact-info">
        <div className="contact-name">{`Имя: ${name}`}</div>
        <div className="contact-tel">{`Телефон: ${tel}`}</div>
      </div>
    )
  }
}