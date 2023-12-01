

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

  const sampleItem = {
    id: 1,
    title: 'Cerveja Heineken Lata 269ml',
    description: 'Heineken é uma cerveja lager Puro Malte...',
    price: 3.99,
    pictureUrl: 'Heineken-269ml.jpg',
  };
 
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer  />
      <ItemDetail item={sampleItem}  />
      
     
    </React.Fragment>
  );
}

export default App;