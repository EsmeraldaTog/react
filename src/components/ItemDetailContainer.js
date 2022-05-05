import { useEffect, useState } from "react";
import { productos } from "../data/productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts()
  }, []);

  const getProducts = () => {
    const getProductPromise = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 5000);
    });
    

   getProductPromise.then(data => {
      setProduct(data);
    })
  }
    
   
return (
    <div className="grid grid-cols-3 gap-2">
      {product.map(m => <ItemDetail key={m.id} item={m}/>)}
    </div>
  )
}



export default ItemDetailContainer