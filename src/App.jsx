import './App.scss';
import Button from './componentes/Button/button';
import NavBar from './componentes/NavBar/NavBar';
import Box from './componentes/Box/Box';
import CartWidget from './componentes/CartWidget/CartWidget';
import CardType from './componentes/CardType/CardType';
import Contador from './componentes/contador/Contador';



function App(){
  return(
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Box/>
        <Contador stock={10} inicial={1}/>
      </header>
    </div>
    );
  }

  export default App;