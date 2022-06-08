
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';

import ResponsiveAppBar from './components/ResponsiveAppBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import CartContextProvider from './components/CartContext';



const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
