import React, { createContext, useContext, useEffect, useState } from "react";
import { productos } from "../data/productos";


const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({children}) => {
	const [products, setProduct] = useState([])

	useEffect(() => {
    getProductos()
	}, [])

	const getProductos = () => {
    const getProductPromise = new Promise((resolve) => {
      
        resolve(productos);
      
    })

    getProductPromise.then((data) => {
      setProduct(data)
    })
  }



  
   

  return <AppContext.Provider 
	value= {{products}}>{children}</AppContext.Provider>
}

export default AppContextProvider;