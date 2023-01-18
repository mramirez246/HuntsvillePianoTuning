import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './COMPONENTS/About';
import Bio from './COMPONENTS/Bio';
import Contact from './COMPONENTS/Contact';
// 
import Home from './COMPONENTS/Home.js'
import Pricing from './COMPONENTS/Pricing';
import Products from './COMPONENTS/Products';
import Services from './COMPONENTS/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/bio" element={<Bio />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
