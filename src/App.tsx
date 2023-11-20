import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Loading } from './components/Loading';
import { CartWidget } from './components/NavBar/CartWidget';
import { ItemListContainer } from './components/NavBar/ItemListContainer';



function App() {

 
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer greeting="Bem-vindo à nossa loja!" />
      <Loading />
    </React.Fragment>
  );
}

export default App;