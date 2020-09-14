import React from 'react'
import Link from 'gatsby-link'
import logo from './logo-designcode.svg'
import './Header.css'
const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={logo} width="30" /></Link>
      <Link to="/cab">Taxi</Link>
      <Link to="/taxi">Food</Link>
      <Link to="/MyProf">My Profile</Link>
      <Link to="/buy"><button>Book Now</button></Link>
    </div>

  </div>
)

export default Header
