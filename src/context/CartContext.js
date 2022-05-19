import { createContext, useContext, useState } from "react";


const CartContext = createContext()

export const  useCartContext= ()=>useContext(CartContext)


const CartContextProvider= ({children}) =>{


const [cart, setCart] = useState([])

const IsInCart =(id) => cart.find( product => product.id == id )

const addItem = (producto, cantidad)=>{

    const newCart =[...cart]
     
    const productoIsInCart =IsInCart(producto.id)
    if(productoIsInCart){
        newCart[newCart.findIndex((prod)=> prod.id === productoIsInCart.id )].quantify+= cantidad
    setCart(newCart)
    return
    }
 producto.quantify = cantidad
 setCart([...newCart,producto])
}

const borrar = (producto) => {
    const newCart = [...cart]

    const productoIsInCart = IsInCart(producto.id)
    if (!productoIsInCart) {
        return
    }
    const deleteProduct = newCart.filter((product) => product.id !== producto.id)
    setCart (deleteProduct)
}


const vaciarCarrito = () => setCart([])

console.log (cart)




return <CartContext.Provider value = {{cart,addItem,borrar,vaciarCarrito,setCart}}>{children}</CartContext.Provider>

}

export default CartContextProvider