import React from 'react'
import { navLinks, logoNavBar } from '../constants'

const Navbar = () => {

  return (
    <nav className={`w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <ul>
          {navLinks.map((link) => (
            <li
              key={link.id}
            >
              {link.title}
              <img src={logoNavBar[0].logo} alt="logo" className=''/>
            </li>
          ))}
        </ul>
    </nav>
  )
}

export default Navbar