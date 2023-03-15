import './App.css';
import 'normalize.css';


//Componentes
import { Navbar } from './Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <p>Chipa digital</p>
      </div>
    </div>
  );
}

export default App;
