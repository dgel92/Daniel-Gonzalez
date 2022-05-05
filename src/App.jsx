import './App.scss';
import NavBar from './componentes/NavBar/NavBar';
import Box from './componentes/Box/Box';
import Contador from "./componentes/ItemCount/ItemCount";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App(){
  return(
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer titulo="hola"/>}/>
        <Route path="/category/:categoryid" element={<ItemListContainer titulo="Categoria de productos"/>}/>
        <Route path="/movie/:itemid" element={<ItemDetailContainer titulo="Detalle de productos"/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    );
  }

  export default App;