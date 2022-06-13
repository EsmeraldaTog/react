
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

import ItemDetailContainer from './components/ItemDetailContainer';

import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import NoVocals from './components/NoVocals';

import AppContextProvider from './context/AppContext';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <AppContextProvider>

      <CartContextProvider>

      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path ='/' element ={<ItemListContainer/>}/>
        <Route path ='productos/:categoryId' element ={<ItemListContainer/>}/>
        {/* <Route path ='/sudaderas' element ={<ItemDetailContainer/>}/> */}
        <Route path ='/producto/:productoId' element= {<ItemDetailContainer/>}/>
        <Route path ='/vocales' element= {<NoVocals/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
  
      </CartContextProvider>
      </AppContextProvider>
     
    </div>
    
  );
}

export default App;
