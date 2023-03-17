import './App.css';
import 'normalize.css';
import { Loader } from './components/Loader/Loader';

//Router//
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import {About} from './components/About/About';
import {Services} from './components/Services/Services';
import {Contact} from './components/Contact/Contact';

function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
