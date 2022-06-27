import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Saludo = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  return (

      <>
         <button onClick={() => setIsNavOpen(!isNavOpen)} className="bg-primary sm:hidden md:hidden lg:hidden "> Categorias </button>
      
       <div  className={`${isNavOpen ? " flex-row" : "hidden"} sm:hidden md:hidden lg:hidden `}>
       <ul className="">
              <li className=" font-Confortaa">
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
         </div> 
    
 
  


      
        <div className=' sm:menu-vertical md:menu-vertical  font-Confortaa text-sm lg:menu-vertical bg-base-100 w-56 p-4 rounded-box content-center'>
            <ul  className="">
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
      </div>
           
          
        </> 
      
      
   
    
    
  );
}

export default Saludo