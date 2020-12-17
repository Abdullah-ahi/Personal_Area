import React, { Component } from 'react';
import { Contacts } from 'components/Contacts'
import { TransparentBlock } from 'components/TransparentBlock'

export class PersonalArea extends Component {

  render(){
    const { SignIn, profile, checkName, checkTel, addContact, RemoveContact, contacts, showContact, name, tel, editContact} = this.props
    return(
      <div>
        <Contacts name={name} tel={tel} showContact={showContact} profile={profile} addContact={addContact} RemoveContact={RemoveContact} contacts={contacts} editContact={editContact}/>
        <TransparentBlock SignIn={SignIn} checkName={checkName} checkTel = {checkTel}/>
      </div>
    )
  }
}