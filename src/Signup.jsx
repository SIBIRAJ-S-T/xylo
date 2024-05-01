import './Loginsignup.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import Login from './Login'
import axios from 'axios';
import React,{useState} from 'react';

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const signUp = async () => {
    const res = await axios.post('http://localhost:8080/users', {username, password, email});
    console.log(res);
    navigate("/");
    
  }




  const home = () => {
    navigate('/')
  }

  function handleOnClick(){
    signUp();
    home();
  }

  return (
    <div className='Signupmain'>
    <div class="login-page">
    <div class="form">
    <form class="register-form" onSubmit={handleOnClick}>
    <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} required/>
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
    <button type='submit'>Create Account</button>
    <p class="message">Already registered? 
    <Link to="/Login">Sign In</Link></p>
    </form>
    </div>
    </div>
    </div>
  )
}
