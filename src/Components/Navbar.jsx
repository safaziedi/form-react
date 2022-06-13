import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar =()=> {
  return (
    <nav className='topnav' >
        <Link  to="/">Home</Link>
        <Link  to="login">Login</Link>
        <Link  to="register">Register</Link>
        
    </nav>
  )
}

export default Navbar