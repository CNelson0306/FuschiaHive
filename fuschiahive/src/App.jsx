import './App.css'
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/pages/About';
import { Gallery } from './components/pages/Gallery';
import Hair from './components/pages/Hair';
import Beauty from './components/pages/Beauty';
import Discount from './components/pages/Discount';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';


function App() {

  return (
    <>
    <div className='navbar'>
      <Navbar />
        <Routes>
          <Route path='/' element={<><Hair /><Beauty /><Discount /></>} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    
    <Footer />
    <br />
    
      
    </>
  )
}

export default App
