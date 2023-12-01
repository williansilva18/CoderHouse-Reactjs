
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const mockData = [
  {
    id: 1,
    title: 'Cerveja Heineken Lata 269ml',
    description: 'Heineken é uma cerveja lager Puro Malte...',
    price: 3.99,
    pictureUrl: 'Heineken-269ml.jpg',
    stock: 5, 
  },
];

const ItemListContainer: React.FC = () => {
  const handleDetailsClick = (description: string) => {
    alert(`Detalhes do produto: ${description}`);
  };

  const [items, setItems] = useState(mockData);

  useEffect(() => {
    // Mock de busca de dados após 2 segundos
    setTimeout(() => {
      // fetchData();
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2> <br></br>
      <ItemList items={items} onDetailsClick={handleDetailsClick} />
    </div>
  );
};

export { ItemListContainer };
