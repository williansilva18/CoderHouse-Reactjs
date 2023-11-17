// src/components/NavBar.js

import React from 'react';
import './NavBar.css'; 
import logo from './react.png'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src="./react.png" alt="Logo" className="logo" />
        <h1>Store Ecom</h1>
      </div>
      <div className="actions">
        <button className="inicio-button">Inicio</button>
      </div>
      <div className="categories">
        <ul>
          <li><a href="#">Hortifruti</a></li>
          <li><a href="#">Padaria</a></li>
          <li><a href="#">Mercearia</a></li>
        </ul>
      </div>
      <div className="actions">
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
};

export default NavBar;