
import React, { useState } from 'react';
import logo from '../../image/ProductsImage/Heineken-269ml.jpg'; 



interface ItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    pictureUrl: string;
     };
  onDetailsClick: (description: string) => void;
}

const Item: React.FC<ItemProps> = ({ item, onDetailsClick }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleDetailsClick = () => {
    onDetailsClick(item.description);
    setPopupVisible(false);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="item border p-2 m-2 max-w-sm flex flex-col items-center">
      <img src={logo} alt="Logo" className="logo" />
      <h3 className='text-lg font-bold'>{item.title}</h3>
      <p className='text-gray-600'>Price: ${item.price}</p>
      <button className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleDetailsClick}>Veja detalhes do produto</button>

    

      {isPopupVisible && (
        <div className="popup bg-white border p-4 mt-4">
          <p>{item.description}</p>
          <button className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={closePopup}>Fechar</button>
        </div>
      )}
    </div>
  );
};

export default Item;
export type { ItemProps };


