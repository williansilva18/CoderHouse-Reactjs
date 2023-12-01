
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
