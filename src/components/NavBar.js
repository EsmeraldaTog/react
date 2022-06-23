import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
 <div className="navbar bg-base-100 lg:flex justify-between p-8">

 
    <div className=" lg:flex flex-col">
      <img src="https://i.ibb.co/RjyL5TT/logo.jpg" className="object-scale-down h-6/12 w-6/12" alt="logo" border="0"/>
      <h1 className="font-Confortaa text-xs">Ilustracion & Diseño</h1>
    </div>
    
    <ul className="menu menu-horizontal p-2  lg:flex justify-between font-Confortaa text-sm">
        
     
      <li>
            <Link to="/">Home</Link>
      </li>
      <li>
        <a href="#/"> Acerca de </a>
      </li>
          
          <li>
            <a href="#/">Contacto</a>
          </li>
          
     </ul>
   
      <CartWidget />
 </div>
  );
}

export default NavBar;
