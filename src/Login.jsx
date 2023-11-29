import React from 'react'
import './Loginsignup.css'
import { Link } from 'react-router-dom'
export default function Login() {

  return (
    <div className='Loginmain'>
    <div class="login-page">
    <div class="form">
    <form class="login-form">
      <input type="text" placeholder="Username or Email"/>
      <input type="password" placeholder="Password"/>
      <button><Link to="/" style={{textDecoration: 'none', color:'inherit'}}>login</Link></button>
      <p class="message">Not registered?
      <Link to="/Signup">Create an account</Link>
      </p>
    </form>
    </div>
    </div>
    </div>
  )
}
