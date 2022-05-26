import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import ItemCount from './ItemCount';
import {Link} from "react-router-dom";



const ItemDetail = (producto) => {

  
  
  const {productoId}= useParams()

  
  const [ terminar, setTerminar]= useState(false)

  function onAdd(count){
    setTerminar(true)
    console.log(count);
    

  }



return (
  <div>
    
<div className="center card card-compact w-96 bg-base-100 shadow-xl">
  <figure>
    <img src={producto.imagen} alt="" />
  </figure>
  <div className="card-body">
    <h2 className="text-center text-xl">{producto.nombre}</h2>
    <h4 className="text-center font-bold text-xl">{producto.precio}</h4>
    <h4 className="text-center text-xl">{producto.descripcion}</h4>
    {terminar ? (<Link to="/cart" className="btn btn-primary mx-32 mt-4 bg-secondary"> Terminar Comprar</Link>) :
     (<ItemCount stock={producto.stock} initial={1} onAdd ={onAdd} id={productoId}/>)}
    
  
  </div>
</div>


  </div>
)
}
export default ItemDetail