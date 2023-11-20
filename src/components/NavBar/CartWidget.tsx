// src/components/CartWidget.js

import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importa o ícone do carrinho

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={20} />
    </div>
  );
};

export {CartWidget} ;
