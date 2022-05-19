
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetail from './components/ItemDetail';

import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import NoVocals from './components/NoVocals';
import Saludo from './components/Saludo';
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
        {/* <Route path ='/sudaderas' element ={<ItemDetailContainer/>}/> */}
        <Route path ='/producto/:productoId' element= {<ItemDetail/>}/>
        <Route path ='/vocales' element= {<NoVocals/>}/>
      </Routes>
      </BrowserRouter>
    
    
      <h1 className="text-3xl font-bold underline">CREANDO TIENDA LINEA CON REACT/TAILWIND/DAYSI UI</h1>
    
  
      <Saludo nombre="Esmeralda"/>
  
      </CartContextProvider>
      </AppContextProvider>
     
    </div>
    
  );
}

export default App;
