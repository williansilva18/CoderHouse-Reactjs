// src/components/NavBar/ItemCount.tsx

import React, { useState } from 'react';

interface ItemCountProps {
  stock: number;
  initial: number;
  onAdd: (count: number) => void;
}

const ItemCount: React.FC<ItemCountProps> = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };
/*
  return (
    <div className="item-count">
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button className="Button-subtrair" onClick={handleDecrease}> - </button>
        <span>{count}</span>
        <button className="Button-adicionar"  onClick={handleIncrease}>+</button>
      </div>
      <button className="addToCart" onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </div>
  );
};
*/
return (
  <div className="item-count">
    <div className="quantity-buttons">
      <button className="button-subtrair" onClick={handleDecrease}>-</button>
      <span className="quantity">{count}</span>
      <button className="button-adicionar" onClick={handleIncrease}>+</button>
    </div>
    <button className="add-to-cart-button" onClick={handleAddToCart}>Adicionar ao Carrinho</button>
  </div>
);
};

export { ItemCount } ;
