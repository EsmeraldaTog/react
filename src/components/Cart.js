import React from 'react'
import { Link } from 'react-router-dom'
import  { useCartContext } from "../context/CartContext"



const Cart = () => {


    const {cart} = useCartContext();
    const {vaciarCarrito}= useCartContext();

  return <div>
    
  
 
    <h2 className="font-Confortaa"> Carrito de Compras</h2>
    
        <table className="table-auto inline-block overflow-x-auto whitespace-nowrap">
    <thead>
    <tr>
    <th>Imagen</th>
    <th>Producto</th>
    <th>Precio</th>
    <th>Cantidad</th>
    </tr>
  </thead>
         <tbody>{cart.map((i) =>(
         <tr key={i.id}>
         
        <td className=''><img src={i.imagen} alt="" className="w-4"/></td>
        <td className=''><p className="text-sm">{i.nombre}</p></td>
        <td className=''><p className="text-lg ">${i.precio}</p></td>
        <td className=''><p className="text-lg ">{i.quantify}</p></td>
    </tr>))}
   
  </tbody>
</table>


                        
                    
                          
                          
                          
                       
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