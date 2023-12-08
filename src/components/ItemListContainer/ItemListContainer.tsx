
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
