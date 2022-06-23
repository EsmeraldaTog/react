
import { useState } from "react"
// import { useAppContext } from "../context/AppContext"
// import {   useCartContext } from "../context/CartContext"


const ItemCount = ({stock, initial, onAdd}) => {

  // const {addItem } = useCartContext()
  // const{products} = useAppContext()

  const [count, setCount] = useState(initial)



	const resHandler = () => {
    if(count > initial){
      setCount(count - 1)
    }
  }
  const addHandler = () => {
    if (count < stock){
      setCount(count + 1)
    }
  }

  const handleClick= (count) =>{
	  onAdd(count)
}

// addItem(findProduct,cantidad)
// onAdd(count)
//   }




	return (
		<>
		<div className="w-24 bg-gray-200">
			<button className="font-Confortaa w-4 "onClick={resHandler}>-</button>
			<span>{count}</span>
			<button className= "font-Confortaa w-4" onClick={addHandler}>+</button>
		</div>
			<button onClick= {()=> handleClick(count)} className="font-Confortaa btn btn-primary mx-32 mt-4">Agregar al Carrito</button>
	       
		</>
	)
}


export default ItemCount