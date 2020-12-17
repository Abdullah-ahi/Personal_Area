import React, { Component } from 'react';
import './Contacts.css'
import { ContactsList } from 'components/ContactsList'
import { ContactInfo } from 'components/ContactInfo'

export class Contacts extends Component {

  render(){
    const { profile, addContact, RemoveContact, contacts, showContact, name, tel, editContact } = this.props
    return(
      <div className="contacts">
        <header className="contacts-header">
          <span className="author-name">{profile.name}</span>
          <span className="page-name">Контакты</span>
        </header>
        <div className="contacts-block">
          <ContactsList showContact={showContact} addContact={addContact} RemoveContact={RemoveContact} contacts={contacts} editContact={editContact}/>
          <ContactInfo name={name} tel={tel}/>
        </div>
      </div>
    )
  }
}