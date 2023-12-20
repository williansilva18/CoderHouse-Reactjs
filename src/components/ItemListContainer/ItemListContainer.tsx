/*
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer: React.FC = () => {
  return (
    <div>
      <h2>Lista de Produtos</h2> <br></br>
      <ItemList />
    </div>
  );
};

export { ItemListContainer };
*/

// ItemListContainer.tsx

import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { ItemDetail } from '../ItemDetail/ItemDetail';
// ItemListContainer.tsx



const mockData = [
  {
    id: 1,
    title: 'Cerveja Heineken Lata 269ml',
    description: 'Heineken é uma cerveja lager Puro Malte...',
    price: 3.99,
    pictureUrl: 'Heineken-269ml.jpg',
  },
  // Adicione mais itens se necessário
];

const ItemListContainer: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const handleDetailsClick = (description: string) => {
    alert(`Detalhes do produto: ${description}`);
  };

  const handleViewDetails = (id: number) => {
    setSelectedItemId(id);
    setShowDetails(true);
  };

  return (
    <div>
      <h2>Lista de Produtos</h2> <br />
      <ItemList items={mockData} onDetailsClick={handleDetailsClick} onViewDetails={handleViewDetails} />
      {showDetails && selectedItemId !== null && (
        <ItemDetailContainer itemId={selectedItemId} onClose={() => setShowDetails(false)} />
      )}
    </div>
  );
};

export { ItemListContainer };
