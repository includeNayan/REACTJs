import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
       <ul>
        <li>
          {/* NavLink tag helps us in detecting the active router in the current page */}
            <Link to='/'> Home </Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
