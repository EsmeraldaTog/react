
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <h1 className="text-3xl font-bold underline">CREANDO TIENDA LINEA CON REACT/TAILWIND/DAYSI UI</h1>
      <ItemListContainer/>
      <ItemDetailContainer/>
  
      <Saludo nombre="Esmeralda"/>
  
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>E-COMMERCER CON REACT</h1>
      </header> */}
    </div>
    
  );
}

export default App;
