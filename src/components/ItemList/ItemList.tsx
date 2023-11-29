
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


