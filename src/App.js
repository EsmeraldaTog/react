
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

  <AppContextProvider>
  <CartContextProvider>
  <BrowserRouter>
    <div className="App w-full">
      <div className= " flex flex-col">
       <header>
          <NavBar></NavBar>
        </header>
      <main className="flex flex-col md:flex-row lg:flex-row p-8">
    
      <Routes>
        <Route path ='/' element ={<ItemListContainer/>}/>
        <Route path ='productos/:categoryId' element ={<ItemListContainer/>}/>
        <Route path ='/producto/:productoId' element= {<ItemDetailContainer/>}/>
        <Route path ='/vocales' element= {<NoVocals/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      </main>

      
    </div>
    </div>
    </BrowserRouter>
    </CartContextProvider>
    </AppContextProvider>
     
    
  );
}

export default App;
