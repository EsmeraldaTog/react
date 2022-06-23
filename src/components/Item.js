import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({productos}) => {

    const {id,nombre,precio,imagen}= productos

  return (
    /*Contenedor Principal */
<>
      <div className="card bg-base-100 shadow-xl ">
      <figure className="px-10 pt-10">
      <img src={imagen} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
      <h2 className="card-title font-Confortaa text-sm lg:text-xl text-primary">{nombre}</h2>
      <h4 className='font-Confortaa text-base'>${precio}</h4>
      <div className="card-actions">
      <Link to={`/producto/${id}`} className="font-Confortaa text-xs btn btn-primary">Detalle del Producto</Link>  
      </div>
      </div>
      </div>

</>
       
  )
}

export default Item