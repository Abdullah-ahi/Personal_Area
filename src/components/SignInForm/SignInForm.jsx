import React, { Component } from 'react';
import './SignInForm.css'

export class SignInForm extends Component {

  state = {
    name: '',
    tel: ''
  }

  showError = (name, tel) => {
    const {checkName, checkTel } = this.props
    if (document.querySelector('.format-error')){
      document.querySelector('.format-error').remove()
    }
    const error = document.createElement('div')
    error.classList.add('format-error')
    if (!checkName(name) && !checkTel(tel)){
      error.textContent = 'Неверный формат данных'
    }else if (!checkName(name)&& checkTel(tel)){
      error.textContent = 'Неверный формат имени'
    }else if (!checkTel(tel) && checkName(name)){
      error.textContent = 'Неверный формат телефона'
    }
    const btn = document.querySelector('.SignInForm')
    btn.append(error)
  }

  handleFormSend = () => {
    const { name, tel } = this.state
    const { SignIn, checkName, checkTel } = this.props
    if (!checkName(name) || !checkTel(tel)){
      this.showError(name, tel)
      return
    }else{
      SignIn(this.state)
      this.setState({
        name: '',
        tel: '',
      })
      this.closeSignInForm()
    }
  }
  closeSignInForm = () => {
    document.querySelector('.transparent-block').remove()
    document.querySelector('.contacts-header').style.display = 'flex'
    document.querySelector('.contacts-list').style.display = 'block'
    document.querySelector('.contact-info').style.display = 'block'
  }

  handleInputChange = (event) => {
    const fieldName = event.target.name;

    this.setState({
      [fieldName]: event.target.value,
    })
  }

  render(){
    const { name, tel } = this.state

    return(
      <div>
        <span className="form-name">Sign in</span>
        <div className="SignInForm">
          <input placeholder="Username" name="name" onChange={this.handleInputChange} className="user-name" value={name} type="text"/>
          <input placeholder="+7(000)000-0000" name="tel" onChange={this.handleInputChange} className="user-tel" value={tel} type="tel"/>
        </div>
        <button className="signIn-btn" onClick={this.handleFormSend}>Sign in</button>
      </div>
    )
  }
}