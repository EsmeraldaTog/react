// import { useCartContext } from "../context/CartContext";
// import { doc, addDoc, updateDoc, collection, getFirestore, writeBatch } from "firebase/firestore";
// import { Link } from "react-router-dom";


// const CartOrder = () => {
//   const { cart, cartTotal } = useCartContext();

//   const saveOrder = async () => {
//     const buyer = {
//       name: "Esmeralda Torres",
//       phone: "77645789",
//       email: "estrellita@gmail.com",
//     };
//     const cartFiltered = cart.map(({ id, nombre, quantify }) => ({ id, nombre, quantify }));
//     const orderToSave = {
//       buyer: buyer,
//       items: cartFiltered,
//       total: cartTotal(),
//     };
//     console.log(orderToSave);
//     const db = getFirestore();
//     const ordersCollection = collection(db, "orders");

//     const response = await addDoc(ordersCollection, orderToSave);
//     console.log(response.id);
//   };

//     const updateOrder = async () => {
//         const docId = "fdfRYtD2ECsPuograZ9L"
//         const db = getFirestore();
//         const orderDoc = doc (db,"orders", docId)
//         const response = await updateDoc (orderDoc, {total:2000})
//         console.log (response)
//     }

//     const batchUpdate = () => {
//         const db = getFirestore();
//         const batch = writeBatch(db)

//         const doc1 = doc (db, "orders", "fdfRYtD2ECsPuograZ9L")
//         batch.update (doc1, {total:2500})

//         const doc2 = doc (db, "orders", "kP1QuVkxfo1PiQ4dxcEX")
//         batch.update (doc2, {total:2500})

//         batch.commit()
//     }

//   return (
//     <div>
//       <Link to= "/checkout"
//         className="btn mx-8 mt-8 text-black bg-base-200 hover:text-black hover:bg-white"
        
//       >
//         Pagar
//       </Link>
//             <button
//         className="btn mx-8 mt-8 text-black bg-base-200 hover:text-black hover:bg-white"
//         onClick={updateOrder}
//       >
//         Actualizar Orden
//       </button>
//             <button
//         className="btn mx-8 mt-8 text-black bg-base-200 hover:text-black hover:bg-white"
//         onClick={batchUpdate}
//       >
//         Batch
//       </button>
//     </div>
//   );
// };

// export default CartOrder;