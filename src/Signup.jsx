import React from 'react'
import './Loginsignup.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import Login from './Login'

export default function Signup() {

  const navigate = useNavigate();

  const home = () => {
    navigate('/')
  }

  return (
    <div className='Signupmain'>
    <div class="login-page">
    <div class="form">
    <form class="register-form">
    <input type="text" placeholder="Name"/>
    <input type="password" placeholder="Password"/>
    <input type="text" placeholder="Email"/>
    <button onClick={home}>Create Account</button>
    <p class="message">Already registered? 
    <Link to="/Login">Sign In</Link></p>
    </form>
    </div>
    </div>
    </div>
  )
}
