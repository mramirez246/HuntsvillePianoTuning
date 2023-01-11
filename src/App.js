import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// 
import Home from './COMPONENTS/Home.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
