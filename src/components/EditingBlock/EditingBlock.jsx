import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './EditingBlock.css'

export class EditingBlock extends Component{

  state = {
    name: '',
    tel: ''
  }
  editContact = () => {
    const { editContact, id, showContact } = this.props
    const { name, tel } = this.state
    editContact(id, name, tel)
    showContact(name, tel)
    this.setState({
      name: '',
      tel: ''
    })
  }
  handleCancelEdit = () => {
    document.querySelector('.add-contact-bcg').remove()
    document.querySelector('.contact-editing-block').style.top = '-350%'
  }
  handleInputChange = (event) => {
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: event.target.value
    })
  }
  render(){
    const { name, tel } = this.state
    return(
      <div className="contact-editing-block">
        <input className="editting-name" name="name" placeholder="name" type="text" onChange={this.handleInputChange} value={name}/>
        <input className="editting-name" name="tel" placeholder="telephone" type="text" onChange={this.handleInputChange}value={tel}/>
        <Button variant="contained" color="secondary" className="edit-cancel-btn" onClick={() => this.handleCancelEdit()}>Отмена</Button>
        <Button variant="contained" color="primary" className="edit-btn" onClick={() => this.editContact()}>OK</Button>
      </div>
    )
  }
}