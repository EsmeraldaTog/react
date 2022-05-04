import React, { useEffect, useState } from 'react'
import { productos } from "../data/productos";
import ItemCount from './ItemCount'

const ItemDetail = (props) => {

    const [product, setProduct] =  useState([])
    
    useEffect(() => {
   getProductId()
    
},);



const getProductId= () =>{
    const getProductIdPromise = new Promise((res, reject) =>{
        setTimeout(() => {
            res(productos)
        }, 5000);
    })

     getProductIdPromise.then(d=>{
    setProduct(d.find( p => p.id === props.id ) )
  });
}

  
return (
    <div className="center card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={product.imagen} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-xl">{product.nombre}</h2>
        <h4 className="text-center font-bold text-xl">{product.price}</h4>
				<h4 className="text-center text-xl">{product.descripcion}</h4>
                <ItemCount stock={product.stock} initial ={1}/>
      </div>
    </div>
  )
}
export default ItemDetail