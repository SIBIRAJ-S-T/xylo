import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
//import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <h1>Hello</h1>
    <h1>Hi</h1>
    <Link to="/Login">Homepage</Link>
    </div>
  )
}
