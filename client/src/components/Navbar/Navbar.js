import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../logo.png'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <div className='navContainer'>
          <img src={logo} alt="" />
          <h1 className='navHead'>TimeCapsule</h1>
        </div>
      </Link>
      <div>
        <ul>
          <Link to="/about">
            <li className='navLi'>About</li>
          </Link>
          <li><button className='navButton' title='This section is currently in progress'>Sign Up</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar