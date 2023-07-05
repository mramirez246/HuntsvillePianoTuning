import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import './App.scss'
import { c_routes } from './Constants';
// 

function App() {

  useEffect(() => {
  }, [])
  


  return (
    <BrowserRouter>
      {/* THOSE THAT WILL RUN NO MATTER WHAT */}

      <Routes>
        {
          c_routes.map((page, i) => {
            return(
              <Route exact path={`/${page.Route}`} element={page.Element} key={i} />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
