// src/components/ItemListContainer/ItemListContainer.tsx

import React from 'react';
import { ItemCount } from '../NavBar/ItemCount';
import { ItemDetail } from '../NavBar/ItemDetail';

interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
    </div>
  );
};

export { ItemListContainer } ;



// src/components/ItemListContainer.js


/*
const ItemListContainer = () => {
  const handleAddToCart = (count: number) => {
    console.log(`Adicionar ${count} itens ao carrinho.`);
    // Lógica adicional para adicionar itens ao carrinho
  };

  return (
    <div>
      <h2>Bem-vindo à nossa loja!</h2>
      <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export { ItemListContainer };

*/