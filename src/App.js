import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './COMPONENTS/About';
// 
import Home from './COMPONENTS/Home.js'
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
