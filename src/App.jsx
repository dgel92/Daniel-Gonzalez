import './App.scss';
import Button from './componentes/Button/button';
import NavBar from './componentes/NavBar/NavBar';
import Box from './componentes/Box/Box';


function App(){
  return(
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Button/>
        <Box/>
      </header>
    </div>
    );
  }

  export default App;