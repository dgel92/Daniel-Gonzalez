import './App.scss';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App(){
  return(
    <div className='App'>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:idcategory" element={<ItemListContainer titulo="categoria"/>}/>
          <Route path="/movie/:itemid" element={<ItemDetailContainer titulo="detalle"/>}/>
        </Routes>
    </BrowserRouter>
    </div>
    );
  }

  export default App;