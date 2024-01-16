import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <NavLink to={'/'}>HOME</NavLink>
      <NavLink to={'/add'}>ADD</NavLink>
      <NavLink to={'/wish'}>WISH</NavLink>
      <NavLink>HOME</NavLink>
    </div>
  )
}

export default Navbar