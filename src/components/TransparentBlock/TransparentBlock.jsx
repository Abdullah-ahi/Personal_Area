import React,  { Component } from 'react';
import './TransparentBlock.css'

import { SignInForm } from 'components/SignInForm'

export class TransparentBlock extends Component {

  render(){
    const { SignIn, checkName, checkTel } = this.props
    return(
      <div className="transparent-block">
        <SignInForm SignIn={SignIn} checkName={checkName} checkTel={checkTel}/>
      </div>
    )
  }
}