import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({productos}) => {

    const {id,nombre,precio,imagen}= productos

  return (
    /*Contenedor Principal */
<>
      <div className="w-full card bg-base-100 shadow-xl ">
  
      <img src={imagen} alt="" className=" w-full rounded-xl" />
     
      <div className="card-body items-center text-center">
      <h2 className="card-title font-Confortaa text-xs lg:text-xl text-primary">{nombre}</h2>
      <h4 className='font-Confortaa text-xs'>${precio}</h4>
      <div className="card-actions">
      <Link to={`/producto/${id}`} className="w-full font-Confortaa text-xs btn btn-primary">Ver detalle</Link>  
      </div>
      </div>
      </div>

</>
       
  )
}

export default Item