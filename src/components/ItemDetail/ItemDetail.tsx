

// src/components/ItemDetail.js

import React, { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';

const ItemDetail = () => {
  const [stock, setStock] = useState(5); // Estoque inicial
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAddToCart = (count: number) => {
    if (count <= stock) {
      console.log(`Adicionar ${count} itens ao carrinho.`);
      // Lógica para adicionar itens ao carrinho

      // Subtrair a quantidade selecionada do estoque
      setStock(stock - count);

      // Reiniciar o contador para a quantidade inicial
      setSelectedQuantity(1);
    } else {
      console.log('Quantidade selecionada maior que o estoque.');
     
    }
  };

  return (
    <div>
      <h2 className='Titulo-Produto'>Cerveja Heineken Lata 269ml</h2>
      <p className='Descricao-Produto'>Heineken é uma cerveja lager Puro Malte....</p>
      <ItemCount stock={stock} initial={selectedQuantity} onAdd={handleAddToCart} />
    </div>
  );
};

export { ItemDetail };
