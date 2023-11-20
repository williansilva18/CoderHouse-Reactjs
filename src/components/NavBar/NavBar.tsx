// src/components/NavBar.js

import React from 'react';
import './NavBar.css';
import logo from '../../react.png'; 
import { CartWidget } from '../../components/NavBar/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Store Ecom</h1>
      </div>
      <div className="actions">
        <button className="inicio-button">Início</button>
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
        <CartWidget /> {/* Adiciona o componente CartWidget */}
      </div>
    </nav>
  );
};

export default NavBar;