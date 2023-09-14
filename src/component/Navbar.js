import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='nav'>
          <NavLink to={'/counter'} className='navbarlink'>Pure Component </NavLink>
          <NavLink to={'/HOC'} className='navbarlink'>HOC</NavLink>
          
    </div>
  )
}

export default Navbar