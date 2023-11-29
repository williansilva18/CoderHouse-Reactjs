import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetail } from './components/ItemDetail/ItemDetail';




function App() {

  const handleAddToCart = (count: number) => {
    console.log(`Adicionar ${count} itens ao carrinho.`);
    // Lógica adicional para adicionar itens ao carrinho
    //   <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
  };
 
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer  />
      <ItemDetail />
     
    </React.Fragment>
  );
}

export default App;