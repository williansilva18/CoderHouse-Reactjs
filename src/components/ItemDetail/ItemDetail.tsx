/*
import React, { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';


interface ItemDetailProps {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    pictureUrl: string;
  };
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
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
      <h2 className='Titulo-Produto'>{item.title}</h2>
      <img src={require(`../../image/ProductsImage/${item.pictureUrl}`).default} alt={item.title} />
      <p className='Descricao-Produto'>{item.description}</p>
      <p>Price: ${item.price}</p>
      <ItemCount stock={stock} initial={selectedQuantity} onAdd={handleAddToCart} />
    </div>
  );
};

export { ItemDetail };
*/
/*
import React, { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';


interface ItemDetailProps {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    pictureUrl: string;
  };
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  const [stock, setStock] = useState(5); // Estoque inicial
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const navigate = useNavigate();

  const handleAddToCart = (count: number) => {
    if (count <= stock) {
      console.log(`Adicionar ${count} itens ao carrinho.`);
      // Lógica para adicionar itens ao carrinho

      // Subtrair a quantidade selecionada do estoque
      setStock(stock - count);

      // Reiniciar o contador para a quantidade inicial
      setSelectedQuantity(1);

      // Redirecionar para a rota '/cart'
      navigate('/cart');
    } else {
      console.log('Quantidade selecionada maior que o estoque.');
    }
  };

  return (
    <div>
      <h2 className='Titulo-Produto'>{item.title}</h2>
      <img src={require(`../../image/ProductsImage/${item.pictureUrl}`).default} alt={item.title} />
      <p className='Descricao-Produto'>{item.description}</p>
      <p>Price: ${item.price}</p>
      <ItemCount stock={stock} initial={selectedQuantity} onAdd={handleAddToCart} />
    </div>
  );
};

export { ItemDetail };
*/
/*
import React, { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';

interface ItemDetailProps {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    pictureUrl: string;
  };
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  const [stock, setStock] = useState(5);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const navigate = useNavigate(); // Adicione esta linha para obter a função de navegação

  const handleAddToCart = (count: number) => {
    if (count <= stock) {
      console.log(`Adicionar ${count} itens ao carrinho.`);
      // Lógica para adicionar itens ao carrinho

      // Subtrair a quantidade selecionada do estoque
      setStock(stock - count);

      // Reiniciar o contador para a quantidade inicial
      setSelectedQuantity(1);

      // Redirecionar para a rota '/cart'
      navigate('/cart');
    } else {
      console.log('Quantidade selecionada maior que o estoque.');
    }
  };

  return (
    <div>
      {/* Seu código do componente ItemDetail aqui */
   /*   <ItemCount stock={stock} initial={selectedQuantity} onAdd={handleAddToCart} />
    </div>
  );
};

export { ItemDetail };
*/

/*
import React, { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';

// Importe 'useCart' do arquivo correto
import { useCart } from '../CartContext/CartContext';

interface ItemDetailProps {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    pictureUrl: string;
  };
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  const [stock, setStock] = useState(5);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const navigate = useNavigate();
  const { addItem, isInCart } = useCart();

  const handleAddToCart = (count: number) => {
    if (count <= stock && !isInCart(item.id)) {
      const cartItem = {
        id: item.id,
        name: item.title,
        price: item.price,
        quantity: count,
      };

      addItem(cartItem, count);
      setStock(stock - count);
      setSelectedQuantity(1);
      navigate('/cart');
    } else if (isInCart(item.id)) {
      console.log('Produto já está no carrinho!');
    } else {
      console.log('Quantidade selecionada maior que o estoque.');
    }
  };

  return (
    <div>
      <ItemCount stock={stock} initial={selectedQuantity} onAdd={handleAddToCart} />
    </div>
  );
};

export { ItemDetail };
*/

// ItemDetail.tsx

import React, { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';

interface ItemDetailProps {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    pictureUrl: string;
  };
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const navigate = useNavigate();
  const { addItem, isInCart } = useCart();

  const handleAddToCart = () => {
    if (!isInCart(item.id)) {
      const cartItem = {
        id: item.id,
        name: item.title,
        price: item.price,
        quantity: selectedQuantity,
      };

      addItem(cartItem, selectedQuantity);
      setSelectedQuantity(1);
      navigate('/cart');
    } else {
      console.log('Produto já está no carrinho!');
    }
  };

  const handleQuantityChange = (count: number) => {
    setSelectedQuantity(count);
  };

  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.pictureUrl} alt={item.title} />
      <p className='Descricao-Produto'>{item.description}</p>
      <p>Price: ${item.price}</p>
      <ItemCount stock={5} initial={selectedQuantity} onAdd={handleQuantityChange} />
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export { ItemDetail };
