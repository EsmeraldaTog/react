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
    console.log(count);
    addItem(producto,count);
    

  }



return (
  <div className=' w-full px-8'>
  <div className= "flex flex-row items-center justify-center  ">
    <div className=" center card card-compact w-96 bg-base-100 shadow-xl">
<figure>
    <img className=" w-64 md:w-32 lg:w-48" src={imagen} alt="kkk" />
    </figure>
    </div>
    <div className="w-auto center card-body">
    <h2 className="text-center text-xl">Nombre: {nombre}</h2>
    <h4 className="text-center font-bold text-xl"> Precio:{precio}</h4>
    <h4 className="text-center text-xl">Descripcion:<br></br>{descripcion}</h4>
    {terminar ? (<Link to="/cart" className="btn btn-primary mx-32 mt-4 bg-secondary"> Terminar Comprar</Link>) :
     (<ItemCount stock={stock} initial={1} onAdd ={onAdd}/>)}
    
    </div>

</div>


  </div>
)
}
export default ItemDetail