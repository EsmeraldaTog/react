import React from 'react'
import  { useCartContext } from "../context/CartContext"



const Cart = () => {


    const {cart} = useCartContext()

  return (

    <>
    <h2> Carrito de Compras</h2>
    {cart.map(i=>(<div key={i.id}>
        <div className="flex h-fit md:text-2xl items-center">
                        <img src={i.imagen} alt="" className="w-80 md:ml-8"  />
                        <div className="flex flex-nowrap flex-col items-start ml-4">
                          <p className="text-sm">{i.nombre}</p>
                          <p className="text-lg font-bold">${i.precio}</p>
                          <p className="text-lg font-bold">Cantidad: {i.quantify}</p>
                        </div> </div> </div>))
                        }
    </>
  )
}

export default Cart