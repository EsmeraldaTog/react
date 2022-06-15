import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Item from "./Item";

const ItemList = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const getProducts = collection(db, "items");
    getDocs(getProducts).then((snapshot) => {
      const productsList = [];
      snapshot.docs.forEach((s) => {
        productsList.push({ id: s.id, ...s.data() });
      });
      // setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      if (!categoryId) {
        setProducts(productsList);
      } else {
        setProducts(productsList.filter((p) => p.category === categoryId));
      }
    });
  }, [categoryId]);

  return (
    <div className="grid grid-cols-3 gap-2">
      {products.map((m) => (
        <Item key={m.id} productos={m} />
      ))}
    </div>
  );
};

export default ItemList;
