import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Loading } from './components/Loading';
import { CartWidget } from './components/NavBar/CartWidget';
import { ItemListContainer } from './components/NavBar/ItemListContainer';
import { ItemCount } from './components/NavBar/ItemCount';
import { ItemDetail } from './components/NavBar/ItemDetail';



function App() {

  const handleAddToCart = (count: number) => {
    console.log(`Adicionar ${count} itens ao carrinho.`);
    // Lógica adicional para adicionar itens ao carrinho
    //   <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
  };
 
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer  greeting="Bem-vindo à nossa loja!"  />
      <ItemDetail />
      <Loading />
    </React.Fragment>
  );
}

export default App;