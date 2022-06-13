import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center  lg:flex">
        <ul className="menu menu-horizontal p-2">
          <li>
            <Link to="/">Inicio</Link>
          </li> <div className="dropdown dropdown-down">
          <li tabIndex="0">
            <a href="#/">
              PRODUCTOS
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
           
            <ul tabIndex="0" className=" dropdown-content menu menu-vertical p-2 shadow bg-base-100 rounded-box w-52shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/productos/sudaderas">Sudaderas</Link>
              </li>
              <li>
                <Link to="/productos/agendas">Agendas</Link>
              </li>
              <li>
                <Link to="/productos/ilustracion">Ilustracion</Link>
              </li>
              
            </ul>
          </li>
          </div>
          <li>
            <a href="#/">CONTACTO</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;
