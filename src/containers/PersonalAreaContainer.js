import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { PersonalArea } from 'components/PersonalArea';
import { signIn, remove, add } from 'actions/PersonalArea';

class PersonalAreaContainer extends PureComponent {

  state = {
    name: '',
    tel: '',
  }

  handleContactAdd = () => {
    const { createContact, id } = this.props
    const name = prompt('Введите имя', 'Имя')
    const tel = prompt('Введите номер телефона', '+7(000)000-0000')

    if(!this.checkName(name) || !this.checkTel(tel)){
      alert('Введенные данные некорректны')
      return
    }else{
      createContact({id, name, tel})
    }
  }

  checkName = (name) => {
    let result;
    if (name){
      if (name.match(/[a-z]/gi) === null){
        result = false;
      }else{
        result = name === name.match(/[a-z]/gi).join('');
      }
      return result;
    }else{
      return
    }
  }

  checkTel = (tel) => {
    let result;
    if (tel){
      if (tel.match(/\+7\(\d{3}\)\d{3}[\-]\d{4}/) === null){
        result = false;
      }else{
          result = tel === tel.match(/\+7\(\d{3}\)\d{3}[\-]\d{4}/).join('');
      }
      return result;
    }else{
      return
    }
  }

  handleContactClick = (name, tel) => {
    this.setState({
      name, 
      tel
    })
  }
  handleContactEdit = (id, name, tel) => {
    const { createContact } = this.props

    if(!this.checkName(name) || !this.checkTel(tel)){
      alert('Введенные данные некорректны')
      return
    }else{
      createContact({id, name, tel})
      document.querySelector('.add-contact-bcg').remove()
      document.querySelector('.contact-editing-block').style.top = '-350%'
    }
  }
  
  render(){
    const { SignIn, profile, contacts, RemoveContact} = this.props
    const { name, tel } = this.state
    return(
      <PersonalArea editContact={this.handleContactEdit} name={name} tel={tel} showContact={this.handleContactClick} contacts={contacts} SignIn={SignIn} profile={profile} checkName={this.checkName} checkTel = {this.checkTel} addContact = {this.handleContactAdd} RemoveContact={RemoveContact}/>
    )
  }
}

function mapStateToProps(state, ownProp){
  const profile = state.area.getIn(['entries', 'profile']).toJS()
  const contacts = state.area.getIn(['entries', 'contacts']).toList().toJS()

  const lastId = state.area.getIn(['entries', 'contacts']).size ? state.area.getIn(['entries', 'contacts']).last().get('id') : 0
  const id = +lastId+1

  return {
    profile,
    contacts: contacts.map((contact, idx) => ({name: contact.name, tel: contact.tel, id: contact.id})),
    id
  }
}

function mapDispatchToProps(dispatch){
 return {
   createContact: (contact) => dispatch(add(contact)),
   SignIn: (contacts) => dispatch(signIn(contacts)),
   RemoveContact: (contactId) => dispatch(remove(contactId)),
 }
}


export const PersonalAreaRedux = connect(mapStateToProps, mapDispatchToProps)(PersonalAreaContainer)