import React from 'react'
import { Link } from 'react-router-dom'
import  { useCartContext } from "../context/CartContext"



const Cart = () => {


    const {cart} = useCartContext();
    const {vaciarCarrito}= useCartContext();

  return <div>
    
  
 
    <h2> Carrito de Compras</h2>
    {cart.map((i) =>(
    <div key={i.id}>
        <div className="flex h-fit md:text-2xl items-center">
                        <img src={i.imagen} alt="" className="w-80 md:ml-8"  />
                        <div className="flex flex-nowrap flex-col items-start ml-4">
                          <p className="text-sm">{i.nombre}</p>
                          <p className="text-lg font-bold">${i.precio}</p>
                          <p className="text-lg font-bold">Cantidad: {i.quantify}</p>
                        </div> 
                        </div> 
                        </div>))}
                        {
                          cart.length === 0? (
                            <div className="h-[calc(100vh-300px)] grid place-content-center">
                              <p className="text-black text-xl">Tu carrito está vacío</p>
                              <Link to="/" className="btn mt-12 text-black bg-red-600 hover:text-black hover:bg-white">Ver productos</Link>
                            </div>
                          ) : (
                            <>
      <p className="text-black text-center text-xl mt-10"> Total: ${ cart.reduce((acc, item) => acc + (item.precio*item.quantify), 0)} </p>
      <div className="flex justify-center">
        <button className="btn mt-10 px-8 text-black bg-base-200 hover:text-black hover:bg-white" onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
        <button className="btn btn-sm md:btn-md border-paleta-fondoNavbar bg-paleta-fondoNavbar hover:border-paleta-colorNavbar hover:bg-paleta-colorNavbar">
                <Link to='/checkout'>
                  Terminar compra
                </Link>
              </button>
        
      </div>
      </>
                          )
                        }
    </div>                   
}

export default Cart