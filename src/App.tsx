import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { CartProvider } from './components/CartContext/CartContext';

function App() {
  const sampleItem = {
    id: 1,
    title: 'Cerveja Heineken Lata 269ml',
    description: 'Heineken é uma cerveja lager Puro Malte...',
    price: 3.99,
    pictureUrl: 'Heineken-269ml.jpg',
  };

  return (
    <Router>
      <CartProvider>
        <NavBar />
        {/* Use o componente 'Routes' para envolver suas rotas */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetail item={sampleItem} />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;

