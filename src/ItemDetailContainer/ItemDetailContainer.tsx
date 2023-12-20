/*
import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../components/ItemDetail/ItemDetail'; // Corrija a importação
import { ItemCount } from '../components/ItemCount/ItemCount';

const getItem = () => {
  return new Promise<{ id: number; title: string; description: string; price: number; pictureUrl: string }>((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: 'Cerveja Heineken Lata 269ml',
        description: 'Heineken é uma cerveja lager Puro Malte...',
        price: 3.99,
        pictureUrl: 'Heineken-269ml.jpg',
      });
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState<null | { id: number; title: string; description: string; price: number; pictureUrl: string }>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getItem();
        setItem(result);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (count: number) => {
    console.log(`Adicionar ${count} itens ao carrinho.`);
    // Aqui você pode adicionar lógica específica para adicionar ao carrinho se necessário
  };

  return (
    <div>
      <h2>Detalhes do Item</h2>
      {item && (
        <>
          <ItemDetail item={item} />
          <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
        </>
      )}
    </div>
  );
}

export default ItemDetailContainer;
*/

// ItemDetailContainer.tsx

import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../components/ItemDetail/ItemDetail';
import { ItemCount } from '../components/ItemCount/ItemCount';

interface ItemDetailContainerProps {
  itemId: number;
  onClose: () => void;
}

const getItem = (id: number) => {
  return new Promise<{ id: number; title: string; description: string; price: number; pictureUrl: string }>((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        title: 'Cerveja Heineken Lata 269ml',
        description: 'Heineken é uma cerveja lager Puro Malte...',
        price: 3.99,
        pictureUrl: 'Heineken-269ml.jpg',
      });
    }, 2000);
  });
};

const ItemDetailContainer: React.FC<ItemDetailContainerProps> = ({ itemId, onClose }) => {
  const [item, setItem] = useState<null | { id: number; title: string; description: string; price: number; pictureUrl: string }>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getItem(itemId);
        setItem(result);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchData();
  }, [itemId]);

  const handleAddToCart = (count: number) => {
    console.log(`Adicionar ${count} itens ao carrinho.`);
    // Lógica para adicionar ao carrinho se necessário
  };

  return (
    <div>
      {item && (
        <>
          <ItemDetail item={item} />
          <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
          <button onClick={onClose}>Fechar Detalhes</button>
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
