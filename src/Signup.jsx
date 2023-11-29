import React from 'react'
import './Loginsignup.css'
import { Link } from 'react-router-dom'
// import Login from './Login'

export default function Signup() {
  return (
    <div className='Signupmain'>
    <div class="login-page">
    <div class="form">
    <form class="register-form">
    <input type="text" placeholder="Name"/>
    <input type="password" placeholder="Password"/>
    <input type="text" placeholder="Email"/>
    <button><Link to="/" style={{textDecoration: 'none', color:'inherit'}}>Create Account</Link></button>
    <p class="message">Already registered? 
    <Link to="/Login">Sign In</Link></p>
    </form>
    </div>
    </div>
    </div>
  )
}
