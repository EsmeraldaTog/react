import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (


<div className="navbar bg-base-100">
  <div className="w-full navbar-start items-center flex justify-between lg:justify-center ">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/">Home</Link></li>
        <li tabIndex="0" className=" content-center">
          <p>
            Categorias
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </p>
          <ul className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"  tabIndex="0">
          <li className="  font-Confortaa">
                <Link to="/productos/sudaderas">Sudaderas</Link>
              </li>
              <li>
                <Link to="/productos/agendas">Agendas</Link>
              </li>
              <li>
                <Link to="/productos/ilustracion">Ilustracion</Link>
              </li>
              <li>
                <Link to="/productos/hat">Bucket Hat</Link>
              </li>
              <li>
                <Link to="/productos/tote">Tote Bags</Link>
              </li>
          </ul>
        </li>
        <li>Contacto</li>
      </ul>
    </div>
    <div className="items-center flex flex-col lg:items-start">
 <img src="https://i.ibb.co/RjyL5TT/logo.jpg" className="object-scale-down h-6/12 w-6/12" alt="logo" border="0"/>
 <h1 className="font-Confortaa text-xs">Ilustracion & Diseño</h1>
 </div>
   
  </div>
  <div className=" navbar-center hidden lg:flex w-2/4">
  <ul className="menu menu-horizontal p-0">
    <li><Link to="/">Home</Link></li>
      <li tabIndex="0">
        <p>
         Categorias
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </p>
        <ul tabIndex="0" className="z-40 menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52">
        <li className="hover-bordered  font-Confortaa">
                <Link to="/productos/sudaderas">Sudaderas</Link>
              </li>
              <li>
                <Link to="/productos/agendas">Agendas</Link>
              </li>
              <li>
                <Link to="/productos/ilustracion">Ilustracion</Link>
              </li>
              <li>
                <Link to="/productos/hat">Bucket Hat</Link>
              </li>
              <li>
                <Link to="/productos/tote">Tote Bags</Link>
              </li>
        </ul>
        <li>Contacto</li>
      </li>
      
    </ul>
  </div>

  <div className="navbar-end">
   <CartWidget/>
  </div>
</div>);}

export default NavBar;

      

