import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";
import { doc,  getDoc,  getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const {productoId} = useParams();

  const [products, setProducts] = useState({});

  useEffect(() => {
    const db = getFirestore()

    const getProducts = doc(db, "items",productoId)
    getDoc(getProducts).then (snapshot => {
  
      if (snapshot.exists()) {
        setProducts ({id:snapshot.id, ...snapshot.data()})
      }
    })
  }, [productoId])

    
  




   
return (
    <div className="grid grid-cols-3 gap-2">
      <ItemDetail producto={products}/>
     
    </div>
  )
}



export default ItemDetailContainer