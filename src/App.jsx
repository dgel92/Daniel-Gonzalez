import './App.scss';
import NavBar from './componentes/NavBar/NavBar';
import Box from './componentes/Box/Box';
import Contador from './componentes/ItemCount/ItemCount'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App(){
  return(
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer titulo="hola mundo"/>
          <hr/>
      </header>
    </div>
    );
  }

  export default App;