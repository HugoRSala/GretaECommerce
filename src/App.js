
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';

import ResponsiveAppBar from './components/ResponsiveAppBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import CartContextProvider from './components/CartContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#000000',
      darker: '#000000',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />

          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
