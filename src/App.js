
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import  CRUD from './components/CRUD';
// Importa los componentes para las demás rutas aquí...

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/CRUD" element={<CRUD />} />
        {/* Agrega más rutas y componentes aquí... */}
      </Routes>
    </Router>
  );
};

export default App;
