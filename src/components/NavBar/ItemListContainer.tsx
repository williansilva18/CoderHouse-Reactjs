// src/components/ItemListContainer/ItemListContainer.tsx

import React from 'react';

interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
    </div>
  );
};

export { ItemListContainer } ;
