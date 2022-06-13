import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({productos}) => {

    const {id,nombre,precio,imagen}= productos

  return (
    <div>
   




<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={imagen} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{nombre}</h2>
    <h4>${precio}</h4>
    <div className="card-actions">
    <Link to={`/producto/${id}`} className="btn btn-primary mx-32 mt-4">Detalle del Producto</Link>
        
   
      
    </div>
  </div>
</div>

       
        </div>
       
  )
}

export default Item