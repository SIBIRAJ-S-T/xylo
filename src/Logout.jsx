import React from 'react'
import './Logout.css'
import { Link } from 'react-router-dom'

export default function Logout() {
  return (
    <div>
        <div class="dropdown">
            <button class="dropbtn">Settings</button>
            <div class="dropdown-content">
            <Link to="/Login">Log Out</Link>
            </div>
        </div>
    </div>
  )
}
