import React, { useState } from 'react'
import './Loginsignup.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const Handle_Login = async (event) => {

    event.preventDefault();
    const res = await axios.get(`http://localhost:8080/get/${username}/${password}`);
    console.log(res.data)
      if(res.data==="ok"){
        navigate('/');
      }
      else if(res.data==="pass"){
        alert("password is wrong");
      }
      else{
        alert("user not registered please register");
      }
    

  }

  return (
    <div className='Loginmain'>
    <div className="login-page">
    <div className="form">
    <form className="login-form" onSubmit={Handle_Login}>
    <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} required/>
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      <button  type="submit">Login</button>
      <p className="message">Not registered?
      <Link to="/Signup">Create an account</Link>
      </p>
    </form>
    </div>
    </div>
    
    </div>
  )
}
