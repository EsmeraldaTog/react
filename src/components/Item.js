import React from 'react'
import ItemCount from './ItemCount'

const item = ({productos}) => {

    const {id,nombre,precio,descripcion,imagen,stock }= productos

  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={imagen} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{nombre}</h2>
    <h4>${precio}</h4>
     <p>{descripcion}</p>
    <div className="card-actions">
          <ItemCount stock={stock} initial ={1}/>
    </div>
  </div>
</div>
        {/* <div>Id:{id}</div>
        <div>Nombre del Producto: {nombre}</div>
        <div>Precio: ${precio}</div>
        <div>Descripcion: {descripcion}</div>
        <div><img src={imagen} alt="" /></div>
        <div>Existencia:{stock}</div>
        <ItemCount stock={stock} initial={1}/> */}
        </div>
       
  )
}

export default item