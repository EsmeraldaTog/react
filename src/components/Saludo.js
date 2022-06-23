import React from 'react'
import { Link } from 'react-router-dom'

const Saludo = () => {
  return (

      <>
           
            <ul  className=" font-Confortaa text-sm menu menu-horizontal md:menu-vertical lg: menu-vertical bg-base-100 w-56 p-4 rounded-box content-center">
            <li class=" menu-title font-Confortaa  flex flex-col lg:text-sm">CATEGORIAS</li>
            
              <li className="hover-bordered font-Confortaa">
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
          
          
        </> 
    
      
   
    
    
  );
}

export default Saludo