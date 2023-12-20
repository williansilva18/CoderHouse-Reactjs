
// Item.tsx


interface ItemProps {
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
  onViewDetails: () => void; // Adicione essa propriedade
 
}
/*
const Item = ({ title, description, price, pictureUrl, onDetailsClick }: ItemProps) => {*/
const Item: React.FC<ItemProps> = ({ title, description, price, pictureUrl}) => {
  return (
    <div className="item border p-2 m-2 max-w-sm flex flex-col items-center">
      <img src={pictureUrl} alt="Logo" className="logo" />
      <h3 className='text-lg font-bold'>{title}</h3>
      <p className='text-gray-600'>Price: ${price}</p>
      <p className='Descricao-Produto'>{description}</p>
      <button className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={onViewDetails}>
        Ver Detalhes
        </button>
    </div>
  );
};

export default Item;
