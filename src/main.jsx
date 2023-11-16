import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import { Hombre } from './pages/Hombre.jsx';
import { Mujeres } from './pages/Mujeres.jsx';
import { Niños } from './pages/Niños.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/Men' Component={Hombre} />
        <Route path='/Women' Component={Mujeres}  />
        <Route path='/Children' Component={Niños} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
