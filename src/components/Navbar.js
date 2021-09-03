import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

const Navbar = () => {
  return (
    <nav className = 'navbar'>
      <div className="nav-center">
        <Link to = '/'>
          <img src = {logo} alt='logo' className = 'logo'></img>
        </Link>
        
      </div>
    </nav>
  )
}

export default Navbar