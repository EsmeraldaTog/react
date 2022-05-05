
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path ='/' element ={<ItemListContainer/>}/>
        {/* <Route path ='/sudaderas' element ={<ItemDetailContainer/>}/> */}
        <Route path ='/producto/:productoiId' element= {<ItemDetailContainer/>}/>
       
      </Routes>
      </BrowserRouter>
    
    
      <h1 className="text-3xl font-bold underline">CREANDO TIENDA LINEA CON REACT/TAILWIND/DAYSI UI</h1>
    
  
      <Saludo nombre="Esmeralda"/>
  
     
    </div>
    
  );
}

export default App;
