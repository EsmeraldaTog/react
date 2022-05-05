import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
 
    
  </div>
  <div className="navbar-center  lg:flex">
    <ul className="menu menu-horizontal p-2">
      <li><Link to='/'>Inicio</Link></li>
      <li tabindex="0">
        <a href="#/">
          PRODUCTOS
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><Link to='/sudaderas'>Sudaderas</Link></li>
          <li><a href="#/">Agendas</a></li>
          <li><a href="#/">Ilustracion</a></li>
        </ul>
      </li>
      <li><a href="#/">CONTACTO</a></li>
    </ul>
  </div>
  <CartWidget/>
</div>
  )
}

export default NavBar