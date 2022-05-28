
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
		<div>
		<div className="flex justify-evenly mt-2 bg-gray-200 rounded-xl p-4">
			<button onClick={resHandler}>-</button>
			<span>{count}</span>
			<button onClick={addHandler}>+</button>
		</div>
			<button onClick= {()=> handleClick(count)} className="btn btn-primary mx-32 mt-4">Agregar al Carrito</button>
	       
		</div>
	)
}


export default ItemCount