import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productos } from "../data/productos";
import ItemCount from './ItemCount';
import {Link} from "react-router-dom";



const ItemDetail = () => {

  const {productoId}= useParams()

    const [product, setProduct] =  useState({})

    useEffect(() => {
      setProduct(productos.find( p => p.id == productoId ) )
    },[productoId]);
    
  const [ terminar, setTerminar]= useState(false)

  function onAdd(count){
    setTerminar(true)
    console.log(count);
    

  }



return (
  <div>
    
<div className="center card card-compact w-96 bg-base-100 shadow-xl">
  <figure>
    <img src={product.imagen} alt="" />
  </figure>
  <div className="card-body">
    <h2 className="text-center text-xl">{product.nombre}</h2>
    <h4 className="text-center font-bold text-xl">{product.price}</h4>
    <h4 className="text-center text-xl">{product.descripcion}</h4>
    {terminar ? (<Link to="/cart" className="btn btn-primary mx-32 mt-4 bg-secondary"> Terminar Comprar</Link>) :
     (<ItemCount stock={product.stock} initial={1} onAdd ={onAdd} id={productoId}/>)}
    
  
  </div>
</div>


  </div>
)
}
export default ItemDetail