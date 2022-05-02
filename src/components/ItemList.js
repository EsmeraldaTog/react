import React, { useEffect, useState } from 'react'
import { productos } from "../data/productos";
import Item from './Item';

const ItemList = () => {

  // se define un state donde se guardaran los productos
  const [products, setProducts] = useState([])

// al momento de montar el component hacemos un llamado a la funcion get productos
useEffect(() => {
  getProducts()
}, [])

///funcion getProducts define promesa 
const getProducts=() =>{
 const getProductsPromise= new Promise((resolve, reject)=>{
   setTimeout(() => {
     resolve(productos)
   }, 2000);
 })


 getProductsPromise.then(data=>{
  setProducts(data);
})
}
 


  return (
    <div className="grid grid-cols-3 gap-2">
      {products.map(m => <Item key={m.id} productos={m}/>)}
    </div>
  )
}

export default ItemList