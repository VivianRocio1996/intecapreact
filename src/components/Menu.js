import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo1 from './logo1.png';
import intecap from './intecap.png';
import Home from './Home'; // Importa el componente Home
import About from './About'; // Importa el componente About
import CRUD from './CRUD';
// Definir las rutas
const routes = [
  {
    path: '/',
    name: 'API RICK Y MORTY',
    exact: true,
    element: <Home />,
  },
  {
    path: '/about',
    name: 'Librería Firebase',
    exact: true,
    element: <About />,
  },
  {
    path: '/CRUD',
    name: 'CRUD MEDICO',
    exact: true,
    element: <CRUD />,
  },
  // Agregar más rutas aquí...
];

const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/Home">
            <img src={logo1} alt="Logo" width="50" height="50" /> EJERCICIO FINAL *** Vivian Arias***variasc1@miumg.edu.gt
          </Link>
          <ul className="navbar-nav">
            {routes.map((route, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={route.path}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="container mt-4">
        <Outlet /> {/* Renderiza el componente apropiado de acuerdo a la ruta actual */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
      <img src={intecap} alt="Logo" width="450" height="150" />
 
    </div>
    </div>
  );
};

export default Menu;

