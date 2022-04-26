import React from 'react'
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  
      return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="https://api.lorem.space/image/watch?w=150&h=150&hash=2D297A22" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="text-center font-bold text-xl">Producto 1</h2>
        <ItemCount stock = "10" initial = "1"/>
      </div>
    </div>
      );
    }
  

export default ItemListContainer