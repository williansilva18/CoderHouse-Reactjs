

/*
import React from 'react';
import Item, { ItemProps } from '../Item/Item';

interface ItemListProps {
  items: ItemProps['item'][];
  onDetailsClick: (description: string) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onDetailsClick }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.id} item={item} onDetailsClick={onDetailsClick} />
      ))}
    </div>
  );
};

export default ItemList;
*/
/*
import { useState, useEffect } from "react";
import Item from '../Item/Item';

interface ItemList {
  id: number;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
}

const ItemList = () => {
  const [products, setProducts] = useState<ItemList[]>([]);

  const productData = (): Promise<ItemList[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: 'Cerveja Heineken Lata 269ml',
            description: 'Heineken é uma cerveja lager Puro Malte...',
            price: 3.99,
            pictureUrl: require('../../image/ProductsImage/Heineken-269ml.jpg'),
          },
          {
            id: 2,
            title: 'Cerveja Heineken Lata 269ml',
            description: 'Heineken é uma cerveja lager Puro Malte...',
            price: 3.99,
            pictureUrl: require('../../image/ProductsImage/Heineken-269ml.jpg'),
          },
          {
            id: 3,
            title: 'Cerveja Heineken Lata 269ml',
            description: 'Heineken é uma cerveja lager Puro Malte...',
            price: 3.99,
            pictureUrl: require('../../image/ProductsImage/Heineken-269ml.jpg'),
          },
        ]);
      }, 2000);
    });
  };

  useEffect(() => {
    const onMount = async () => {
      try {
        const productResult = await productData();
        setProducts(productResult);
      } catch (error) {
        console.log('Erro', error);
      }
    };

    onMount();
  }, []);

  return (
    <div className="item-list">
      {products.map(item => (
        <Item
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          pictureUrl={item.pictureUrl}
        
        />
      ))}
    </div>
  );
};

export default ItemList;
*/

// ItemList.tsx

import Item, { ItemProps } from '../Item/Item';

interface ItemListProps {
  items: ItemProps['item'][];
  onDetailsClick: (description: string) => void;
  onViewDetails: (id: number) => void; // Adicione essa propriedade
}

const ItemList: React.FC<ItemListProps> = ({ items, onDetailsClick, onViewDetails }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <Item
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          pictureUrl={item.pictureUrl}
          onViewDetails={() => onViewDetails(item.id)} // Adicione essa linha
        />
      ))}
    </div>
  );
};

export default ItemList;

