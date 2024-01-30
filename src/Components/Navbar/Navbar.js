import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <header>
        <ul className='Navigation-menu'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/About"><li>About</li></Link>
            <Link to="/Projects"><li>Projects</li></Link>
        </ul>
      </header>
    </div>
  )
}

export default Navbar
