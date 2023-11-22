// src/components/ItemDetail.js
import { ItemCount } from '../ItemCount/ItemCount';

const ItemDetail = () => {
  const handleAddToCart = (count: number) => {
    console.log(`Adicionar ${count} itens ao carrinho.`);
    // Lógica para adicionar itens ao carrinho
  };

  return (
    <div>
      <h2 className='Titulo-Produto'>Cerveja Heineken Lata 269ml</h2>
      <p className='Descricao-Produto'>Heineken é uma cerveja lager Puro Malte....</p>
      <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export { ItemDetail };
