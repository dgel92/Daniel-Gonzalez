import './App.scss';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CartContextProvider} from "./componentes/store/cartContext/CartContext"

function App(){
  return(
    <div className='App'>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:categoryid" element={<ItemListContainer titulo="categoria"/>}/>
              <Route path="/portada/:portadaid" element={<ItemDetailContainer titulo="detalle"/>}/>
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
    );
  }

  export default App;