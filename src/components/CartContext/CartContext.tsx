/*
import React, { createContext, useContext, useState } from 'react';

// Defina o tipo para um item no carrinho
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Defina o tipo para o contexto do carrinho
interface CartContextType {
  cart: CartItem[];
  addItem: (item: CartItem, quantity: number) => void;
  removeItem: (itemId: number) => void;
  clear: () => void;
  isInCart: (id: number) => boolean;
}

// Crie o contexto do carrinho
const CartContext = createContext<CartContextType | undefined>(undefined);

// Crie o provedor personalizado
export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = (item: CartItem, quantity: number) => {
    // Verifique se o item já está no carrinho
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // Se o item já estiver no carrinho, atualize a quantidade
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      // Se o item não estiver no carrinho, adicione-o
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId: number) => {
    // Remova o item com o ID correspondente do carrinho
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clear = () => {
    // Limpe todos os itens do carrinho
    setCart([]);
  };

  const isInCart = (id: number) => {
    // Verifique se o item com o ID correspondente está no carrinho
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Crie um hook para usar o contexto do carrinho em componentes
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};

*/
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addItem: (item: CartItem, quantity: number) => void;
  isInCart: (id: number) => boolean; // Adicione esta linha
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = (item: CartItem, quantity: number) => {
    // Implemente a lógica para adicionar um item ao carrinho
  };

  const isInCart = (id: number) => {
    // Implemente a lógica para verificar se o item está no carrinho
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
