import 'normalize.css';
import './App.css';

//Router//
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Contact } from './components/Contact/Contact';
import { LanguageProvider } from './Context/LanguageContext';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
