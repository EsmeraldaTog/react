import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";



const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({children}) => {
	const [products, setProduct] = useState([])

  useEffect(() => {
    const db = getFirestore();

    const getProducts = collection(db, "items");
    getDocs(getProducts).then((snapshot) => {
      setProduct(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);
   

  return <AppContext.Provider 
	value= {{products}}>{children}</AppContext.Provider>
}

export default AppContextProvider;