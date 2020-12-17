import React, { Component } from 'react';

import './ContactsList.css'
import { EditingBlock } from 'components/EditingBlock'

import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

export class ContactsList extends Component {

  state = {
    id: ''
  }
  handleContactRemove = (id) => {
    const { RemoveContact, showContact } = this.props
    RemoveContact(id)
    showContact('', '')
  }
  addBackground = () => {
    const bcg = document.createElement('div')
    bcg.classList.add('add-contact-bcg')
    document.querySelector('.contacts').append(bcg)
  }
  showEditingBlock = (id) => {
    this.addBackground()
    document.querySelector('.contact-editing-block').style.top = '100%'
    this.setState({
      id
    })
  }
  render(){
    const { id } = this.state
    const { contacts, addContact, showContact, editContact } = this.props
    return(
      <div className="contacts-list">
          <List>
            {contacts.map((contact, idx) => 
            <ListItem key={idx}>
              <Link to={() => {return}} className="contact-list-item">
                <button data-id={contact.id} className="contact-delete-button" onClick={() => this.handleContactRemove(contact.id)}>X</button>
                <span onClick={() => showContact(contact.name, contact.tel)}>{contact.name}</span>
                <button data-name="edit" className="editing-button" onClick={() => this.showEditingBlock(contact.id)}>Редактировать</button>
              </Link>
            </ListItem>)}
            <Button onClick={addContact}>
                <ListItemText primary= "+ Добавить контакт"></ListItemText>
            </Button>
            <EditingBlock editContact={editContact} id={id} showContact={showContact}/>
          </List>
        </div>
    )
  }
}