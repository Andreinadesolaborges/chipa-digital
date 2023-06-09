import 'normalize.css';
//Import App styles//
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
import {ScrollToTop} from './components/ScrollToTop/ScrollToTop';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
