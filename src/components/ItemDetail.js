import React, { useState } from 'react'

import ItemCount from './ItemCount';
import {Link} from "react-router-dom";
import { useCartContext } from '../context/CartContext';



const ItemDetail = ({producto}) => {

  const {imagen,nombre,precio,stock,descripcion}= producto
  const {addItem } = useCartContext()
  // const {productoId}= useParams()

  
  const [ terminar, setTerminar]= useState(false)

  function onAdd(count){
    setTerminar(true)
    // console.log(count);
    addItem(producto,count);
    

  }



return (
      <div className='w-full px-8 flex-col  lg:flex-row items-center justify-center  card bg-base-100 shadow-xl'>
      
        <img className="w-full sm:w-full md:w-2/4 lg:w-2/4 p-8" src={imagen} alt="kkk" />
        <div className="w-full lg:w-2/4  items-center center card-body">
        <h2 className="font-Confortaa text-center text-xl text-primary"> {nombre}</h2>
        <h4 className="font-Confortaa text-center font-bold text-xl"> ${precio}</h4>
        <hr className="w-full mt-1 border-gray-200"></hr>
        <h4 className=" card font-Confortaa  text-center text-xs md:text-sm text-terciary">Detalle del Producto: <br/> {descripcion}</h4>
        <hr className="w-full mt-1 border-gray-200"></hr>
        {terminar ? (<Link to="/cart" className="btn btn-primary mx-auto mt-4"> Terminar Comprar</Link>) :
        (<ItemCount stock={stock} initial={1} onAdd ={onAdd}/>)}
      </div>
  
  </div>
)
}
export default ItemDetail